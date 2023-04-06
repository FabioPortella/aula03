import React from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';

export default function Curso() {

    const formik = useFormik({
        initialValues: {
            nome: '',
            sigla: '',
            semestres: 1,
            inicio: ''
        },
        validationSchema: Yup.object({
            nome: Yup.string()
                .min(2, 'O nome deve possuir, no mínimo, 2 caracteres')
                .max(100, 'O nome deve possuir, no máximo, 100 caracteres')
                .required('O nome do curso é obrigatório'),
            sigla: Yup.string()
                .matches(/^[A-Z]{3}[0-9]{4}$/, 'Utilize o formato AAA0000')
                .required('A sigla do curso é obrigatória'),
            semestres: Yup.number()
                .integer()
                .min(1, 'A quantidade mínima de semestres é 1')
                .max(12, 'A quantidade máxima de semestres é 12')
                .required('A quantidade de semestres do curso é obrigatória'),
            inicio: Yup.date()
                .required('A data de início do curso é obrigatória')
        }),
        onSubmit: values => {
            console.log(values);
        },
    });
    
    return (
        <div className='container mt-2'>
            <h2>Exemplo de validação com Formik e Yup</h2>
            <form onSubmit={formik.handleSubmit}>

                <label className='row mt-2'>
                    Nome
                    <input 
                        type="text" 
                        className="form-control" 
                        name="nome" 
                        value={formik.values.nome} 
                        onChange={formik.handleChange} />
                    {formik.touched.nome && formik.errors.nome && <span className='text-danger'> {formik.errors.nome} </span>}
                </label>

                <label className='row mt-2'>
                    Sigla
                    <input 
                        type="text" 
                        className="form-control"
                        name="sigla" 
                        value={formik.values.sigla}
                        onChange={formik.handleChange} />
                    {formik.touched.sigla && formik.errors.sigla && <span className='text-danger'> {formik.errors.sigla} </span>}
                </label>

                <label className='row mt-2'>
                    Quantidade de semestres
                    <input 
                        type="number" 
                        className="form-control"
                        name='semestres' 
                        value={formik.values.semestres}
                        onChange={formik.handleChange} />
                    {formik.touched.semestres && formik.errors.semestres && <span className='text-danger'> {formik.errors.semestres} </span>}
                </label>

                <label className='row mt-2'>
                    Data de início
                    <input 
                        type="date" 
                        className="form-control"
                        name='inicio' 
                        value={formik.values.inicio}
                        onChange={formik.handleChange} />
                    {formik.touched.inicio && formik.errors.inicio && <span className='text-danger'> {formik.errors.inicio} </span>} 
                </label>
                
                <button type='submit' className='btn btn-primary mt-2'>Salvar</button>

            </form>
        </div>
    );
}