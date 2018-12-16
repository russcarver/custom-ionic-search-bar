import { Mode } from '../interface';

export interface IonicConfig {
  /**
   * When it's set to `false`, disables all animation and transition across the app.
   * Can be useful to make ionic smoother in slow devices, when animations can't run smoothly.
   */
  animated?: boolean;

  /**
   * When it's set to `false`, it disables all material-design ripple-effects across the app.
   * Defaults to `true`.
   */
  rippleEffect?: boolean;

  /**
   * The mode determines which platform styles to use for the whole application.
   */
  mode?: Mode;

  /**
   * Wherever ionic will respond to hardware go back buttons in an Android device.
   * Defaults to `true` when ionic runs in a mobile device.
   */
  hardwareBackButton?: boolean;

  /**
   * Whenever clicking the top status bar should cause the scroll to top in an application.
   * Defaults to `true` when ionic runs in a mobile device.
   */
  statusTap?: boolean;

  /**
   * Overrides the default icon in all `<ion-back-button>` components.
   */
  backButtonIcon?: string;

  /**
   * Overrides the default text in all `<ion-back-button>` components.
   */
  backButtonText?: string;

  /**
   * Overrides the default icon in all `<ion-menu-button>` components.
   */
  menuIcon?: string;

  /**
   * Overrides the default menu type for all `<ion-menu>` components.
   * By default the menu type is chosen based in the app's mode.
   */
  menuType?: string;

  /**
   * Overrides the default icon in all `<ion-refresh-content>` components.
   */
  refreshingIcon?: string;

  /**
   * Global switch that disables or enables "swipe-to-go-back" gesture across all
   * `ion-nav` in your application.
   */
  swipeBackEnabled?: boolean;

  // PRIVATE configs
  keyboardHeight?: number;
  inputShims?: boolean;
  scrollPadding?: string;
  inputBlurring?: string;
  scrollAssist?: boolean;
  hideCaretOnScroll?: string;

  // INTERNAL configs
  persistConfig?: boolean;
  _forceStatusbarPadding?: boolean;
  _testing?: boolean;
}

export function setupConfig(config: IonicConfig) {
  const win = window as any;
  const Ionic = win.Ionic;
  if (Ionic && Ionic.config && Ionic.config.constructor.name !== 'Object') {
    console.error('ionic config was already initialized');
    return;
  }
  win.Ionic = win.Ionic || {};
  win.Ionic.config = {
    ...win.Ionic.config,
    ...config
  };
  return win.Ionic.config;
}