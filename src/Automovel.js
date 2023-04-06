import React from 'react';

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
    modelo: yup.string()
        .min(3, 'O modelo de veículo deve possuir, no mínimo, 3 caracteres')
        .max(50, 'O modelo de veículo deve possuir, no máximo, 50 caracteres')
        .required('O modelo de veículo é obrigatório'),
    placa: yup.string()
        .matches(/^[A-Z]{3}[0-9]{1}[A-Z]{1}[0-9]{2}$/, 'Utilize o formato placa padrão Mercosul AAA0A00')
        .required('A placa do veículo é obrigatória'),
    anoFabricacao: yup.number()
        .integer()
        .min(1891, 'O ano de fabricação mínimo é 1891')
        .max(2023, 'O ano de fabricação máximo é o ano atual')
        .required('O ano de fabricação é obrigatório')
        .typeError('O ano de fabricação é obrigatório'),
    anoModelo: yup.number()
        .integer()
        .min(1891, 'O ano do modelo mínimo é 1891')
        .max(2023, 'O ano do modelo máximo é o ano atual')
        .required('O ano do modelo é obrigatório')
        .typeError('O ano do modelo é obrigatório'),
    email: yup.string()
        .email('O email informado dever ser válido')
        .required('O E-mail do proprietário é obrigatório')
        .typeError('O E-mail do proprietário é obrigatório')
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
            <h2>Validação de Veículos com Hook-Form e Yup</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-floating mt-2">
                    <input type="text" className="form-control" {...register("modelo")} />
                    <label>Modelo</label>
                    <span className='text-danger'>{errors.modelo?.message}</span>                                        
                </div>

                <div className="form-floating mt-2">                
                    <input type="text" className="form-control" {...register("placa")}/>
                    <label>Placa</label>
                    <span className='text-danger'>{errors.placa?.message}</span>
                </div>

                <div className="form-floating mt-2">
                    <input type="number" className="form-control" {...register("anoFabricacao")} />
                    <label>Ano de Fabricação</label>
                    <span className='text-danger'>{errors.anoFabricacao?.message}</span>
                </div>

                <div className="form-floating mt-2">
                    <input type="number" className="form-control" {...register("anoModelo")} />
                    <label>Ano Modelo</label>
                    <span className='text-danger'>{errors.anoModelo?.message}</span>
                </div>

                <div className='form-floating mt-2'>   
                    <input type="email" className="form-control" {...register("email")} />
                    <label>Email do Proprietário</label>
                    <span className='text-danger'>{errors.email?.message}</span>
                </div>

                <div className='form-floating mt-2'>   
                    <textarea className="form-control" style={{height: "200px"}} {...register("obs")} />
                    <label>Observações</label>                    
                </div>
                
                <button type='submit' className='btn btn-primary mt-2'>Salvar</button>
            </form>
        </div>
    );
}