/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// Generated stylesheet for ./typography/md-typescale-styles.css.
import { css } from 'lit'
export const styles = css`
  @layer {
    .md-typescale-display-small,
    .md-typescale-display-small-prominent {
      font: var(
          --md-sys-typescale-display-small-weight,
          var(--md-ref-typeface-weight-regular, 400)
        )
        var(
          --md-sys-typescale-display-small-size,
          calc(calc(2.25 * var(--md-sys-globalscale, 1px)) * 16)
        ) /
        var(
          --md-sys-typescale-display-small-line-height,
          calc(calc(2.75 * var(--md-sys-globalscale, 1px)) * 16)
        )
        var(--md-sys-typescale-display-small-font, var(--md-ref-typeface-brand, Roboto));
    }
    .md-typescale-display-medium,
    .md-typescale-display-medium-prominent {
      font: var(
          --md-sys-typescale-display-medium-weight,
          var(--md-ref-typeface-weight-regular, 400)
        )
        var(
          --md-sys-typescale-display-medium-size,
          calc(calc(2.8125 * var(--md-sys-globalscale, 1px)) * 16)
        ) /
        var(
          --md-sys-typescale-display-medium-line-height,
          calc(calc(3.25 * var(--md-sys-globalscale, 1px)) * 16)
        )
        var(--md-sys-typescale-display-medium-font, var(--md-ref-typeface-brand, Roboto));
    }
    .md-typescale-display-large,
    .md-typescale-display-large-prominent {
      font: var(
          --md-sys-typescale-display-large-weight,
          var(--md-ref-typeface-weight-regular, 400)
        )
        var(
          --md-sys-typescale-display-large-size,
          calc(calc(3.5625 * var(--md-sys-globalscale, 1px)) * 16)
        ) /
        var(
          --md-sys-typescale-display-large-line-height,
          calc(calc(4 * var(--md-sys-globalscale, 1px)) * 16)
        )
        var(--md-sys-typescale-display-large-font, var(--md-ref-typeface-brand, Roboto));
    }
    .md-typescale-headline-small,
    .md-typescale-headline-small-prominent {
      font: var(
          --md-sys-typescale-headline-small-weight,
          var(--md-ref-typeface-weight-regular, 400)
        )
        var(
          --md-sys-typescale-headline-small-size,
          calc(calc(1.5 * var(--md-sys-globalscale, 1px)) * 16)
        ) /
        var(
          --md-sys-typescale-headline-small-line-height,
          calc(calc(2 * var(--md-sys-globalscale, 1px)) * 16)
        )
        var(--md-sys-typescale-headline-small-font, var(--md-ref-typeface-brand, Roboto));
    }
    .md-typescale-headline-medium,
    .md-typescale-headline-medium-prominent {
      font: var(
          --md-sys-typescale-headline-medium-weight,
          var(--md-ref-typeface-weight-regular, 400)
        )
        var(
          --md-sys-typescale-headline-medium-size,
          calc(calc(1.75 * var(--md-sys-globalscale, 1px)) * 16)
        ) /
        var(
          --md-sys-typescale-headline-medium-line-height,
          calc(calc(2.25 * var(--md-sys-globalscale, 1px)) * 16)
        )
        var(--md-sys-typescale-headline-medium-font, var(--md-ref-typeface-brand, Roboto));
    }
    .md-typescale-headline-large,
    .md-typescale-headline-large-prominent {
      font: var(
          --md-sys-typescale-headline-large-weight,
          var(--md-ref-typeface-weight-regular, 400)
        )
        var(
          --md-sys-typescale-headline-large-size,
          calc(calc(2 * var(--md-sys-globalscale, 1px)) * 16)
        ) /
        var(
          --md-sys-typescale-headline-large-line-height,
          calc(calc(2.5 * var(--md-sys-globalscale, 1px)) * 16)
        )
        var(--md-sys-typescale-headline-large-font, var(--md-ref-typeface-brand, Roboto));
    }
    .md-typescale-title-small,
    .md-typescale-title-small-prominent {
      font: var(--md-sys-typescale-title-small-weight, var(--md-ref-typeface-weight-medium, 500))
        var(
          --md-sys-typescale-title-small-size,
          calc(calc(0.875 * var(--md-sys-globalscale, 1px)) * 16)
        ) /
        var(
          --md-sys-typescale-title-small-line-height,
          calc(calc(1.25 * var(--md-sys-globalscale, 1px)) * 16)
        )
        var(--md-sys-typescale-title-small-font, var(--md-ref-typeface-plain, Roboto));
    }
    .md-typescale-title-medium,
    .md-typescale-title-medium-prominent {
      font: var(--md-sys-typescale-title-medium-weight, var(--md-ref-typeface-weight-medium, 500))
        var(
          --md-sys-typescale-title-medium-size,
          calc(calc(1 * var(--md-sys-globalscale, 1px)) * 16)
        ) /
        var(
          --md-sys-typescale-title-medium-line-height,
          calc(calc(1.5 * var(--md-sys-globalscale, 1px)) * 16)
        )
        var(--md-sys-typescale-title-medium-font, var(--md-ref-typeface-plain, Roboto));
    }
    .md-typescale-title-large,
    .md-typescale-title-large-prominent {
      font: var(--md-sys-typescale-title-large-weight, var(--md-ref-typeface-weight-regular, 400))
        var(
          --md-sys-typescale-title-large-size,
          calc(calc(1.375 * var(--md-sys-globalscale, 1px)) * 16)
        ) /
        var(
          --md-sys-typescale-title-large-line-height,
          calc(calc(1.75 * var(--md-sys-globalscale, 1px)) * 16)
        )
        var(--md-sys-typescale-title-large-font, var(--md-ref-typeface-brand, Roboto));
    }
    .md-typescale-body-small,
    .md-typescale-body-small-prominent {
      font: var(--md-sys-typescale-body-small-weight, var(--md-ref-typeface-weight-regular, 400))
        var(
          --md-sys-typescale-body-small-size,
          calc(calc(0.75 * var(--md-sys-globalscale, 1px)) * 16)
        ) /
        var(
          --md-sys-typescale-body-small-line-height,
          calc(calc(1 * var(--md-sys-globalscale, 1px)) * 16)
        )
        var(--md-sys-typescale-body-small-font, var(--md-ref-typeface-plain, Roboto));
    }
    .md-typescale-body-medium,
    .md-typescale-body-medium-prominent {
      font: var(--md-sys-typescale-body-medium-weight, var(--md-ref-typeface-weight-regular, 400))
        var(
          --md-sys-typescale-body-medium-size,
          calc(calc(0.875 * var(--md-sys-globalscale, 1px)) * 16)
        ) /
        var(
          --md-sys-typescale-body-medium-line-height,
          calc(calc(1.25 * var(--md-sys-globalscale, 1px)) * 16)
        )
        var(--md-sys-typescale-body-medium-font, var(--md-ref-typeface-plain, Roboto));
    }
    .md-typescale-body-large,
    .md-typescale-body-large-prominent {
      font: var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400))
        var(
          --md-sys-typescale-body-large-size,
          calc(calc(1 * var(--md-sys-globalscale, 1px)) * 16)
        ) /
        var(
          --md-sys-typescale-body-large-line-height,
          calc(calc(1.5 * var(--md-sys-globalscale, 1px)) * 16)
        )
        var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto));
    }
    .md-typescale-label-small,
    .md-typescale-label-small-prominent {
      font: var(--md-sys-typescale-label-small-weight, var(--md-ref-typeface-weight-medium, 500))
        var(
          --md-sys-typescale-label-small-size,
          calc(calc(0.6875 * var(--md-sys-globalscale, 1px)) * 16)
        ) /
        var(
          --md-sys-typescale-label-small-line-height,
          calc(calc(1 * var(--md-sys-globalscale, 1px)) * 16)
        )
        var(--md-sys-typescale-label-small-font, var(--md-ref-typeface-plain, Roboto));
    }
    .md-typescale-label-medium,
    .md-typescale-label-medium-prominent {
      font: var(--md-sys-typescale-label-medium-weight, var(--md-ref-typeface-weight-medium, 500))
        var(
          --md-sys-typescale-label-medium-size,
          calc(calc(0.75 * var(--md-sys-globalscale, 1px)) * 16)
        ) /
        var(
          --md-sys-typescale-label-medium-line-height,
          calc(calc(1 * var(--md-sys-globalscale, 1px)) * 16)
        )
        var(--md-sys-typescale-label-medium-font, var(--md-ref-typeface-plain, Roboto));
    }
    .md-typescale-label-medium-prominent {
      font-weight: var(
        --md-sys-typescale-label-medium-weight-prominent,
        var(--md-ref-typeface-weight-bold, 700)
      );
    }
    .md-typescale-label-large,
    .md-typescale-label-large-prominent {
      font: var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500))
        var(
          --md-sys-typescale-label-large-size,
          calc(calc(0.875 * var(--md-sys-globalscale, 1px)) * 16)
        ) /
        var(
          --md-sys-typescale-label-large-line-height,
          calc(calc(1.25 * var(--md-sys-globalscale, 1px)) * 16)
        )
        var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto));
    }
    .md-typescale-label-large-prominent {
      font-weight: var(
        --md-sys-typescale-label-large-weight-prominent,
        var(--md-ref-typeface-weight-bold, 700)
      );
    }
  }
`
//# sourceMappingURL=md-typescale-styles.js.map
