import { Color, CssClassMap, Mode } from '../interface';

export function hostContext(selector: string, el: HTMLElement): boolean {
  return el.closest(selector) !== null;
}

/**
 * Create the mode and color classes for the component based on the classes passed in
 */
export function createColorClasses(color: Color | undefined | null): CssClassMap | undefined {
  return (typeof color === 'string' && color.length > 0) ? {
    'ion-color': true,
    [`ion-color-${color}`]: true
  } : undefined;
}

export function createThemedClasses(mode: Mode | undefined, name: string): CssClassMap {
  return {
    [name]: true,
    [`${name}-${mode}`]: mode !== undefined
  };
}

export function getClassList(classes: string | (string | null | undefined)[] | undefined): string[] {
  if (classes !== undefined) {
    const array = Array.isArray(classes) ? classes : classes.split(' ');
    return array
      .filter(c => c != null)
      .map(c => (c as string).trim())
      .filter(c => c !== '');
  }
  return [];
}

export function getClassMap(classes: string | string[] | undefined): CssClassMap {
  const map: CssClassMap = {};
  getClassList(classes).forEach(c => map[c] = true);
  return map;
}
