import { useState, useEffect } from 'react';
import './Tabela.css'

function Tabela({ currentUser }) {
    const history = JSON.parse(localStorage.getItem("compromissos-" + currentUser.username)) || [];
    const [compromissos, setCompromissos] = useState(history);
    const [gridStyle, setGridStyle] = useState({
        gridTemplateColumns: `repeat(${history.length <= 5? 3:7}, auto)`
    })

    useEffect(() => {
        setCompromissos(history);
        setGridStyle({
            gridTemplateColumns: `repeat(${history.length <= 5? 3:7}, auto)`
        });
    }, [currentUser]);

    const handleSetCompromisso = (evt, dia) => {
        const textoCompromisso = evt.target.value;
        const aux = compromissos.slice(0);
        aux[dia] = textoCompromisso;
        setCompromissos(aux);
        localStorage.setItem("compromissos-" + currentUser.username, JSON.stringify(aux));
    };

    const dias_semana = ["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"];
    const dias_mes = Array.from(Array(30).keys())
    return (
        <>
            <div className='container'  style={gridStyle}>
                {history.length > 5? dias_semana.map((dia) => <span>{dia}</span>) : <></>}
                {
                    dias_mes.map(dia =>
                        <div>
                            <span>{dia}</span>
                            <br />
                            <textarea cols="15" rows="3" value={compromissos[dia]}
                                onChange={(evt) => { handleSetCompromisso(evt, dia) }}></textarea>
                        </div>
                    )
                }

            </div>
        </>
    );
}

export default Tabela;