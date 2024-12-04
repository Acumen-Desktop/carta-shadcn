import type { Listener } from './carta';
import type { Prefix } from './prefixes';
import type { KeyboardShortcut } from './shortcuts';
import { TextAreaHistory as TextAreaHistory, type TextAreaHistoryOptions } from './history';
import type { TabOut } from './tabouts';
/**
 * Text selection information.
 */
export interface TextSelection {
	start: number;
	end: number;
	direction: 'forward' | 'backward' | 'none';
	slice: string;
}
/**
 * Carta input settings.
 */
export interface InputSettings {
	readonly shortcuts: KeyboardShortcut[];
	readonly prefixes: Prefix[];
	readonly tabOuts: TabOut[];
	readonly listeners: Listener<any>[];
	readonly historyOpts?: Partial<TextAreaHistoryOptions>;
}
export declare class InputEnhancer {
	readonly textarea: HTMLTextAreaElement;
	readonly container: HTMLDivElement;
	private readonly settings;
	private pressedKeys;
	private escapePressed;
	private onKeyDownValue;
	history: TextAreaHistory;
	readonly events: EventTarget;
	constructor(textarea: HTMLTextAreaElement, container: HTMLDivElement, settings: InputSettings);
	private isWordCharacter;
	private handleMouseDown;
	private handleKeyDown;
	private handleKeyUp;
	private handleNewLine;
	/**
	 * Get the selected text data.
	 * @returns The selection text data.
	 */
	getSelection(): TextSelection;
	/**
	 * Get the current line, along with indices information.
	 * @returns Current line info.
	 */
	getLine(index?: number): {
		start: number;
		end: number;
		value: string;
	};
	/**
	 * Insert a string at a specific index.
	 * @param position The position at which to insert the string.
	 * @param string The string to insert.
	 */
	insertAt(position: number, string: string): void;
	/**
	 * Remove `count` characters at the provided position.
	 * @param position The position to remove characters at.
	 * @param count The number of characters to remove.
	 */
	removeAt(position: number, count?: number): void;
	/**
	 * Surround the current selection with a delimiter.
	 * @param delimiter The string delimiter.
	 */
	toggleSelectionSurrounding(delimiter: string | [string, string]): void;
	/**
	 * Toggle a prefix for the current line.
	 * @param prefix The string prefix.
	 * @param whitespace Whether to handle whitespace separations.
	 */
	toggleLinePrefix(prefix: string, whitespace?: 'attach' | 'detach'): void;
	/**
	 * Update the textarea.
	 */
	update: () => boolean;
	/**
	 * Returns x, y coordinates for absolute positioning of a span within a given text input
	 * at a given selection point. [Source](https://jh3y.medium.com/how-to-where-s-the-caret-getting-the-xy-position-of-the-caret-a24ba372990a)
	 * @param selectionPoint The selection point for the input. Defaults at current cursor position.
	 */
	getCursorXY(selectionPoint?: number): {
		x: number;
		y: number;
		left: number;
		top: number;
		right: number;
		bottom: number;
	};
	/**
	 * Moves an element next to the caret. Shall be called every time the element
	 * changes width, height or the caret position changes. Consider using `bindToCaret` instead.
	 *
	 * @example
	 * ```svelte
	 * <script>
	 *   // ...
	 *
	 *   export let carta;
	 *
	 *   let caretPosition;
	 *   let elem;
	 *
	 *   onMount(() => {
	 *     carta.input.addEventListener('input', handleInput);
	 *   });
	 *
	 *   onDestroy(() => {
	 *     carta.input.removeEventListener('input', handleInput);
	 *   });
	 *
	 *   function handleInput() {
	 *   	 caretPosition = carta.input.getCursorXY();
	 *   }
	 *
	 *   $: {
	 *     caretPosition, elem.clientWidth, elem.clientHeight;
	 *     carta.input.moveElemToCaret(elem);
	 *   }
	 * </script>
	 *
	 * <div bind:this={elem}>
	 *   <!-- My stuff -->
	 * </div>
	 * ```
	 *
	 * @param elem The element to move.
	 */
	moveElemToCaret(elem: HTMLElement): void;
	/**
	 * **Internal**: Svelte action to bind an element to the caret position.
	 * Use `bindToCaret` from the `carta` instance instead.
	 * @param elem The element to position.
	 * @param portal The portal to append the element to. Defaults to `document.body`.
	 */
	$bindToCaret(
		elem: HTMLElement,
		data: {
			portal: HTMLElement;
			editorElement?: HTMLElement;
		}
	): {
		destroy: () => void;
	};
	/**
	 * Get rough value for a row of the textarea.
	 */
	getRowHeight(): number;
}
