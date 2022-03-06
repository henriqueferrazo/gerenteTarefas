import React from 'react';
import RegisForm from './regisForm.js';
import FormLogin from './FormLogin.js';

const Modal = () => {
  
        return (
        <>
            <div class="modal fade" id="ModalCadastrar" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Cadastrar Usuario</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="close"></button>
                        </div>
                        <RegisForm />
                        
                    </div>
                </div>
            </div>
            
          
            <div class="modal fade" id="ModalEntrar" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Entar</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="close"></button>
                        </div>
                        <FormLogin/>
                       
                    </div>
                </div>
            </div>
          
        </>
    );

}

export default Modal;