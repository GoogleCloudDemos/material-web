/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// Generated stylesheet for ./radio/internal/radio-styles.css.
import { css } from 'lit'
export const styles = css`
  @layer {
    :host {
      display: inline-flex;
      height: var(--md-radio-icon-size, calc(20 * var(--md-sys-globalscale, 1px)));
      outline: none;
      position: relative;
      vertical-align: top;
      width: var(--md-radio-icon-size, calc(20 * var(--md-sys-globalscale, 1px)));
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      cursor: pointer;
      --md-ripple-hover-color: var(
        --md-radio-hover-state-layer-color,
        var(--md-sys-color-on-surface, #1d1b20)
      );
      --md-ripple-hover-opacity: var(--md-radio-hover-state-layer-opacity, 0.08);
      --md-ripple-pressed-color: var(
        --md-radio-pressed-state-layer-color,
        var(--md-sys-color-primary, #6750a4)
      );
      --md-ripple-pressed-opacity: var(--md-radio-pressed-state-layer-opacity, 0.12);
    }
    :host([disabled]) {
      cursor: default;
    }
    :host([touch-target='wrapper']) {
      margin: max(
        calc(0 * var(--md-sys-globalscale, 1px)),
        (
            calc(48 * var(--md-sys-globalscale, 1px)) -
              var(--md-radio-icon-size, calc(20 * var(--md-sys-globalscale, 1px)))
          )/2
      );
    }
    .container {
      display: flex;
      height: 100%;
      place-content: center;
      place-items: center;
      width: 100%;
    }
    md-focus-ring {
      height: calc(44 * var(--md-sys-globalscale, 1px));
      inset: unset;
      width: calc(44 * var(--md-sys-globalscale, 1px));
    }
    .checked {
      --md-ripple-hover-color: var(
        --md-radio-selected-hover-state-layer-color,
        var(--md-sys-color-primary, #6750a4)
      );
      --md-ripple-hover-opacity: var(--md-radio-selected-hover-state-layer-opacity, 0.08);
      --md-ripple-pressed-color: var(
        --md-radio-selected-pressed-state-layer-color,
        var(--md-sys-color-on-surface, #1d1b20)
      );
      --md-ripple-pressed-opacity: var(--md-radio-selected-pressed-state-layer-opacity, 0.12);
    }
    .touch-target {
      height: calc(48 * var(--md-sys-globalscale, 1px));
      position: absolute;
      width: calc(48 * var(--md-sys-globalscale, 1px));
    }
    :host([touch-target='none']) .touch-target {
      display: none;
    }
    md-ripple {
      border-radius: 50%;
      height: var(--md-radio-state-layer-size, calc(40 * var(--md-sys-globalscale, 1px)));
      inset: unset;
      width: var(--md-radio-state-layer-size, calc(40 * var(--md-sys-globalscale, 1px)));
    }
    .icon {
      fill: var(--md-radio-icon-color, var(--md-sys-color-on-surface-variant, #49454f));
      inset: 0;
      position: absolute;
    }
    .outer.circle {
      transition: fill 50ms linear;
    }
    .inner.circle {
      opacity: 0;
      transform-origin: center;
      transition: opacity 50ms linear;
    }
    .checked .icon {
      fill: var(--md-radio-selected-icon-color, var(--md-sys-color-primary, #6750a4));
    }
    .checked .inner.circle {
      animation: inner-circle-grow 300ms cubic-bezier(0.05, 0.7, 0.1, 1);
      opacity: 1;
    }
    @keyframes inner-circle-grow {
      from {
        transform: scale(0);
      }
      to {
        transform: scale(1);
      }
    }
    :host([disabled]) .circle {
      animation-duration: 0s;
      transition-duration: 0s;
    }
    :host(:hover) .icon {
      fill: var(--md-radio-hover-icon-color, var(--md-sys-color-on-surface, #1d1b20));
    }
    :host(:focus-within) .icon {
      fill: var(--md-radio-focus-icon-color, var(--md-sys-color-on-surface, #1d1b20));
    }
    :host(:active) .icon {
      fill: var(--md-radio-pressed-icon-color, var(--md-sys-color-on-surface, #1d1b20));
    }
    :host([disabled]) .icon {
      fill: var(
        --md-radio-disabled-unselected-icon-color,
        var(--md-sys-color-on-surface, #1d1b20)
      );
      opacity: var(--md-radio-disabled-unselected-icon-opacity, 0.38);
    }
    :host(:hover) .checked .icon {
      fill: var(--md-radio-selected-hover-icon-color, var(--md-sys-color-primary, #6750a4));
    }
    :host(:focus-within) .checked .icon {
      fill: var(--md-radio-selected-focus-icon-color, var(--md-sys-color-primary, #6750a4));
    }
    :host(:active) .checked .icon {
      fill: var(--md-radio-selected-pressed-icon-color, var(--md-sys-color-primary, #6750a4));
    }
    :host([disabled]) .checked .icon {
      fill: var(--md-radio-disabled-selected-icon-color, var(--md-sys-color-on-surface, #1d1b20));
      opacity: var(--md-radio-disabled-selected-icon-opacity, 0.38);
    }
  }
  @layer hcm {
    @media (forced-colors: active) {
      .icon {
        fill: CanvasText;
      }
      :host([disabled]) .icon {
        fill: GrayText;
        opacity: 1;
      }
    }
  }
`
//# sourceMappingURL=radio-styles.js.map
