import React from 'react'
import './Testimonials.css'
import user1 from './images/user1.jpeg'
import user2 from './images/user2.jpeg'
import user3 from './images/user3.jpeg'



const Testimonials = () => {
  return (
    <div className='testimonials' id = 'testimonials'>
        <div className='container'>
            <h2>O que nossos clientes dizem:</h2>
            <span className='line'></span>
            <div className='content'>
                <div className='card'>
                    <img src={user1} alt='user1'/>
                    <p>Não é todos os dias que você se depara com um consultor financeiro apaixonado e confiável. Jens Herold é um verdadeiro profissional que faz seu trabalho muito bem. Obrigado Jens!</p>
                    <p><span>Johnson.M.J.</span></p>
                    <p>Direitor "Financial Times, Brasil"</p>
                </div>
                <div className='card'>
                    <img src={user2} alt='user2'/>
                    <p>Em apenas 2 reuniões muito curtas com Jens, ele conseguiu encontrar pessoalmente a solução para a minha situação e expectativas. Pontual, bem informado e muito confiável.</p>
                    <p><span>Carol Harper</span></p>
                    <p>Direitora Risktec Solutions Ltd</p>
                </div>
                <div className='card'>
                    <img src={user3} alt='user3'/>
                    <p>Um consultor financeiro muito profissional, que é fiel a sua palavra. Jens tem demonstrado uma grande integridade no tempo em que o conheci, e ele é rápido para responder às minhas preocupações.</p>
                    <p><span>Snow.J.R.</span></p>
                    <p>Managing Director BPW Global</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Testimonials