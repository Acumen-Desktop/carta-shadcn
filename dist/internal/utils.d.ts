interface Nothing {
}
type Union<T, U> = T | (U & Nothing);
export type Intellisense<T> = Union<T, string>;
export type MaybeArray<T> = T | Array<T>;
export type NonNullable<T> = Exclude<T, null | undefined>;
/**
 * Debounce the provided function.
 * @param cb Callback function.
 * @param wait The time to wait in milliseconds.
 */
export declare function debounce<T extends unknown[]>(cb: (...args: T) => unknown, wait?: number): (...args: T) => void;
/**
 * Check if two sets have the same values.
 * @param a First set.
 * @param b Second set.
 * @returns Whether the two sets contain the same values.
 */
export declare function areEqualSets<T>(a: Set<T>, b: Set<T>): boolean;
/**
 * Merge a partial interface with the provided one.
 * @param partial The partial interface.
 * @param def Default interface values.
 * @returns The merged interface.
 */
export declare function mergeDefaultInterface<T extends object>(partial: Partial<T> | undefined, def: T): T;
export declare class CustomEvent<T> extends Event {
    detail: T;
    constructor(message: string, data: EventInit & {
        detail: T;
    });
}
export {};
