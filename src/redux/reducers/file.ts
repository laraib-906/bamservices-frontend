import { IFile } from '../../types/file';
import { ADD_FILE, REMOVE_FILE } from '../actionTypes/file'

interface Files {
    files: Array<IFile>
}

const defaultState: Files = {
    files: []
};

export default function filesReducer(state: Files = defaultState, action: any) {

    switch (action.type) {

        case ADD_FILE:
            return {
                ...state,
                files: [
                    ...state.files,
                    {
                        fileId: action.fileId,
                        metaDataId: action.metaDataId,
                        name: action.name,
                        filename: action.filename,
                        bucket: action.bucket,
                        timeCreated: action.timeCreated,
                        downloadLink: action.downloadLink,
                        _id: action._id
                    }
                ]
            }

        case REMOVE_FILE:
            const data = state.files.filter((e) => e._id !== action.id)
            return {
                ...state,
                files: data
            }

        default:
            return state
    }
}