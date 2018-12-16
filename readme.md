# custom-ionic-search-bar

Searchbars represent a text field that can be used to search through a collection. They can be displayed inside of a toolbar or the main content.

A Searchbar should be used instead of an input to search lists. A clear button is displayed upon entering input in the searchbar's text field. Clicking on the clear button will erase the text field and the input will remain focused. A cancel button can be enabled which will clear the input and lose the focus upon click.

## Install
`npm install ci-search-bar -SE`

## Usage

### Angular

```html
<!-- Default Searchbar -->
<ci-search-bar></ci-search-bar>

<!-- Searchbar with danger color -->
<ci-search-bar color="danger"></ci-search-bar>

<!-- Searchbar with value -->
<ci-search-bar value="Ionic"></ci-search-bar>

<!-- Searchbar with telephone type -->
<ci-search-bar type="tel"></ci-search-bar>

<!-- Searchbar with a cancel button and custom cancel button text -->
<ci-search-bar showCancelButton cancelButtonText="Custom Cancel"></ci-search-bar>

<!-- Searchbar with a custom debounce -->
<ci-search-bar debounce="500"></ci-search-bar>

<!-- Animated Searchbar -->
<ci-search-bar animated></ci-search-bar>

<!-- Searchbar with a placeholder -->
<ci-search-bar placeholder="Filter Schedules"></ci-search-bar>

<!-- Searchbar in a Toolbar -->
<ion-toolbar>
  <ci-search-bar></ci-search-bar>
</ion-toolbar>
```


### Javascript

```html
<!-- Default Searchbar -->
<ci-search-bar></ci-search-bar>

<!-- Searchbar with danger color -->
<ci-search-bar color="danger"></ci-search-bar>

<!-- Searchbar with value -->
<ci-search-bar value="Ionic"></ci-search-bar>

<!-- Searchbar with telephone type -->
<ci-search-bar type="tel"></ci-search-bar>

<!-- Searchbar with a cancel button and custom cancel button text -->
<ci-search-bar show-cancel-button cancel-button-text="Custom Cancel"></ci-search-bar>

<!-- Searchbar with a custom debounce -->
<ci-search-bar debounce="500"></ci-search-bar>

<!-- Animated Searchbar -->
<ci-search-bar animated></ci-search-bar>

<!-- Searchbar with a placeholder -->
<ci-search-bar placeholder="Filter Schedules"></ci-search-bar>

<!-- Searchbar in a Toolbar -->
<ion-toolbar>
  <ci-search-bar></ci-search-bar>
</ion-toolbar>
```



## Properties

| Property           | Attribute            | Description                                                                                                                                                                                                                                                            | Type                                                                        | Default           |
| ------------------ | -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- | ----------------- |
| `animated`         | `animated`           | If `true`, enable searchbar animation.                                                                                                                                                                                                                                 | `boolean`                                                                   | `false`           |
| `autocomplete`     | `autocomplete`       | Set the input's autocomplete property.                                                                                                                                                                                                                                 | `"off" \| "on"`                                                             | `'off'`           |
| `autocorrect`      | `autocorrect`        | Set the input's autocorrect property.                                                                                                                                                                                                                                  | `"off" \| "on"`                                                             | `'off'`           |
| `cancelButtonIcon` | `cancel-button-icon` | Set the cancel button icon. Only applies to `md` mode.                                                                                                                                                                                                                 | `string`                                                                    | `'md-arrow-back'` |
| `cancelButtonText` | `cancel-button-text` | Set the the cancel button text. Only applies to `ios` mode.                                                                                                                                                                                                            | `string`                                                                    | `'Cancel'`        |
| `clearIcon`        | `clear-icon`         | Set the clear icon. Defaults to `"close-circle"` for `ios` and `"close"` for `md`.                                                                                                                                                                                     | `string \| undefined`                                                       | `undefined`       |
| `color`            | `color`              | The color to use from your application's color palette. Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`. For more information on colors, see [theming](/docs/theming/basics). | `string \| undefined`                                                       | `undefined`       |
| `debounce`         | `debounce`           | Set the amount of time, in milliseconds, to wait to trigger the `ionChange` event after each keystroke.                                                                                                                                                                | `number`                                                                    | `250`             |
| `mode`             | `mode`               | The mode determines which platform styles to use.                                                                                                                                                                                                                      | `"ios" \| "md"`                                                             | `undefined`       |
| `placeholder`      | `placeholder`        | Set the input's placeholder.                                                                                                                                                                                                                                           | `string`                                                                    | `'Search'`        |
| `searchIcon`       | `search-icon`        | The icon to use as the search icon.                                                                                                                                                                                                                                    | `string`                                                                    | `'search'`        |
| `showCancelButton` | `show-cancel-button` | If `true`, show the cancel button.                                                                                                                                                                                                                                     | `boolean`                                                                   | `false`           |
| `spellcheck`       | `spellcheck`         | If `true`, enable spellcheck on the input.                                                                                                                                                                                                                             | `boolean`                                                                   | `false`           |
| `type`             | `type`               | Set the type of the input.                                                                                                                                                                                                                                             | `"email" \| "number" \| "password" \| "search" \| "tel" \| "text" \| "url"` | `'search'`        |
| `value`            | `value`              | the value of the searchbar.                                                                                                                                                                                                                                            | `null \| string \| undefined`                                               | `''`              |


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