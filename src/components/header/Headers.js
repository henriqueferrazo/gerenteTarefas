import { Link } from "react-router-dom";
import React from 'react';
const Headers = () => {

    return (
        <>
            <div class="container">
                <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                    <a href="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                    </a>

                    <div class="col-md-3 text-end">
                    <Link className="btn btn-outline-primary me-2" to="/login">Entrar</Link>
                    <Link className="btn btn-outline-primary me-2" to="/register">Cadatrar</Link>
                    </div>
                </header>
            </div>
        </>
    );

}

export default Headers;