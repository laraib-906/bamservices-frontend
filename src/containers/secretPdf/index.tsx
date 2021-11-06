import React, { useRef, useState } from "react";
import { FaFilePdf, FaUpload, FaFileUpload, FaWindowClose } from "react-icons/fa";
import DownloadTable from '../../components/downloadTable/index';

import {UploadFile} from '../../api/file';

import './secretPdf.css';
const SecretPdf = () => {

    const [file, setFile] = useState();
    const [fileName, setFileName] = useState('');
    const [uploadName, setUploadName] = useState('');
    const [isfileUp, setisFileUp] = useState(false);
    const [isfileUpload, setIsFileUpload] = useState(false);
    

    const Change = (e: any) => {
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
        setisFileUp(true);
    }
    const Upload = (event: any) => {
        event.preventDefault();
        setUploadName(fileName);
        setIsFileUpload(true);
        let data = new FormData();
        data.append('file', file as any)
        UploadFile(data)
            .then((res)=>{
                console.log(res)
            })
            .catch((err) => {
                console.log(err);
            })
    }
    const removeUpload = () => {
        setisFileUp(false);
    }

    return (
        <div>
            <div className="container bg-secondary bg-opacity-10 mt-5 mb-5">
                <h1 className="h4 text-center">Upload File</h1>
                <form className="border" onSubmit={(ev) => Upload(ev)} >
                    <div className="form-group">
                        <div>
                            {isfileUp ?
                                <div className="d-flex justify-content-start"><h5 className="position-absolute pt-4" ><FaFilePdf className="pdf-Icon" />{fileName}</h5></div> :
                                <div className="d-flex justify-content-center pt-4"> <h5 className="position-absolute text-center"><div><FaFileUpload className="fs-1" /></div>Drag and drop a PDF file or select file</h5></div>}
                            {isfileUp ? <button type="button" onClick={removeUpload} className="close"><FaWindowClose /></button> : ''}
                            <input type="file" 
                            // ref = {choosedFile} 
                            accept='.pdf' 
                            className="choose-file" 
                            onChange={e => Change(e)} />
                        </div>
                        <div className="d-grid gap-2">
                            <button type="submit" className="btn btn-warning btn-lg" disabled={!isfileUp} ><FaUpload className="upload-Icon" />Upload</button>
                        </div>
                    </div>

                </form>
            </div>
            <DownloadTable fileName={uploadName} fileUpload={isfileUpload} />
        </div>
    )
}

export default SecretPdf
