import fotoHome from '../assets/imagenes'

const About = () => {


  return (
    <section className="about">
      <h1 className="heading"> Sobre <span>mi</span></h1>

      <div className="row-1">
        <img src={fotoHome} alt="foto-cesar" />
      </div>

      <div className="content">
        <h3>Mi nombre es César Fernández, soy un Full Stack Developer</h3>
        <p>Tengo preferencia por el Back-end, aunque igual hago Front-end, soy de los que se trabajan por un bien comun por encima de mis preferencias, compartiendo informacion, planteando hipotesis y de esta forma, Sumar, no veo imposibles sino! para implementar soluciones creativas, aplicando un pensamiento critico, aprendo de los errores y no señalo a nadie, no me gusta el modo automatico ni el letargo en el trabajo, siempre en movimiento, pensando en ideas nuevas.</p>

        <div class="box-container">
            <div class="box">

                <p> <span> genero : </span> masculino </p>
                <p> <span> lenguaje : </span> español, english </p>
                <p> <span> desarrollo : </span> full stack developer </p>
            </div>
            <div class="box">

                <p> <span> telefono : </span> +58 412 115 90 42 </p>
                <p> <span> email : </span> cesar.bfernandez@gmail.com </p>
                <p> <span> pais : </span> venezuela </p>
            </div>
        </div>
        <a href="#" class="btn">descarga CV</a>
        <a href="#" class="btn">contratame</a>
      </div>

    </section>
  )
}

export default About
