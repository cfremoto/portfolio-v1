
import emailjs from 'emailjs-com'
import { useRef, useState } from 'react'
import Swal from 'sweetalert2'

const Contacto = () => {

    const form = useRef()

    const initialState = {nombre:'', email:'',telefono:'', mensaje:'' }
    const [email, setEmail] = useState(initialState)
    const handle = (e) => setEmail({...email, [e.target.name]: e.target.value})

    const sendEmail = async (e) => {
        e.preventDefault()

        await emailjs.sendForm('service_9d5wjfp', 'template_0zw52ma', form.current, 'hKi06e2PGje7VXQ45')
        Swal.fire('Correo enviado Exitosamente!!!')
        setEmail(initialState)


    }

    return (

    <section className="contact" id="contact">

        <h1 className="heading"> contacta <span> me </span> </h1>

        <div className="icons-container">

            <div className="icons">
                <i className="fas fa-envelope"></i>
                <h3>Mis Correos</h3>
                <p>cesar.bfernandez@gmail.com</p>
                <p>cf.pags@gmail.com</p>
            </div>

            <div className="icons">
                <i className="fas fa-phone"></i>
                <h3>Mis Numeros</h3>
                <p>+58 412 115 90 42</p>
                <p>+58 414 857 49 07</p>
            </div>

            <div className="icons">
                <i className="fas fa-map-marker-alt"></i>
                <h3>Mi Direccion</h3>
                <p>Maturin Monagas Venezuela</p>
            </div>

        </div>

        <div className="row">

            <form onSubmit={sendEmail} ref={form}>

                    <input
                        type="text" name="nombre"placeholder="nombre" className="box" onChange={handle} value={email.nombre}/>
                    <input
                        type="email" name="email" placeholder="correo" className="box" onChange={handle} value={email.email}/>
                    <input
                        type="number" name="telefono" placeholder="numero" className="box" onChange={handle} value={email.telefono}/>

                    <textarea
                        name="mensaje" placeholder="mensaje" id="" cols="30" rows="10" onChange={handle} value={email.mensaje}></textarea>

                <input type="submit" value="enviar mensaje" className="btn"/>

            </form>

            <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62915.11134605023!2d-63.22583611023923!3d9.749589656238124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c3340ccdd67a481%3A0x498e5fe3065f3956!2sMatur%C3%ADn%206201%2C%20Monagas!5e0!3m2!1ses-419!2sve!4v1661448636062!5m2!1ses-419!2sve" allowfullscreen="" loading="lazy"></iframe>

        </div>


    </section>
    )
}
export default Contacto
