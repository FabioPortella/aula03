import React, { useState } from "react";

export default function Curso() {
    const [dados, setDados] = useState({
        nome: '',
        sigla: '',
        semestres: 1,
        inicio: null
    })

    function handleSubmit(event) {
        console.log(dados);
        event.preventDefault();
    };

    const handleChange = (event) => {
        setDados(
            dados => ({...dados, [event.target.name]: event.target.value})
        )
    }

    return (
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
    );
}