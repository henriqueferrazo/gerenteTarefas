import React from 'react';
import Modal from './Modal';
const Headers = () => {

    return (
        <>
            <div class="container">
                <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                    <a href="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                    </a>

                    <div class="col-md-3 text-end">
                        <button type="button" data-bs-toggle="modal" class="btn btn-outline-primary me-2" data-bs-target="#ModalEntrar">Entrar</button>
                        <button type="button" data-bs-toggle="modal" class="btn btn-primary" data-bs-target="#ModalCadastrar">Cadastre-se</button>
                    </div>
                </header>
            </div>
            <Modal/>
        </>
    );

}

export default Headers;