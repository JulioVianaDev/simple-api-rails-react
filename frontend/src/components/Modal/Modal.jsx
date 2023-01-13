import React from 'react'

function Modal(props) {
  
  return (
    < >
      {
        props.isOpen && (
          <>
          <div className='odal'>
            <div className="modal-content">
              {props.item.name}
              <button onClick={()=>props.setIsOpen(false)}>
                Fechar
              </button>
            </div>
              
          </div>
          
          
          
          </>
        )
      }

    </>
  )
}

export default Modal
