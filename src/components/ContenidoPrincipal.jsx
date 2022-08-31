import { Link } from 'react-router-dom'
import fotoNueva from '../assets/imagenes/fotoNueva.png'
const ContenidoPrincipal = () => {

  return (
    <section className="home">
      <div className="content">
        <span className="hi">Hola..!!!.</span>
        <h3>Soy <span> César Fernández</span>  </h3>
        <p className="info" >Soy un desarrolador Full-Stack..</p>
        <p className="text"> mi objetivo es incorporarme a un equipo de desarrollo para aportar mis conocimientos y habilidades como pensamiento creativo, liderazgo, resolución de problemas, trabajo en equipo y comunicación, las cuales desarrollé gracias a mi experiencia previa de gerente. </p>
        <Link to="/about" className="btn">sobre mi</Link>
      </div>

      <div className="image">
        <img src={fotoNueva} alt="foto cesar" />
      </div>
    </section>
  )
}

export default ContenidoPrincipal
