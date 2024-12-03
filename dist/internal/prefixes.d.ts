/**
 * Text prefixes, default ones include the `- ` for bulleted lists,
 * `1. ` for numbered lists, `- [ ]` for task lists.
 */
export interface Prefix {
    /**
     * Id of the prefix.
     */
    id: string;
    /**
     * Function that returns the prefix, if it is present.
     * @param line The current line.
     * @returns The prefix, or nothing if it was not.
     */
    match: (line: string) => string | undefined | RegExpExecArray | null;
    /**
     * Function that returns the prefix for the new line.
     * @param previousMatch The prefix matched in the `match` function.
     * @param previousLine The previous line.
     * @returns The new prefix.
     */
    maker: (previousMatch: string | RegExpExecArray, previousLine: string) => string;
}
export declare const defaultPrefixes: readonly [{
    readonly id: "taskList";
    readonly match: (line: string) => RegExpExecArray | null;
    readonly maker: (prev: string | RegExpExecArray) => string;
}, {
    readonly id: "bulletedList";
    readonly match: (line: string) => RegExpExecArray | null;
    readonly maker: (prev: string | RegExpExecArray) => string;
}, {
    readonly id: "numberedList";
    readonly match: (line: string) => RegExpExecArray | null;
    readonly maker: (prev: string | RegExpExecArray) => string;
}, {
    readonly id: "blockquote";
    readonly match: (line: string) => RegExpExecArray | null;
    readonly maker: (prev: string | RegExpExecArray) => string;
}];
export type DefaultPrefixId = (typeof defaultPrefixes)[number]['id'];
