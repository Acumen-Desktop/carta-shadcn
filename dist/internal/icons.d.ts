import type { ComponentType, SvelteComponent } from 'svelte';
import type { InputEnhancer } from './input';
type SvelteIconComponent = ComponentType<SvelteComponent>;
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
	readonly component: SvelteIconComponent;
	/**
	 * The icon's label (used as aria-label).
	 */
	readonly label?: string;
}
export declare const defaultIcons: readonly [
	{
		readonly id: 'heading';
		readonly action: (input: InputEnhancer) => void;
		readonly component: SvelteIconComponent;
		readonly label: 'Heading';
	},
	{
		readonly id: 'bold';
		readonly action: (input: InputEnhancer) => void;
		readonly component: SvelteIconComponent;
		readonly label: 'Bold';
	},
	{
		readonly id: 'italic';
		readonly action: (input: InputEnhancer) => void;
		readonly component: SvelteIconComponent;
		readonly label: 'Italic';
	},
	{
		readonly id: 'strikethrough';
		readonly action: (input: InputEnhancer) => void;
		readonly component: SvelteIconComponent;
		readonly label: 'Strikethrough';
	},
	{
		readonly id: 'quote';
		readonly action: (input: InputEnhancer) => void;
		readonly component: SvelteIconComponent;
		readonly label: 'Quote';
	},
	{
		readonly id: 'code';
		readonly action: (input: InputEnhancer) => void;
		readonly component: SvelteIconComponent;
		readonly label: 'Code';
	},
	{
		readonly id: 'link';
		readonly action: (input: InputEnhancer) => void;
		readonly component: SvelteIconComponent;
		readonly label: 'Link';
	},
	{
		readonly id: 'bulletedList';
		readonly action: (input: InputEnhancer) => void;
		readonly component: SvelteIconComponent;
		readonly label: 'Bulleted list';
	},
	{
		readonly id: 'numberedList';
		readonly action: (input: InputEnhancer) => void;
		readonly component: SvelteIconComponent;
		readonly label: 'Numbered list';
	},
	{
		readonly id: 'taskList';
		readonly action: (input: InputEnhancer) => void;
		readonly component: SvelteIconComponent;
		readonly label: 'Task list';
	}
];
export type DefaultIconId = (typeof defaultIcons)[number]['id'] | 'menu';
export {};
