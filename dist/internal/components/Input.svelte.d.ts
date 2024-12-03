import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        /**
             * Manually resize the textarea to fit the content, so that it
             * always perfectly overlaps the highlighting overlay.
             */ resize?: () => void;
    } & {
        carta: any;
        placeholder?: string;
        value?: string;
        props?: any;
        hidden?: boolean;
        children?: import("svelte").Snippet;
    };
    slots: {};
    events: {
        scroll: CustomEvent<{
            target: HTMLDivElement;
        }>;
        mount: CustomEvent<{
            resize?: () => void;
            elem: HTMLDivElement;
        }>;
    };
};
export type InputProps = typeof __propDef.props;
export type InputEvents = typeof __propDef.events;
export type InputSlots = typeof __propDef.slots;
/**
 * A wrapped textarea component integrated with Carta. It handles the highlighting
 * and propagates events to the Carta instance.
 */
export default class Input extends SvelteComponentTyped<InputProps, InputEvents, InputSlots> {
    get resize(): () => void;
}
export {};
