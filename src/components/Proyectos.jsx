import cryto from '../assets/imagenes/crypto-min.png'
import ecommerce from '../assets/imagenes/maquetadoEcommerce.png'
import restaurante from '../assets/imagenes/restaurante-min.png'
const Proyectos = () => {

  return (
    <section class="portfolio" id="portfolio">

    <h1 class="heading"> <span> mis </span> proyectos </h1>

    <div class="box-container">

        <div class="box">
            <img src={restaurante} alt="foto-proyecto-restaurante"/>
            <h3> Maquetado Sitio Restaurante </h3>
            <div class="icons">
                <a href="https://clon-restaurante.vercel.app/" target="_blank" class="fas fa-share"></a>
                <a href="https://github.com/cfremoto/Clon-restaurante.git" target="_blank" class="fab fa-github"></a>
                <a href="#" class="fas fa-search"></a>
            </div>
        </div>

        <div class="box">
            <img src={ecommerce} alt="foto-maquetado-ecommerce"/>
            <h3> Maquetado de ecommerce </h3>
            <div class="icons">
                <a href="https://tienda-cesar-fernandez.vercel.app/" class="fas fa-share" target="_blank"></a>
                <a href="https://github.com/cfremoto/frontend-vikShop" target="_blank" class="fab fa-github"></a>
                <a href="#" class="fas fa-search"></a>
            </div>
        </div>

        <div class="box">
            <img src={cryto} alt="foto-maquetado-ecommerce"/>
            <h3> App Cryto </h3>
            <div class="icons">
                <a href="https://cesar-fernandez-cripto.vercel.app/" class="fas fa-share" target="_blank"></a>
                <a href="https://github.com/cfremoto/app-cripto.git" target="_blank" class="fab fa-github"></a>
                <a href="#" class="fas fa-search"></a>
            </div>
        </div>







    </div>

</section>
  )
}
export default Proyectos
