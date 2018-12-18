import { Component, ComponentInterface, Element, Event, EventEmitter, Method, Prop, State, Watch } from '@stencil/core';
import { Color, Config, TextInputChangeEvent } from '../../interface';
import { debounceEvent } from '../../utils/helpers';
import { createColorClasses } from '../../utils/theme';

@Component({
  tag: 'ci-search-bar',
  styleUrl: 'ci-search-bar.scss',
  scoped: true
})
export class CustomIonicSearchBar implements ComponentInterface {

  private nativeInput?: HTMLInputElement;
  private shouldAlignLeft = true;

  @Element() el!: HTMLElement;

  @Prop({ context: 'config' }) config!: Config;
  @Prop({ context: 'document' }) doc!: Document;

  @State() focused = false;
  @State() noAnimate = true;

  /**
   * The color to use from your application's color palette.
   * Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`,
   * `"medium"`, and `"dark"`. For more information on colors, see [theming](/docs/theming/basics).
   */
  @Prop() color?: Color;

  /**
   * If `true`, enable searchbar animation.
   */
  @Prop() animated = false;

  /**
   * Set the input's autocomplete property.
   */
  @Prop() autocomplete: 'on' | 'off' = 'off';

  /**
   * Set the input's autocorrect property.
   */
  @Prop() autocorrect: 'on' | 'off' = 'off';

  /**
   * Set the cancel button icon.
   */
  @Prop() cancelButtonIcon = 'md-arrow-back';

  /**
   * Set the clear icon. Defaults to `"close"`.
   */
  @Prop() clearIcon?: string;

  /**
   * Set the amount of time, in milliseconds, to wait to trigger the `ionChange` event after each keystroke.
   */
  @Prop() debounce = 250;

  @Watch('debounce')
  protected debounceChanged() {
    this.ionChange = debounceEvent(this.ionChange, this.debounce);
  }

  /**
   * Set the input's placeholder.
   */
  @Prop() placeholder = 'Search';

  /**
   * The icon to use as the search icon.
   */
  @Prop() searchIcon = 'search';

  /**
   * If `true`, show the cancel button.
   */
  @Prop() showCancelButton = false;

  /**
   * If `true`, enable spellcheck on the input.
   */
  @Prop() spellcheck = false;

  /**
   * Set the type of the input.
   */
  @Prop() type: 'text' | 'password' | 'email' | 'number' | 'search' | 'tel' | 'url' = 'search';

  /**
   * the value of the searchbar.
   */
  @Prop({ mutable: true }) value?: string | null = '';

  /**
   * Emitted when a keyboard input ocurred.
   */
  @Event() ionInput!: EventEmitter<KeyboardEvent>;

  /**
   * Emitted when the value has changed.
   */
  @Event() ionChange!: EventEmitter<TextInputChangeEvent>;

  /**
   * Emitted when the cancel button is clicked.
   */
  @Event() ionCancel!: EventEmitter<void>;

  /**
   * Emitted when the clear input button is clicked.
   */
  @Event() ionClear!: EventEmitter<void>;

  /**
   * Emitted when the input loses focus.
   */
  @Event() ionBlur!: EventEmitter<void>;

  /**
   * Emitted when the input has focus.
   */
  @Event() ionFocus!: EventEmitter<void>;

  @Watch('value')
  protected valueChanged() {
    const inputEl = this.nativeInput;
    const value = this.getValue();
    if (inputEl && inputEl.value !== value) {
      inputEl.value = value;
    }
    this.ionChange.emit({ value });
  }

  componentDidLoad() {
    this.positionElements();
    this.debounceChanged();
    setTimeout(() => {
      this.noAnimate = false;
    }, 300);
  }

  /**
   * Sets focus on the specified `ci-search-bar`. Use this method instead of the global
   * `input.focus()`.
   */
  @Method()
  setFocus() {
    if (this.nativeInput) {
      this.nativeInput.focus();
    }
  }

  /**
   * Clears the input field and triggers the control change.
   */
  private onClearInput = (ev?: Event) => {
    this.ionClear.emit();

    if (ev) {
      ev.preventDefault();
      ev.stopPropagation();
    }

    // setTimeout() fixes https://github.com/ionic-team/ionic/issues/7527
    // wait for 4 frames
    setTimeout(() => {
      const value = this.getValue();
      if (value !== '') {
        this.value = '';
        this.ionInput.emit();
      }
    }, 16 * 4);
  };

  /**
   * Clears the input field and tells the input to blur since
   * the clearInput function doesn't want the input to blur
   * then calls the custom cancel function if the user passed one in.
   */
  private onCancelSearchbar = (ev?: Event) => {
    if (ev) {
      ev.preventDefault();
      ev.stopPropagation();
    }
    this.ionCancel.emit();
    this.onClearInput();

    if (this.nativeInput) {
      this.nativeInput.blur();
    }
  };

  /**
   * Update the Searchbar input value when the input changes
   */
  private onInput = (ev: Event) => {
    const input = ev.target as HTMLInputElement | null;
    if (input) {
      this.value = input.value;
    }
    this.ionInput.emit(ev as KeyboardEvent);
  };

  /**
   * Sets the Searchbar to not focused and checks if it should align left
   * based on whether there is a value in the searchbar or not.
   */
  private onBlur = () => {
    this.focused = false;
    this.ionBlur.emit();
    this.positionElements();
  };

  /**
   * Sets the Searchbar to focused and active on input focus.
   */
  private onFocus = () => {
    this.focused = true;
    this.ionFocus.emit();
    this.positionElements();
  };

  /**
   * Positions the input search icon, placeholder, and the cancel button
   * based on the input value and if it is focused.
   */
  private positionElements() {
    const value = this.getValue();
    const shouldAlignLeft = (!this.animated || value.trim() !== '' || !!this.focused);
    this.shouldAlignLeft = shouldAlignLeft;
    return;
  }

  private getValue() {
    return this.value || '';
  }

  hostData() {
    const animated = this.animated && this.config.getBoolean('animated', true);

    return {
      class: {
        ...createColorClasses(this.color),
        'searchbar-animated': animated,
        'searchbar-no-animate': animated && this.noAnimate,
        'searchbar-has-value': (this.getValue() !== ''),
        'searchbar-show-cancel': this.showCancelButton,
        'searchbar-left-aligned': this.shouldAlignLeft,
        'searchbar-has-focus': this.focused
      }
    };
  }

  render() {
    const clearIcon = this.clearIcon || 'md-close';
    const searchIcon = this.searchIcon;

    const cancelButton = this.showCancelButton && (
      <button
        type="button"
        tabIndex={undefined}
        onMouseDown={this.onCancelSearchbar}
        onTouchStart={this.onCancelSearchbar}
        class="searchbar-cancel-button"
      >
        <ion-icon icon={this.cancelButtonIcon} lazy={false}></ion-icon>
      </button>
    );

    return [
      <div class="searchbar-input-container">
        <input
          ref={el => this.nativeInput = el}
          class="searchbar-input"
          onInput={this.onInput}
          onBlur={this.onBlur}
          onFocus={this.onFocus}
          placeholder={this.placeholder}
          type={this.type}
          value={this.getValue()}
          autoComplete={this.autocomplete}
          autoCorrect={this.autocorrect}
          spellCheck={this.spellcheck}
        />

        {cancelButton}

        <ion-icon icon={searchIcon} lazy={false} class="searchbar-search-icon"></ion-icon>

        <button
          type="button"
          no-blur
          class="searchbar-clear-button"
          onMouseDown={this.onClearInput}
          onTouchStart={this.onClearInput}
        >
          <ion-icon icon={clearIcon} lazy={false} class="searchbar-clear-icon"></ion-icon>
        </button>
      </div>
    ];
  }
}