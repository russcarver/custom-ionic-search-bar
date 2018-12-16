# ci-search-bar



<!-- Auto Generated Below -->


## Properties

| Property           | Attribute            | Description                                                                                                                                                                                                                                                            | Type                                                                        |
| ------------------ | -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `animated`         | `animated`           | If `true`, enable searchbar animation.                                                                                                                                                                                                                                 | `boolean`                                                                   |
| `autocomplete`     | `autocomplete`       | Set the input's autocomplete property.                                                                                                                                                                                                                                 | `"off" \| "on"`                                                             |
| `autocorrect`      | `autocorrect`        | Set the input's autocorrect property.                                                                                                                                                                                                                                  | `"off" \| "on"`                                                             |
| `cancelButtonIcon` | `cancel-button-icon` | Set the cancel button icon. Only applies to `md` mode.                                                                                                                                                                                                                 | `string`                                                                    |
| `cancelButtonText` | `cancel-button-text` | Set the the cancel button text. Only applies to `ios` mode.                                                                                                                                                                                                            | `string`                                                                    |
| `clearIcon`        | `clear-icon`         | Set the clear icon. Defaults to `"close-circle"` for `ios` and `"close"` for `md`.                                                                                                                                                                                     | `string`                                                                    |
| `color`            | `color`              | The color to use from your application's color palette. Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`. For more information on colors, see [theming](/docs/theming/basics). | `string`                                                                    |
| `debounce`         | `debounce`           | Set the amount of time, in milliseconds, to wait to trigger the `ionChange` event after each keystroke.                                                                                                                                                                | `number`                                                                    |
| `mode`             | `mode`               | The mode determines which platform styles to use.                                                                                                                                                                                                                      | `"ios" \| "md"`                                                             |
| `placeholder`      | `placeholder`        | Set the input's placeholder.                                                                                                                                                                                                                                           | `string`                                                                    |
| `searchIcon`       | `search-icon`        | The icon to use as the search icon.                                                                                                                                                                                                                                    | `string`                                                                    |
| `showCancelButton` | `show-cancel-button` | If `true`, show the cancel button.                                                                                                                                                                                                                                     | `boolean`                                                                   |
| `spellcheck`       | `spellcheck`         | If `true`, enable spellcheck on the input.                                                                                                                                                                                                                             | `boolean`                                                                   |
| `type`             | `type`               | Set the type of the input.                                                                                                                                                                                                                                             | `"email" \| "number" \| "password" \| "search" \| "tel" \| "text" \| "url"` |
| `value`            | `value`              | the value of the searchbar.                                                                                                                                                                                                                                            | `string`                                                                    |


## Events

| Event       | Detail               | Description                                     |
| ----------- | -------------------- | ----------------------------------------------- |
| `ionBlur`   |                      | Emitted when the input loses focus.             |
| `ionCancel` |                      | Emitted when the cancel button is clicked.      |
| `ionChange` | TextInputChangeEvent | Emitted when the value has changed.             |
| `ionClear`  |                      | Emitted when the clear input button is clicked. |
| `ionFocus`  |                      | Emitted when the input has focus.               |
| `ionInput`  | KeyboardEvent        | Emitted when a keyboard input ocurred.          |


## Methods

### `setFocus() => void`

Sets focus on the specified `ion-searchbar`. Use this method instead of the global
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
