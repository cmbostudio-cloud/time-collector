# Time Collector AI Analysis

This document maps the current file split and the main runtime dependencies so future edits stay predictable.

## File Map

- [`index.html`](./index.html)
  - HTML structure only
  - loads the style sheet and runtime scripts
  - keeps the DOM layout and element IDs stable
  - contains the rebirth confirmation modal (`#rebirthModal`)
  - contains the currency panel (`#currencyPanel`) and rebirth button (`#rebirthBtn`) inside `#panelMain`
- [`styles.css`](./styles.css)
  - all visual styling
  - layout, responsive rules, card visuals, buttons, tabs, and modal styling
  - defines `:root` CSS custom properties: `--card-blur`, `--card-opacity`, `--ui-transition`, `--frame-width`, `--frame-pad-x`, `--content-width`
  - defines per-theme CSS custom properties on `[data-ui-theme]`: `--ui-panel-border`, `--ui-control-bg`, `--ui-control-border`, `--ui-text`, `--ui-muted`
  - accent CSS properties (`--ui-accent`, `--ui-accent-glow`, `--ui-accent-border`, `--ui-active-bg`, `--ui-slider-thumb`) are set dynamically by `applyAccent()` in `render.js`, not in this file
  - contains styles for: `.currency-panel`, `.currency-row`, `.rebirth-btn` (with purple pulse animation), `.rebirth-modal`, `.achievement-item` icons, `.achievement-popup-modal`
- [`time-collector-config.js`](./time-collector-config.js)
  - save keys
  - default values
  - upgrade costs
  - accent palette
  - background defaults
  - `REBIRTH_THRESHOLD = 100000` — the Time Fragment count required to rebirth
  - `SAVE_VERSION = 2` — bumped when `timeShard` was added to the save schema
- [`time-collector-locales.js`](./time-collector-locales.js)
  - localized copy for `ko` and `en`
  - visible labels, buttons, status text, stats labels, and prompts
  - **does not contain** offline popup strings — those live in `offlineCopy` inside `render.js`
  - **does not contain** achievement strings — those live in `achievementCopy` inside `render.js`
  - contains rebirth-related strings: `rebirthBtn`, `rebirthAvailable`, `rebirthModalTitle`, `rebirthModalDesc`, `rebirthModalRequire`, `rebirthModalCancel`, `rebirthModalConfirm`, `fragmentsLabel`, `shardsLabel`, `timeShardUnit`
- [`game-state.js`](./game-state.js)
  - mutable game state
  - currency, levels, theme settings, accent selection, background state
  - timing state such as `timeGainIntervalMs`, `totalPlayMs`, and autosave timers
  - `timeShard` — persistent rebirth currency (Time Shards), survives normal rebirth but is reset to 0 on full game reset
- [`render.js`](./render.js)
  - DOM references
  - render pipeline
  - language/theme/accent application
  - card blur/opacity/background helpers
  - upgrade cost display, tab switching, and input helpers
  - **also contains**:
    - `purchaseCount` state — current bulk purchase quantity: `1 | 5 | 10 | "max"`
    - `offlineCopy` — inline locale object for the offline/idle popup (`label`, `on`, `off`, `title`, `desc`, `elapsed`, `gain`, `confirm`)
    - `achievementCopy` — inline locale object for achievements (`ko` and `en`), with `title`, `note`, `done`, `goal`, `popupTitle`, `popupConfirm`, and `items[]` arrays
    - `achievedIds` (`Set`) — runtime-only set of already-completed achievement IDs; used to prevent re-triggering popups on render
    - `achievementPopupQueue` (`Array`) — queue of pending achievement popup payloads
    - `achievementPopupVisible` (`boolean`) — whether an achievement popup is currently shown
    - `seedAchievedIds()` — pre-populates `achievedIds` from current state; **must be called after state is restored and before any `render()` call** to prevent spurious popups on load
    - `renderAchievements()` — renders the achievement list, checks for newly completed items, and queues popups for new completions
    - `showNextAchievementPopup()` / `closeAchievementPopup()` — dynamically created DOM modal for achievement unlock notifications
    - all buy functions: `buyUpgrade`, `buyAccelerator`, `buyCompressor`
    - bulk cost calculator: `calcBulkCost`
    - cost formula helpers: `getUpgradeCost`, `getAcceleratorCost`, `getCompressorCost`, `getDiscountMult`, `getEffectiveRate`
    - timing helpers: `tickGame`, `syncPlayTime`, `startTimeGainTimer`, `pauseTimeGainTimer`, `applyTimeGainInterval`, `formatPlayTime`, `formatGainAmount`
    - idle/offline helpers: `enterIdleMode`, `exitIdleMode`, `applyOfflineProgress`, `showOfflineProgressPopup`, `closeOfflineProgressPopup`, `applyOfflinePopupEnabled`
    - custom accent logic: `hexToRgba`, `applyCustomAccent`, `toggleCustomAccentRow`
    - `applyPurchaseCount`
    - rebirth logic: `openRebirthModal`, `closeRebirthModal`, `executeRebirth` — and the event listeners for `rebirthBtn`, `rebirthModalCancel`, `rebirthModalConfirm`, `rebirthModal` (backdrop click)
- [`storage.js`](./storage.js)
  - save/load logic
  - autosave logic
  - export/import bundle handling
  - save-slot rendering and reset-confirmation support
- [`game-loop.js`](./game-loop.js)
  - event listeners
  - bootstrap sequence
  - keyboard and visibility hooks
  - ESC key closes modals in priority order: offline → danger → rebirth → settings

## Runtime Model

The game uses a classic `<script>` loading order rather than modules.

Load order:

1. `time-collector-config.js`
2. `time-collector-locales.js`
3. `game-state.js`
4. `render.js`
5. `storage.js`
6. `game-loop.js`

Key dependency rule:

- later files assume earlier files have already defined the globals they use
- avoid renaming shared IDs or globals unless the dependent files are updated together

## State Model

Important state lives in `game-state.js`:

- `time` — current Time Fragment balance (the primary currency)
- `timeShard` — accumulated Time Shards (rebirth currency; persisted; survives rebirth, reset to 0 only on full game reset)
- `productionRate`
- `productionLevel`
- `acceleratorLevel`
- `compressorLevel`
- `totalPurchases`
- `language`
- `cardTheme`
- `accent`
- `cardBlur`
- `cardOpacity`
- `timeGainIntervalMs`
- `totalPlayMs`
- `lastPlayTickAt`
- `idleStartedAt`
- `customAccentColor`
- `customBgUrl`
- `offlinePopupEnabled`
- `offlinePopupVisible`
- `autosaveEnabled`
- `autosaveInterval`
- `autosaveTimer`
- `lastAutosaveAt`

Additional runtime state in `render.js` (not persisted):

- `purchaseCount` — current bulk purchase quantity: `1 | 5 | 10 | "max"`
- `achievedIds` — `Set<string>` of achievement IDs that have already fired their popup; rebuilt by `seedAchievedIds()` on every load/reset
- `achievementPopupQueue` — `Array` of `{ title, icon, desc }` objects waiting to be shown
- `achievementPopupVisible` — `boolean`; true while an achievement popup is displayed

## Timing Model

- `timeGainIntervalMs` controls how often the UI ticks, not the long-term production rate
- offline progress is computed from wall-clock elapsed time and can show a return popup
- the UI transition timing is separate and stays CSS-driven
- `totalPlayMs` is based on wall-clock elapsed time, so idle time counts too
- `tickGame()` adds currency, syncs play time, and rerenders
- `startTimeGainTimer()` skips starting if `document.hidden` or `offlinePopupVisible` is true
- `pauseTimeGainTimer()` clears the interval without resetting state
- `enterIdleMode()` is a no-op if `idleStartedAt` is already set or `offlinePopupVisible` is true

## Upgrade Model

### Cost formulas (after compressor discount)

| Upgrade | Base cost | Growth factor |
|---|---|---|
| Generator (production) | `BASE_UPGRADE_COST` (10) | `×1.6` per level |
| Dimensional Accelerator | 50 | `×2.0` per level |
| Time Shard Compressor | 200 | `×1.8` per level |

- discount multiplier: `max(0.5, 1 - compressorLevel × 0.05)` — capped at 50% off
- effective production rate: `productionRate × (1 + acceleratorLevel × 0.3)`

### Unlock thresholds

- Dimensional Accelerator: unlocks at `productionLevel >= 5`
- Time Shard Compressor: unlocks at `productionLevel >= 8`

### Bulk purchase (`calcBulkCost`)

- `purchaseCount` can be `1`, `5`, `10`, or `"max"`
- for fixed counts, if the player cannot afford the full batch the button is disabled but the exact total cost is still displayed
- for `"max"`, iterates greedily until balance is exhausted

## Rebirth Model

- Rebirth is triggered when `Math.floor(time) >= REBIRTH_THRESHOLD` (100,000 Time Fragments)
- The rebirth button (`#rebirthBtn`) is enabled/disabled each render cycle; it pulses with a CSS animation when available
- Clicking the button opens a confirmation modal (`#rebirthModal`); the actual reset only fires on confirm
- `executeRebirth()` in `render.js`:
  1. Increments `timeShard` by 1
  2. Resets `time`, `productionRate`, `productionLevel`, `acceleratorLevel`, `compressorLevel`, `totalPurchases`, `totalPlayMs`
  3. Calls `clearProgressStorage()` (clears autosave and all slots)
  4. Calls `seedAchievedIds()` so the fresh-run achievements don't fire spurious popups
  5. Calls `render()`, `renderSaveSlots()`, `updateAutosaveHint()`, `doAutosave()` (if enabled)
- Full game reset (danger zone) also resets `timeShard = 0`
- `timeShard` is **persisted** in `buildSaveData()` and restored in `applyLoadData()`

## Achievement Model

- Achievement definitions live in `achievementCopy` (an inline object inside `render.js`), not in `time-collector-locales.js`
- Each item has: `id`, `icon` (Unicode symbol), `title`, `desc`, `kind`, `target`
- `kind` values: `"purchases"`, `"production"`, `"accelerator"`, `"compressor"`, `"playtime"`
- Icon convention by category: `◈` purchases, `⬡` production level, `▷` accelerator, `◇` compressor, `◷` playtime
- Current achievements (12 total):

| id | kind | target |
|---|---|---|
| `purchase_1` | purchases | 1 |
| `purchase_25` | purchases | 25 |
| `purchase_100` | purchases | 100 |
| `production_10` | production | 10 |
| `production_25` | production | 25 |
| `accelerator_5` | accelerator | 5 |
| `accelerator_10` | accelerator | 10 |
| `compressor_3` | compressor | 3 |
| `play_10m` | playtime | 600,000 ms |
| `play_1h` | playtime | 3,600,000 ms |
| `play_24h` | playtime | 86,400,000 ms |
| `play_100h` | playtime | 360,000,000 ms |

- `seedAchievedIds()` must be called after state is loaded (and before the first `render()`) to pre-mark already-completed achievements so their popups don't fire again on load
- `renderAchievements()` checks for newly completed achievements each render cycle and queues a popup via `achievementPopupQueue`; popups show sequentially with a 300 ms gap between them
- The achievement popup is a dynamically created DOM element (`#achievementPopupModal`), appended to `<body>` and removed on close

## Locale Model

Three locale tables exist:

1. **`copy`** in `time-collector-locales.js` — general UI strings for `ko` and `en`, including rebirth-related strings (`rebirthBtn`, `rebirthAvailable`, `rebirthModalTitle`, `rebirthModalDesc`, `rebirthModalRequire`, `rebirthModalCancel`, `rebirthModalConfirm`, `fragmentsLabel`, `shardsLabel`, `timeShardUnit`)
2. **`offlineCopy`** in `render.js` — strings specific to the offline/idle popup and its toggle (`label`, `on`, `off`, `title`, `desc`, `elapsed`, `gain`, `confirm`)
3. **`achievementCopy`** in `render.js` — strings and item definitions for the achievement system (`title`, `note`, `done`, `goal`, `popupTitle`, `popupConfirm`, `items[]`)

When adding new UI strings, decide which table they belong to before editing. General UI → `copy`. Offline popup → `offlineCopy`. Achievement content → `achievementCopy`.

## Accent Model

- Five preset accents are defined in `accents` in `time-collector-config.js` (`blue`, `green`, `yellow`, `purple`, `red`), each with separate dark/light color, glow, border, and active-background values.
- A sixth **custom** accent (`accent === "custom"`) accepts a freeform 6-digit hex code stored in `customAccentColor` (without `#`).
- `applyAccent()` in `render.js` writes five CSS custom properties directly onto `.frame`: `--ui-accent`, `--ui-accent-glow`, `--ui-accent-border`, `--ui-active-bg`, `--ui-slider-thumb`.
- `hexToRgba(hex6, alpha)` is a local helper in `render.js` used only by the custom accent path.
- Custom accent color is persisted in `buildSaveData()` and restored via `applyLoadData()`.

## Save Model

Primary save data is built by `buildSaveData()`.

It currently includes:

- `version` (currently `2`)
- `time`, `productionRate`, `productionLevel`, `acceleratorLevel`, `compressorLevel`
- `totalPurchases`
- `timeShard` — rebirth currency (added in version 2)
- `language`, `cardTheme`, `accent`, `cardBlur`, `cardOpacity`
- `timeGainIntervalMs`
- `uiTransitionMs` (alias for `timeGainIntervalMs`, kept for backward compatibility)
- `totalPlayMs`
- `customAccentColor`
- `offlinePopupEnabled`
- `savedAt` timestamp

Export/import bundles also include:

- current save
- autosave payload
- autosave settings
- slot data

### Import normalization (`normalizeImportedState`)

`importSavePayload` handles two shapes: a full export bundle (with `current`, `autosave`, `slots`, `autosaveSettings` keys) and a bare save object. `normalizeImportedState` resolves the correct state object from either shape.

Old saves (version 1) without `timeShard` load safely — `applyLoadData` defaults to `timeShard = 0`.

## Edit Rules

- Change `time-collector-config.js` for constants and defaults (including `REBIRTH_THRESHOLD` and `SAVE_VERSION`).
- Change `time-collector-locales.js` for general UI text only.
- Add offline popup strings to `offlineCopy` inside `render.js`, not `time-collector-locales.js`.
- Add or edit achievement definitions and strings in `achievementCopy` inside `render.js`, not `time-collector-locales.js`.
- Change `game-state.js` for state shape and timer behavior.
- Change `render.js` for visible UI, rendering decisions, buy logic, cost formulas, idle/offline helpers, rebirth logic, and achievement logic.
- Change `storage.js` for persistence logic.
- Change `game-loop.js` for wiring and startup sequencing.

## High-Risk Areas

- save schema changes must preserve backward compatibility where possible
- `uiTransitionMs` is an alias for `timeGainIntervalMs` in save data — keep both when writing `buildSaveData()`
- any change to `timeGainIntervalMs` should be reflected in save/load and UI
- any renamed DOM `id` must be updated in `render.js` and any listener code
- background URLs created from uploaded files must still be revoked to avoid leaks
- `offlineCopy` in `render.js` must be kept in sync with `copy` in `time-collector-locales.js` when adding languages
- `achievementCopy` in `render.js` must also be kept in sync when adding languages
- `purchaseCount` is runtime-only and is intentionally not persisted
- `startTimeGainTimer()` guards against double-start; always call it instead of setting `timeGainTimer` directly
- unlock thresholds (Lv.5 for accelerator, Lv.8 for compressor) appear in both `render.js` buy guards and locale lock-badge strings — update both together
- `REBIRTH_THRESHOLD` is defined once in `time-collector-config.js` and read in `render.js`; if the threshold changes, update the locale strings `rebirthModalRequire` in `time-collector-locales.js` to match
- `seedAchievedIds()` **must be called after state variables are set and before any `render()` invocation** — in `applyLoadData()` it is called immediately after state assignment and before the `apply*` chain; in `game-loop.js` bootstrap it is called after `tryLoadAutosave()` as a safety net; violating this order causes already-earned achievements to display spurious unlock popups
- `timeShard` survives rebirth but is reset to 0 on full game reset (danger zone) — both paths must stay consistent
- when bumping `SAVE_VERSION`, update this document and verify that `applyLoadData` gracefully defaults any new field