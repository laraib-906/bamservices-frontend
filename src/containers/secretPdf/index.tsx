import React, { useState } from 'react'
import './secretPdf.css'
const SecretPdf = () => {
    const [file, setFile] = useState([])
    const Change = (e: any) => {
        setFile(e.target.files)
    }
    const Upload = () => {
        alert(file)
    }
    return (
        <div>
            <div className="container ">
                <form className="border" onSubmit={Upload}>
                    <div className="form-group">
                        <input type="file" accept='.pdf' multiple className="form-control-file" onChange={e => Change(e)} id="exampleFormControlFile1" />
                        <button type="submit" className="btn btn-warning" >Upload</button>
                    </div>
                </form>
                <div className="border"></div>
            </div>
        </div>
    )
}

export default SecretPdf
