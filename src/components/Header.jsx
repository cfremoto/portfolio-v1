import { Link } from 'react-router-dom'
import Nav from "./Nav"
import Redes from "./Redes"

const Header = () => {


  return (
    <header>
      <Link to="/" className="logo"> <span>César</span> Fernández </Link>
      <Nav />
      <Redes />
    </header>
  )
}

export default Header
