import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    slots: {};
    events: {
        scroll: CustomEvent<{
            target: HTMLDivElement;
        }>;
        mount: CustomEvent<{
            elem: HTMLDivElement;
        }>;
        render: CustomEvent<void>;
    };
};
export type RendererProps = typeof __propDef.props;
export type RendererEvents = typeof __propDef.events;
export type RendererSlots = typeof __propDef.slots;
/**
 * This component wraps the Carta renderer and provides a debounced rendering
 * for the editor.
 */
export default class Renderer extends SvelteComponentTyped<RendererProps, RendererEvents, RendererSlots> {
}
export {};
