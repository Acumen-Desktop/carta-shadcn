/**
 * Editor tab out information.
 */
export type TabOut = {
    /**
     * The tab out's unique identifier.
     */
    readonly id: string;
    /**
     * The delimiter to look for when tabbing out.
     */
    readonly delimiter: string | readonly string[];
};
/**
 * Default tab outs. Can be disabled in `Carta` by
 * passing the `disableDefaultTabOuts` option.
 */
export declare const defaultTabOuts: readonly [{
    readonly id: "bold";
    readonly delimiter: "**";
}, {
    readonly id: "italic";
    readonly delimiter: readonly ["*", "_"];
}, {
    readonly id: "link";
    readonly delimiter: ")";
}, {
    readonly id: "strikethrough";
    readonly delimiter: "~~";
}, {
    readonly id: "inline-code";
    readonly delimiter: "`";
}, {
    readonly id: "block-code";
    readonly delimiter: "\n```";
}];
export type DefaultTabOutId = (typeof defaultTabOuts)[number]['id'];
