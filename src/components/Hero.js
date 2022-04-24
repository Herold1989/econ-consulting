import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero' id='hero'>
        <div className='content'>
            <p>Call us</p>
            <p>+55 11 123-4567</p>
            <p>Você escolhe</p>
            <p>o caminho para seu sucesso...</p>
            <button href='/' className='button'>Consulta Gratuita</button>
        </div>
    </div>
  )
}

export default Hero
