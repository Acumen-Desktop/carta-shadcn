import type { ComponentType, SvelteComponent } from 'svelte';
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

export const defaultIcons = [
	{
		id: 'heading',
		action: (input) => input.toggleLinePrefix('###'),
		component: HeadingIcon as unknown as SvelteIconComponent,
		label: 'Heading'
	},
	{
		id: 'bold',
		action: (input) => input.toggleSelectionSurrounding('**'),
		component: BoldIcon as unknown as SvelteIconComponent,
		label: 'Bold'
	},
	{
		id: 'italic',
		action: (input) => input.toggleSelectionSurrounding('*'),
		component: ItalicIcon as unknown as SvelteIconComponent,
		label: 'Italic'
	},
	{
		id: 'strikethrough',
		action: (input) => input.toggleSelectionSurrounding('~~'),
		component: StrikethroughIcon as unknown as SvelteIconComponent,
		label: 'Strikethrough'
	},
	{
		id: 'quote',
		action: (input) => input.toggleLinePrefix('>'),
		component: QuoteIcon as unknown as SvelteIconComponent,
		label: 'Quote'
	},
	{
		id: 'code',
		action: (input) => input.toggleSelectionSurrounding('`'),
		component: CodeIcon as unknown as SvelteIconComponent,
		label: 'Code'
	},
	{
		id: 'link',
		action: (input) => {
			input.toggleSelectionSurrounding(['[', ']']);
			const position = input.getSelection().end + 1;
			input.insertAt(position, '(url)');
			input.textarea.setSelectionRange(position + 1, position + 4);
		},
		component: LinkIcon as unknown as SvelteIconComponent,
		label: 'Link'
	},
	{
		id: 'bulletedList',
		action: (input) => input.toggleLinePrefix('- ', 'detach'),
		component: ListBulletedIcon as unknown as SvelteIconComponent,
		label: 'Bulleted list'
	},
	{
		id: 'numberedList',
		action: (input) => input.toggleLinePrefix('1. ', 'detach'),
		component: ListNumberedIcon as unknown as SvelteIconComponent,
		label: 'Numbered list'
	},
	{
		id: 'taskList',
		action: (input) => input.toggleLinePrefix('- [ ] ', 'detach'),
		component: ListTaskIcon as unknown as SvelteIconComponent,
		label: 'Task list'
	}
] as const satisfies readonly Icon[];

export type DefaultIconId = (typeof defaultIcons)[number]['id'] | 'menu';
