import './regisForm.css';
import { useForm } from "react-hook-form";
import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useHistory } from 'react-router-dom';

const schema = yup.object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(6, 'A senha precisa ter no minimo 6 caracteres').required()
}).required();

function RegisterForm() {
    
    const history = useHistory();

    const {

        register,
        handleSubmit,
        formState: { errors }

    } = useForm({ resolver: yupResolver(schema) });

    function submitData(userData) {

        fetch(`http://localhost:5000/usuario`, {
            "method": "POST",
            "headers": {
                "content-type": "application/json",
                "accept": "application/json"
            },
            "body": JSON.stringify({
                nome: userData.name,
                email: userData.email,
                senha: userData.password,
            })
        })
        .then(response => response.json())
        .then(response => {
            
            history.push('/login');
        })
        .catch(err => console.log(err));
    }

    return (
        <>
            <form class="container" onSubmit={handleSubmit(submitData)}>
                <div class="mb-3 row">
                    <label for="inputPassword" class="col-sm-2 col-form-label">Nome Completo</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" id="inputPassword" name="nomeCompleto" {...register("name", { required: true })} />
                        {errors.name && <span>Campo obrigatorio</span>}
                    </div>
                </div>
                <div class="mb-3 row">
                    <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
                    <div class="col-sm-10">
                        <input type="email" class="form-control" id="staticEmail" name="Email" {...register("email", { required: true })} />
                        {errors.email && <span>Campo obrigatorio</span>}
                    </div>
                </div>
                <div class="mb-3 row">
                    <label for="inputPassword" class="col-sm-2 col-form-label">Senha</label>
                    <div class="col-sm-10">
                        <input type="password" class="form-control" id="inputPassword" name='senha' {...register("password", { required: true })} />
                        {errors.password && <span>Campo obrigatorio</span>}
                    </div>
                </div>
                <button type="submit" class="btn btn-primary">Salvar</button>
            </form>

        </>
    );
}

export default RegisterForm;