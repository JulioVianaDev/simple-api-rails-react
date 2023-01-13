import {Navbar} from './components/Navbar/Navbar';
import {useState,useEffect} from 'react'
import './App.css';
import axios from 'axios'
import Pedido from './components/Pedidos/Pedido';
import Modal from './components/Modal/Modal';
import './components/Modal/Modal.css'
function App() {
  const [pedidos,setPedidos]= useState([])
  const [isOpen, setIsOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);

  useEffect(()=>{
    handleGetDataToApiFirstTime();
  },[])

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
  
  
  
  function ItemEscolhido(item){
    setIsOpen(true);
    setCurrentItem(item);
  }
  
  function handleGetDataToApiFirstTime(){
    axios.get('http://localhost:3001/api/orders')
      .then(respostaDaRequisicao=>{
          setPedidos(respostaDaRequisicao.data)
      })
  }
  function deleteOrder(id){
    axios.delete(`http://localhost:3001/api/orders/${id}`)
      .then(res=>{
        setPedidos(pedidos.filter(p => p.id !== id))
      })
      .catch(error=>console.log("erro ao deletar o pedido: ", error))
  }

  function updateOrder(id,order){
    axios.put(`http://localhost:3001/api/orders/${id}`,{order})
      .then(res =>{
        let newUpdatedOrder = pedidos.map(p=>{
          if(p.id === id){
            return res.data
          }
          return p
        })
        setPedidos(newUpdatedOrder)
      })
      .catch(err =>console.log('não foi possivel atualizar o pedido',err))
  }

  function createOrder(order){
    axios.post(`http://localhost:3001/api/orders`,{order})
      .then(res=>{
        setPedidos([...pedidos,res.data])
      })
      .catch(err=>console.log("não foi possivel criar o pedido: ",err))
  }
  return (
    <div className="App">
      <Navbar />
      <button onClick={handleGetDataToApi}>Pegar dados</button>
      {pedidos.length}<br></br>
      <br></br>

      {isOpen && (
        <div className='Modal-overlay'>
          <Modal 
            deleteOrder={deleteOrder} 
            isOpen={isOpen} 
            setIsOpen={setIsOpen} 
            item={currentItem}
          />
        </div>
      )}
      <div className="pedidos">
          {pedidos.map(
            pedido=><Pedido key={pedido.id} pedido={pedido} ItemEscolhido={ItemEscolhido}/>
          )}
      </div>
    </div>
  );
}

export default App;
