import Card from "../Card";

function Lista({listTransactions, setListTransactions}){  
    
    function cardRemove(remover){

        setListTransactions(listTransactions.filter((_,index) =>  index !== remover ))
        
    } 

    return(
        <> 
        {listTransactions.length != [] ? listTransactions.map((transaction, index,) => <Card transaction={transaction} cardRemove={cardRemove} index={index} key={index}/>) : <h2>Você ainda não possui nenhum lançamento</h2>}       
        </>
    )
}

export default Lista;