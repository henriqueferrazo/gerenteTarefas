import '../header/regisForm.css';
import { useForm } from "react-hook-form";
import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


const schema = yup.object({
    name: yup.string().required(),
    complet: yup.string().required()
}).required();

function Tarefas() {


    const {

        register,
        handleSubmit,
        formState: { errors }

    } = useForm({ resolver: yupResolver(schema) });

    function submitData(userData) {

        fetch(`http://localhost:5000/tarefa`, {
            "method": "POST",
            "headers": {
                "content-type": "application/json",
                "accept": "application/json"
            },
            "body": JSON.stringify({
                nome: userData.name,
                concluida: userData.concluida
            })
        })
            .then(response => response.json())
            .then(response => {
                console.log(userData)
            })
            .catch(err => console.log(err));
    }


    return (
        <>
            <form onSubmit={handleSubmit(submitData)}>
               input 
            </form>
        </>
    );
}

export default Tarefas;