// Components interfaces
export * from './components';
export * from './index';
export * from './utils/input-interface';
export * from './global/config';

// Global types
export type TextFieldTypes = 'date' | 'email' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'url' | 'time';
export type Side = 'start' | 'end';
export type PredefinedColors = 'primary' | 'secondary' | 'tertiary' | 'success' | 'warning' | 'danger' | 'light' | 'medium' | 'dark';
export type Color = PredefinedColors | string;
export type Mode = 'ios' | 'md';
export type ComponentTags = keyof StencilIntrinsicElements;
export type ComponentRef = Function | HTMLElement | string | null;
export type ComponentProps<T = null> = T extends ComponentTags ? StencilIntrinsicElements[T] : {[key: string]: any};
export type CssClassMap = { [className: string]: boolean };
export interface BackButtonDetail {
  register(priority: number, handler: () => Promise<any> | void): void;
}

export type BackButtonEvent = CustomEvent<BackButtonDetail>;

export interface FrameworkDelegate {
  attachViewToDom(container: any, component: any, propsOrDataObj?: any, cssClasses?: string[]): Promise<HTMLElement>;
  removeViewFromDom(container: any, component: any): Promise<void>;
}

declare global {
  interface StencilGlobalHTMLAttributes {
    // for ion-menu and ion-split-pane
    main?: boolean;
    padding?: boolean;
    ['padding-top']?: boolean;
    ['padding-bottom']?: boolean;
    ['padding-left']?: boolean;
    ['padding-right']?: boolean;
    ['padding-horizontal']?: boolean;
    ['padding-vertical']?: boolean;

    margin?: boolean;
    ['margin-top']?: boolean;
    ['margin-bottom']?: boolean;
    ['margin-left']?: boolean;
    ['margin-right']?: boolean;
    ['margin-horizontal']?: boolean;
    ['margin-vertical']?: boolean;

    ['no-padding']?: boolean;
    ['no-margin']?: boolean;
  }
}