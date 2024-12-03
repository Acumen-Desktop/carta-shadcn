interface HistoryState {
    timestamp: Date;
    value: string;
    cursor: number;
}
export interface TextAreaHistoryOptions {
    /**
     * Minimum interval between save states in ms.
     * @default 300ms
     */
    minInterval?: number;
    /**
     * Maximum history size in bytes.
     * @default 1MB
     */
    maxSize?: number;
}
/**
 * Input undo/redo functionality.
 */
export declare class TextAreaHistory {
    private states;
    private currentIndex;
    private readonly options;
    constructor(options?: Partial<TextAreaHistoryOptions>);
    /**
     * Rollback to the previous state.
     * @returns The previous state, if any.
     */
    undo(): HistoryState | undefined;
    /**
     * Move forward one state.
     * @returns The successive value, if any.
     */
    redo(): HistoryState | undefined;
    /**
     * Get current stored history in bytes.
     */
    getSize: () => number;
    /**
     * Save a value into history.
     * @param value The value to save.
     * @param cursor Cursor position.
     */
    saveState(value: string, cursor: number): void;
}
export {};
