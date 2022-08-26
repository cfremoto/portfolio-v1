import { Link } from 'react-router-dom'

const Nav = ({switchMenu}) => {

  return (
    <nav className="navbar" onClick={switchMenu}>
      <Link to="/" >Inicio</Link>
      <Link to="/about">Acerca de Mi</Link>
      <Link to="/experiencia">Experiencia</Link>
      <Link to="/proyectos">Proyectos</Link>
      <Link to="/contacto">Contactame</Link>
    </nav>
  )
}

export default Nav
