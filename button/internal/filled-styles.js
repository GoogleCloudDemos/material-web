/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// Generated stylesheet for ./button/internal/filled-styles.css.
import { css } from 'lit'
export const styles = css`
  :host {
    --_container-color: var(
      --md-filled-button-container-color,
      var(--md-sys-color-primary, #6750a4)
    );
    --_container-elevation: var(--md-filled-button-container-elevation, 0);
    --_container-height: var(
      --md-filled-button-container-height,
      calc(40 * var(--md-sys-globalscale, 1px))
    );
    --_container-shadow-color: var(
      --md-filled-button-container-shadow-color,
      var(--md-sys-color-shadow, #000)
    );
    --_disabled-container-color: var(
      --md-filled-button-disabled-container-color,
      var(--md-sys-color-on-surface, #1d1b20)
    );
    --_disabled-container-elevation: var(--md-filled-button-disabled-container-elevation, 0);
    --_disabled-container-opacity: var(--md-filled-button-disabled-container-opacity, 0.12);
    --_disabled-label-text-color: var(
      --md-filled-button-disabled-label-text-color,
      var(--md-sys-color-on-surface, #1d1b20)
    );
    --_disabled-label-text-opacity: var(--md-filled-button-disabled-label-text-opacity, 0.38);
    --_focus-container-elevation: var(--md-filled-button-focus-container-elevation, 0);
    --_focus-label-text-color: var(
      --md-filled-button-focus-label-text-color,
      var(--md-sys-color-on-primary, #fff)
    );
    --_hover-container-elevation: var(--md-filled-button-hover-container-elevation, 1);
    --_hover-label-text-color: var(
      --md-filled-button-hover-label-text-color,
      var(--md-sys-color-on-primary, #fff)
    );
    --_hover-state-layer-color: var(
      --md-filled-button-hover-state-layer-color,
      var(--md-sys-color-on-primary, #fff)
    );
    --_hover-state-layer-opacity: var(--md-filled-button-hover-state-layer-opacity, 0.08);
    --_label-text-color: var(
      --md-filled-button-label-text-color,
      var(--md-sys-color-on-primary, #fff)
    );
    --_label-text-font: var(
      --md-filled-button-label-text-font,
      var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto))
    );
    --_label-text-line-height: var(
      --md-filled-button-label-text-line-height,
      var(
        --md-sys-typescale-label-large-line-height,
        calc(calc(1.25 * var(--md-sys-globalscale, 1px)) * 16)
      )
    );
    --_label-text-size: var(
      --md-filled-button-label-text-size,
      var(
        --md-sys-typescale-label-large-size,
        calc(calc(0.875 * var(--md-sys-globalscale, 1px)) * 16)
      )
    );
    --_label-text-weight: var(
      --md-filled-button-label-text-weight,
      var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500))
    );
    --_pressed-container-elevation: var(--md-filled-button-pressed-container-elevation, 0);
    --_pressed-label-text-color: var(
      --md-filled-button-pressed-label-text-color,
      var(--md-sys-color-on-primary, #fff)
    );
    --_pressed-state-layer-color: var(
      --md-filled-button-pressed-state-layer-color,
      var(--md-sys-color-on-primary, #fff)
    );
    --_pressed-state-layer-opacity: var(--md-filled-button-pressed-state-layer-opacity, 0.12);
    --_disabled-icon-color: var(
      --md-filled-button-disabled-icon-color,
      var(--md-sys-color-on-surface, #1d1b20)
    );
    --_disabled-icon-opacity: var(--md-filled-button-disabled-icon-opacity, 0.38);
    --_focus-icon-color: var(
      --md-filled-button-focus-icon-color,
      var(--md-sys-color-on-primary, #fff)
    );
    --_hover-icon-color: var(
      --md-filled-button-hover-icon-color,
      var(--md-sys-color-on-primary, #fff)
    );
    --_icon-color: var(--md-filled-button-icon-color, var(--md-sys-color-on-primary, #fff));
    --_icon-size: var(--md-filled-button-icon-size, calc(18 * var(--md-sys-globalscale, 1px)));
    --_pressed-icon-color: var(
      --md-filled-button-pressed-icon-color,
      var(--md-sys-color-on-primary, #fff)
    );
    --_container-shape-start-start: var(
      --md-filled-button-container-shape-start-start,
      var(
        --md-filled-button-container-shape,
        var(--md-sys-shape-corner-full, calc(9999 * var(--md-sys-globalscale, 1px)))
      )
    );
    --_container-shape-start-end: var(
      --md-filled-button-container-shape-start-end,
      var(
        --md-filled-button-container-shape,
        var(--md-sys-shape-corner-full, calc(9999 * var(--md-sys-globalscale, 1px)))
      )
    );
    --_container-shape-end-end: var(
      --md-filled-button-container-shape-end-end,
      var(
        --md-filled-button-container-shape,
        var(--md-sys-shape-corner-full, calc(9999 * var(--md-sys-globalscale, 1px)))
      )
    );
    --_container-shape-end-start: var(
      --md-filled-button-container-shape-end-start,
      var(
        --md-filled-button-container-shape,
        var(--md-sys-shape-corner-full, calc(9999 * var(--md-sys-globalscale, 1px)))
      )
    );
    --_leading-space: var(
      --md-filled-button-leading-space,
      calc(24 * var(--md-sys-globalscale, 1px))
    );
    --_trailing-space: var(
      --md-filled-button-trailing-space,
      calc(24 * var(--md-sys-globalscale, 1px))
    );
    --_with-leading-icon-leading-space: var(
      --md-filled-button-with-leading-icon-leading-space,
      calc(16 * var(--md-sys-globalscale, 1px))
    );
    --_with-leading-icon-trailing-space: var(
      --md-filled-button-with-leading-icon-trailing-space,
      calc(24 * var(--md-sys-globalscale, 1px))
    );
    --_with-trailing-icon-leading-space: var(
      --md-filled-button-with-trailing-icon-leading-space,
      calc(24 * var(--md-sys-globalscale, 1px))
    );
    --_with-trailing-icon-trailing-space: var(
      --md-filled-button-with-trailing-icon-trailing-space,
      calc(16 * var(--md-sys-globalscale, 1px))
    );
  }
`
//# sourceMappingURL=filled-styles.js.map
