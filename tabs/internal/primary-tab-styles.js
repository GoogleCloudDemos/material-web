/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// Generated stylesheet for ./tabs/internal/primary-tab-styles.css.
import { css } from 'lit'
export const styles = css`
  :host {
    --_active-indicator-color: var(
      --md-primary-tab-active-indicator-color,
      var(--md-sys-color-primary, #6750a4)
    );
    --_active-indicator-height: var(
      --md-primary-tab-active-indicator-height,
      calc(3 * var(--md-sys-globalscale, 1px))
    );
    --_active-indicator-shape: var(
      --md-primary-tab-active-indicator-shape,
      calc(3 * var(--md-sys-globalscale, 1px)) calc(3 * var(--md-sys-globalscale, 1px))
        calc(0 * var(--md-sys-globalscale, 1px)) calc(0 * var(--md-sys-globalscale, 1px))
    );
    --_active-hover-state-layer-color: var(
      --md-primary-tab-active-hover-state-layer-color,
      var(--md-sys-color-primary, #6750a4)
    );
    --_active-hover-state-layer-opacity: var(
      --md-primary-tab-active-hover-state-layer-opacity,
      0.08
    );
    --_active-pressed-state-layer-color: var(
      --md-primary-tab-active-pressed-state-layer-color,
      var(--md-sys-color-primary, #6750a4)
    );
    --_active-pressed-state-layer-opacity: var(
      --md-primary-tab-active-pressed-state-layer-opacity,
      0.12
    );
    --_container-color: var(
      --md-primary-tab-container-color,
      var(--md-sys-color-surface, #fef7ff)
    );
    --_container-elevation: var(--md-primary-tab-container-elevation, 0);
    --_container-height: var(
      --md-primary-tab-container-height,
      calc(48 * var(--md-sys-globalscale, 1px))
    );
    --_with-icon-and-label-text-container-height: var(
      --md-primary-tab-with-icon-and-label-text-container-height,
      calc(64 * var(--md-sys-globalscale, 1px))
    );
    --_hover-state-layer-color: var(
      --md-primary-tab-hover-state-layer-color,
      var(--md-sys-color-on-surface, #1d1b20)
    );
    --_hover-state-layer-opacity: var(--md-primary-tab-hover-state-layer-opacity, 0.08);
    --_pressed-state-layer-color: var(
      --md-primary-tab-pressed-state-layer-color,
      var(--md-sys-color-primary, #6750a4)
    );
    --_pressed-state-layer-opacity: var(--md-primary-tab-pressed-state-layer-opacity, 0.12);
    --_active-focus-icon-color: var(
      --md-primary-tab-active-focus-icon-color,
      var(--md-sys-color-primary, #6750a4)
    );
    --_active-hover-icon-color: var(
      --md-primary-tab-active-hover-icon-color,
      var(--md-sys-color-primary, #6750a4)
    );
    --_active-icon-color: var(
      --md-primary-tab-active-icon-color,
      var(--md-sys-color-primary, #6750a4)
    );
    --_active-pressed-icon-color: var(
      --md-primary-tab-active-pressed-icon-color,
      var(--md-sys-color-primary, #6750a4)
    );
    --_icon-size: var(--md-primary-tab-icon-size, calc(24 * var(--md-sys-globalscale, 1px)));
    --_focus-icon-color: var(
      --md-primary-tab-focus-icon-color,
      var(--md-sys-color-on-surface, #1d1b20)
    );
    --_hover-icon-color: var(
      --md-primary-tab-hover-icon-color,
      var(--md-sys-color-on-surface, #1d1b20)
    );
    --_icon-color: var(
      --md-primary-tab-icon-color,
      var(--md-sys-color-on-surface-variant, #49454f)
    );
    --_pressed-icon-color: var(
      --md-primary-tab-pressed-icon-color,
      var(--md-sys-color-on-surface, #1d1b20)
    );
    --_label-text-font: var(
      --md-primary-tab-label-text-font,
      var(--md-sys-typescale-title-small-font, var(--md-ref-typeface-plain, Roboto))
    );
    --_label-text-line-height: var(
      --md-primary-tab-label-text-line-height,
      var(
        --md-sys-typescale-title-small-line-height,
        calc(calc(1.25 * var(--md-sys-globalscale, 1px)) * 16)
      )
    );
    --_label-text-size: var(
      --md-primary-tab-label-text-size,
      var(
        --md-sys-typescale-title-small-size,
        calc(calc(0.875 * var(--md-sys-globalscale, 1px)) * 16)
      )
    );
    --_label-text-weight: var(
      --md-primary-tab-label-text-weight,
      var(--md-sys-typescale-title-small-weight, var(--md-ref-typeface-weight-medium, 500))
    );
    --_active-focus-label-text-color: var(
      --md-primary-tab-active-focus-label-text-color,
      var(--md-sys-color-primary, #6750a4)
    );
    --_active-hover-label-text-color: var(
      --md-primary-tab-active-hover-label-text-color,
      var(--md-sys-color-primary, #6750a4)
    );
    --_active-label-text-color: var(
      --md-primary-tab-active-label-text-color,
      var(--md-sys-color-primary, #6750a4)
    );
    --_active-pressed-label-text-color: var(
      --md-primary-tab-active-pressed-label-text-color,
      var(--md-sys-color-primary, #6750a4)
    );
    --_focus-label-text-color: var(
      --md-primary-tab-focus-label-text-color,
      var(--md-sys-color-on-surface, #1d1b20)
    );
    --_hover-label-text-color: var(
      --md-primary-tab-hover-label-text-color,
      var(--md-sys-color-on-surface, #1d1b20)
    );
    --_label-text-color: var(
      --md-primary-tab-label-text-color,
      var(--md-sys-color-on-surface-variant, #49454f)
    );
    --_pressed-label-text-color: var(
      --md-primary-tab-pressed-label-text-color,
      var(--md-sys-color-on-surface, #1d1b20)
    );
    --_container-shape-start-start: var(
      --md-primary-tab-container-shape-start-start,
      var(
        --md-primary-tab-container-shape,
        var(--md-sys-shape-corner-none, calc(0 * var(--md-sys-globalscale, 1px)))
      )
    );
    --_container-shape-start-end: var(
      --md-primary-tab-container-shape-start-end,
      var(
        --md-primary-tab-container-shape,
        var(--md-sys-shape-corner-none, calc(0 * var(--md-sys-globalscale, 1px)))
      )
    );
    --_container-shape-end-end: var(
      --md-primary-tab-container-shape-end-end,
      var(
        --md-primary-tab-container-shape,
        var(--md-sys-shape-corner-none, calc(0 * var(--md-sys-globalscale, 1px)))
      )
    );
    --_container-shape-end-start: var(
      --md-primary-tab-container-shape-end-start,
      var(
        --md-primary-tab-container-shape,
        var(--md-sys-shape-corner-none, calc(0 * var(--md-sys-globalscale, 1px)))
      )
    );
  }
  .content.stacked {
    flex-direction: column;
    gap: calc(2 * var(--md-sys-globalscale, 1px));
  }
  .content.stacked.has-icon.has-label {
    height: var(--_with-icon-and-label-text-container-height);
  }
`
//# sourceMappingURL=primary-tab-styles.js.map
