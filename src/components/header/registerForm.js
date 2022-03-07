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
            <main class="login" >
                <div class="login__container">
                    <h1 class="login__title">Cadastro</h1>
                    <form class="login__form" onSubmit={handleSubmit(submitData)}>
                        <input class="login__input" type="text" placeholder="Nome" name="nomeCompleto" {...register("name", { required: true })} />
                        {errors.nome && <span>Campo Obrigatorio</span>}
                        
                        <input class="login__input" type="email" placeholder="e-mail" name="Email" {...register("email", { required: true })} />
                        {errors.email && <span>Campo Obrigatorio</span>}
                        
                        <input class="login__input" type="password" placeholder="senha" name='senha' {...register("password", { required: true })} />
                        {errors.password && <span>Campo Obrigatorio</span>}
                        <button class="login__submit">Salvar</button>
                        <a class="login__reset" href="#">Esqueceu a senha?</a>
                    </form>
                </div>
            </main>

        </>
    );
}

export default RegisterForm;