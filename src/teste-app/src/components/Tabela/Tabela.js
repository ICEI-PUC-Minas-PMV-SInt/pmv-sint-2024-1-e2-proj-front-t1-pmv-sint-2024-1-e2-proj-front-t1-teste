import { useState } from 'react';
import './Tabela.css'

function Tabela(){
    const history = JSON.parse(localStorage.getItem("compromissos")) || [];
    const [compromissos, setCompromissos] = useState(history);

    const handleSetCompromisso = (evt, dia) => {
        const textoCompromisso = evt.target.value;
        const aux = compromissos.slice(0);
        aux[dia] = textoCompromisso;
        setCompromissos(aux);
        localStorage.setItem("compromissos", JSON.stringify(aux));
    };

    const dias_semana = ["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"];
    const dias_mes = Array.from(Array(30).keys())
    return (
        <>
            <div className='container'>
                {dias_semana.map((dia) => <span>{dia}</span>)}
                {
                    dias_mes.map(dia => 
                        <div>
                            <span>{dia}</span>
                            <br/>
                            <textarea cols="15" rows="3" value={compromissos[dia]} 
                                        onChange={(evt) => {handleSetCompromisso(evt, dia)}}></textarea>
                        </div>
                    )
                }
            </div>
        </>
    );
}

export default Tabela;