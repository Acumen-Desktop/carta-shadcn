import { SvelteComponentTyped } from "svelte";
import type { Carta } from '../carta';
declare const __propDef: {
    props: {
        /**
             * The Carta instance to use.
             */ carta: Carta;
        /**
             * The markdown content to render.
             */ value: string;
        /**
             * The element that wraps the rendered HTML.
             */ elem: HTMLDivElement;
        /**
             * Whether this component is hidden (display: none).
             */ hidden?: boolean | undefined;
    };
    events: {
        scroll: Event;
        render: CustomEvent<void>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
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
