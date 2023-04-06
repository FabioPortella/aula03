import React from 'react';
import { useForm } from 'react-hook-form';

export default function Curso() {

    const { register, handleSubmit, watch, formState: { errors }} = useForm();

    function onSubmit(data) {
        console.log(data);
    }

    return (
        <div className='container mt-2'>
            <h2>Exemplo de validação com biblioteca React Hook Form</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label className='row mt-2'>
                    Nome
                    <input type="text" className="form-control" 
                    {...register("nome", {required: true, minLength: 2, maxLength: 100})}/>
                    {errors.nome?.type === 'required' && <span className='text-danger'>O nome do curso é obrigatório</span>}
                    {errors.nome?.type === 'minLength' && <span className='text-danger'>O nome deve possuir, ao menos, 2 caracteres</span>}
                    {errors.nome?.type === 'maxLength' && <span className='text-danger'>O nome deve possuir, no máximo, 100 caracteres</span>}
                </label>

                <label className='row mt-2'>
                    Sigla
                    <input type="text" className="form-control"
                    {...register("sigla", {required: true, pattern: /^[A-Z]{3}[0-9]{4}$/})} />
                    {errors.sigla?.type === 'required' && <span className='text-danger'> A sigla do curso é obrigatória</span>}
                    {errors.sigla?.type === 'pattern' && <span className='text-danger'> Utilize o formato AAA0000</span>}
                </label>

                <label className='row mt-2'>
                    Quantidade de semestres
                    <input type="number" className="form-control"
                    {...register("semestres", {required: true, min:1, max:12})} />
                    {errors.semestres?.type === 'required' && <span className='text-danger'>A quantidade de semestres do curso é obrigatória</span>}
                    {errors.semestres?.type === 'min' && <span className='text-danger'>A quantidade mínima de semestres é 1</span>}
                    {errors.semestres?.type === 'max' && <span className='text-danger'>A quantidade máxima de semestres é 12</span>}
                </label>

                <label className='row mt-2'>
                    Data de início
                    <input type="date" className="form-control"
                    {...register("inicio", {required: true})} />
                    {errors.inicio?.type === "required" && <span className='text-danger'>A data de início do curso é obrigatória</span>}
                </label>

                <button type='submit' className='btn btn-primary mt-2'>Salvar</button>
            </form>
        </div>
    );
}