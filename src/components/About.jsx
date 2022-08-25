import { Link } from 'react-router-dom'
import fotoHome from '../assets/imagenes/fotoHome.png'

const About = () => {


  return (
    <section className="about">

      <h1 className="heading"> Sobre <span>mi</span></h1>

      <div className="row-1">

        <div class="image">
          <img src={fotoHome} alt="foto Cesar" />
        </div>

        <div className="content">
        <h3>Mi nombre es César Fernández, soy un Full Stack Developer</h3>
        <p>Tengo preferencia por el Back-end, aunque igual hago Front-end, soy de los que trabajan por un bien comun por encima de mis preferencias, compartiendo informacion, planteando hipotesis y de esta forma, Sumar, no veo imposibles sino! para implementar soluciones creativas, aplicando un pensamiento critico, aprendo de los errores y no señalo a nadie, no me gusta el modo automatico ni el letargo en el trabajo, siempre en movimiento, pensando en ideas nuevas.</p>

        <div class="box-container">
            <div class="box">

                <p> <span> genero : </span> masculino </p>
                <p> <span> lenguaje : </span> español, ingles (actualmente Estudiando) </p>
                <p> <span> desarrollo : </span> full stack developer </p>
            </div>
            <div class="box">

                <p> <span> telefono : </span> +58 412 115 90 42 </p>
                <p> <span> email : </span> <Link to="mailto:homerogazze1015@gmail.com" rel="noopener noreferrer" target="_blank">cesar.bfernandez@gmail.com</Link></p>
                <p> <span> pais : </span> venezuela </p>
            </div>
        </div>
          <a href="/public/doc/CV_cesarFernandez.pdf" class="btn" download>descarga CV</a>
        <Link to="/contacto" class="btn">contratame</Link>
      </div>
      </div>

      <h1 class="heading"> <span> Mis </span> Habilidades </h1>

      <div class="row-2">

        <div className="box-container">

          <div class="box">
            <h3> Javascript <span><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/></span> </h3>
          </div>

          <div class="box">
            <h3> TypeScript <span><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40"/></span> </h3>
          </div>

          <div class="box">
            <h3> React <span><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/></span></h3>
          </div>

          <div class="box">
            <h3> Angular <span><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/angularjs/angularjs-original-wordmark.svg" alt="angular" width="40" height="40"/></span></h3>
          </div>

          <div class="box">
            <h3> NodeJs <span><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/></span></h3>
          </div>

          <div class="box">
            <h3> MongoDB <span><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40"/></span></h3>
          </div>

          <div class="box">
            <h3> NestJs <span><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nestjs/nestjs-plain.svg" alt="nestjs" width="40" height="40"/></span></h3>
          </div>

          <div class="box">
            <h3> Html <span><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/></span></h3>
          </div>

          <div className="box">
            <h3>Github <span><img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/></span></h3>
          </div>

          <div class="box">
            <h3> CSS <span><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/></span></h3>
          </div>

        </div>

      </div>


    </section>
  )
}

export default About
