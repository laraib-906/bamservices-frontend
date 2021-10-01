import { useState } from "react";
import { PaginationDetail } from "../types/global";
import {
	UseAPISearchAPIOld,
	UseAPISearchValueOld
} from "../types/useAPISearch";

// TODO: Remove this from all places instead use the below one
export default function useAPISearchOld<T>(
	api: UseAPISearchAPIOld<T>
): UseAPISearchValueOld<T> {
	const [searchResults, setSearchResults] = useState<T[]>([]);
	const [query, setQuery] = useState<string>("");

	const handleSearchChange = async (
		query: string,
		queryString?: PaginationDetail
	) => {
		try {
			const results = await api(query, queryString);
			setQuery(query);
			setSearchResults(results);
			return results;
		} catch (err) {
			console.warn("Error fetching search results");
			return [];
		}
	};

	return [handleSearchChange, searchResults, query];
}

export function useAPISearch<T>(
	api: UseAPISearchAPIOld<T>
): UseAPISearchValueOld<T> {
	const [searchResults, setSearchResults] = useState<T[]>([]);
	const [query, setQuery] = useState<string>("");

	const handleSearchChange = async (
		query: string,
		queryString?: PaginationDetail
	) => {
		try {
			const results = await api(query, queryString);
			setQuery(query);
			setSearchResults(results);
			return results;
		} catch (err) {
			console.warn("Error fetching search results");
			return [];
		}
	};

	return [handleSearchChange, searchResults, query];
}