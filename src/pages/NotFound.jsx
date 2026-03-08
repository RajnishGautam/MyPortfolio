import React from "react";
import { Link } from "react-router-dom";
import "../styles/NotFound.css"

const NotFound = () => {
    return (
        <section className="nf">
            <div className="nf-card">
                <h1 className="nf-code">404</h1>
                <h2 className="nf-title">Access Restricted</h2>
                <p className="nf-text">
                    This content is confidential and not publicly available.
                    <br />
                    Please contact me for more details.
                </p>

                <div className="nf-actions">
                    <a
                        href="https://wa.me/919905955461"
                        target="_blank"
                        rel="noreferrer"
                        className="nf-btn primary"
                    >
                        WhatsApp Me
                    </a>
                    <Link to="/" className="nf-btn">
                        Go Home
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default NotFound;