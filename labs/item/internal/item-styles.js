/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// Generated stylesheet for ./labs/item/internal/item-styles.css.
import { css } from 'lit'
export const styles = css`
  :host {
    color: var(--md-sys-color-on-surface, #1d1b20);
    font-family: var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto));
    font-size: var(
      --md-sys-typescale-body-large-size,
      calc(calc(1 * var(--md-sys-globalscale, 1px)) * 16)
    );
    font-weight: var(
      --md-sys-typescale-body-large-weight,
      var(--md-ref-typeface-weight-regular, 400)
    );
    line-height: var(
      --md-sys-typescale-body-large-line-height,
      calc(calc(1.5 * var(--md-sys-globalscale, 1px)) * 16)
    );
    align-items: center;
    box-sizing: border-box;
    display: flex;
    gap: calc(16 * var(--md-sys-globalscale, 1px));
    min-height: calc(56 * var(--md-sys-globalscale, 1px));
    overflow: hidden;
    padding: calc(12 * var(--md-sys-globalscale, 1px)) calc(16 * var(--md-sys-globalscale, 1px));
    position: relative;
    text-overflow: ellipsis;
  }
  :host([multiline]) {
    min-height: calc(72 * var(--md-sys-globalscale, 1px));
  }
  [name='overline'] {
    color: var(--md-sys-color-on-surface-variant, #49454f);
    font-family: var(--md-sys-typescale-label-small-font, var(--md-ref-typeface-plain, Roboto));
    font-size: var(
      --md-sys-typescale-label-small-size,
      calc(calc(0.6875 * var(--md-sys-globalscale, 1px)) * 16)
    );
    font-weight: var(
      --md-sys-typescale-label-small-weight,
      var(--md-ref-typeface-weight-medium, 500)
    );
    line-height: var(
      --md-sys-typescale-label-small-line-height,
      calc(calc(1 * var(--md-sys-globalscale, 1px)) * 16)
    );
  }
  [name='supporting-text'] {
    color: var(--md-sys-color-on-surface-variant, #49454f);
    font-family: var(--md-sys-typescale-body-medium-font, var(--md-ref-typeface-plain, Roboto));
    font-size: var(
      --md-sys-typescale-body-medium-size,
      calc(calc(0.875 * var(--md-sys-globalscale, 1px)) * 16)
    );
    font-weight: var(
      --md-sys-typescale-body-medium-weight,
      var(--md-ref-typeface-weight-regular, 400)
    );
    line-height: var(
      --md-sys-typescale-body-medium-line-height,
      calc(calc(1.25 * var(--md-sys-globalscale, 1px)) * 16)
    );
  }
  [name='trailing-supporting-text'] {
    color: var(--md-sys-color-on-surface-variant, #49454f);
    font-family: var(--md-sys-typescale-label-small-font, var(--md-ref-typeface-plain, Roboto));
    font-size: var(
      --md-sys-typescale-label-small-size,
      calc(calc(0.6875 * var(--md-sys-globalscale, 1px)) * 16)
    );
    font-weight: var(
      --md-sys-typescale-label-small-weight,
      var(--md-ref-typeface-weight-medium, 500)
    );
    line-height: var(
      --md-sys-typescale-label-small-line-height,
      calc(calc(1 * var(--md-sys-globalscale, 1px)) * 16)
    );
  }
  [name='container']::slotted(*) {
    inset: 0;
    position: absolute;
  }
  .default-slot {
    display: inline;
  }
  .default-slot,
  .text ::slotted(*) {
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .text {
    display: flex;
    flex: 1;
    flex-direction: column;
    overflow: hidden;
  }
`
//# sourceMappingURL=item-styles.js.map
