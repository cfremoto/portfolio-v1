import { Link } from 'react-router-dom'
import DarkMode from './DarkMode'
import Nav from "./Nav"
import Redes from "./Redes"

const Header = () => {


  return (
    <header>
      <Link to="/" className="logo"> <span>César</span> Fernández </Link>
      <DarkMode />
      <Nav />
      <Redes />
    </header>
  )
}

export default Header
