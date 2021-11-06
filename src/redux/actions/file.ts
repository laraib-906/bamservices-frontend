import { IFile } from "../../types/file";
import { ADD_FILE, REMOVE_FILE } from "../actionTypes/file";

export const addFile = (file: IFile) => ({
    type: ADD_FILE,
    ...file
})

export const removeFile = (id: string) => ({
    type: REMOVE_FILE,
    id
})