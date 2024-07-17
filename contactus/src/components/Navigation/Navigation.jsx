import React from 'react'
import styles from './Navigation.module.css';
import logoImg from '../images/logo.png';


const Navigation = () => {


  return (

    <nav className={`${styles.navigation} container`}>

        <div className='logo'>
            <img src={logoImg} alt="logo images" />
        </div>

        <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

    </nav>
  )
}

export default Navigation