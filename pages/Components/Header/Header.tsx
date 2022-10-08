import React from 'react'
import styles from '../../../styles/Header.module.css'
import HeaderNavLink from './HeaderNavLink'
import Image from 'next/image'
import logo from '../../Assets/logo.png'
import { Dropdown } from '../Dropdown/Dropdown'
const headernavlinks=[
    {title:'Destination'},
    {title:'Hotels'},
    {title:'Flights'},
    {title:'Bookings'},
    {title:'Login'}


]
const Header = () => {
  return (
    <div className={styles.header_container}>
        <div className={styles.logo_container}>
            <Image src={logo}></Image>
        </div>
        <div className={styles.rightside_text_container}>
            {headernavlinks.map((props,i)=>(
                <HeaderNavLink {...props}/>
            ))}
            <button className={styles.signup_button}>SignUp</button>
            <Dropdown/>
        </div>
        


    </div>
  )
}
export default Header
