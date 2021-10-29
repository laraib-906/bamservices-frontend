import { getPdfSecretPassword } from '../../services/security.service';
import React, { useState } from 'react'
import useRouter from '../../hooks/useRouter';
// import './downloadDialog.css'

const DownloadDialog = () => {

    const router = useRouter();
    const [password, setPassword] = useState('');

    const gotoPdfDownloadPage = () => {
        if(password === getPdfSecretPassword()) {
            router.push('/secrets')
        }
        setPassword('');
    } 

    return (
        <div>
            <li className="nav-item" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <a
                    href="/#"
                    className="nav-link p-1"
                    aria-current="page"
                >Download PDF
                </a>
            </li>
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Password</h5>
                        </div>
                        <div className="modal-body">
                            <h6>Enter password to download the PDF files</h6>
                            <input value={password} onChange={e => setPassword(e.target.value)}     type="password" />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={gotoPdfDownloadPage} data-bs-dismiss="modal">Enter</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DownloadDialog;
