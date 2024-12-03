import { SvelteComponentTyped } from "svelte";
import type { Carta } from './internal/carta';
import type { TextAreaProps } from './internal/textarea-props';
import { type Labels } from './internal/labels';
declare const __propDef: {
    props: {
        /**
             * The Carta instance to use.
             */ carta: Carta;
        /**
             * The theme to use, which translates to the CSS class `carta-theme__{theme}`.
             */ theme?: string | undefined;
        /**
             * The editor content.
             */ value?: string | undefined;
        /**
             * The mode to use. Can be 'tabs', 'split', or 'auto'
             * - 'tabs': The input and renderer are displayed in tabs.
             * - 'split': The input and renderer are displayed side by side.
             * - 'auto': The mode is automatically selected based on the window width.
             */ mode?: "auto" | "split" | "tabs" | undefined;
        /**
             * The scroll synchronization mode. Can be 'sync' or 'async'.
             * - 'sync': The scroll is synchronized between the input and renderer.
             * - 'async': The scroll is not synchronized between the input and renderer.
             */ scroll?: "sync" | "async" | undefined;
        /**
             * Whether to disable the toolbar.
             */ disableToolbar?: boolean | undefined;
        /**
             * The placeholder text for the textarea.
             */ placeholder?: string | undefined;
        /**
             * Additional textarea properties.
             */ textarea?: TextAreaProps | undefined;
        /**
             * The selected tab. Can be 'write' or 'preview'.
             */ selectedTab?: "preview" | "write" | undefined;
        /**
             * The labels to use for the editor.
             */ labels?: Partial<Labels> | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type MarkdownEditorProps = typeof __propDef.props;
export type MarkdownEditorEvents = typeof __propDef.events;
export type MarkdownEditorSlots = typeof __propDef.slots;
/**
 * This is the main editor component that combines the input and renderer
 * components. It also handles the scroll synchronization between the input and renderer
 * components (if set to sync), and the window mode management (tabs or split).
 */
export default class MarkdownEditor extends SvelteComponentTyped<MarkdownEditorProps, MarkdownEditorEvents, MarkdownEditorSlots> {
}
export {};
