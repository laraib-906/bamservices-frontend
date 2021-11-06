import { deletFiles, getFiles } from "../../api/file";
import React, { useEffect } from "react";
import { FaRegTrashAlt, FaDownload } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { error, success } from "react-toastify-redux";
import "./downloadTable.css";
import { addFile, removeFile } from "../../redux/actions/file";
import { IFile } from "../../types/file";

const DownloadTable = () => {
  const files = useSelector((state: any) => state.files.files);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!files.length) {
      initUI();
    }
  }, [files]);

  const initUI = () => {
    getFiles()
      .then((res) => {
        res.docs.forEach((data: any) => {
          dispatch(addFile(data));
        });
      })
      .catch((err) => {
        dispatch(error(err.message));
      });
  };

  const delFile = (id: string) => {
    deletFiles(id)
    .then((res) => {
        dispatch(removeFile(id))
        dispatch(success("File Deleted Successfully"));
      })
      .catch((err) => {
        dispatch(error(err.message));
      });
  }

  return (
    <div>
      <div className="container d-flex flex-row flex-wrap ">
        <button type="button" className="ms-auto download-btn p-2">
          <FaDownload className="download-Icon" />
          Download
        </button>
      </div>
      <div className="download-container container mb-5">
        <table className="table">
          <thead>
            <tr className="text-center">
              <th scope="col">
                <input type="checkbox" className="mt-2" />
              </th>
              <th scope="col">File Name</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {files.map((file: IFile, idx: number) => (
                <tr key={idx} className="text-center">
                  <td scope="row">
                    <input type="checkbox" className="mt-2" />
                  </td>
                  <td>{file.name}</td>
                  <td className="ms-auto">
                    <button type="button" className="delete-btn" onClick={() => delFile(file.id)}>
                      <FaRegTrashAlt />
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DownloadTable;
