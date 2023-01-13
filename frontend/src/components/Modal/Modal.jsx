import React from 'react'
import tomates from '../../images/tomatao.png'
import DateAmericanToDateBrazilian from '../../validationsFunctions/DateAmericanToDateBrazilian'
function Modal(props) {
  function FecharModalEApagar(){
    props.deleteOrder(props.item.id);
    props.setIsOpen(false);
    alert("Apagou");
  }
  
  return (
    < >
      {
        props.isOpen && (
          <>
            <div className="modal-content">
              <div className="botao-fechar-modal">
                <button onClick={()=>FecharModalEApagar()}>
                  Apagar
                </button>
                <button onClick={()=>props.setIsOpen(false)}>
                  Fechar
                </button>
              </div>
              <div className="conteudo">
                <div className="informacao">
                  <div className="topo">
                    <div className='qtd'>  
                      {props.item.qtd_order}
                    </div>
                    <div className='nome'>
                      {props.item.nome}
                    </div>
                  </div>
                  
                  <div className="desc">
                    {props.item.desc}
                  </div>
                  <div className="data-do-pedido">
                    {DateAmericanToDateBrazilian(props.item.date_buy)}
                  </div>
                </div>
                <div className="img-product">
                  <img className="imagem" src={tomates} alt={`imagem do ${props.item.name} não encontrada`} />
                </div>
              </div>
              
              
            </div>
          
          
          
          </>
        )
      }

    </>
  )
}

export default Modal
