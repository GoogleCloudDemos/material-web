/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// Generated stylesheet for ./elevation/internal/elevation-styles.css.
import { css } from 'lit'
export const styles = css`
  :host,
  .shadow,
  .shadow::before,
  .shadow::after {
    border-radius: inherit;
    inset: 0;
    position: absolute;
    transition-duration: inherit;
    transition-property: inherit;
    transition-timing-function: inherit;
  }
  :host {
    display: flex;
    pointer-events: none;
    transition-property: box-shadow, opacity;
  }
  .shadow::before,
  .shadow::after {
    content: '';
    transition-property: box-shadow, opacity;
    --_level: var(--md-elevation-level, 0);
    --_shadow-color: var(--md-elevation-shadow-color, var(--md-sys-color-shadow, #000));
  }
  .shadow::before {
    box-shadow: calc(0 * var(--md-sys-globalscale, 1px))
      calc(
        calc(1 * var(--md-sys-globalscale, 1px)) *
          (
            clamp(0, var(--_level), 1) + clamp(0, var(--_level) - 3, 1) + 2 *
              clamp(0, var(--_level) - 4, 1)
          )
      )
      calc(
        calc(1 * var(--md-sys-globalscale, 1px)) *
          (
            2 * clamp(0, var(--_level), 1) + clamp(0, var(--_level) - 2, 1) +
              clamp(0, var(--_level) - 4, 1)
          )
      )
      calc(0 * var(--md-sys-globalscale, 1px)) var(--_shadow-color);
    opacity: 0.3;
  }
  .shadow::after {
    box-shadow: calc(0 * var(--md-sys-globalscale, 1px))
      calc(
        calc(1 * var(--md-sys-globalscale, 1px)) *
          (
            clamp(0, var(--_level), 1) + clamp(0, var(--_level) - 1, 1) + 2 *
              clamp(0, var(--_level) - 2, 3)
          )
      )
      calc(
        calc(1 * var(--md-sys-globalscale, 1px)) *
          (3 * clamp(0, var(--_level), 2) + 2 * clamp(0, var(--_level) - 2, 3))
      )
      calc(
        calc(1 * var(--md-sys-globalscale, 1px)) *
          (clamp(0, var(--_level), 4) + 2 * clamp(0, var(--_level) - 4, 1))
      )
      var(--_shadow-color);
    opacity: 0.15;
  }
`
//# sourceMappingURL=elevation-styles.js.map
