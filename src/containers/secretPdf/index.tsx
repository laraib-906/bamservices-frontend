import React, { useState } from "react";
import {
  FaFilePdf,
  FaUpload,
  FaFileUpload,
  FaWindowClose,
} from "react-icons/fa";
import DownloadTable from "../../components/downloadTable/index";

import { uploadFile } from "../../api/file";

import "./secretPdf.css";
import { useDispatch } from "react-redux";
import { success } from "react-toastify-redux";
import { addFile } from "../../redux/actions/file";
import DownloadDialog from "../../components/navBarDialog";

const SecretPdf = () => {
  const dispatch = useDispatch();
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState("");
  const [isfileUp, setisFileUp] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isContentVisable, setIsContentVisable] = useState(false);

  const Change = (e: any) => {
    const { files } = e.target;

    if (!files || !files[0]) {
      return
    }

    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
    setisFileUp(true);

    e.target.value = "";
  };
  const Upload = (event: any) => {
    setIsLoading(true);
    event.preventDefault();
    let data = new FormData();
    data.append("file", file as any);
    uploadFile(data)
      .then((res) => {
        setIsLoading(false);
        setisFileUp(false);
        removeUpload();
        dispatch(success(res.message));
        dispatch(addFile(res.data));
      })
      .catch((err) => {
        setIsLoading(false);
        setisFileUp(false);
        console.log(err);
      });
  };
  const removeUpload = () => {
    setisFileUp(false);
  };

  return (
    <div>
      <DownloadDialog isOpen={true} setIsContentVisable={setIsContentVisable} />
      {isContentVisable ?
        (
          <div>
            <div className="container bg-secondary bg-opacity-10 mt-5 mb-5">
              <h1 className="h4 text-center">Upload File</h1>
              <form className="border" onSubmit={(ev) => Upload(ev)}>
                <div className="form-group">
                  <div>
                    {isfileUp ? (
                      <div className="d-flex justify-content-start">
                        <h5 className="position-absolute pt-4">
                          <FaFilePdf className="pdf-Icon" />
                          {fileName}
                        </h5>
                      </div>
                    ) : (
                      <div className="d-flex justify-content-center pt-4">
                        <h5 className="position-absolute text-center">
                          <div>
                            <FaFileUpload className="fs-1" />
                          </div>
                          <br />
                      Drag and drop a PDF file or select file
                    </h5>
                      </div>
                    )}
                    {isfileUp && (
                      <button type="button" onClick={removeUpload} className="close">
                        <FaWindowClose />
                      </button>
                    )}
                    <input
                      type="file"
                      accept=".pdf"
                      className="choose-file"
                      onChange={(e) => Change(e)}
                    />
                  </div>
                  <div className="d-grid gap-2">
                    <button
                      type="submit"
                      className="btn btn-warning btn-lg"
                      disabled={!isfileUp}
                    >
                      {isLoading && (
                        <div className="spinner-border text-light" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </div>
                      )}
                      <FaUpload className="upload-Icon ms-4" />
                  Upload
                </button>
                  </div>
                </div>
              </form>
            </div>
            <DownloadTable />
          </div>
        ) : (
          <div className="warning-container">
            <h1>Confidential Content ...</h1>
          </div>
        )
      }
    </div>
  );
};

export default SecretPdf;
