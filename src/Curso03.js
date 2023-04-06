import React from 'react';

export default function Curso() {
    return (
        <div className='container mt-2'>
            <h2>Exemplo de validação</h2>
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