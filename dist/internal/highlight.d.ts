import { type BundledTheme, type ThemeInput, type StringLiteralUnion, type BundledLanguage, type SpecialLanguage, type LanguageInput, type LanguageRegistration, type HighlighterGeneric, type ThemeRegistration } from 'shiki';
import type { Intellisense } from './utils';
/**
 * Custom TextMate grammar rule for the highlighter.
 */
export type GrammarRule = {
    name: string;
    type: 'block' | 'inline';
    definition: LanguageRegistration['repository'][string];
};
/**
 * Custom TextMate highlighting rule for the highlighter.
 */
export type HighlightingRule = {
    light: NonNullable<ThemeRegistration['tokenColors']>[number];
    dark: NonNullable<ThemeRegistration['tokenColors']>[number];
};
/**
 * Shiki options for the highlighter.
 */
export type ShikiOptions = {
    themes?: Array<ThemeInput | StringLiteralUnion<BundledTheme>>;
    langs?: (LanguageInput | StringLiteralUnion<BundledLanguage> | SpecialLanguage)[];
};
type CustomMarkdownLangName = Awaited<(typeof import('./assets/markdown'))['default']['name']>;
type DefaultLightThemeName = Awaited<(typeof import('./assets/theme-light'))['default']['name']>;
type DefaultDarkThemeName = Awaited<(typeof import('./assets/theme-dark'))['default']['name']>;
export declare const customMarkdownLangName: CustomMarkdownLangName;
export declare const defaultLightThemeName: DefaultLightThemeName;
export declare const defaultDarkThemeName: DefaultDarkThemeName;
export declare const loadDefaultTheme: () => Promise<{
    light: ThemeRegistration;
    dark: ThemeRegistration;
}>;
/**
 * Language for the highlighter.
 */
export type Language = Intellisense<BundledLanguage | CustomMarkdownLangName>;
/**
 * Theme name for the highlighter.
 */
export type ThemeName = Intellisense<BundledTheme | DefaultLightThemeName | DefaultDarkThemeName>;
/**
 * Theme for the highlighter.
 */
export type Theme = ThemeName | ThemeRegistration;
/**
 * Dual theme for light and dark mode.
 */
export type DualTheme = {
    light: Theme;
    dark: Theme;
};
/**
 * Options for the highlighter.
 */
export type HighlighterOptions = {
    grammarRules: GrammarRule[];
    highlightingRules: HighlightingRule[];
    theme: Theme | DualTheme;
    shiki?: ShikiOptions;
};
/**
 * Loads the highlighter instance, with custom rules and options. Uses Shiki under the hood.
 * @param rules Custom rules for the highlighter, from plugins.
 * @param options Custom options for the highlighter.
 * @returns The highlighter instance.
 */
export declare function loadHighlighter({ grammarRules, highlightingRules, theme, shiki }: HighlighterOptions): Promise<Highlighter>;
export interface Highlighter extends HighlighterGeneric<BundledLanguage, BundledTheme> {
    /**
     * The language specified for the highlighter.
     */
    theme: Theme | DualTheme;
    /**
     * The theme specified for the highlighter.
     */
    lang: Language;
}
/**
 * Checks if a language is a bundled language.
 * @param lang The language to check.
 * @returns Whether the language is a bundled language.
 */
export declare const isBundleLanguage: (lang: string) => lang is BundledLanguage;
/**
 * Checks if a theme is a bundled theme.
 * @param theme The theme to check.
 * @returns Whether the theme is a bundled theme.
 */
export declare const isBundleTheme: (theme: string) => theme is BundledTheme;
/**
 * Checks if a theme is a dual theme.
 * @param theme The theme to check.
 * @returns Whether the theme is a dual theme.
 */
export declare const isDualTheme: (theme: Theme | DualTheme) => theme is DualTheme;
/**
 * Checks if a theme is a single theme.
 * @param theme The theme to check.
 * @returns Whether the theme is a single theme.
 */
export declare const isSingleTheme: (theme: Theme | DualTheme) => theme is Theme;
/**
 * Checks if a theme is a theme registration.
 * @param theme The theme to check.
 * @returns Whether the theme is a theme registration.
 */
export declare const isThemeRegistration: (theme: Theme) => theme is ThemeRegistration;
/**
 * Load all nested languages found in the markdown text into the highlighter.
 * @param highlighter The highlighter instance.
 * @param text The text to parse for nested languages.
 * @returns Whether the highlighter was updated with new languages.
 */
export declare const loadNestedLanguages: (highlighter: Highlighter, text: string) => Promise<{
    updated: boolean;
}>;
export {};
