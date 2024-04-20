import './Tabela.css'

function Tabela(){
    const dias_semana = ["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"];
    const dias_mes = Array.from(Array(30).keys())
    return (
        <>
            <div className='container'>
                {dias_semana.map((dia) => <span>{dia}</span>)}
                {dias_mes.map(dia => <span>{dia}</span>)}
            </div>
        </>
    );
}

export default Tabela;