import { Route, Routes } from 'react-router-dom'
import About from '../components/About'
import Contacto from '../components/Contacto'
import ContenidoPrincipal from '../components/ContenidoPrincipal'
import Experiencia from '../components/Experiencia'
import Proyectos from '../components/Proyectos'

const Router = () => {

  return (
  <Routes>
        <Route path="/" element={<ContenidoPrincipal />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/experiencia" element={<Experiencia />} />
    </Routes>
  )

}
export default Router
