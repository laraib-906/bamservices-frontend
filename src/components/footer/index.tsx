import React from 'react';
import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer p-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="d-flex justify-content-between">
                            <div> © 2010-2021 Ayapa Services Limited.<br />
                                All rights reserved.
                            </div>
                            <div>
                                sales@ayapa.co.uk<br />
                                <span className="glyphicon glyphicon-earphone"></span>(0) 207 243 1119

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer