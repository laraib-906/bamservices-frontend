
import React from 'react'
import { FaRegTrashAlt, FaDownload } from 'react-icons/fa';
import './downloadTable.css'

interface Props {
    fileName: string;
    fileUpload: boolean;
}

const DownloadTable = (props: Props) => {
    return (
        <div>
            <div className="container d-flex flex-row flex-wrap ">
                <button type="button" className="ms-auto download-btn p-2"><FaDownload className="download-Icon" />Download</button>
            </div>
            <div className="download-container container mb-5">
                <table className="table">
                    <thead>
                        <tr className="text-center">
                            <th scope="col"><input type='checkbox' className="mt-2" /></th>
                            <th scope="col">File Name</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>{props.fileUpload ? <tr className="text-center">
                        <th scope="row"><input type='checkbox' className="mt-2" /></th>
                        <td>{props.fileName}</td>
                        <td className="ms-auto"><button type="button" className="delete-btn"><FaRegTrashAlt /></button></td>
                    </tr> : " "}</tbody>
                </table>
            </div>
        </div>
    )
}

export default DownloadTable
