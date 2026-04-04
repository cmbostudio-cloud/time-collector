# Time Collector AI Analysis

This document summarizes the single-file browser game in [`index.html`](./index.html) so another AI can analyze and modify it safely.

## 1. Project Overview

- Form: single HTML file browser game
- Build tools: none
- External dependencies: none
- Run mode: open `index.html` directly in a browser
- Genre: simple incremental game with passive resource gain

## 2. File Structure

- [`index.html`](./index.html)
  - full HTML markup
  - CSS styles
  - JavaScript game logic

The project has only one file, so the UI and logic live together.

## 3. Screen Layout

### Top Area

- Game title
- Settings button
- Settings panel

### Settings Panel

- Language: Korean / English
- Card theme: Dark / Light
- Accent colors: Blue / Green / Yellow / Purple / Red
- Blur slider
- Opacity slider

### Main Card

- Current time value
- Production rate display
- Production upgrade panel

## 4. Core Game Rules

- Base production rate starts at `1`
- Every second: `time += productionRate`
- When the upgrade is purchased:
  - `productionLevel += 1`
  - `productionRate += 1`
  - `time -= upgradeCost`
- Upgrade cost formula:

```text
cost = floor(10 * 1.6 ^ productionLevel)
```

## 5. State Variables

JavaScript state is managed by these values:

- `time`
  - current stored time
- `language`
  - active language code
- `cardTheme`
  - `dark` or `light`
- `accent`
  - accent color key
- `cardBlur`
  - blur amount in px
- `cardOpacity`
  - card opacity percentage
- `productionRate`
  - time gained per second
- `productionLevel`
  - upgrade level
- `baseUpgradeCost`
  - initial upgrade cost

## 6. DOM References

The script uses `querySelector` and `getElementById` for:

- `.frame`
- `#gameTitle`
- `#timeValue`
- `#timeLabel`
- `#rateLabel`
- `#upgradeTitle`
- `#upgradeSubtitle`
- `#upgradeMeta`
- `#upgradeButton`
- `#timeCard`
- Settings elements:
  - `#settingsRoot`
  - `#settingsToggle`
  - `#settingsClose`
  - `#settingsPanel`
- Language, theme, accent buttons
- Slider labels and value displays

## 7. Localized Copy

The `copy` object stores UI strings for each language.

- `ko`
- `en`

It contains titles, buttons, labels, and upgrade text.

Important:

- If you add a new string, update both `ko` and `en`.
- The upgrade description should be interpreted as production gain, not stored amount.

## 8. Main Functions

### `render()`

- Applies the current state to the UI
- Updates time, production rate, upgrade cost, and button state

### `applyLanguage(nextLanguage)`

- Changes the active language
- Updates `document.documentElement.lang`
- Refreshes all visible UI text
- Updates active language button state

### `setSettingsOpen(open)`

- Opens or closes the settings panel
- Keeps `aria-expanded` in sync

### `applyTheme(nextTheme)`

- Changes the card theme
- Updates `timeCard.dataset.theme`
- Updates `frame.dataset.uiTheme`
- Refreshes theme button state
- Reapplies accent colors to match the theme

### `applyAccent(nextAccent)`

- Changes the accent color
- Updates CSS variables:
  - `--ui-accent`
  - `--ui-accent-glow`
  - `--ui-accent-border`
  - `--ui-active-bg`
  - `--ui-slider-thumb`
- Updates accent button active state

### `applyCardBlur(nextBlur)`

- Updates CSS variable `--card-blur`
- Updates the slider value label

### `applyCardOpacity(nextOpacity)`

- Updates CSS variable `--card-opacity`
- Updates the slider value label

### `getUpgradeCost()`

- Calculates the current upgrade cost from the level

### `buyUpgrade()`

- Purchases the upgrade if the player has enough time
- Deducts the cost
- Increases level and production
- Refreshes the UI

## 9. Event Flow

- Settings button click
  - open or close the settings panel
- Language button click
  - apply Korean or English
- Theme button click
  - switch dark / light
- Accent button click
  - change the color theme
- Blur slider input
  - change `cardBlur`
- Opacity slider input
  - change `cardOpacity`
- Upgrade button click
  - increase production
- Document click
  - close settings if the click was outside the settings root
- `Escape` key
  - close the settings panel

## 10. Game Loop

After initialization, `setInterval` runs every 1000 ms:

```text
time += productionRate
render()
```

This means the game is a passive incremental loop where time rises by the current production rate once per second.

## 11. Editing Notes

- If you skip `render()`, state changes will not appear in the UI.
- When changing text, check both `ko` and `en`.
- `applyTheme()` calls `applyAccent()` again, so those two functions are linked.
- Upgrade balance depends on both the cost formula and the production increase.
- There is no save system, so refreshing the page resets the state.

## 12. Recommended Reading Order

1. State variables
2. `copy` object
3. `render()`
4. `apply*()` helpers
5. `buyUpgrade()` and `setInterval()`

Following that order makes it easier to separate data, UI updates, and actual game rules.

## 13. Structural Benefits

- Single-file layout makes dependency tracing easy
- State and rendering are in one place
- Language, theme, and accent controls are cleanly separated
- Upgrade logic is simple enough for fast analysis

## 14. One-Line Summary

`Time Collector` is a passive incremental game where the key pieces are `time`, `productionRate`, `productionLevel`, `getUpgradeCost()`, and `render()`.
