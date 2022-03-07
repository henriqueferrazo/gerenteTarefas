import './FormLogin.css';
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
            <main class="login" >
                <div class="login__container">
                    <h1 class="login__title">Login</h1>
                    <form class="login__form" onSubmit={handleSubmit(submitData)}>
                        <input class="login__input" type="email" placeholder="e-mail" value={usuario.email}  {...register("email", { required: true })} />
                        {errors.email && <span class="login__input-border"></span>}
                        
                        <input class="login__input" type="password" placeholder="senha" value={usuario.senha} {...register("password", { required: true })} />
                        {errors.password && <span class="login__input-border"></span>}
                        <button class="login__submit">Login</button>
                        <a class="login__reset" href="#">Esqueceu a senha?</a>
                    </form>
                </div>
            </main>
        </>
    );
}

export default FormLogin;
