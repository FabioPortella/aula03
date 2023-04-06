import React,{useState} from 'react';

export default function Cadastro() {
    const [dados, setDados] = useState({
        nome : "",
        nascimento: "",
        observacao: "",
        tipo: 0,
        destroCanhoto: '',
        acesso: false,
    });

    function handleSubmit(event) {
        let form = document.getElementById('form');
        
        event.preventDefault();
        event.stopPropagation();
        form.classList.add('was-validated');
        if(form.checkValidity()){
            console.log(dados);
        }
    }

    const handleChange = (event) => {
        if (event.target.type === 'checkbox') {
            setDados(
                dados => ({...dados, [event.target.name]: event.target.checked})
            );
        }
        else {
            setDados(
                dados => ({...dados, [event.target.name]: event.target.value})
        );
        }        
    }

    return (
        
        <div className="container mt-2">
            <h2>Exemplo de Cadastro de Clínica</h2>
            <form id="form" onSubmit={handleSubmit} className='needs-validation' noValidate>
                <div className="form-floating">
                    <input 
                        type="text" name="nome" onChange={handleChange} required minLength={2} maxLength={100} 
                        className="form-control" id="nome" placeholder="Nome" value={dados.nome} />
                    <div className="invalid-feedback">Nome deve ter no minimo 3 caracteres e no máximo 100.</div>
                    <label htmlFor="nome">Nome</label>
                </div>

                <div className="form-floating mt-2">
                    <input type="date" className="form-control" id="data"
                        placeholder="Data" value={dados.nascimento} onChange={handleChange} required name="nascimento" />
                    <div className="invalid-feedback">Uma data dever ser informada.</div>
                    <label htmlFor="data">Data de nascimento</label>
                </div>

                <div className="form-floating mt-2">
                    <textarea className="form-control" id="observacao" style={{height: "200px"}}
                        placeholder="observacao" value={dados.observacao}
                        onChange={handleChange} name="observacao" />
                    <label htmlFor="observacao">Observação</label>
                </div>

                <div className='form-floating mt-2'>
                    <select className='form-select' id="tipo" placeholder='tipo'
                    value={dados.tipo} onChange={handleChange} required name='tipo'>
                        <option key={0} value={0} disabled>[Escolha]</option>
                        <option key={1} value={1}>Médico(a)</option>
                        <option key={2} value={2}>Secretário(a)</option>
                        <option key={3} value={3}>Paciente</option>
                    </select>
                    <label htmlFor='tipo'>Tipo de Usunário</label>
                </div>

                <div>
                    <input type='radio' className='form-check-input me-1' id="destro" value="D"
                    checked={dados.destroCanhoto === 'D'} onChange={handleChange} name='destroCanhoto'></input>
                    <label htmlFor='destro' className='form-check-label'>Destro</label>

                    <input type='radio' className='form-check-input ms-3 me-1' id="canhoto" value="C"
                    checked={dados.destroCanhoto === 'C'} onChange={handleChange} name='destroCanhoto'></input>
                    <label htmlFor='canhoto' className='form-check-label'>Canhoto</label>
                </div>

                <div className='form-check form-switch mt-2'>
                    <input type="checkbox" className='form-check-input' id="acesso"
                    checked={dados.acesso} onChange={handleChange} name="acesso"></input> 
                    <label htmlFor='acesso' className='form-check-label'>Possui acesso ao sistema?</label>
                </div>

                <button type="submit" className="btn btn-primary mt-2">Enviar</button>
            </form>
        </div>      
    );
}

//pagina 23 da aula 03