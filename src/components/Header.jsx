import { useState } from 'react'
import { Link } from 'react-router-dom'
import DarkMode from './DarkMode'
import Nav from "./Nav"
import Redes from "./Redes"


const Header = () => {

  const [burgerClass, setBurgerClass] = useState('fas fa-bars')
  const [headerClass, setHeaderClass] = useState('')
  const switchMenu = () => {
    if (burgerClass === 'fas fa-bars') {
      setBurgerClass('fas fa-bars fa-times')
      setHeaderClass('active')
    } else {
      setBurgerClass('fas fa-bars')
      setHeaderClass('')
    }
  }

  return (
    <>
    <div
        id="menu-bars"
        className={burgerClass}
        onClick={switchMenu}
      ></div>

    <header className={headerClass}>
      <Link to="/" className="logo"> <span>César</span> Fernández </Link>
      <DarkMode />
      <Nav />
      <Redes />
      </header>
    </>
  )
}

export default Header
