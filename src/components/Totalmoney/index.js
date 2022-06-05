import './style.css';

function Total({listTransactions}){

    return(
        <> 
            <div className='totalContainer'>
                <span>Valor Total:</span>
                <span className='rosa'>R$ {listTransactions.reduce((acumula, entrada) => {
                entrada.type === 'Entrada' ? acumula += entrada.value : acumula += -entrada.value
                return acumula;},0)}</span>
                <span>O valor se refere ao saldo</span>
            </div>
        </>
    )
}

export default Total;