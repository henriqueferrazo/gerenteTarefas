import './regisForm.css';
import { useForm } from "react-hook-form";
import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useHistory } from 'react-router-dom';
import { useState } from 'react';

const schema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required()
}).required();

function FormLogin() {

    const history = useHistory();
    const [usuario, setUsuario] = useState([])

    const {
        register,
        handleSubmit,
        formState: { errors }

    } = useForm({ resolver: yupResolver(schema) });

    function submitData(userData) {

        fetch(`http://localhost:5000/usuario?email=${userData.email}&senha=${userData.senha}`, {
            "method": "GET",
            "headers": {
                "content-type": "application/json"
            },
        })
            .then(response => response.json())
            .then(response => {
                setUsuario(userData)
                history.push('/tarefa');
            })
            .catch(err => console.log(err));
    }

    return (
        <>
            <form class="container" onSubmit={handleSubmit(submitData)}>
                <div class="form-floating mb-3">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" value={usuario.email}  {...register("email", { required: true })} />
                    <label for="floatingInput">Email address</label>
                    {errors.email && <span>Campo obrigatorio</span>}
                </div>
                <div class="form-floating">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password" value={usuario.senha} {...register("password", { required: true })} />
                    <label for="floatingPassword">Password</label>
                    {errors.password && <span>Campo obrigatorio</span>}
                </div>
                <div class='col-4'>
                    <button type="submit" class="btn btn-primary">Entrar</button>
                </div>
            </form >
        </>
    );
}

export default FormLogin;