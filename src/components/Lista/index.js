import Card from "../Card";

function Lista({listTransactions, setListTransactions}){  
    
    function cardRemove(remover){

        setListTransactions(listTransactions.filter((items) =>  items.description !== remover ))
        
    } 

    return(
        <> 
        {listTransactions !== [] ? listTransactions.map((transaction, index,) => <Card transaction={transaction} cardRemove={cardRemove} key={index}/>) : <h2>Você ainda não possui nenhum lançamento</h2>}       
        </>
    )
}

export default Lista;