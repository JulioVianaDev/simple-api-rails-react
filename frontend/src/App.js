import {Navbar} from './components/Navbar/Navbar';
import {useState,useEffect} from 'react'
import './App.css';
import axios from 'axios'
import Pedido from './components/Pedidos/Pedido';
import Modal from './components/Modal/Modal';
import './components/Modal/Modal.css'
function App() {
  const [pedidos,setPedidos]= useState([])
  function handleGetDataToApi(){
    axios.get('http://localhost:3001/api/orders')
      .then(respostaDaRequisicao=>{
        if (respostaDaRequisicao.status === 200){
          alert("Pego com sucesso")
          setPedidos(respostaDaRequisicao.data)
        }
        // console.log(res)
      })
      // .catch(
      //   alert("Não foi possivel pegar os dados")
      // )
  }
  function handleGetDataToApiFirstTime(){
    axios.get('http://localhost:3001/api/orders')
      .then(respostaDaRequisicao=>{
          setPedidos(respostaDaRequisicao.data)
      })
  }

  useEffect(()=>{
    handleGetDataToApiFirstTime();
  },[])

  const [isOpen, setIsOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);

  function ItemEscolhido(item){
    setIsOpen(true);
    setCurrentItem(item);
  }
  return (
    <div className="App">
      <Navbar />
      <button onClick={handleGetDataToApi}>Pegar dados</button>
      {pedidos.length}<br></br>
      <br></br>

      {isOpen && (
        <div className='modal-overlay'><Modal isOpen={isOpen} setIsOpen={setIsOpen} item={currentItem}/></div>
      )}
      <div className='pedidos'>
        {pedidos.map(pedido=>
            <Pedido key={pedido.id} pedido={pedido} ItemEscolhido={ItemEscolhido}/>
        )}
      </div>
    </div>
  );
}

export default App;
