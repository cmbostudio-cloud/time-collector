// ── DOM refs ──────────────────────────────────────────────
    const frame           = document.querySelector(".frame");
    const bgLayer         = document.getElementById("bg-layer");
    const bgFileInput     = document.getElementById("bgFileInput");
    const saveImportInput = document.getElementById("saveImportInput");
    const bgUploadBtn     = document.getElementById("bgUploadBtn");
    const bgResetBtn      = document.getElementById("bgResetBtn");
    const saveExportBtn   = document.getElementById("saveExportBtn");
    const saveImportBtn   = document.getElementById("saveImportBtn");
    const bgLabel         = document.getElementById("bgLabel");
    const gameTitle       = document.getElementById("gameTitle");
    const timeValue       = document.getElementById("timeValue");
    const timeUnit        = document.getElementById("timeUnit");
    const rateLabel       = document.getElementById("rateLabel");
    const upgradeTitle    = document.getElementById("upgradeTitle");
    const upgradeSubtitle = document.getElementById("upgradeSubtitle");
    const upgradeMeta     = document.getElementById("upgradeMeta");
    const upgradeButton   = document.getElementById("upgradeButton");
    const timeCard        = document.getElementById("timeCard");
    const languageLabel   = document.getElementById("languageLabel");
    const themeLabel      = document.getElementById("themeLabel");
    const accentLabel     = document.getElementById("accentLabel");
    const blurLabel       = document.getElementById("blurLabel");
    const opacityLabel    = document.getElementById("opacityLabel");
    const blurValue       = document.getElementById("blurValue");
    const opacityValue    = document.getElementById("opacityValue");
    const blurRange       = document.getElementById("blurRange");
    const opacityRange    = document.getElementById("opacityRange");
    const timeGainLabel     = document.getElementById("timeGainLabel");
    const timeGainValue     = document.getElementById("timeGainValue");
    const timeGainRange     = document.getElementById("timeGainRange");
    const settingsTitle   = document.getElementById("settingsTitle");
    const settingsRoot    = document.getElementById("settingsRoot");
    const settingsToggle  = document.getElementById("settingsToggle");
    const settingsClose   = document.getElementById("settingsClose");
    const langKo          = document.getElementById("langKo");
    const langEn          = document.getElementById("langEn");
    const themeDark       = document.getElementById("themeDark");
    const themeLight      = document.getElementById("themeLight");
    const accentBlue      = document.getElementById("accentBlue");
    const accentGreen     = document.getElementById("accentGreen");
    const accentYellow    = document.getElementById("accentYellow");
    const accentPurple    = document.getElementById("accentPurple");
    const accentRed         = document.getElementById("accentRed");
    const accentCustomBtn   = document.getElementById("accentCustom");
    const customAccentRow   = document.getElementById("customAccentRow");
    const customAccentInput = document.getElementById("customAccentInput");
    const customAccentApply = document.getElementById("customAccentApply");
    const customAccentError = document.getElementById("customAccentError");
    const tabMain         = document.getElementById("tabMain");
    const tabUpgrade      = document.getElementById("tabUpgrade");
    const tabAchievement  = document.getElementById("tabAchievement");
    const tabStats        = document.getElementById("tabStats");
    const panelMain       = document.getElementById("panelMain");
    const panelQty        = document.getElementById("panelQty");
    const panelUpgrade    = document.getElementById("panelUpgrade");
    const panelAchievement = document.getElementById("panelAchievement");
    const panelStats      = document.getElementById("panelStats");
    const achievementCard = document.getElementById("achievementCard");
    const achievementSectionTitle = document.getElementById("achievementSectionTitle");
    const achievementNote = document.getElementById("achievementNote");
    const achievementSummary = document.getElementById("achievementSummary");
    const achievementList = document.getElementById("achievementList");
    const totalPlayTimeLabel = document.getElementById("totalPlayTimeLabel");
    const totalPlayTimeValue = document.getElementById("totalPlayTimeValue");
    // Accelerator
    const acceleratorPanel  = document.getElementById("acceleratorPanel");
    const acceleratorTitle  = document.getElementById("acceleratorTitle");
    const acceleratorSubtitle = document.getElementById("acceleratorSubtitle");
    const acceleratorMeta   = document.getElementById("acceleratorMeta");
    const acceleratorButton = document.getElementById("acceleratorButton");
    // Compressor
    const compressorPanel   = document.getElementById("compressorPanel");
    const compressorTitle   = document.getElementById("compressorTitle");
    const compressorSubtitle= document.getElementById("compressorSubtitle");
    const compressorMeta    = document.getElementById("compressorMeta");
    const compressorButton  = document.getElementById("compressorButton");
    const upgradeTierLabel  = document.getElementById("upgradeTierLabel");
    const qtyBtn1           = document.getElementById("qtyBtn1");
    const qtyBtn5           = document.getElementById("qtyBtn5");
    const qtyBtn10          = document.getElementById("qtyBtn10");
    const qtyBtnMax         = document.getElementById("qtyBtnMax");
    const upgradeBtnCount   = document.getElementById("upgradeBtnCount");
    const acceleratorBtnCount = document.getElementById("acceleratorBtnCount");
    const compressorBtnCount  = document.getElementById("compressorBtnCount");
    const saveLoadLabel   = document.getElementById("saveLoadLabel");
    const saveSlotGrid    = document.getElementById("saveSlotGrid");
    const saveStatus      = document.getElementById("saveStatus");
    const autosaveLabel   = document.getElementById("autosaveLabel");
    const autosaveOnBtn   = document.getElementById("autosaveOn");
    const autosaveOffBtn  = document.getElementById("autosaveOff");
    const autosaveIntervalGroup = document.getElementById("autosaveIntervalGroup");
    const autosaveIntervalLabel = document.getElementById("autosaveIntervalLabel");
    const autosaveRange   = document.getElementById("autosaveRange");
    const autosaveValue   = document.getElementById("autosaveValue");
    const autosaveHint    = document.getElementById("autosaveHint");
    const dangerDesc       = document.getElementById("dangerDesc");
    const gameResetBtn     = document.getElementById("gameResetBtn");
    const dangerModal      = document.getElementById("dangerModal");
    const dangerModalTitle = document.getElementById("dangerModalTitle");
    const dangerModalDesc  = document.getElementById("dangerModalDesc");
    const dangerModalHint  = document.getElementById("dangerModalHint");
    const dangerModalPhrase= document.getElementById("dangerModalPhrase");
    const dangerModalInput = document.getElementById("dangerModalInput");
    const dangerModalError = document.getElementById("dangerModalError");
    const dangerModalCancel= document.getElementById("dangerModalCancel");
    const dangerModalConfirm=document.getElementById("dangerModalConfirm");
    const offlinePopupLabel   = document.getElementById("offlinePopupLabel");
    const offlinePopupOnBtn   = document.getElementById("offlinePopupOn");
    const offlinePopupOffBtn  = document.getElementById("offlinePopupOff");
    const offlineModal        = document.getElementById("offlineModal");
    const offlineModalTitle   = document.getElementById("offlineModalTitle");
    const offlineModalDesc    = document.getElementById("offlineModalDesc");
    const offlineModalElapsedLabel = document.getElementById("offlineModalElapsedLabel");
    const offlineModalElapsedValue = document.getElementById("offlineModalElapsedValue");
    const offlineModalGainLabel = document.getElementById("offlineModalGainLabel");
    const offlineModalGainValue = document.getElementById("offlineModalGainValue");
    const offlineModalConfirm = document.getElementById("offlineModalConfirm");
    // ── Rebirth DOM refs ──────────────────────────────────────
    const rebirthModal        = document.getElementById("rebirthModal");
    const rebirthModalTitle   = document.getElementById("rebirthModalTitle");
    const rebirthModalDesc    = document.getElementById("rebirthModalDesc");
    const rebirthModalRequire = document.getElementById("rebirthModalRequire");
    const rebirthModalCancel  = document.getElementById("rebirthModalCancel");
    const rebirthModalConfirm = document.getElementById("rebirthModalConfirm");
    const rebirthBtn          = document.getElementById("rebirthBtn");
    const rebirthHint         = document.getElementById("rebirthHint");
    const fragmentsLabel      = document.getElementById("fragmentsLabel");
    const fragmentsValue      = document.getElementById("fragmentsValue");
    const shardsLabel         = document.getElementById("shardsLabel");
    const shardsValue         = document.getElementById("shardsValue");
    const shardRow            = document.getElementById("shardRow");

    // ── Purchase count state ──────────────────────────────────
    let purchaseCount = 1; // 1 | 5 | 10 | "max"

    const offlineCopy = {
      ko: {
        label: "방치 복귀 팝업",
        on: "켜짐",
        off: "꺼짐",
        title: "방치 보상",
        desc: "잠시 자리를 비운 동안 진행이 누적되었습니다.",
        elapsed: "방치 시간",
        gain: "획득량",
        confirm: "확인",
      },
      en: {
        label: "Return popup",
        on: "On",
        off: "Off",
        title: "Idle reward",
        desc: "Progress accumulated while you were away.",
        elapsed: "Away time",
        gain: "Gain",
        confirm: "OK",
      },
    };

    const achievementCopy = {
      ko: {
        title: "업적 목표",
        note: "보상은 아직 없습니다. 목표만 먼저 기록됩니다.",
        done: "달성",
        goal: "목표",
        popupTitle: "업적 달성!",
        popupConfirm: "확인",
        items: [
          { id: "purchase_1",    icon: "◈", title: "첫 수집",       desc: "누적 구매 1회를 달성하세요.",         kind: "purchases",  target: 1 },
          { id: "purchase_25",   icon: "◈", title: "꾸준한 손길",   desc: "누적 구매 25회를 달성하세요.",        kind: "purchases",  target: 25 },
          { id: "purchase_100",  icon: "◈", title: "대량 수집가",   desc: "누적 구매 100회를 달성하세요.",       kind: "purchases",  target: 100 },
          { id: "production_10", icon: "⬡", title: "생산기 Lv.10", desc: "생산기 레벨 10에 도달하세요.",        kind: "production", target: 10 },
          { id: "production_25", icon: "⬡", title: "생산기 Lv.25", desc: "생산기 레벨 25에 도달하세요.",        kind: "production", target: 25 },
          { id: "accelerator_5", icon: "▷", title: "가속의 시작",   desc: "차원 가속기 레벨 5에 도달하세요.",   kind: "accelerator", target: 5 },
          { id: "accelerator_10",icon: "▷", title: "가속 전문가",   desc: "차원 가속기 레벨 10에 도달하세요.",  kind: "accelerator", target: 10 },
          { id: "compressor_3",  icon: "◇", title: "압축의 감각",   desc: "시간 파편 압축기 레벨 3에 도달하세요.", kind: "compressor", target: 3 },
          { id: "play_10m",      icon: "◷", title: "시간을 붙잡다", desc: "누적 플레이 시간 10분을 달성하세요.", kind: "playtime",   target: 10 * 60 * 1000 },
          { id: "play_1h",       icon: "◷", title: "오래 머문 사람", desc: "누적 플레이 시간 1시간을 달성하세요.", kind: "playtime", target: 60 * 60 * 1000 },
          { id: "play_24h",      icon: "◷", title: "하루를 넘긴 자", desc: "누적 플레이 시간 24시간을 달성하세요.", kind: "playtime", target: 24 * 60 * 60 * 1000 },
          { id: "play_100h",     icon: "◷", title: "시간의 지배자", desc: "누적 플레이 시간 100시간을 달성하세요.", kind: "playtime", target: 100 * 60 * 60 * 1000 },
        ],
      },
      en: {
        title: "Achievement Goals",
        note: "Rewards are not implemented yet. Only the goals are tracked for now.",
        done: "Done",
        goal: "Goal",
        popupTitle: "Achievement Unlocked!",
        popupConfirm: "OK",
        items: [
          { id: "purchase_1",    icon: "◈", title: "First Collection",  desc: "Make your first purchase.",           kind: "purchases",  target: 1 },
          { id: "purchase_25",   icon: "◈", title: "Steady Collector",  desc: "Reach 25 total purchases.",           kind: "purchases",  target: 25 },
          { id: "purchase_100",  icon: "◈", title: "Bulk Collector",    desc: "Reach 100 total purchases.",          kind: "purchases",  target: 100 },
          { id: "production_10", icon: "⬡", title: "Generator Lv.10",  desc: "Reach Generator level 10.",           kind: "production", target: 10 },
          { id: "production_25", icon: "⬡", title: "Generator Lv.25",  desc: "Reach Generator level 25.",           kind: "production", target: 25 },
          { id: "accelerator_5", icon: "▷", title: "First Acceleration", desc: "Reach Accelerator level 5.",        kind: "accelerator", target: 5 },
          { id: "accelerator_10",icon: "▷", title: "Acceleration Master", desc: "Reach Accelerator level 10.",      kind: "accelerator", target: 10 },
          { id: "compressor_3",  icon: "◇", title: "Compression Feel",  desc: "Reach Compressor level 3.",          kind: "compressor", target: 3 },
          { id: "play_10m",      icon: "◷", title: "Time Keeper",       desc: "Reach 10 minutes of total play time.", kind: "playtime", target: 10 * 60 * 1000 },
          { id: "play_1h",       icon: "◷", title: "Dedicated Player",  desc: "Reach 1 hour of total play time.",   kind: "playtime",   target: 60 * 60 * 1000 },
          { id: "play_24h",      icon: "◷", title: "Day One",           desc: "Reach 24 hours of total play time.", kind: "playtime",   target: 24 * 60 * 60 * 1000 },
          { id: "play_100h",     icon: "◷", title: "Master of Time",    desc: "Reach 100 hours of total play time.", kind: "playtime",  target: 100 * 60 * 60 * 1000 },
        ],
      },
    };

    // ── Achievement popup state ───────────────────────────────
    let achievedIds = new Set();
    let achievementPopupQueue = [];
    let achievementPopupVisible = false;

    function seedAchievedIds() {
      // Called on load: mark already-completed achievements so they don't trigger popups
      achievedIds = new Set();
      // Use ko items as canonical — ids are identical across all locales
      for (const item of achievementCopy.ko.items) {
        const current = getAchievementCurrentValue(item);
        if (current >= item.target) achievedIds.add(item.id);
      }
    }

    function formatBulkCount(count) {
      if (purchaseCount === "max") return `×${count}`;
      return count > 1 ? `×${count}` : "";
    }

    function getAchievementCurrentValue(item) {
      switch (item.kind) {
        case "purchases":
          return totalPurchases;
        case "production":
          return productionLevel;
        case "accelerator":
          return acceleratorLevel;
        case "compressor":
          return compressorLevel;
        case "playtime":
          return totalPlayMs;
        default:
          return 0;
      }
    }

    function formatAchievementValue(item, value) {
      const locale = language === "ko" ? "ko-KR" : "en-US";
      if (item.kind === "playtime") return formatPlayTime(value);
      return value.toLocaleString(locale);
    }

    function formatGainAmount(value) {
      const locale = language === "ko" ? "ko-KR" : "en-US";
      return value.toLocaleString(locale, {
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
      });
    }

    function renderAchievements() {
      const t = achievementCopy[language];
      if (!t || !achievementList) return;

      // 업적 달성 체크는 탭 표시 여부와 무관하게 항상 수행 (popup 발동을 위해)
      for (const item of achievementCopy.ko.items) {
        if (!achievedIds.has(item.id) && getAchievementCurrentValue(item) >= item.target) {
          achievedIds.add(item.id);
          // 현재 언어의 텍스트로 팝업 구성
          const localItem = t.items.find(i => i.id === item.id) || item;
          achievementPopupQueue.push({ title: localItem.title, icon: localItem.icon || "★", desc: localItem.desc });
          if (!achievementPopupVisible) showNextAchievementPopup();
        }
      }

      // DOM 업데이트는 탭이 열려있을 때만 수행 (render()의 탭 가드가 이미 막지만 직접 호출 대비)
      if (achievementList.closest(".ext-panel")?.style.display === "none") return;

      if (achievementSectionTitle) achievementSectionTitle.textContent = t.title;
      if (achievementNote) achievementNote.textContent = t.note;

      const completedCount = t.items.reduce((count, item) => {
        return count + (getAchievementCurrentValue(item) >= item.target ? 1 : 0);
      }, 0);
      if (achievementSummary) achievementSummary.textContent = `${completedCount} / ${t.items.length}`;

      achievementList.innerHTML = "";
      for (const item of t.items) {
        const current = getAchievementCurrentValue(item);
        const target = item.target;
        const done = current >= target;
        const percent = target > 0 ? Math.min(100, (current / target) * 100) : 0;

        const row = document.createElement("div");
        row.className = `achievement-item${done ? " completed" : ""}`;
        row.innerHTML = `
          <div class="achievement-row">
            <p class="achievement-name"><span class="achievement-icon">${item.icon || "★"}</span>${item.title}</p>
            <span class="achievement-status">${done ? t.done : t.goal}</span>
          </div>
          <p class="achievement-desc">${item.desc}</p>
          <div class="achievement-progress-row">
            <span class="achievement-progress-text">${formatAchievementValue(item, current)} / ${formatAchievementValue(item, target)}</span>
            <span class="achievement-progress-text">${Math.floor(percent)}%</span>
          </div>
          <div class="achievement-bar" aria-hidden="true">
            <div class="achievement-bar-fill" style="width:${percent.toFixed(1)}%"></div>
          </div>`;
        achievementList.appendChild(row);
      }
    }

    // ── Achievement popup ─────────────────────────────────────
    function showNextAchievementPopup() {
      if (achievementPopupQueue.length === 0) { achievementPopupVisible = false; return; }
      achievementPopupVisible = true;
      const { title, icon, desc } = achievementPopupQueue.shift();
      const t = achievementCopy[language];
      const existing = document.getElementById("achievementPopupModal");
      if (existing) existing.remove();
      const modal = document.createElement("div");
      modal.id = "achievementPopupModal";
      modal.className = "achievement-popup-modal";
      modal.innerHTML = `
        <div class="achievement-popup-box">
          <div class="achievement-popup-icon">${icon}</div>
          <div class="achievement-popup-body">
            <p class="achievement-popup-title">${t.popupTitle}</p>
            <p class="achievement-popup-name">${title}</p>
            <p class="achievement-popup-desc">${desc}</p>
          </div>
          <button class="achievement-popup-confirm">${t.popupConfirm}</button>
        </div>`;
      document.body.appendChild(modal);
      modal.querySelector(".achievement-popup-confirm").addEventListener("click", closeAchievementPopup);
      modal.addEventListener("click", e => { if (e.target === modal) closeAchievementPopup(); });
    }

    function closeAchievementPopup() {
      const modal = document.getElementById("achievementPopupModal");
      if (modal) modal.remove();
      if (achievementPopupQueue.length > 0) {
        setTimeout(showNextAchievementPopup, 300);
      } else {
        achievementPopupVisible = false;
      }
    }

// ── Render ────────────────────────────────────────────────
    function render() {
      const displayTime = Math.floor(time);
      const locale = language === "ko" ? "ko-KR" : "en-US";
      timeValue.textContent = displayTime.toLocaleString(locale);
      const t = copy[language];
      const effectiveRate = getTimeGainPerSecond();

      // Rate display
      rateLabel.textContent = `${t.ratePrefix}${effectiveRate.toLocaleString(locale)}${t.rateSuffix}`;
      if (totalPlayTimeValue) totalPlayTimeValue.textContent = formatPlayTime(totalPlayMs);

      // ── 메인 탭 재화 표시 ──
      if (fragmentsValue) fragmentsValue.textContent = displayTime.toLocaleString(locale);
      if (shardsValue)    shardsValue.textContent    = timeShard.toLocaleString(locale);
      if (shardRow)       shardRow.style.display     = timeShard > 0 ? "" : "none";
      // 환생 버튼
      const canRebirth = displayTime >= REBIRTH_THRESHOLD;
      if (rebirthBtn) {
        rebirthBtn.disabled = !canRebirth;
        rebirthBtn.textContent = t.rebirthBtn;
      }
      if (rebirthHint) {
        if (canRebirth) {
          rebirthHint.textContent = t.rebirthAvailable;
          rebirthHint.style.color = "rgba(200,160,255,0.85)";
        } else {
          const need = REBIRTH_THRESHOLD - displayTime;
          rebirthHint.textContent = `${need.toLocaleString(locale)} ${t.timeUnit} ${language === "ko" ? "부족" : "more needed"}`;
          rebirthHint.style.color = "";
        }
      }
      if (offlinePopupOnBtn && offlinePopupOffBtn) {
        offlinePopupOnBtn.classList.toggle("active", offlinePopupEnabled);
        offlinePopupOffBtn.classList.toggle("active", !offlinePopupEnabled);
      }
      // 업적 달성 체크는 항상 수행 (탭 미표시 시 DOM 재구성은 renderAchievements 내부에서 스킵)
      renderAchievements();

      // ── 시간 생산기 ──
      const { totalCost: upgCostTotal, count: upgCount } = calcBulkCost("upgrade");
      upgradeMeta.textContent  = `${t.upgradeLevel} ${productionLevel} | ${t.upgradeCost} ${upgCostTotal.toLocaleString(locale)}` + (purchaseCount === "max" ? ` (×${upgCount})` : (upgCount > 1 ? ` (×${upgCount})` : ""));
      upgradeButton.textContent = t.upgradeButton;
      upgradeButton.disabled    = upgCount === 0 || displayTime < upgCostTotal;
      upgradeBtnCount.textContent = formatBulkCount(upgCount);

      // ── 차원 가속기 ──
      const accUnlocked = productionLevel >= 5;
      acceleratorPanel.classList.toggle("locked", !accUnlocked);
      if (!accUnlocked) {
        acceleratorMeta.innerHTML = `<span class="upgrade-lock-badge">${t.acceleratorLock}</span>`;
        acceleratorButton.disabled = true;
        acceleratorButton.textContent = "🔒";
        acceleratorBtnCount.textContent = "";
      } else {
        const { totalCost: accCostTotal, count: accCount } = calcBulkCost("accelerator");
        const accMult = (1 + acceleratorLevel * 0.3).toFixed(1);
        acceleratorMeta.textContent = `${t.upgradeLevel} ${acceleratorLevel} | ×${accMult} | ${t.upgradeCost} ${accCostTotal.toLocaleString(locale)}` + (purchaseCount === "max" ? ` (×${accCount})` : (accCount > 1 ? ` (×${accCount})` : ""));
        acceleratorButton.textContent = t.upgradeButton;
        acceleratorButton.disabled = accCount === 0 || displayTime < accCostTotal;
        acceleratorBtnCount.textContent = formatBulkCount(accCount);
      }

      // ── 공간 압축기 ──
      const compUnlocked = productionLevel >= 8;
      compressorPanel.classList.toggle("locked", !compUnlocked);
      if (!compUnlocked) {
        compressorMeta.innerHTML = `<span class="upgrade-lock-badge">${t.compressorLock}</span>`;
        compressorButton.disabled = true;
        compressorButton.textContent = "🔒";
        compressorBtnCount.textContent = "";
      } else {
        const { totalCost: compCostTotal, count: compCount } = calcBulkCost("compressor");
        const discount = Math.min(50, compressorLevel * 5);
        compressorMeta.textContent = `${t.upgradeLevel} ${compressorLevel} | -${discount}% | ${t.upgradeCost} ${compCostTotal.toLocaleString(locale)}` + (purchaseCount === "max" ? ` (×${compCount})` : (compCount > 1 ? ` (×${compCount})` : ""));
        compressorButton.textContent = t.upgradeButton;
        compressorButton.disabled = compCount === 0 || displayTime < compCostTotal;
        compressorBtnCount.textContent = formatBulkCount(compCount);
      }
    }

    // ── Bulk cost calculator ──────────────────────────────────
    function _getCost(type, i) {
      const d = getDiscountMult();
      if (type === "upgrade")      return Math.floor(baseUpgradeCost * Math.pow(1.6, productionLevel + i) * d);
      if (type === "accelerator")  return Math.floor(50  * Math.pow(2.0, acceleratorLevel  + i) * d);
      if (type === "compressor")   return Math.floor(200 * Math.pow(1.8, compressorLevel   + i) * d);
      return 0;
    }

    function calcBulkCost(type) {
      const balance = Math.floor(time);
      const n = purchaseCount === "max" ? Infinity : purchaseCount;
      let totalCost = 0;
      let count = 0;

      for (let i = 0; i < n; i++) {
        const c = _getCost(type, i);
        if (totalCost + c > balance) break;
        totalCost += c;
        count++;
      }

      // max 모드: 살 수 있는 게 없으면 1회 비용을 표시용으로 반환 (버튼 비활성)
      if (purchaseCount === "max" && count === 0) {
        return { totalCost: _getCost(type, 0), count: 0 };
      }

      // 고정 수량 모드: 잔액 부족이면 목표 비용 전체를 표시용으로 반환 (버튼 비활성)
      if (purchaseCount !== "max" && count < purchaseCount) {
        let exactCost = 0;
        for (let i = 0; i < purchaseCount; i++) exactCost += _getCost(type, i);
        return { totalCost: exactCost, count: 0 };
      }

      return { totalCost, count };
    }

    // ── Buy functions ─────────────────────────────────────────
    function buyUpgrade() {
      const { totalCost, count } = calcBulkCost("upgrade");
      if (count === 0) return;
      time -= totalCost;
      productionLevel += count;
      productionRate  += count;
      totalPurchases += count;
      render();
    }

    function buyAccelerator() {
      if (productionLevel < 5) return;
      const { totalCost, count } = calcBulkCost("accelerator");
      if (count === 0) return;
      time -= totalCost;
      acceleratorLevel += count;
      totalPurchases += count;
      render();
    }

    function buyCompressor() {
      if (productionLevel < 8) return;
      const { totalCost, count } = calcBulkCost("compressor");
      if (count === 0) return;
      time -= totalCost;
      compressorLevel += count;
      totalPurchases += count;
      render();
    }

    // ── Purchase count apply ──────────────────────────────────
    function applyPurchaseCount(qty) {
      purchaseCount = qty;
      qtyBtn1.classList.toggle("active",   qty === 1);
      qtyBtn5.classList.toggle("active",   qty === 5);
      qtyBtn10.classList.toggle("active",  qty === 10);
      qtyBtnMax.classList.toggle("active", qty === "max");
      render();
    }

    // ── Language ──────────────────────────────────────────────
    function applyLanguage(next) {
      language = next;
      const t  = copy[language];
      document.documentElement.lang  = language;
      gameTitle.textContent           = t.title;
      settingsToggle.textContent      = t.settings;
      settingsTitle.textContent       = t.settingsTitle;
      settingsClose.textContent       = t.close;
      languageLabel.textContent       = t.language;
      themeLabel.textContent          = t.theme;
      accentLabel.textContent         = t.accent;
      blurLabel.textContent           = t.blur;
      opacityLabel.textContent        = t.opacity;
      timeGainLabel.textContent       = t.timeGain;
      offlinePopupLabel.textContent    = offlineCopy[language].label;
      offlinePopupOnBtn.textContent    = offlineCopy[language].on;
      offlinePopupOffBtn.textContent   = offlineCopy[language].off;
      offlineModalTitle.textContent    = offlineCopy[language].title;
      offlineModalDesc.textContent     = offlineCopy[language].desc;
      offlineModalElapsedLabel.textContent = offlineCopy[language].elapsed;
      offlineModalGainLabel.textContent = offlineCopy[language].gain;
      offlineModalConfirm.textContent  = offlineCopy[language].confirm;
      bgLabel.textContent             = t.bg;
      bgUploadBtn.textContent         = t.bgUpload;
      bgResetBtn.textContent          = t.bgReset;
      themeDark.textContent           = t.dark;
      themeLight.textContent          = t.light;
      timeUnit.textContent            = t.timeUnit;
      upgradeTitle.textContent        = t.upgradeTitle;
      upgradeSubtitle.textContent     = t.upgradeSubtitle;
      acceleratorTitle.textContent    = t.acceleratorTitle;
      acceleratorSubtitle.textContent = t.acceleratorSubtitle;
      compressorTitle.textContent     = t.compressorTitle;
      compressorSubtitle.textContent  = t.compressorSubtitle;
      tabMain.textContent             = t.tabMain;
      tabUpgrade.textContent          = t.tabUpgrade;
      tabAchievement.textContent      = t.tabAchievement;
      tabStats.textContent            = t.tabStats;
      totalPlayTimeLabel.textContent   = t.totalPlayTime;
      if (fragmentsLabel) fragmentsLabel.textContent = t.fragmentsLabel;
      if (shardsLabel)    shardsLabel.textContent    = t.shardsLabel;
      accentBlue.setAttribute("aria-label",   t.blue);
      accentGreen.setAttribute("aria-label",  t.green);
      accentYellow.setAttribute("aria-label", t.yellow);
      accentPurple.setAttribute("aria-label", t.purple);
      accentRed.setAttribute("aria-label",    t.red);
      accentCustomBtn.setAttribute("aria-label", t.customAccent);
      customAccentInput.placeholder = t.customAccentPlaceholder;
      customAccentApply.textContent = t.customAccent;
      langKo.classList.toggle("active", language === "ko");
      langEn.classList.toggle("active", language === "en");
      if (typeof renderSaveSlots === "function") renderSaveSlots();
      render();
    }

    // ── Settings open/close ───────────────────────────────────
    function setSettingsOpen(open) {
      settingsRoot.classList.toggle("open", open);
      settingsToggle.setAttribute("aria-expanded", String(open));
    }

    // ── Theme ─────────────────────────────────────────────────
    function applyTheme(next) {
      cardTheme = next;
      timeCard.dataset.theme = cardTheme;
      frame.dataset.uiTheme  = cardTheme;
      const upgradeCard = document.getElementById("upgradeCard");
      const statsCard   = document.getElementById("statsCard");
      const qtyCard     = document.getElementById("qtyCard");
      if (upgradeCard) upgradeCard.dataset.theme = cardTheme;
      if (statsCard)   statsCard.dataset.theme   = cardTheme;
      if (achievementCard) achievementCard.dataset.theme = cardTheme;
      if (qtyCard)     qtyCard.dataset.theme     = cardTheme;
      themeDark.classList.toggle("active",  cardTheme === "dark");
      themeLight.classList.toggle("active", cardTheme === "light");
      applyAccent(accent);
    }

    // ── Accent ────────────────────────────────────────────────
    // hex → rgba helper
    function hexToRgba(hex, a) {
      const r = parseInt(hex.slice(0,2),16);
      const g = parseInt(hex.slice(2,4),16);
      const b = parseInt(hex.slice(4,6),16);
      return `rgba(${r},${g},${b},${a})`;
    }

    function applyAccent(next) {
      accent = next;
      const isCustom = (next === "custom");
      const dark     = frame.dataset.uiTheme !== "light";

      if (isCustom && customAccentColor) {
        const hex  = customAccentColor;
        const col  = "#" + hex;
        frame.style.setProperty("--ui-accent",        col);
        frame.style.setProperty("--ui-accent-glow",   hexToRgba(hex, 0.28));
        frame.style.setProperty("--ui-accent-border", hexToRgba(hex, 0.5));
        frame.style.setProperty("--ui-active-bg",     hexToRgba(hex, 0.14));
        frame.style.setProperty("--ui-slider-thumb",  col);
        // 커스텀 버튼 swatch 색도 갱신
        accentCustomBtn.style.setProperty("--accent-swatch", col);
      } else if (!isCustom) {
        const p = accents[accent];
        frame.style.setProperty("--ui-accent",        dark ? p.darkColor  : p.lightColor);
        frame.style.setProperty("--ui-accent-glow",   dark ? p.darkGlow   : p.lightGlow);
        frame.style.setProperty("--ui-accent-border", dark ? p.darkBorder : p.lightBorder);
        frame.style.setProperty("--ui-active-bg",     dark ? p.darkActive : p.lightActive);
        frame.style.setProperty("--ui-slider-thumb",  dark ? p.darkColor  : p.lightColor);
      }

      accentBlue.classList.toggle("active",   accent === "blue");
      accentGreen.classList.toggle("active",  accent === "green");
      accentYellow.classList.toggle("active", accent === "yellow");
      accentPurple.classList.toggle("active", accent === "purple");
      accentRed.classList.toggle("active",    accent === "red");
      accentCustomBtn.classList.toggle("active", isCustom);
    }

    // ── 커스텀 강조색 ─────────────────────────────────────────
    function isValidHex6(v) { return /^[0-9a-fA-F]{6}$/.test(v); }

    function applyCustomAccent(hex) {
      customAccentColor = hex.toLowerCase();
      applyAccent("custom");
      customAccentRow.style.display   = "none";
      customAccentError.style.display = "none";
      customAccentInput.classList.remove("valid");
    }

    function toggleCustomAccentRow() {
      const open = customAccentRow.style.display === "none";
      customAccentRow.style.display   = open ? "flex" : "none";
      customAccentError.style.display = "none";
      if (open) {
        customAccentInput.value = customAccentColor ?? "";
        customAccentInput.classList.toggle("valid", isValidHex6(customAccentInput.value));
        setTimeout(() => customAccentInput.focus(), 40);
      }
    }

    accentCustomBtn.addEventListener("click", toggleCustomAccentRow);

    customAccentInput.addEventListener("input", () => {
      const v = customAccentInput.value.replace(/[^0-9a-fA-F]/g,"");
      customAccentInput.value = v;
      customAccentInput.classList.toggle("valid", isValidHex6(v));
      customAccentError.style.display = "none";
    });

    customAccentApply.addEventListener("click", () => {
      const v = customAccentInput.value.trim();
      if (!isValidHex6(v)) {
        customAccentError.textContent   = copy[language].customAccentError;
        customAccentError.style.display = "block";
        return;
      }
      applyCustomAccent(v);
    });

    customAccentInput.addEventListener("keydown", e => {
      if (e.key === "Enter") customAccentApply.click();
    });

    // ── Blur / Opacity ────────────────────────────────────────
    function applyCardBlur(v) {
      cardBlur = v;
      document.documentElement.style.setProperty("--card-blur", `${v}px`);
      blurValue.textContent = `${v}px`;
      blurRange.value = String(v);
    }

    function applyCardOpacity(v) {
      cardOpacity = v;
      document.documentElement.style.setProperty("--card-opacity", (v / 100).toFixed(2));
      opacityValue.textContent = `${v}%`;
      opacityRange.value = String(v);
    }

    function syncPlayTime() {
      const now = Date.now();
      totalPlayMs += Math.max(0, now - lastPlayTickAt);
      lastPlayTickAt = now;
    }

    function formatPlayTime(ms) {
      const totalSeconds = Math.floor(ms / 1000);
      const seconds = totalSeconds % 60;
      const minutes = Math.floor(totalSeconds / 60) % 60;
      const hours = Math.floor(totalSeconds / 3600) % 24;
      const days = Math.floor(totalSeconds / 86400);
      const hh = String(hours).padStart(2, "0");
      const mm = String(minutes).padStart(2, "0");
      const ss = String(seconds).padStart(2, "0");
      return days > 0 ? `${days}d ${hh}:${mm}:${ss}` : `${hh}:${mm}:${ss}`;
    }

    function getTimeGainPerSecond() {
      return getEffectiveRate();
    }

    function getTimeGainPerTick() {
      return getTimeGainPerSecond() * (timeGainIntervalMs / 1000);
    }

    function tickGame() {
      syncPlayTime();
      time += getTimeGainPerTick();
      render();
    }

    function pauseTimeGainTimer() {
      if (timeGainTimer) clearInterval(timeGainTimer);
      timeGainTimer = null;
    }

    function startTimeGainTimer() {
      if (document.hidden || offlinePopupVisible) return;
      if (timeGainTimer) clearInterval(timeGainTimer);
      timeGainTimer = setInterval(tickGame, timeGainIntervalMs);
    }

    function applyTimeGainInterval(v) {
      const ms = Math.min(1000, Math.max(50, Math.round(v)));
      timeGainIntervalMs = ms;
      timeGainValue.textContent = `${ms}ms`;
      timeGainRange.value = String(ms);
      startTimeGainTimer();
    }

    function showOfflineProgressPopup(elapsedMs, gainedTime) {
      if (elapsedMs < 1000 || gainedTime <= 0) return;
      offlinePopupVisible = true;
      pauseTimeGainTimer();
      offlineModalTitle.textContent = offlineCopy[language].title;
      offlineModalDesc.textContent = offlineCopy[language].desc;
      offlineModalElapsedLabel.textContent = offlineCopy[language].elapsed;
      offlineModalGainLabel.textContent = offlineCopy[language].gain;
      offlineModalConfirm.textContent = offlineCopy[language].confirm;
      offlineModalElapsedValue.textContent = formatPlayTime(elapsedMs);
      offlineModalGainValue.textContent = `+${formatGainAmount(gainedTime)} ${copy[language].timeUnit}`;
      offlineModal.style.display = "grid";
    }

    function closeOfflineProgressPopup() {
      offlinePopupVisible = false;
      offlineModal.style.display = "none";
      idleStartedAt = null;
      if (!document.hidden) startTimeGainTimer();
    }

    // ── Rebirth ───────────────────────────────────────────────
    function openRebirthModal() {
      const t = copy[language];
      rebirthModalTitle.textContent   = t.rebirthModalTitle;
      rebirthModalDesc.textContent    = t.rebirthModalDesc;
      rebirthModalRequire.textContent = t.rebirthModalRequire;
      rebirthModalCancel.textContent  = t.rebirthModalCancel;
      rebirthModalConfirm.textContent = t.rebirthModalConfirm;
      rebirthModal.style.display      = "grid";
    }

    function closeRebirthModal() {
      rebirthModal.style.display = "none";
    }

    function executeRebirth() {
      if (Math.floor(time) < REBIRTH_THRESHOLD) return;
      // 시간 조각 +1
      timeShard += 1;
      // 모든 진행 초기화
      time = 0;
      productionRate  = 1;
      productionLevel = 0;
      acceleratorLevel = 0;
      compressorLevel  = 0;
      totalPurchases  = 0;
      totalPlayMs     = 0;
      lastPlayTickAt  = Date.now();
      clearProgressStorage();
      lastAutosaveAt = null;
      closeRebirthModal();
      seedAchievedIds();
      render();
      renderSaveSlots();
      updateAutosaveHint();
      showStatus("✦");
      if (autosaveEnabled) doAutosave();
      startTimeGainTimer();
    }

    rebirthBtn.addEventListener("click", () => {
      if (Math.floor(time) >= REBIRTH_THRESHOLD) openRebirthModal();
    });
    rebirthModalCancel.addEventListener("click", closeRebirthModal);
    rebirthModalConfirm.addEventListener("click", executeRebirth);
    rebirthModal.addEventListener("click", e => {
      if (e.target === rebirthModal) closeRebirthModal();
    });

    function applyOfflineProgress(elapsedMs, showPopup = false) {
      if (!Number.isFinite(elapsedMs) || elapsedMs <= 0) return;
      const gainedTime = getTimeGainPerSecond() * (elapsedMs / 1000);
      time += gainedTime;
      totalPlayMs += elapsedMs;
      lastPlayTickAt = Date.now();
      render();
      if (showPopup && offlinePopupEnabled) showOfflineProgressPopup(elapsedMs, gainedTime);
      if (autosaveEnabled) doAutosave();
    }

    function applyOfflinePopupEnabled(next) {
      offlinePopupEnabled = next;
      if (!offlinePopupEnabled && offlinePopupVisible) closeOfflineProgressPopup();
      render();
      if (autosaveEnabled) doAutosave();
    }

    function enterIdleMode() {
      if (idleStartedAt !== null) return;
      syncPlayTime();
      if (offlinePopupVisible) return;
      idleStartedAt = Date.now();
      pauseTimeGainTimer();
    }

    function exitIdleMode() {
      if (idleStartedAt !== null) {
        const elapsedMs = Date.now() - idleStartedAt;
        idleStartedAt = null;
        applyOfflineProgress(elapsedMs, offlinePopupEnabled);
        // Timer restart is handled by closeOfflineProgressPopup if popup shown,
        // or immediately here if popup is disabled/too short
        if (!offlinePopupVisible && !document.hidden) startTimeGainTimer();
        return;
      }
      if (!offlinePopupVisible && !document.hidden) startTimeGainTimer();
    }

    // ── Background ────────────────────────────────────────────
    function applyBackground(url) {
      bgLayer.style.backgroundImage    = `${OVERLAY}, url("${url}")`;
      bgLayer.style.backgroundSize     = "cover";
      bgLayer.style.backgroundPosition = "center";
    }

    function resetBackground() {
      if (customBgUrl) { URL.revokeObjectURL(customBgUrl); customBgUrl = null; }
      applyBackground(DEFAULT_BG);
    }

    // ── Upgrade costs & effective rate ───────────────────────
    function getDiscountMult() {
      return Math.max(0.5, 1 - compressorLevel * 0.05); // max 50% discount
    }

    function getUpgradeCost() {
      return Math.floor(baseUpgradeCost * Math.pow(1.6, productionLevel) * getDiscountMult());
    }

    function getAcceleratorCost() {
      return Math.floor(50 * Math.pow(2.0, acceleratorLevel) * getDiscountMult());
    }

    function getCompressorCost() {
      return Math.floor(200 * Math.pow(1.8, compressorLevel) * getDiscountMult());
    }

    function getEffectiveRate() {
      const mult = 1 + acceleratorLevel * 0.3;
      return +(productionRate * mult).toFixed(2);
    }

    // ── Tab switching ─────────────────────────────────────────
    function switchTab(tab) {
      const isMain    = tab === "main";
      const isUpgrade = tab === "upgrade";
      const isAchievement = tab === "achievement";
      const isStats   = tab === "stats";
      tabMain.classList.toggle("active",    isMain);
      tabUpgrade.classList.toggle("active", isUpgrade);
      tabAchievement.classList.toggle("active", isAchievement);
      tabStats.classList.toggle("active",   isStats);
      panelMain.classList.toggle("active",  isMain);
      // ext-panels: show/hide via display
      panelQty.style.display     = isUpgrade ? "" : "none";
      panelUpgrade.style.display = isUpgrade ? "" : "none";
      panelAchievement.style.display = isAchievement ? "" : "none";
      panelStats.style.display   = isStats   ? "" : "none";
      // sync theme to ext-panel inner cards
      const upgradeCard = document.getElementById("upgradeCard");
      const statsCard   = document.getElementById("statsCard");
      const qtyCard     = document.getElementById("qtyCard");
      if (upgradeCard) upgradeCard.dataset.theme = cardTheme;
      if (statsCard)   statsCard.dataset.theme   = cardTheme;
      if (achievementCard) achievementCard.dataset.theme = cardTheme;
      if (qtyCard)     qtyCard.dataset.theme     = cardTheme;
    }
