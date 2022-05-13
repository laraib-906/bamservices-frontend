import { deletFiles, getFiles } from "../../api/file";
import React, { useEffect } from "react";
import { FaRegTrashAlt, FaDownload, FaCog } from "react-icons/fa";
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
        res.rows.forEach((data: any) => {
          dispatch(addFile(data));
        });
      })
      .catch((err) => {
        dispatch(error(err.message));
      });
  };

  const delFile = (id: string) => {
    deletFiles(id)
      .then(() => {
        dispatch(removeFile(id));
        dispatch(success("File Deleted Successfully"));
      })
      .catch((err) => {
        dispatch(error(err.message));
      });
  };

  return (
    <div>
      <div className="download-container container mb-5">
        <table className="table">
          <thead>
            <tr className="text-center">
              <th scope="col">#</th>
              <th scope="col">File Name</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {files.map((file: IFile, idx: number) => (
              <tr key={idx} className="text-center">
                <td>{idx + 1}</td>
                <td>{file.name}</td>
                <td>
                  <button
                    className="btn dropdown-toggle"
                    style={{ padding: "3px" }}
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <FaCog></FaCog>
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li className="dropdown-item">
                      <a
                        href={file.downloadLink}
                        type="button"
                        download
                        className="download-action-btn"
                      >
                        Download
                        <FaDownload className="ms-4" />
                      </a>
                    </li>
                    <li className="dropdown-item">
                      <button
                        type="button"
                        className="delete-btn"
                        onClick={() => delFile(file._id)}
                      >
                        Delete
                        <FaRegTrashAlt className="ms-4" />
                      </button>
                    </li>
                  </ul>
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
