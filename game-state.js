// ── Game state ────────────────────────────────────────────
    let time            = 0;
    let timeShard       = 0;   // 시간 조각 (환생 재화)
    let language        = "ko";
    let cardTheme       = "dark";
    let accent          = "yellow";
    let cardBlur        = DEFAULT_CARD_BLUR;
    let cardOpacity     = DEFAULT_CARD_OPACITY;
    let timeGainIntervalMs = DEFAULT_TIME_GAIN_INTERVAL;
    let totalPlayMs     = 0;
    let totalPurchases  = 0;
    let lastPlayTickAt  = Date.now();
    let idleStartedAt   = null;
    let timeGainTimer   = null;
    let productionRate  = 1;
    let productionLevel = 0;
    let acceleratorLevel = 0;
    let compressorLevel  = 0;
    const baseUpgradeCost = BASE_UPGRADE_COST;
    let customBgUrl     = null;
    let customAccentColor = null;  // 저장된 커스텀 hex (# 제외)
    let offlinePopupEnabled = true;
    let offlinePopupVisible = false;

    // ── Autosave state ────────────────────────────────────────
    let autosaveEnabled  = true;
    let autosaveInterval = 30;      // seconds
    let autosaveTimer    = null;
    let lastAutosaveAt   = null;    // Date.now() timestamp
    let autosaveHintTimer = null;
