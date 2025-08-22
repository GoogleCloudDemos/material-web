# Material Web

<img src="./docs/images/material-web.gif"
  title="Material web components"
  alt="A collection of Material web components"
  style="border-radius: 32px">

⚠️⚠️⚠️

This is a fork that enables Material Web components to be used in our special environment that globally scales the viewport enforcing a fixed aspect ratio and virtual resolution.

It is not useful outside of this. Use the [original repo](https://github.com/material-components/material-web)

⚠️⚠️⚠️
---

`@material/web` is a library of
[web components](https://developer.mozilla.org/en-US/docs/Web/Web_Components)<!-- {.external} -->
that helps build beautiful and accessible web applications. It uses
[Material 3](https://m3.material.io/)<!-- {.external} -->, the latest version of Google's
open-source design system.

**Note:
[MWC is in maintenance mode pending new maintainers](https://github.com/material-components/material-web/discussions/5642).**

## Resources

-   [Introduction](./docs/intro.md)
-   [Roadmap](./docs/roadmap.md)
-   [Component docs](./docs/components/)
-   [Bundle size](./docs/size.md)
-   [Browser support and FAQ](./docs/support.md)

## Quick start

> Tip: Using Angular? We recommend using
> [Angular Material](https://material.angular.io/)<!-- {.external} --> components
> instead.

This code snippet is a buildless example that loads `@material/web` from a CDN.
Check out the [quick start](./docs/quick-start.md) guide to install and build
for production.

<!-- LINT.IfChange -->

```html
<head>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
  <script type="importmap">
    {
      "imports": {
        "@material/web/": "https://esm.run/@material/web/"
      }
    }
  </script>
  <script type="module">
    import '@material/web/all.js';
    import {styles as typescaleStyles} from '@material/web/typography/md-typescale-styles.js';

    document.adoptedStyleSheets.push(typescaleStyles.styleSheet);
  </script>
</head>
<body>
  <h1 class="md-typescale-display-medium">Hello Material!</h1>
  <form>
    <p class="md-typescale-body-medium">Check out these controls in a form!</p>
    <md-checkbox></md-checkbox>
    <div>
      <md-radio name="group"></md-radio>
      <md-radio name="group"></md-radio>
      <md-radio name="group"></md-radio>
    </div>

    <md-outlined-text-field label="Favorite color" value="Purple"></md-outlined-text-field>

    <md-outlined-button type="reset">Reset</md-outlined-button>
  </form>
  <style>
    form {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 16px;
    }
  </style>
</body>
```

<!-- LINT.ThenChange(./g3doc/docs/quick-start.md) -->
