import './style.css';
import { FaTrash } from 'react-icons/fa';

function Card({transaction, index, cardRemove}){
    console.log()

    return(
        <> 
        <li>
            <div className={transaction.type === 'Entrada' ? 'green' : 'grey'}></div>
            <div className="itemLista">
                <div className='flex_column'>
                    <h3>{transaction.description}</h3>
                    <span>{transaction.type}</span>
                </div>
                <span className='valor'>R$ {transaction.value}</span>
                <button className='buttonCard' onClick={() => cardRemove(transaction.description)}><FaTrash></FaTrash></button>
            </div>
        </li>  
        </>
    )
}

export default Card;