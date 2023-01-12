import React from 'react'

function Modal(props) {
  
  return (
    < >
      {
        props.isOpen && (
          <div className='modal'>
            <div className="modal-content">
              {props.item.name}
            </div>
              <button onClick={()=>props.setIsOpen(false)}>
                Fechar
              </button>
          </div>
        )
      }

    </>
  )
}

export default Modal
