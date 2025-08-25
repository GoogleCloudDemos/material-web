/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// Generated stylesheet for ./menu/internal/menu-styles.css.
import { css } from 'lit'
export const styles = css`
  :host {
    --md-elevation-level: var(--md-menu-container-elevation, 2);
    --md-elevation-shadow-color: var(
      --md-menu-container-shadow-color,
      var(--md-sys-color-shadow, #000)
    );
    min-width: calc(112 * var(--md-sys-globalscale, 1px));
    color: unset;
    display: contents;
  }
  md-focus-ring {
    --md-focus-ring-shape: var(
      --md-menu-container-shape,
      var(--md-sys-shape-corner-extra-small, calc(4 * var(--md-sys-globalscale, 1px)))
    );
  }
  .menu {
    border-radius: var(
      --md-menu-container-shape,
      var(--md-sys-shape-corner-extra-small, calc(4 * var(--md-sys-globalscale, 1px)))
    );
    display: none;
    inset: auto;
    border: none;
    padding: calc(0 * var(--md-sys-globalscale, 1px));
    overflow: visible;
    background-color: rgba(0, 0, 0, 0);
    color: inherit;
    opacity: 0;
    z-index: 20;
    position: absolute;
    user-select: none;
    max-height: inherit;
    height: inherit;
    min-width: inherit;
    max-width: inherit;
    scrollbar-width: inherit;
  }
  .menu::backdrop {
    display: none;
  }
  .fixed {
    position: fixed;
  }
  .items {
    display: block;
    list-style-type: none;
    margin: 0;
    outline: none;
    box-sizing: border-box;
    background-color: var(
      --md-menu-container-color,
      var(--md-sys-color-surface-container, #f3edf7)
    );
    height: inherit;
    max-height: inherit;
    overflow: auto;
    min-width: inherit;
    max-width: inherit;
    border-radius: inherit;
    scrollbar-width: inherit;
  }
  .item-padding {
    padding-block: var(--md-menu-top-space, calc(8 * var(--md-sys-globalscale, 1px)))
      var(--md-menu-bottom-space, calc(8 * var(--md-sys-globalscale, 1px)));
  }
  .has-overflow:not([popover]) .items {
    overflow: visible;
  }
  .has-overflow.animating .items,
  .animating .items {
    overflow: hidden;
  }
  .has-overflow.animating .items {
    pointer-events: none;
  }
  .animating ::slotted(.md-menu-hidden) {
    opacity: 0;
  }
  slot {
    display: block;
    height: inherit;
    max-height: inherit;
  }
  ::slotted(:is(md-divider, [role='separator'])) {
    margin: calc(8 * var(--md-sys-globalscale, 1px)) 0;
  }
  @media (forced-colors: active) {
    .menu {
      border-style: solid;
      border-color: CanvasText;
      border-width: calc(1 * var(--md-sys-globalscale, 1px));
    }
  }
`
//# sourceMappingURL=menu-styles.js.map
