/**
 * Temporary updates the highlight overlay to reflect the changes between two text strings,
 * waiting for the actual update to be applied. This way, the user can immediately see the changes,
 * without a delay of around ~100ms. This makes the UI feel more responsive.
 * @param container The highlight overlay container.
 * @param from Previous text.
 * @param to Current text.
 */
export declare function speculativeHighlightUpdate(container: HTMLDivElement, from: string, to: string): void;
/**
 * Creates a new text node appended to the last line of the container.
 * @param container The highlight overlay container.
 * @returns A new text node appended to the last line of the container.
 */
export declare function createTemporaryNode(container: HTMLDivElement): Text | null;
