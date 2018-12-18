# ci-search-bar



<!-- Auto Generated Below -->


## Properties

| Property           | Attribute            | Description                                                                                                                                                                                                                                                            | Type                                                                        | Default           |
| ------------------ | -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- | ----------------- |
| `animated`         | `animated`           | If `true`, enable searchbar animation.                                                                                                                                                                                                                                 | `boolean`                                                                   | `false`           |
| `autocomplete`     | `autocomplete`       | Set the input's autocomplete property.                                                                                                                                                                                                                                 | `"off" \| "on"`                                                             | `'off'`           |
| `autocorrect`      | `autocorrect`        | Set the input's autocorrect property.                                                                                                                                                                                                                                  | `"off" \| "on"`                                                             | `'off'`           |
| `cancelButtonIcon` | `cancel-button-icon` | Set the cancel button icon.                                                                                                                                                                                                                                            | `string`                                                                    | `'md-arrow-back'` |
| `clearIcon`        | `clear-icon`         | Set the clear icon. Defaults to `"close"`.                                                                                                                                                                                                                             | `string`                                                                    | `undefined`       |
| `color`            | `color`              | The color to use from your application's color palette. Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`. For more information on colors, see [theming](/docs/theming/basics). | `string`                                                                    | `undefined`       |
| `debounce`         | `debounce`           | Set the amount of time, in milliseconds, to wait to trigger the `ionChange` event after each keystroke.                                                                                                                                                                | `number`                                                                    | `250`             |
| `placeholder`      | `placeholder`        | Set the input's placeholder.                                                                                                                                                                                                                                           | `string`                                                                    | `'Search'`        |
| `searchIcon`       | `search-icon`        | The icon to use as the search icon.                                                                                                                                                                                                                                    | `string`                                                                    | `'search'`        |
| `showCancelButton` | `show-cancel-button` | If `true`, show the cancel button.                                                                                                                                                                                                                                     | `boolean`                                                                   | `false`           |
| `spellcheck`       | `spellcheck`         | If `true`, enable spellcheck on the input.                                                                                                                                                                                                                             | `boolean`                                                                   | `false`           |
| `type`             | `type`               | Set the type of the input.                                                                                                                                                                                                                                             | `"email" \| "number" \| "password" \| "search" \| "tel" \| "text" \| "url"` | `'search'`        |
| `value`            | `value`              | the value of the searchbar.                                                                                                                                                                                                                                            | `string`                                                                    | `''`              |


## Events

| Event       | Description                                     | Detail               |
| ----------- | ----------------------------------------------- | -------------------- |
| `ionBlur`   | Emitted when the input loses focus.             | void                 |
| `ionCancel` | Emitted when the cancel button is clicked.      | void                 |
| `ionChange` | Emitted when the value has changed.             | TextInputChangeEvent |
| `ionClear`  | Emitted when the clear input button is clicked. | void                 |
| `ionFocus`  | Emitted when the input has focus.               | void                 |
| `ionInput`  | Emitted when a keyboard input ocurred.          | KeyboardEvent        |


## Methods

### `setFocus() => void`

Sets focus on the specified `ci-search-bar`. Use this method instead of the global
`input.focus()`.

#### Returns

Type: `void`




## CSS Custom Properties

| Name                        | Description                              |
| --------------------------- | ---------------------------------------- |
| `--background`              | Background of the searchbar              |
| `--cancel-button-color`     | Color of the searchbar cancel button     |
| `--clear-button-color`      | Color of the searchbar clear button      |
| `--color`                   | Color of the searchbar text              |
| `--icon-color`              | Color of the searchbar icon              |
| `--placeholder-color`       | Color of the searchbar placeholder       |
| `--placeholder-font-style`  | Font style of the searchbar placeholder  |
| `--placeholder-font-weight` | Font weight of the searchbar placeholder |
| `--placeholder-opacity`     | Opacity of the searchbar placeholder     |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
