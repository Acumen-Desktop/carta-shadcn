import { SvelteComponentTyped } from "svelte";
import type { Carta } from '../carta';
import type { TextAreaProps } from '../textarea-props';
declare const __propDef: {
    props: {
        /**
             * The Carta instance to use.
             */ carta: Carta;
        /**
             * The editor content.
             */ value?: string | undefined;
        /**
             * The placeholder text for the textarea.
             */ placeholder?: string | undefined;
        /**
             * The element of the wrapper div.
             */ elem: HTMLDivElement;
        /**
             * Additional textarea properties.
             */ props?: TextAreaProps | undefined;
        /**
             * Whether this component is hidden (display: none).
             */ hidden?: boolean | undefined;
        /**
             * Manually resize the textarea to fit the content, so that it
             * always perfectly overlaps the highlighting overlay.
             */ resize?: (() => void) | undefined;
    };
    events: {
        scroll: Event;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
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
