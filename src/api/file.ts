import { _fetchStream } from "../utils/globalHelper";
import { APIURLs as config } from "../apiConfig";
export async function UploadFile(file_pdf: any) {
    const headers = {
        'Content-Type': null,
        'Accept': 'multipart/form-data'
    } 
    return _fetchStream(config.fileAPI, "POST", file_pdf, headers);
}