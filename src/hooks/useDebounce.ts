import { useState, useEffect } from "react";

function useDebounce<T>(searchTerm: T, delay: number) {
	const [debouncedValue, setDebouncedValue] = useState<T>(searchTerm);

	useEffect(
		() => {
			const handler = setTimeout(() => {
				setDebouncedValue(searchTerm);
			}, delay);

			return () => {
				clearTimeout(handler);
			};
		},
		[delay, searchTerm]
	);

	return debouncedValue;
}

export default useDebounce;
