// ── Save / Load ───────────────────────────────────────────
    let statusTimer     = null;

    function buildSaveData() {
      return {
        version: SAVE_VERSION,
        time, productionRate, productionLevel,
        acceleratorLevel, compressorLevel,
        totalPurchases,
        timeShard,
        language, cardTheme, accent, cardBlur, cardOpacity,
        timeGainIntervalMs,
        uiTransitionMs: timeGainIntervalMs,
        totalPlayMs,
        customAccentColor,
        offlinePopupEnabled,
        savedAt: Date.now(),
      };
    }

    function readStoredJson(key) {
      try {
        const raw = localStorage.getItem(key);
        return raw ? JSON.parse(raw) : null;
      } catch(e) {
        return null;
      }
    }

    function isPlainObject(v) {
      return !!v && typeof v === "object" && !Array.isArray(v);
    }

    function buildExportBundle() {
      return {
        version: SAVE_VERSION,
        exportedAt: Date.now(),
        current: buildSaveData(),
        autosave: readStoredJson(AUTOSAVE_KEY),
        autosaveSettings: readStoredJson(AUTOSAVE_SETTINGS_KEY),
        slots: Array.from({ length: NUM_SLOTS }, (_, i) => ({
          slot: i + 1,
          data: getSlotData(i + 1),
        })),
      };
    }

    function clearProgressStorage() {
      try { localStorage.removeItem(AUTOSAVE_KEY); } catch(e) {}
      for (let i = 1; i <= NUM_SLOTS; i++) {
        try { localStorage.removeItem(SAVE_PREFIX + i); } catch(e) {}
      }
    }

    function restoreExportBundle(bundle) {
      if (bundle.autosaveSettings && isPlainObject(bundle.autosaveSettings)) {
        try { localStorage.setItem(AUTOSAVE_SETTINGS_KEY, JSON.stringify(bundle.autosaveSettings)); } catch(e) {}
      }

      if (bundle.autosave && isPlainObject(bundle.autosave)) {
        try { localStorage.setItem(AUTOSAVE_KEY, JSON.stringify(bundle.autosave)); } catch(e) {}
      }

      if (Array.isArray(bundle.slots)) {
        for (const entry of bundle.slots) {
          if (!entry || !entry.slot) continue;
          if (entry.data && isPlainObject(entry.data)) {
            try { localStorage.setItem(SAVE_PREFIX + entry.slot, JSON.stringify(entry.data)); } catch(e) {}
          } else {
            try { localStorage.removeItem(SAVE_PREFIX + entry.slot); } catch(e) {}
          }
        }
      }
    }

    function downloadTextFile(filename, text) {
      const blob = new Blob([text], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 0);
    }

    // ── Autosave ──────────────────────────────────────────────
    function doAutosave() {
      try {
        localStorage.setItem(AUTOSAVE_KEY, JSON.stringify(buildSaveData()));
        lastAutosaveAt = Date.now();
        updateAutosaveHint();
      } catch(e) { /* storage full or unavailable */ }
    }

    function updateAutosaveHint() {
      if (!autosaveEnabled) {
        autosaveHint.textContent = copy[language].autosaveNever;
        return;
      }
      if (!lastAutosaveAt) {
        autosaveHint.textContent = copy[language].autosaveNever;
        return;
      }
      const elapsed = Math.round((Date.now() - lastAutosaveAt) / 1000);
      autosaveHint.textContent = copy[language].autosaveLastFmt(elapsed);
    }

    function startAutosaveTimer() {
      if (autosaveTimer) clearInterval(autosaveTimer);
      if (!autosaveEnabled) return;
      autosaveTimer = setInterval(doAutosave, autosaveInterval * 1000);
    }

    function applyAutosaveEnabled(enabled) {
      autosaveEnabled = enabled;
      autosaveOnBtn.classList.toggle("active",  autosaveEnabled);
      autosaveOffBtn.classList.toggle("active", !autosaveEnabled);
      autosaveIntervalGroup.style.opacity = autosaveEnabled ? "1" : "0.38";
      autosaveIntervalGroup.style.pointerEvents = autosaveEnabled ? "" : "none";
      updateAutosaveHint();
      startAutosaveTimer();
      saveAutosaveSettings();
    }

    function applyAutosaveInterval(sec) {
      autosaveInterval = sec;
      const t = copy[language];
      autosaveValue.textContent = `${sec}${t.autosaveSec}`;
      autosaveRange.value = String(sec);
      startAutosaveTimer();
      saveAutosaveSettings();
    }

    function saveAutosaveSettings() {
      try {
        localStorage.setItem(AUTOSAVE_SETTINGS_KEY, JSON.stringify({ autosaveEnabled, autosaveInterval }));
      } catch(e) {}
    }

    function loadAutosaveSettings() {
      try {
        const raw = localStorage.getItem(AUTOSAVE_SETTINGS_KEY);
        if (!raw) return;
        const s = JSON.parse(raw);
        if (typeof s.autosaveEnabled  === "boolean") autosaveEnabled  = s.autosaveEnabled;
        if (typeof s.autosaveInterval === "number")  autosaveInterval = s.autosaveInterval;
      } catch(e) {}
    }

    // ── Autosave hint 1초마다 갱신 ────────────────────────────
    function startHintRefresh() {
      setInterval(updateAutosaveHint, 1000);
    }

    // ── 시작 시 자동저장 데이터 불러오기 ─────────────────────
    function tryLoadAutosave() {
      try {
        const raw = localStorage.getItem(AUTOSAVE_KEY);
        if (!raw) return false;
        const d = JSON.parse(raw);
        applyLoadData(d);
        lastAutosaveAt = d.savedAt ?? null;
        if (d.savedAt && Date.now() > d.savedAt) {
          applyOfflineProgress(Date.now() - d.savedAt, true);
        }
        return true;
      } catch(e) { return false; }
    }

    function applyLoadData(d) {
      time             = d.time            ?? 0;
      productionRate   = d.productionRate  ?? 1;
      productionLevel  = d.productionLevel ?? 0;
      acceleratorLevel = d.acceleratorLevel ?? 0;
      compressorLevel  = d.compressorLevel  ?? 0;
      totalPurchases = d.totalPurchases ?? (productionLevel + acceleratorLevel + compressorLevel);
      timeShard      = d.timeShard ?? 0;
      if (d.customAccentColor) customAccentColor = d.customAccentColor;
      totalPlayMs = d.totalPlayMs ?? 0;
      lastPlayTickAt = Date.now();
      offlinePopupEnabled = d.offlinePopupEnabled ?? true;
      if (typeof seedAchievedIds === "function") seedAchievedIds();
      applyTimeGainInterval(d.timeGainIntervalMs ?? d.uiTransitionMs ?? DEFAULT_TIME_GAIN_INTERVAL);
      applyLanguage(d.language   ?? "ko");
      applyTheme(d.cardTheme     ?? "dark");
      applyAccent(d.accent       ?? "yellow");
      applyCardBlur(d.cardBlur   ?? DEFAULT_CARD_BLUR);
      applyCardOpacity(d.cardOpacity ?? DEFAULT_CARD_OPACITY);
      render();
    }

    function getSlotData(slot) {
      try {
        const raw = localStorage.getItem(SAVE_PREFIX + slot);
        return raw ? JSON.parse(raw) : null;
      } catch { return null; }
    }

    function formatSlotTime(d) {
      if (!d) return "—";
      return Math.floor(d.time).toLocaleString();
    }

    function showStatus(msg) {
      saveStatus.textContent = msg;
      if (statusTimer) clearTimeout(statusTimer);
      statusTimer = setTimeout(() => { saveStatus.textContent = ""; }, 2200);
    }

    function renderSaveSlots() {
      const t = copy[language];
      saveLoadLabel.textContent = t.saveLoad;
      saveExportBtn.textContent  = t.saveExport;
      saveImportBtn.textContent  = t.saveImport;
      autosaveLabel.textContent = t.autosave;
      autosaveIntervalLabel.textContent = t.autosaveInterval;
      autosaveOnBtn.textContent  = t.autosaveOn;
      autosaveOffBtn.textContent = t.autosaveOff;
      autosaveValue.textContent  = `${autosaveInterval}${t.autosaveSec}`;
      updateAutosaveHint();
      dangerDesc.textContent      = t.dangerDesc;
      gameResetBtn.textContent    = t.dangerBtn;
      saveSlotGrid.innerHTML = "";
      for (let i = 1; i <= NUM_SLOTS; i++) {
        const d = getSlotData(i);
        const slot = document.createElement("div");
        slot.className = "save-slot";
        slot.innerHTML = `
          <span class="save-slot-label">${t.saveInfo} ${i}</span>
          <span class="save-slot-time">${formatSlotTime(d)}</span>
          <div class="save-slot-btns">
            <button class="is-save" data-slot="${i}" data-action="save">${t.saveBtn}</button>
            <button data-slot="${i}" data-action="load" ${d ? "" : "disabled"}>${t.loadBtn}</button>
          </div>`;
        saveSlotGrid.appendChild(slot);
      }
      gameResetBtn.textContent = t.resetBtn;
    }

    function normalizeImportedState(raw) {
      if (!isPlainObject(raw)) return null;
      if (raw.current && isPlainObject(raw.current)) return raw.current;
      if (typeof raw.time === "number" || raw.language || raw.cardTheme) return raw;
      return null;
    }

    function importSavePayload(raw) {
      if (raw.current || raw.autosave || raw.slots || raw.autosaveSettings) {
        const state = normalizeImportedState(raw.current || raw.autosave || raw);
        if (!state) return false;
        clearProgressStorage();
        restoreExportBundle(raw);
        if (raw.autosaveSettings && isPlainObject(raw.autosaveSettings)) {
          if (typeof raw.autosaveSettings.autosaveEnabled === "boolean") autosaveEnabled = raw.autosaveSettings.autosaveEnabled;
          if (typeof raw.autosaveSettings.autosaveInterval === "number") autosaveInterval = raw.autosaveSettings.autosaveInterval;
        }
        if (state) {
          applyLoadData(state);
          lastAutosaveAt = state.savedAt ?? null;
          try { localStorage.setItem(AUTOSAVE_KEY, JSON.stringify(state)); } catch(e) {}
        }
        if (raw.autosave && isPlainObject(raw.autosave)) {
          lastAutosaveAt = raw.autosave.savedAt ?? lastAutosaveAt;
        }
        if (raw.autosaveSettings && isPlainObject(raw.autosaveSettings)) {
          applyAutosaveEnabled(autosaveEnabled);
          applyAutosaveInterval(autosaveInterval);
        }
        return true;
      }

      const state = normalizeImportedState(raw);
      if (!state) return false;
      applyLoadData(state);
      lastAutosaveAt = state.savedAt ?? null;
      try { localStorage.setItem(AUTOSAVE_KEY, JSON.stringify(state)); } catch(e) {}
      return true;
    }

    saveSlotGrid.addEventListener("click", e => {
      const btn = e.target.closest("button[data-action]");
      if (!btn) return;
      const slot   = btn.dataset.slot;
      const action = btn.dataset.action;
      const t      = copy[language];
      if (action === "save") {
        localStorage.setItem(SAVE_PREFIX + slot, JSON.stringify(buildSaveData()));
        showStatus(t.saveOk);
        renderSaveSlots();
      } else if (action === "load") {
        const d = getSlotData(slot);
        if (d) { applyLoadData(d); showStatus(t.loadOk); renderSaveSlots(); }
        else    { showStatus(t.loadNone); }
      }
    });

    saveExportBtn.addEventListener("click", () => {
      const t = copy[language];
      const payload = buildExportBundle();
      const stamp = new Date(payload.exportedAt).toISOString().replace(/[:.]/g, "-");
      downloadTextFile(`time-collector-save-${stamp}.json`, JSON.stringify(payload, null, 2));
      showStatus(t.exportOk);
    });

    saveImportBtn.addEventListener("click", () => {
      saveImportInput.value = "";
      saveImportInput.click();
    });

    saveImportInput.addEventListener("change", async e => {
      const file = e.target.files && e.target.files[0];
      if (!file) return;
      try {
        const text = await file.text();
        const raw = JSON.parse(text);
        const ok = importSavePayload(raw);
        if (!ok) {
          const t = copy[language];
          showStatus(t.importFail);
          return;
        }
        renderSaveSlots();
        const t = copy[language];
        showStatus(t.importOk);
      } catch(err) {
        const t = copy[language];
        showStatus(t.importFail);
      } finally {
        saveImportInput.value = "";
      }
    });
