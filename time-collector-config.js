const SAVE_VERSION = 2;
const REBIRTH_THRESHOLD = 100000; // 시간 파편 10만 개
const AUTOSAVE_KEY = "timecollector_autosave";
const AUTOSAVE_SETTINGS_KEY = "timecollector_autosave_settings";
const SAVE_PREFIX = "timecollector_slot_";
const NUM_SLOTS = 3;
const BASE_UPGRADE_COST = 10;
const DEFAULT_CARD_BLUR = 14;
const DEFAULT_CARD_OPACITY = 42;
const DEFAULT_TIME_GAIN_INTERVAL = 200;
const DEFAULT_BG = "https://images.unsplash.com/photo-1752784153859-4cdd1a474404?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=80&w=3000";
const OVERLAY = "linear-gradient(180deg, rgba(10,12,16,0.12), rgba(10,12,16,0.44))";

const accents = {
  blue:   { darkColor:"#5b9dff",  lightColor:"#3c78e0",  darkGlow:"rgba(91,157,255,0.24)",  lightGlow:"rgba(60,120,224,0.18)",  darkBorder:"rgba(91,157,255,0.34)",  darkActive:"rgba(91,157,255,0.12)",  lightBorder:"rgba(60,120,224,0.22)", lightActive:"rgba(60,120,224,0.08)"  },
  green:  { darkColor:"#55d38a",  lightColor:"#2f9a67",  darkGlow:"rgba(85,211,138,0.24)",  lightGlow:"rgba(47,154,103,0.18)",  darkBorder:"rgba(85,211,138,0.34)",  darkActive:"rgba(85,211,138,0.12)",  lightBorder:"rgba(47,154,103,0.22)", lightActive:"rgba(47,154,103,0.08)"  },
  yellow: { darkColor:"#ffd65a",  lightColor:"#b68a23",  darkGlow:"rgba(255,214,90,0.24)",  lightGlow:"rgba(182,138,35,0.18)",   darkBorder:"rgba(255,214,90,0.34)",  darkActive:"rgba(255,214,90,0.12)",  lightBorder:"rgba(182,138,35,0.22)", lightActive:"rgba(182,138,35,0.08)" },
  purple: { darkColor:"#c48cff",  lightColor:"#8a61d3",  darkGlow:"rgba(196,140,255,0.24)", lightGlow:"rgba(138,97,211,0.18)",  darkBorder:"rgba(196,140,255,0.34)", darkActive:"rgba(196,140,255,0.12)", lightBorder:"rgba(138,97,211,0.22)", lightActive:"rgba(138,97,211,0.08)" },
  red:    { darkColor:"#ff7c86",  lightColor:"#d05f6b",  darkGlow:"rgba(255,124,134,0.24)", lightGlow:"rgba(208,95,107,0.18)",   darkBorder:"rgba(255,124,134,0.34)", darkActive:"rgba(255,124,134,0.12)", lightBorder:"rgba(208,95,107,0.22)", lightActive:"rgba(208,95,107,0.08)" },
};
