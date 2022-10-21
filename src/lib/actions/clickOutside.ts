export function clickOutside(node: HTMLElement) {
	function handleClick(event: UIEvent) {
		if (!node.contains(event.target as HTMLElement) && !node.isSameNode(event.target as HTMLElement)) {
			node.dispatchEvent(new CustomEvent('clickOutside'));
		}
	}
	document.addEventListener('click', handleClick, true);
	return {
		destroy: () => {
			document.removeEventListener('click', handleClick, true);
		}
	};
}
