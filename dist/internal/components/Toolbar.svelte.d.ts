import { SvelteComponentTyped } from "svelte";
import type { Labels } from '../labels';
import type { Carta } from '../carta';
declare const __propDef: {
    props: {
        /**
             * The Carta instance to use.
             */ carta: Carta;
        /**
             * The current editor mode.
             */ mode: 'tabs' | 'split';
        /**
             * The current tab.
             */ tab: 'write' | 'preview';
        /**
             * Editor labels.
             */ labels: Labels;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ToolbarProps = typeof __propDef.props;
export type ToolbarEvents = typeof __propDef.events;
export type ToolbarSlots = typeof __propDef.slots;
/** Displays the buttons to switch tabs and the icons to interact with the editor. */
export default class Toolbar extends SvelteComponentTyped<ToolbarProps, ToolbarEvents, ToolbarSlots> {
}
export {};
