import './style.css';
import { useState } from "react";

function Form({listTransactions, setListTransactions}){

    const [valor, setValor] = useState('');
    const [descricao, setDescricao]= useState('');
    const [tipo, setTipo]= useState('Entrada');


    function formInsere(){

        const obj= {description: descricao, type: tipo, value: parseFloat(valor) };

        
        setListTransactions([...listTransactions, obj]);
    }




    return(
        <>
        <form onSubmit={(event) => formInsere(event.preventDefault())}>
            <div className='inteiro'>
                <span>Descrição</span>
                <input type="text" placeholder="Digite aqui sua Descrição" value={descricao}
                onChange={(event) => setDescricao(event.target.value)} required/>
                <span className='ex'>Ex: Compra de roupas</span>
            </div>
            <div className='metade'>
                <span>Valor</span>
                <input type="text" placeholder="R$" value={valor}
                onChange={(event) => setValor(event.target.value)} required/>
            </div>
            <div className='metade'>
                <span>Tipo de valor</span>
                <select onChange={(event) => setTipo(event.target.value)}>
                    <option value='Entrada'>Entrada</option>
                    <option value='Saída'>Saída</option>
                </select>
            </div>
            <button type="submit" className='buttonForm'>Inserir valor</button>      
         </form>
        </>
    )
}

export default Form;