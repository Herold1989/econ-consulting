import React from 'react'
import './Demo.css'

const Demo = () => {
    return (
        <div className='demo' id='demo'>
            <div className='container'>
                <div className='col-1'>
                    <p>Mais de 100 planejadores financeiros,</p>
                    <p>Uma Filosofia</p>
                    <p>Cada um de nossos consultores financeiros recebe treinamento rigoroso de acordo com a filosofia de John Doe baseada em pesquisas acadêmicas (incluindo a de um ganhador do Prêmio Nobel em Economia) e Finanças Comportamentais.</p>
                    <button className='button'>Obtenha sua análise financeira gratuita</button>
                </div>
                <div className='col-2'>
                    <iframe width='570' height='320' src='https://www.youtube.com/embed/oeqP5JtihMA' title='Youtube video player' frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                </div>
            </div>
        </div>
    )
}

export default Demo
