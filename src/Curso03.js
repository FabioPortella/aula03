import React from 'react';

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
    nome: yup.string()
        .min(2, 'O nome deve possuir, no mínimo, 2 caracteres')
        .max(100, 'O nome deve possuir, no máximo, 100 caracteres')
        .required('O nome do curso é obrigatório'),
    sigla: yup.string()
        .matches(/^[A-Z]{3}[0-9]{4}$/, 'Utilize o formato AAA0000')
        .required('A sigla do curso é obrigatória'),
    semestres: yup.number()
        .integer()
        .min(1, 'A quantidade mínima de semestres é 1')
        .max(12, 'A quantidade máxima de semestres é 12')
        .required('A quantidade de semestres do curso é obrigatória')
        .typeError('A quantidade de semestres do curso é obrigatória'),
    inicio: yup.date()
        .required('A data de início do curso é obrigatória')
        .typeError('A data de início do curso é obrigatória')
  }).required();


export default function Curso() {
    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
    });

      const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div className='container mt-2'>
            <h2>Exemplo de validação com Hook-Form e Yup</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
            <label className='row mt-2'>
                    Nome
                    <input type="text" className="form-control" {...register("nome")} />
                    <span className='text-danger'>{errors.nome?.message}</span>
                </label>
                <label className='row mt-2'>
                    Sigla
                    <input type="text" className="form-control" {...register("sigla")}/>
                    <span className='text-danger'>{errors.sigla?.message}</span>
                </label>
                <label className='row mt-2'>
                    Quantidade de semestres
                    <input type="number" className="form-control" {...register("semestres")} />
                    <span className='text-danger'>{errors.semestres?.message}</span>
                </label>
                <label className='row mt-2'>
                    Data de início
                    <input type="date" className="form-control" {...register("inicio")} />
                    <span className='text-danger'>{errors.inicio?.message}</span>
                </label>
                <button type='submit' className='btn btn-primary mt-2'>Salvar</button>
            </form>
        </div>
    );
}