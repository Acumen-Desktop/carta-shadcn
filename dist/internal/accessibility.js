/**
 * Handles arrow key navigation for a list of elements.
 * @param e The event to handle.
 */
export function handleArrowKeysNavigation(e) {
	if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
	e.preventDefault();
	const siblings = e.currentTarget.parentElement?.children;
	if (!siblings) return;
	const next = e.currentTarget.nextElementSibling ?? siblings[0];
	const prev = e.currentTarget.previousElementSibling ?? siblings[siblings.length - 1];
	if (e.key === 'ArrowRight') {
		next.focus();
	} else {
		prev.focus();
	}
}
