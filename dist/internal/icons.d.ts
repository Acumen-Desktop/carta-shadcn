import type { ComponentType } from 'svelte';
import type { InputEnhancer } from './input';
import HeadingIcon from './components/icons/HeadingIcon.svelte';
import ItalicIcon from './components/icons/ItalicIcon.svelte';
import BoldIcon from './components/icons/BoldIcon.svelte';
import QuoteIcon from './components/icons/QuoteIcon.svelte';
import LinkIcon from './components/icons/LinkIcon.svelte';
import ListBulletedIcon from './components/icons/ListBulletedIcon.svelte';
import ListNumberedIcon from './components/icons/ListNumberedIcon.svelte';
import ListTaskIcon from './components/icons/ListTaskIcon.svelte';
import CodeIcon from './components/icons/CodeIcon.svelte';
import StrikethroughIcon from './components/icons/StrikethroughIcon.svelte';
/**
 * Editor toolbar icon information.
 */
export interface Icon {
    /**
     * The icon's unique identifier.
     */
    readonly id: string;
    /**
     * Callback function to execute when the icon is clicked.
     * @param input InputEnhancer instance
     */
    readonly action: (input: InputEnhancer) => void;
    /**
     * The icon's component.
     */
    readonly component: ComponentType;
    /**
     * The icon's label (used as aria-label).
     */
    readonly label?: string;
}
export declare const defaultIcons: readonly [{
    readonly id: "heading";
    readonly action: (input: InputEnhancer) => void;
    readonly component: typeof HeadingIcon;
    readonly label: "Heading";
}, {
    readonly id: "bold";
    readonly action: (input: InputEnhancer) => void;
    readonly component: typeof BoldIcon;
    readonly label: "Bold";
}, {
    readonly id: "italic";
    readonly action: (input: InputEnhancer) => void;
    readonly component: typeof ItalicIcon;
    readonly label: "Italic";
}, {
    readonly id: "strikethrough";
    readonly action: (input: InputEnhancer) => void;
    readonly component: typeof StrikethroughIcon;
    readonly label: "Strikethrough";
}, {
    readonly id: "quote";
    readonly action: (input: InputEnhancer) => void;
    readonly component: typeof QuoteIcon;
    readonly label: "Quote";
}, {
    readonly id: "code";
    readonly action: (input: InputEnhancer) => void;
    readonly component: typeof CodeIcon;
    readonly label: "Code";
}, {
    readonly id: "link";
    readonly action: (input: InputEnhancer) => void;
    readonly component: typeof LinkIcon;
    readonly label: "Link";
}, {
    readonly id: "bulletedList";
    readonly action: (input: InputEnhancer) => void;
    readonly component: typeof ListBulletedIcon;
    readonly label: "Bulleted list";
}, {
    readonly id: "numberedList";
    readonly action: (input: InputEnhancer) => void;
    readonly component: typeof ListNumberedIcon;
    readonly label: "Numbered list";
}, {
    readonly id: "taskList";
    readonly action: (input: InputEnhancer) => void;
    readonly component: typeof ListTaskIcon;
    readonly label: "Task list";
}];
export type DefaultIconId = (typeof defaultIcons)[number]['id'] | 'menu';
