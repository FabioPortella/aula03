import React from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';

export default function Curso() {
    
    return (
        <div className='container mt-2'>
            <h2>Exemplo de validação com Formik e Yup</h2>
            <form>
                <label className='row mt-2'>
                    Nome
                    <input type="text" className="form-control" />
                </label>
                <label className='row mt-2'>
                    Sigla
                    <input type="text" className="form-control" />
                </label>
                <label className='row mt-2'>
                    Quantidade de semestres
                    <input type="number" className="form-control" />
                </label>
                <label className='row mt-2'>
                    Data de início
                    <input type="date" className="form-control" />
                </label>
                <button type='submit' className='btn btn-primary mt-2'>Salvar</button>
            </form>
        </div>
    );
}


/* Validação utilizando as classes do Bootstrap

<div className='container mt-2'>
<h2>Exemplo de validação</h2>
<form id="form" onSubmit={handleSubmit} className="needs-validation" noValidate>
    <label className='row mt-2'>
        Nome
        <input type="text" name='nome' onChange={handleChange} required minLength={2} maxLength={100} className="form-control" />
        <div className="valid-feedback">Tudo certo por aqui</div>
        <div className="invalid-feedback">Algo não está certo</div>
    </label>
    <label className='row mt-2'>
        Sigla
        <input type="text" name='sigla' onChange={handleChange} required pattern='^[A-Z]{3}[0-9]{4}$' className="form-control" />
    </label>
    <label className='row mt-2'>
        Quantidade de semestres
        <input type="number" name='semestres' onChange={handleChange} required min={1} max={12} className="form-control" />
    </label>
    <label className='row mt-2'>
        Data de início
        <input type="date" name='inicio' onChange={handleChange} required className="form-control" />
    </label>
    <button type='submit' className='btn btn-primary mt-2'>Salvar</button>
</form>
</div>
*/