import { _fetch, _fetchStream } from "../utils/globalHelper";
import { APIURLs as config } from "../apiConfig";

export async function uploadFile(file_pdf: any) {

    return _fetchStream(config.file, "POST", file_pdf, true);
}

export async function getFiles() {
  
    return _fetch(config.file, "GET", undefined, undefined, true);
}

export async function deletFiles(id: string) {
    
    return _fetch(`${config.file}/${id}`, "DELETE", undefined, undefined, true);
}


export async function downloadFile(payload: any) {
    
    return _fetch(`${config.file}/download`, "POST", payload, undefined, true);
}