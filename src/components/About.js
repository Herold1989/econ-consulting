import React from 'react'
import john from './images/john-doe.png'
import './About.css'

const About = () => {
  return (
    <div className='about' id = 'about'>
        <div className='container'>
            <img src={john} alt = 'john' />
            <div className='col-2'>
                <h2>About</h2>
                <span className='line'></span>
                <p>HeroldEcon é uma empresa de Planejamento Financeiro Internacional com escritórios em múltiplas jurisdições em todo o mundo. Trabalhar com HeroldEcon me dá a capacidade de aconselhar expatriados internacionais que vivem no Oriente Médio de onde eu moro em São Paulo, Brasil.</p>
                <p>Eu sou Jens Herold CEO de uma empresa independente de planejamento financeiro chamada HeroldEcon.</p>
                <button className='button'> Explora Mais</button>

            </div>
        </div>

    </div>
  )
}

export default About