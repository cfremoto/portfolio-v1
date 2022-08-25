import { Link } from 'react-router-dom'
import fotoHome from '../assets/imagenes/fotoHome.png'
const ContenidoPrincipal = () => {

  return (
    <section className="home">
      <div className="content">
        <span className="hi">Hi There...</span>
        <h3>I am <span> César A. Fernández</span>  </h3>
        <p className="info" > I am a Full-Stack Developer </p>
        <p className="text"> Soy Full Stack Developer, mi objetivo es incorporarme a un equipo de desarrollo para aportar mis conocimientos y habilidades como pensamiento creativo, liderazgo, resolución de problemas, trabajo en equipo y comunicación, las cuales desarrollé gracias a mi experiencia previa de gerente. </p>
        <Link to="/about" className="btn">sobre mi</Link>
      </div>

      <div className="image">
        <img src={fotoHome} alt="foto cesar" />
      </div>
    </section>
  )
}

export default ContenidoPrincipal
