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
export const defaultIcons = [
	{
		id: 'heading',
		action: (input) => input.toggleLinePrefix('###'),
		component: HeadingIcon,
		label: 'Heading'
	},
	{
		id: 'bold',
		action: (input) => input.toggleSelectionSurrounding('**'),
		component: BoldIcon,
		label: 'Bold'
	},
	{
		id: 'italic',
		action: (input) => input.toggleSelectionSurrounding('*'),
		component: ItalicIcon,
		label: 'Italic'
	},
	{
		id: 'strikethrough',
		action: (input) => input.toggleSelectionSurrounding('~~'),
		component: StrikethroughIcon,
		label: 'Strikethrough'
	},
	{
		id: 'quote',
		action: (input) => input.toggleLinePrefix('>'),
		component: QuoteIcon,
		label: 'Quote'
	},
	{
		id: 'code',
		action: (input) => input.toggleSelectionSurrounding('`'),
		component: CodeIcon,
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
		component: LinkIcon,
		label: 'Link'
	},
	{
		id: 'bulletedList',
		action: (input) => input.toggleLinePrefix('- ', 'detach'),
		component: ListBulletedIcon,
		label: 'Bulleted list'
	},
	{
		id: 'numberedList',
		action: (input) => input.toggleLinePrefix('1. ', 'detach'),
		component: ListNumberedIcon,
		label: 'Numbered list'
	},
	{
		id: 'taskList',
		action: (input) => input.toggleLinePrefix('- [ ] ', 'detach'),
		component: ListTaskIcon,
		label: 'Task list'
	}
];
