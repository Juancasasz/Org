import React from 'react'
import './Boton.css'

const Boton = (props) => {
  return (
    <button className='boton'>
      {props.texto}
    </button>
  )
}

export default Boton
