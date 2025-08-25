/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// Generated stylesheet for ./chips/internal/input-styles.css.
import { css } from 'lit'
export const styles = css`
  :host {
    --_container-height: var(
      --md-input-chip-container-height,
      calc(32 * var(--md-sys-globalscale, 1px))
    );
    --_disabled-label-text-color: var(
      --md-input-chip-disabled-label-text-color,
      var(--md-sys-color-on-surface, #1d1b20)
    );
    --_disabled-label-text-opacity: var(--md-input-chip-disabled-label-text-opacity, 0.38);
    --_disabled-selected-container-color: var(
      --md-input-chip-disabled-selected-container-color,
      var(--md-sys-color-on-surface, #1d1b20)
    );
    --_disabled-selected-container-opacity: var(
      --md-input-chip-disabled-selected-container-opacity,
      0.12
    );
    --_label-text-font: var(
      --md-input-chip-label-text-font,
      var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto))
    );
    --_label-text-line-height: var(
      --md-input-chip-label-text-line-height,
      var(
        --md-sys-typescale-label-large-line-height,
        calc(calc(1.25 * var(--md-sys-globalscale, 1px)) * 16)
      )
    );
    --_label-text-size: var(
      --md-input-chip-label-text-size,
      var(
        --md-sys-typescale-label-large-size,
        calc(calc(0.875 * var(--md-sys-globalscale, 1px)) * 16)
      )
    );
    --_label-text-weight: var(
      --md-input-chip-label-text-weight,
      var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500))
    );
    --_selected-container-color: var(
      --md-input-chip-selected-container-color,
      var(--md-sys-color-secondary-container, #e8def8)
    );
    --_selected-focus-label-text-color: var(
      --md-input-chip-selected-focus-label-text-color,
      var(--md-sys-color-on-secondary-container, #1d192b)
    );
    --_selected-hover-label-text-color: var(
      --md-input-chip-selected-hover-label-text-color,
      var(--md-sys-color-on-secondary-container, #1d192b)
    );
    --_selected-hover-state-layer-color: var(
      --md-input-chip-selected-hover-state-layer-color,
      var(--md-sys-color-on-secondary-container, #1d192b)
    );
    --_selected-hover-state-layer-opacity: var(
      --md-input-chip-selected-hover-state-layer-opacity,
      0.08
    );
    --_selected-label-text-color: var(
      --md-input-chip-selected-label-text-color,
      var(--md-sys-color-on-secondary-container, #1d192b)
    );
    --_selected-outline-width: var(
      --md-input-chip-selected-outline-width,
      calc(0 * var(--md-sys-globalscale, 1px))
    );
    --_selected-pressed-label-text-color: var(
      --md-input-chip-selected-pressed-label-text-color,
      var(--md-sys-color-on-secondary-container, #1d192b)
    );
    --_selected-pressed-state-layer-color: var(
      --md-input-chip-selected-pressed-state-layer-color,
      var(--md-sys-color-on-secondary-container, #1d192b)
    );
    --_selected-pressed-state-layer-opacity: var(
      --md-input-chip-selected-pressed-state-layer-opacity,
      0.12
    );
    --_disabled-outline-color: var(
      --md-input-chip-disabled-outline-color,
      var(--md-sys-color-on-surface, #1d1b20)
    );
    --_disabled-outline-opacity: var(--md-input-chip-disabled-outline-opacity, 0.12);
    --_focus-label-text-color: var(
      --md-input-chip-focus-label-text-color,
      var(--md-sys-color-on-surface-variant, #49454f)
    );
    --_focus-outline-color: var(
      --md-input-chip-focus-outline-color,
      var(--md-sys-color-on-surface-variant, #49454f)
    );
    --_hover-label-text-color: var(
      --md-input-chip-hover-label-text-color,
      var(--md-sys-color-on-surface-variant, #49454f)
    );
    --_hover-state-layer-color: var(
      --md-input-chip-hover-state-layer-color,
      var(--md-sys-color-on-surface-variant, #49454f)
    );
    --_hover-state-layer-opacity: var(--md-input-chip-hover-state-layer-opacity, 0.08);
    --_label-text-color: var(
      --md-input-chip-label-text-color,
      var(--md-sys-color-on-surface-variant, #49454f)
    );
    --_outline-color: var(--md-input-chip-outline-color, var(--md-sys-color-outline, #79747e));
    --_outline-width: var(--md-input-chip-outline-width, calc(1 * var(--md-sys-globalscale, 1px)));
    --_pressed-label-text-color: var(
      --md-input-chip-pressed-label-text-color,
      var(--md-sys-color-on-surface-variant, #49454f)
    );
    --_pressed-state-layer-color: var(
      --md-input-chip-pressed-state-layer-color,
      var(--md-sys-color-on-surface-variant, #49454f)
    );
    --_pressed-state-layer-opacity: var(--md-input-chip-pressed-state-layer-opacity, 0.12);
    --_avatar-shape: var(
      --md-input-chip-avatar-shape,
      var(--md-sys-shape-corner-full, calc(9999 * var(--md-sys-globalscale, 1px)))
    );
    --_avatar-size: var(--md-input-chip-avatar-size, calc(24 * var(--md-sys-globalscale, 1px)));
    --_disabled-avatar-opacity: var(--md-input-chip-disabled-avatar-opacity, 0.38);
    --_disabled-leading-icon-color: var(
      --md-input-chip-disabled-leading-icon-color,
      var(--md-sys-color-on-surface, #1d1b20)
    );
    --_disabled-leading-icon-opacity: var(--md-input-chip-disabled-leading-icon-opacity, 0.38);
    --_icon-size: var(--md-input-chip-icon-size, calc(18 * var(--md-sys-globalscale, 1px)));
    --_selected-focus-leading-icon-color: var(
      --md-input-chip-selected-focus-leading-icon-color,
      var(--md-sys-color-primary, #6750a4)
    );
    --_selected-hover-leading-icon-color: var(
      --md-input-chip-selected-hover-leading-icon-color,
      var(--md-sys-color-primary, #6750a4)
    );
    --_selected-leading-icon-color: var(
      --md-input-chip-selected-leading-icon-color,
      var(--md-sys-color-primary, #6750a4)
    );
    --_selected-pressed-leading-icon-color: var(
      --md-input-chip-selected-pressed-leading-icon-color,
      var(--md-sys-color-primary, #6750a4)
    );
    --_focus-leading-icon-color: var(
      --md-input-chip-focus-leading-icon-color,
      var(--md-sys-color-primary, #6750a4)
    );
    --_hover-leading-icon-color: var(
      --md-input-chip-hover-leading-icon-color,
      var(--md-sys-color-primary, #6750a4)
    );
    --_leading-icon-color: var(
      --md-input-chip-leading-icon-color,
      var(--md-sys-color-primary, #6750a4)
    );
    --_pressed-leading-icon-color: var(
      --md-input-chip-pressed-leading-icon-color,
      var(--md-sys-color-primary, #6750a4)
    );
    --_disabled-trailing-icon-color: var(
      --md-input-chip-disabled-trailing-icon-color,
      var(--md-sys-color-on-surface, #1d1b20)
    );
    --_disabled-trailing-icon-opacity: var(--md-input-chip-disabled-trailing-icon-opacity, 0.38);
    --_selected-focus-trailing-icon-color: var(
      --md-input-chip-selected-focus-trailing-icon-color,
      var(--md-sys-color-on-secondary-container, #1d192b)
    );
    --_selected-hover-trailing-icon-color: var(
      --md-input-chip-selected-hover-trailing-icon-color,
      var(--md-sys-color-on-secondary-container, #1d192b)
    );
    --_selected-pressed-trailing-icon-color: var(
      --md-input-chip-selected-pressed-trailing-icon-color,
      var(--md-sys-color-on-secondary-container, #1d192b)
    );
    --_selected-trailing-icon-color: var(
      --md-input-chip-selected-trailing-icon-color,
      var(--md-sys-color-on-secondary-container, #1d192b)
    );
    --_focus-trailing-icon-color: var(
      --md-input-chip-focus-trailing-icon-color,
      var(--md-sys-color-on-surface-variant, #49454f)
    );
    --_hover-trailing-icon-color: var(
      --md-input-chip-hover-trailing-icon-color,
      var(--md-sys-color-on-surface-variant, #49454f)
    );
    --_pressed-trailing-icon-color: var(
      --md-input-chip-pressed-trailing-icon-color,
      var(--md-sys-color-on-surface-variant, #49454f)
    );
    --_trailing-icon-color: var(
      --md-input-chip-trailing-icon-color,
      var(--md-sys-color-on-surface-variant, #49454f)
    );
    --_container-shape-start-start: var(
      --md-input-chip-container-shape-start-start,
      var(
        --md-input-chip-container-shape,
        var(--md-sys-shape-corner-small, calc(8 * var(--md-sys-globalscale, 1px)))
      )
    );
    --_container-shape-start-end: var(
      --md-input-chip-container-shape-start-end,
      var(
        --md-input-chip-container-shape,
        var(--md-sys-shape-corner-small, calc(8 * var(--md-sys-globalscale, 1px)))
      )
    );
    --_container-shape-end-end: var(
      --md-input-chip-container-shape-end-end,
      var(
        --md-input-chip-container-shape,
        var(--md-sys-shape-corner-small, calc(8 * var(--md-sys-globalscale, 1px)))
      )
    );
    --_container-shape-end-start: var(
      --md-input-chip-container-shape-end-start,
      var(
        --md-input-chip-container-shape,
        var(--md-sys-shape-corner-small, calc(8 * var(--md-sys-globalscale, 1px)))
      )
    );
    --_leading-space: var(
      --md-input-chip-leading-space,
      calc(16 * var(--md-sys-globalscale, 1px))
    );
    --_trailing-space: var(
      --md-input-chip-trailing-space,
      calc(16 * var(--md-sys-globalscale, 1px))
    );
    --_icon-label-space: var(
      --md-input-chip-icon-label-space,
      calc(8 * var(--md-sys-globalscale, 1px))
    );
    --_with-leading-icon-leading-space: var(
      --md-input-chip-with-leading-icon-leading-space,
      calc(8 * var(--md-sys-globalscale, 1px))
    );
    --_with-trailing-icon-trailing-space: var(
      --md-input-chip-with-trailing-icon-trailing-space,
      calc(8 * var(--md-sys-globalscale, 1px))
    );
  }
  :host([avatar]) {
    --_container-shape-start-start: var(
      --md-input-chip-container-shape-start-start,
      var(--md-input-chip-container-shape, calc(var(--_container-height) / 2))
    );
    --_container-shape-start-end: var(
      --md-input-chip-container-shape-start-end,
      var(--md-input-chip-container-shape, calc(var(--_container-height) / 2))
    );
    --_container-shape-end-end: var(
      --md-input-chip-container-shape-end-end,
      var(--md-input-chip-container-shape, calc(var(--_container-height) / 2))
    );
    --_container-shape-end-start: var(
      --md-input-chip-container-shape-end-start,
      var(--md-input-chip-container-shape, calc(var(--_container-height) / 2))
    );
  }
  .avatar .primary.action {
    padding-inline-start: calc(4 * var(--md-sys-globalscale, 1px));
  }
  .avatar .leading.icon ::slotted(:first-child) {
    border-radius: var(--_avatar-shape);
    height: var(--_avatar-size);
    width: var(--_avatar-size);
  }
  .disabled.avatar .leading.icon {
    opacity: var(--_disabled-avatar-opacity);
  }
  @media (forced-colors: active) {
    .link .outline {
      border-color: ActiveText;
    }
    .disabled.avatar .leading.icon {
      opacity: 1;
    }
  }
`
//# sourceMappingURL=input-styles.js.map
