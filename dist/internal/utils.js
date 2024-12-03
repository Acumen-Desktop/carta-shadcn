/**
 * Debounce the provided function.
 * @param cb Callback function.
 * @param wait The time to wait in milliseconds.
 */
export function debounce(cb, wait = 1000) {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => cb(...args), wait);
    };
}
/**
 * Check if two sets have the same values.
 * @param a First set.
 * @param b Second set.
 * @returns Whether the two sets contain the same values.
 */
export function areEqualSets(a, b) {
    if (a.size !== b.size)
        return false;
    const aClone = new Set(a);
    const bClone = new Set(b);
    for (const elem of aClone) {
        bClone.add(elem);
        if (bClone.size !== b.size)
            return false;
    }
    for (const elem of bClone) {
        aClone.add(elem);
        if (aClone.size !== a.size)
            return false;
    }
    return true;
}
/**
 * Merge a partial interface with the provided one.
 * @param partial The partial interface.
 * @param def Default interface values.
 * @returns The merged interface.
 */
export function mergeDefaultInterface(partial, def) {
    if (!partial)
        return def;
    const final = { ...def };
    Object.entries(partial).forEach(([key, value]) => {
        final[key] = value;
    });
    return final;
}
// Node does not implement CustomEvent until v19, so we
// "declare" it ourself for backward compatibility.
export class CustomEvent extends Event {
    detail;
    constructor(message, data) {
        super(message, data);
        this.detail = data.detail;
    }
}
