import { Dispatch, SetStateAction } from "react";
import { PaginationDetail } from "./global";

type API_SIG<T> = (query: string, queryString?: PaginationDetail) => Promise<T[]>;
type API_SIG_OLD<T> = (query: string, queryString?: PaginationDetail) => Promise<T[]>;

export type UseAPISearchValue<T> = [API_SIG<T>, T[], string, React.Dispatch<React.SetStateAction<string>>];

export type UseAPISearchValueOld<T> = [API_SIG_OLD<T>, T[], string];

export type UseAPISearchAPI<T> = [];

export type UseAPISearchAPIOld<T> = API_SIG_OLD<T>;
