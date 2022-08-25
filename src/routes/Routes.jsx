import { Route, Routes } from 'react-router-dom'
import Contacto from '../components/Contacto'
import ContenidoPrincipal from '../components/ContenidoPrincipal'
import Experiencia from '../components/Experiencia'
import Header from '../components/Header'

const Routes = () => {

  return (
    <Routes>
      <Header />
      <Route path="/" component={<ContenidoPrincipal />} />
      <Route path="/about" component={<About />} />
      <Route path="/contacto" component={<Contacto />} />
      <Route path="/experiencia" component={<Experiencia />} />
    </Routes>
  )

}
export default Routes
