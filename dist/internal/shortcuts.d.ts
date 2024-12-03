import type { InputEnhancer } from './input';
/**
 * Keyboard shortcut data.
 */
export interface KeyboardShortcut {
    readonly id: string;
    /**
     * Set of keys, corresponding to the `e.key` of `KeyboardEvent`s, but lowercase.
     */
    readonly combination: Set<string>;
    /**
     * Callback action.
     * @param input Input helper.
     */
    readonly action: (input: InputEnhancer) => void;
    /**
     * Prevent saving the current state in history.
     */
    readonly preventSave?: boolean;
}
/**
 * Default keyboard shortcuts. Can be disabled in `Carta` by
 * passing the `disableDefaultShortcuts` option.
 */
export declare const defaultKeyboardShortcuts: readonly [{
    readonly id: "bold";
    readonly combination: Set<string>;
    readonly action: (input: InputEnhancer) => void;
}, {
    readonly id: "italic";
    readonly combination: Set<string>;
    readonly action: (input: InputEnhancer) => void;
}, {
    readonly id: "quote";
    readonly combination: Set<string>;
    readonly action: (input: InputEnhancer) => void;
}, {
    readonly id: "link";
    readonly combination: Set<string>;
    readonly action: (input: InputEnhancer) => void;
}, {
    readonly id: "strikethrough";
    readonly combination: Set<string>;
    readonly action: (input: InputEnhancer) => void;
}, {
    readonly id: "code";
    readonly combination: Set<string>;
    readonly action: (input: InputEnhancer) => void;
}, {
    readonly id: "undo";
    readonly combination: Set<string>;
    readonly preventSave: true;
    readonly action: (input: InputEnhancer) => void;
}, {
    readonly id: "redo";
    readonly combination: Set<string>;
    readonly preventSave: true;
    readonly action: (input: InputEnhancer) => void;
}];
export type DefaultShortcutId = (typeof defaultKeyboardShortcuts)[number]['id'];
