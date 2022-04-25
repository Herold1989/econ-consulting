import React from 'react'
import './Footer.css'


const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className='container'>
            <ul>
                <li className='nav-item'>
                    <a href='#hero'>Home</a>
                </li>
                <li className='nav-item'>
                    <a href='#about'>Sobre nós</a>
                </li>
                <li className='nav-item'>
                    <a href='#testimonials'>Depoimentos</a>
                </li>
                <li className='nav-item'>
                    <a href='#demo'>Conhecer</a>
                </li>
            </ul>
            <div className='bottom'>
                <span className='line'>
                </span>
                <p> 2022 HeroldEcon Ltda. -  All rights reserved</p>
            </div>
        </div>

    </div>
  )
}

export default Footer