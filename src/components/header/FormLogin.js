const FormLogin = () => {
    // const datesLoginUsuario = {
    //     email : "",
    //     senha : ""
    // }

    // let {values, setValue} = useState(datesLoginUsuario);

    // const InputHandler = (event) => {
    //     let {nomeCompleto, value} = event.target

    //     setValue({
    //         ... values,
    //         [nomeCompleto]: value
    //     })
    // }
    return (
        <form autoComplete="off">
            <div class="modal-body">
                <div class="mb-3 row">
                    <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
                    <div class="col-sm-10">
                        <input type="email" class="form-control" id="staticEmail" name="email" />
                    </div>
                </div>
                <div class="mb-3 row">
                    <label for="inputPassword" class="col-sm-2 col-form-label">Senha</label>
                    <div class="col-sm-10">
                        <input type="password" class="form-control" id="inputPassword" name="senha" />
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                    <button type="submit" class="btn btn-primary">Entrar</button>
                </div>
            </div>
        </form>
    )
}

export default FormLogin;