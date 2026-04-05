// ── Events ────────────────────────────────────────────────
    settingsToggle.addEventListener("click", () => setSettingsOpen(!settingsRoot.classList.contains("open")));
    settingsClose.addEventListener("click",  () => setSettingsOpen(false));

    langKo.addEventListener("click",     () => applyLanguage("ko"));
    langEn.addEventListener("click",     () => applyLanguage("en"));
    themeDark.addEventListener("click",  () => applyTheme("dark"));
    themeLight.addEventListener("click", () => applyTheme("light"));

    accentBlue.addEventListener("click",   () => applyAccent("blue"));
    accentGreen.addEventListener("click",  () => applyAccent("green"));
    accentYellow.addEventListener("click", () => applyAccent("yellow"));
    accentPurple.addEventListener("click", () => applyAccent("purple"));
    accentRed.addEventListener("click",    () => applyAccent("red"));

    blurRange.addEventListener("input",    e => applyCardBlur(Number(e.target.value)));
    opacityRange.addEventListener("input", e => applyCardOpacity(Number(e.target.value)));
    timeGainRange.addEventListener("input", e => {
      applyTimeGainInterval(Number(e.target.value));
      render();
    });
    offlinePopupOnBtn.addEventListener("click",  () => applyOfflinePopupEnabled(true));
    offlinePopupOffBtn.addEventListener("click", () => applyOfflinePopupEnabled(false));

    upgradeButton.addEventListener("click", buyUpgrade);
    acceleratorButton.addEventListener("click", buyAccelerator);
    compressorButton.addEventListener("click", buyCompressor);

    qtyBtn1.addEventListener("click",   () => applyPurchaseCount(1));
    qtyBtn5.addEventListener("click",   () => applyPurchaseCount(5));
    qtyBtn10.addEventListener("click",  () => applyPurchaseCount(10));
    qtyBtnMax.addEventListener("click", () => applyPurchaseCount("max"));

    tabMain.addEventListener("click",    () => switchTab("main"));
    tabUpgrade.addEventListener("click", () => switchTab("upgrade"));
    tabAchievement.addEventListener("click", () => switchTab("achievement"));
    tabStats.addEventListener("click",   () => switchTab("stats"));

    bgUploadBtn.addEventListener("click", () => bgFileInput.click());
    bgFileInput.addEventListener("change", e => {
      const file = e.target.files[0];
      if (!file) return;
      if (customBgUrl) URL.revokeObjectURL(customBgUrl);
      customBgUrl = URL.createObjectURL(file);
      applyBackground(customBgUrl);
      bgFileInput.value = "";
    });
    bgResetBtn.addEventListener("click", resetBackground);

    autosaveOnBtn.addEventListener("click",  () => applyAutosaveEnabled(true));
    autosaveOffBtn.addEventListener("click", () => applyAutosaveEnabled(false));
    autosaveRange.addEventListener("input",  e  => applyAutosaveInterval(Number(e.target.value)));

    document.addEventListener("click", e => {
      if (!settingsRoot.contains(e.target) && !dangerModal.contains(e.target) && !offlineModal.contains(e.target) && !rebirthModal.contains(e.target)) setSettingsOpen(false);
    });

    document.addEventListener("visibilitychange", () => {
      if (document.hidden) enterIdleMode();
      else exitIdleMode();
    });
    window.addEventListener("pagehide", () => {
      enterIdleMode();
      if (autosaveEnabled) doAutosave();
    });
    window.addEventListener("pageshow", () => {
      if (!document.hidden) exitIdleMode();
    });

// ── Danger zone modal ─────────────────────────────────────
    function openDangerModal() {
      const t = copy[language];
      dangerModalTitle.textContent   = t.dangerBtn;
      dangerModalDesc.textContent    = t.dangerDesc;
      dangerModalHint.textContent    = t.dangerPrompt + ":";
      dangerModalPhrase.textContent  = t.dangerPhrase;
      dangerModalInput.placeholder   = t.dangerPhrase;
      dangerModalCancel.textContent  = t.dangerCancel;
      dangerModalConfirm.textContent = t.dangerConfirm;
      dangerModalInput.value         = "";
      dangerModalError.textContent   = "";
      dangerModalConfirm.disabled    = true;
      dangerModalInput.classList.remove("match");
      dangerModal.style.display      = "grid";
      setTimeout(() => dangerModalInput.focus(), 60);
    }

    function closeDangerModal() {
      dangerModal.style.display = "none";
    }

    gameResetBtn.addEventListener("click", openDangerModal);

    dangerModalCancel.addEventListener("click", closeDangerModal);

    dangerModalInput.addEventListener("input", () => {
      const t       = copy[language];
      const val     = dangerModalInput.value;
      const match   = val === t.dangerPhrase;
      dangerModalConfirm.disabled = !match;
      dangerModalInput.classList.toggle("match", match);
      dangerModalError.textContent = "";
    });

    dangerModalConfirm.addEventListener("click", () => {
      const t = copy[language];
      if (dangerModalInput.value !== t.dangerPhrase) {
        dangerModalError.textContent = t.dangerWrong;
        return;
      }
      // 실제 초기화
      time = 0; productionRate = 1; productionLevel = 0;
      acceleratorLevel = 0; compressorLevel = 0;
      totalPurchases = 0; timeShard = 0;
      totalPlayMs = 0;
      lastPlayTickAt = Date.now();
      clearProgressStorage();
      lastAutosaveAt = null;
      seedAchievedIds();
      render();
      updateAutosaveHint();
      renderSaveSlots();
      closeDangerModal();
      showStatus("✓");
      if (autosaveEnabled) doAutosave();
      startTimeGainTimer();
    });

    dangerModal.addEventListener("click", e => {
      if (e.target === dangerModal) closeDangerModal();
    });

    offlineModalConfirm.addEventListener("click", closeOfflineProgressPopup);

    offlineModal.addEventListener("click", e => {
      if (e.target === offlineModal) closeOfflineProgressPopup();
    });

    document.addEventListener("keydown", e => {
      if (e.key === "Escape") {
        if (offlineModal.style.display !== "none") { closeOfflineProgressPopup(); return; }
        if (dangerModal.style.display  !== "none") { closeDangerModal(); return; }
        if (rebirthModal.style.display !== "none") { closeRebirthModal(); return; }
        setSettingsOpen(false);
      }
    });

    // ── Bootstrap ─────────────────────────────────────────────
    loadAutosaveSettings();           // 자동저장 설정 먼저 복원
    resetBackground();
    if (!tryLoadAutosave()) {         // 자동저장 데이터 복원 시도
      applyLanguage("ko");
      applyTheme("dark");
      applyAccent("yellow");
      applyCardBlur(DEFAULT_CARD_BLUR);
      applyCardOpacity(DEFAULT_CARD_OPACITY);
    }
    applyTimeGainInterval(timeGainIntervalMs);
    applyAutosaveEnabled(autosaveEnabled);
    applyAutosaveInterval(autosaveInterval);
    seedAchievedIds();                // applyLoadData에서 이미 호출되지만, 슬롯 불러오기 등 안전장치
    renderSaveSlots();
    render();
    startHintRefresh();
