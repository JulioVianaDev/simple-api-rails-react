import './Pedido.css'

function Pedido(props) {
  return (
    <div className='card' onClick={()=>props.ItemEscolhido(props.pedido)}>
      Nome: {props.pedido.name}<br/>
      Quantidade: {props.pedido.qtd_order}<br/>

      
    </div>
  )
}

export default Pedido