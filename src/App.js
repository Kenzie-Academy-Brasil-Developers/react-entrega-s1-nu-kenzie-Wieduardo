import './App.css';
import { useState } from 'react';
import Form from './components/Form';
import Lista from './components/Lista';
import Total from './components/Totalmoney';


function App() {
      
  
  const [listTransactions, setListTransactions] = useState([])

  return (
    <>
    <header>
      <h1>Nu <span className='cinza'>Kenzie</span></h1>
    </header>
    <main className='main'>
      <div className='divisao_1'>
      <Form listTransactions={listTransactions} setListTransactions={setListTransactions}></Form>
      {listTransactions.length >= 1 && <Total listTransactions={listTransactions}></Total>}
      </div>
      {console.log(typeof(listTransactions),listTransactions)}
      <div className='divisao_2'>
        <ul>
          <Lista listTransactions={listTransactions} setListTransactions={setListTransactions}></Lista>
        </ul>
      </div>
    </main>
    </>
  );
}

export default App;
