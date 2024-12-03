import type { SvelteComponent } from 'svelte';
import { type Processor } from 'unified';
import { type Options as GfmOptions } from 'remark-gfm';
import { type Options as RehypeOptions } from 'remark-rehype';
import type { TextAreaHistoryOptions } from './history';
import { InputEnhancer } from './input';
import { type DefaultShortcutId, type KeyboardShortcut } from './shortcuts';
import { type Icon, type DefaultIconId } from './icons';
import { type DefaultPrefixId, type Prefix } from './prefixes';
import { Renderer } from './renderer';
import { CustomEvent, type MaybeArray } from './utils';
import type { Highlighter, GrammarRule, ShikiOptions, DualTheme, Theme, HighlightingRule } from './highlight';
import { type DefaultTabOutId, type TabOut } from './tabouts';
/**
 * Carta-specific event with extra payload.
 */
export type Event = CustomEvent<{
    carta: Carta;
}>;
declare const cartaEvents: readonly ["carta-render", "carta-render-ssr"];
type CartaEventType = (typeof cartaEvents)[number];
/**
 * Custom listeners for the textarea element.
 */
export type Listener<K extends CartaEventType | keyof HTMLElementEventMap> = [
    type: K,
    listener: (this: HTMLTextAreaElement, ev: K extends CartaEventType ? Event : K extends keyof HTMLElementEventMap ? HTMLElementEventMap[K] : Event) => unknown,
    options?: boolean | AddEventListenerOptions
];
/**
 * Custom Svelte component for extensions.
 */
export interface ExtensionComponent<T extends object | undefined> {
    /**
     * Svelte components that exports `carta: Carta` and all the other properties specified in `props`.
     */
    component: typeof SvelteComponent<T & {
        carta: Carta;
    }>;
    /**
     * Properties that will be handed to the component.
     */
    props: T;
    /**
     * Where this component will be placed.
     */
    parent: MaybeArray<'editor' | 'input' | 'renderer' | 'preview'>;
}
type Listeners = Listener<any>[];
type ExtensionComponents = Array<ExtensionComponent<any>>;
/**
 * Carta editor options.
 */
export interface Options {
    /**
     * GitHub Flavored Markdown options.
     */
    gfmOptions?: GfmOptions;
    /**
     * Editor/viewer extensions.
     */
    extensions?: Plugin[];
    /**
     * Renderer debouncing timeout, in ms.
     * @defaults 300ms
     */
    rendererDebounce?: number;
    /**
     * Remove default shortcuts by ids.
     */
    disableShortcuts?: DefaultShortcutId[] | true;
    /**
     * Remove default icons by ids.
     */
    disableIcons?: DefaultIconId[] | true;
    /**
     * Remove default prefixes by ids.
     */
    disablePrefixes?: DefaultPrefixId[] | true;
    /**
     * Remove default tab-outs by ids.
     */
    disableTabOuts?: DefaultTabOutId[] | true;
    /**
     * History (Undo/Redo) options.
     */
    historyOptions?: TextAreaHistoryOptions;
    /**
     * HTML sanitizer.
     */
    sanitizer: ((html: string) => string) | false;
    /**
     * Highlighter options.
     */
    shikiOptions?: ShikiOptions;
    /**
     * ShikiJS theme
     * @default 'carta-light' for light mode and 'carta-dark' for dark mode.
     */
    theme?: Theme | DualTheme;
    /**
     * Options that will be passed to rehype
     */
    rehypeOptions?: RehypeOptions;
}
/**
 * Unified transformers plugins.
 */
export type UnifiedTransformer<E extends 'sync' | 'async'> = {
    execution: 'sync' | 'async';
    type: 'remark' | 'rehype';
    transform: ({ processor, carta }: {
        processor: Processor;
        carta: Carta;
    }) => E extends 'sync' ? void : Promise<void>;
};
/**
 * Carta editor extensions.
 */
export interface Plugin {
    /**
     * Unified transformers plugins.
     * @important If the plugin is async, it will not run in SSR rendering.
     */
    transformers?: UnifiedTransformer<'sync' | 'async'>[];
    /**
     * Additional keyboard shortcuts.
     */
    shortcuts?: KeyboardShortcut[];
    /**
     * Additional icons.
     */
    icons?: Icon[];
    /**
     * Additional prefixes.
     */
    prefixes?: Prefix[];
    /**
     * Additional tab-outs.
     */
    tabOuts?: TabOut[];
    /**
     * Textarea event listeners.
     */
    listeners?: Listeners;
    /**
     * Additional components, that will be put after the editor.
     * All components are given a `carta: Carta` prop.
     * The editor has a `relative` position, so you can position
     * elements absolutely.
     */
    components?: ExtensionComponents;
    /**
     * Custom markdown grammar highlight rules for ShiKi.
     */
    grammarRules?: GrammarRule[];
    /**
     * Custom markdown highlighting rules for ShiKi.
     */
    highlightingRules?: HighlightingRule[];
    /**
     * Use this callback to execute code when one Carta instance loads the extension.
     * @param data General Carta related data.
     */
    onLoad?: (data: {
        carta: Carta;
    }) => void;
}
export declare class Carta {
    readonly sanitizer?: (html: string) => string;
    readonly historyOptions?: TextAreaHistoryOptions;
    readonly theme?: Theme | DualTheme;
    readonly shikiOptions?: ShikiOptions;
    readonly rehypeOptions: RehypeOptions;
    readonly rendererDebounce: number;
    readonly keyboardShortcuts: KeyboardShortcut[];
    readonly icons: Icon[];
    readonly prefixes: Prefix[];
    readonly tabOuts: TabOut[];
    readonly grammarRules: GrammarRule[];
    readonly highlightingRules: HighlightingRule[];
    readonly textareaListeners: Listeners;
    readonly cartaListeners: Listeners;
    readonly components: ExtensionComponents;
    readonly dispatcher: EventTarget;
    readonly gfmOptions: GfmOptions | undefined;
    readonly syncProcessor: Processor;
    readonly asyncProcessor: Promise<Processor>;
    private mElement;
    private mInput;
    private mRenderer;
    private mHighlighter;
    private mSyncTransformers;
    private mAsyncTransformers;
    get element(): HTMLDivElement | undefined;
    get input(): InputEnhancer | undefined;
    get renderer(): Renderer | undefined;
    highlighter(): Promise<Highlighter | undefined>;
    private elementsToBind;
    constructor(options?: Options);
    private setupSynchronousProcessor;
    private setupAsynchronousProcessor;
    /**
     * Render markdown to html asynchronously.
     * @param markdown Markdown input.
     * @returns Rendered html.
     */
    render(markdown: string): Promise<string>;
    /**
     * Render markdown, excluding syntax highlighting (SSR).
     * @param markdown Markdown input.
     * @returns Rendered html.
     */
    renderSSR(markdown: string): string;
    /**
     * **Internal**: set the editor element.
     * @param element The editor element.
     */
    $setElement(element: HTMLDivElement): void;
    /**
     * **Internal**: set the input element.
     * @param textarea The input textarea element.
     * @param callback Update callback.
     */
    $setInput(textarea: HTMLTextAreaElement, container: HTMLDivElement, callback: () => void): void;
    /**
     * **Internal**: set the renderer element.
     * @param container Div container of the rendered element.
     */
    $setRenderer(container: HTMLDivElement): void;
    /**
     * Bind an element to the caret position.
     * @param element The element to bind.
     * @param portal The portal element.
     * @returns The unbind function.
     *
     * @example
     * ```svelte
     * <script>
     *   export let carta;
     * </script>
     *
     * <div use:carta.bindToCaret>
     *   <!-- Stuff here -->
     * </div>
     *
     * ```
     */
    bindToCaret(element: HTMLElement, portal?: HTMLElement): {
        destroy: () => void;
    };
}
export {};
