import { getPdfSecretPassword } from '../../services/security.service';
import Modal from 'react-bootstrap/Modal';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import React, { useRef, useState } from 'react'
import useRouter from '../../hooks/useRouter';
import { useDispatch, useSelector } from 'react-redux';
import { warning, error } from 'react-toastify-redux';
import "./dowloadDialog.css";

interface Props {
    isOpen: boolean;
    setIsContentVisable: any
}

const DownloadDialog = ({ isOpen, setIsContentVisable }: Props) => {

    const dispatch = useDispatch();
    const router = useRouter();
    const passwordRef: any = useRef(null);
    const [passwordType, setPasswordType] = useState("password");
    const [isOpened, setIsOpened] = useState(isOpen);
    const user = useSelector((state: any) => state.users.user);

    const handleClose = () => {
        setIsOpened(false)
    };

    const validate = () => {
        return passwordRef.current.reportValidity();
    };

    const gotoPdfDownloadPage = () => {
        if (!validate()) {
            router.push('/')
            handleClose();
            return;
        }

        if (!user.email) {
            dispatch(warning("Please login to continue."))
            handleClose();
            router.push('/')
            return;
        }

        if (passwordRef.current.value === getPdfSecretPassword()) {
            handleClose();
            setIsContentVisable(true);
        }
        else {
            dispatch(error("Invalid Password."))
            router.push('/')
            handleClose();
        }
        passwordRef.current.value = "";
    }

    const handleKeySubmit = (e: any) => {
        if (e.key === "Enter") {
            gotoPdfDownloadPage();
        }
    }

    return (
        <div>
            <Modal show={isOpened} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Password</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h6>Enter password to download the PDF files: </h6>
                    <div className="passwordContainerNavDialog">
                        <span className="eyeContainer">
                            {passwordType === "text" && (
                                <FaEye
                                    className="eyes"
                                    onClick={() => setPasswordType("password")}
                                >
                                    AiFillEye
                                </FaEye>
                            )}
                            {passwordType === "password" && (
                                <FaEyeSlash
                                    className="eyes"
                                    onClick={() => setPasswordType("text")}
                                >
                                    AiFillEyeInvisible
                                </FaEyeSlash>
                            )}
                        </span>
                        <input
                            ref={passwordRef}
                            type={passwordType}
                            onKeyDown={handleKeySubmit}
                            required
                        />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button type="button" className="btn btn-secondary" onClick={() => {
                        router.push('/')
                        handleClose()
                    }}>Close</button>
                    <button type="button" className="btn btn-primary" onClick={gotoPdfDownloadPage}>Enter</button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default DownloadDialog;
