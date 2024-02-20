import { pad2 } from './utils';

// Each member has a range of 0-1\
export type RGBAColor = {
  r: number
  g: number
  b: number
  a?: number
}

// Each member has a range of 0-1
export type HSVAColor = {
  h: number
  s: number
  v: number
  a?: number
}

export class Color {
  private _rgba: RGBAColor = { r: 0, g: 0, b: 0, a: 1 };
  private _hsva: HSVAColor = { h: 0, s: 0, v: 0, a: 1 };
  private _hexNumber!: number;
  private _brightness!: number;
  private _hexString!: string;
  private _isDark!: boolean;
  private _isLight!: boolean;

  constructor(color: number | string) {
    this.fromHex(color);
  }

  public fromHex(color: number | string = 0) {
    if (typeof color === 'number') {
      this._hexNumber = color;
      this._hexString = numberToHexString(this._hexNumber);
    } else {
      this._hexString = color.toUpperCase();
      this._hexNumber = hexStringToNumber(this._hexString);
    }
    const { r, g, b } = hexNumberToRgb(this._hexNumber);

    this._rgba.r = r;
    this._rgba.g = g;
    this._rgba.b = b;

    const { h, s, v } = rgbToHsv(this._rgba);

    this._hsva.h = h;
    this._hsva.s = s;
    this._hsva.v = v;

    this._updateBrightness();
  }

  public fromHsv(color: HSVAColor) {
    const { h, s, v } = color;

    this._hsva.h = h;
    this._hsva.s = s;
    this._hsva.v = v;

    const { r, g, b } = hsvToRgb(this._hsva);

    this._rgba.r = r;
    this._rgba.g = g;
    this._rgba.b = b;

    this._hexString = rgbToHex(this._rgba);
    this._hexNumber = hexStringToNumber(this._hexString);

    this._updateBrightness();
  }

  private _updateBrightness() {
    this._brightness = getBrightness(this._rgba);
    this._isDark = this._brightness < 0.5;
    this._isLight = !this._isDark;
  }

  get rgb() {
    return this._rgba;
  }

  get hsv() {
    return this._hsva;
  }

  get hex() {
    return this._hexNumber;
  }

  get hexString() {
    return this._hexString;
  }

  get brightness() {
    return this._brightness;
  }

  get isDark() {
    return this._isDark;
  }

  get isLight() {
    return this._isLight;
  }
}

export function getBrightness(color: RGBAColor) {
  const { r, g, b } = color;
  return (r * 299 + g * 587 + b * 114) / 1000;
}

export function hexNumberToRgb(color: number) {
  const r = ((color >> 16) & 255) / 255;
  const g = ((color >> 8) & 255) / 255;
  const b = (color & 255) / 255;
  return { r, g, b };
}

export function rgbToHex(color: RGBAColor) {
  const { r, g, b } = color;
  const hex = [
    '#',
    pad2(Math.round(r * 255).toString(16)),
    pad2(Math.round(g * 255).toString(16)),
    pad2(Math.round(b * 255).toString(16)),
  ];

  return hex.join('').toUpperCase();
}

export const numberToHexString = (color: number) => '#' + ('00000' + (color | 0).toString(16)).substr(-6).toUpperCase();

export const hexStringToNumber = (color: string) => parseInt(color.replace('#', ''), 16);

export function hsvToRgb(color: HSVAColor) {
  let { h } = color;
  const { s, v } = color;

  h *= 6;

  const i = Math.floor(h);
  const f = h - i;
  const p = v * (1 - s);
  const q = v * (1 - f * s);
  const t = v * (1 - (1 - f) * s);
  const mod = i % 6;
  const r = [v, q, p, p, t, v][mod];
  const g = [t, v, v, q, p, p][mod];
  const b = [p, p, t, v, v, q][mod];

  return { r, g, b };
}

export function rgbToHsv(color: RGBAColor) {
  const { r, g, b } = color;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const d = max - min;
  const s = max === 0 ? 0 : d / max;
  const v = max;

  let h = 0;

  if (max != min) {
    switch (max) {
    case r:
      h = (g - b) / d + (g < b ? 6 : 0);
      break;
    case g:
      h = (b - r) / d + 2;
      break;
    case b:
      h = (r - g) / d + 4;
      break;
    }
    h /= 6;
  }
  return { h, s, v };
}
