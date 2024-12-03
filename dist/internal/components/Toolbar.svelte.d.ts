import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
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
