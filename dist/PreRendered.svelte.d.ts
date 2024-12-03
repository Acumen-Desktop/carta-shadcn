import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        html: string;
        theme?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type PreRenderedProps = typeof __propDef.props;
export type PreRenderedEvents = typeof __propDef.events;
export type PreRenderedSlots = typeof __propDef.slots;
/** A basic component to render pre-rendered HTML content with a specific theme. */
export default class PreRendered extends SvelteComponentTyped<PreRenderedProps, PreRenderedEvents, PreRenderedSlots> {
}
export {};
