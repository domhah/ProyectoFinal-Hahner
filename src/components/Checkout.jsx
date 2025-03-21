import { useContext } from 'react' 
import { cartContext } from '../context/cartContext'
import { serverTimestamp } from 'firebase/firestore'
import { crearOrdenCompra } from '../firebase/database'
import { useNavigate } from 'react-router'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import CheckoutForm from './CheckoutForm'

function Checkout () {
    const { cart, obtenerTotal, vaciarCarrito } = useContext(cartContext)
    const Sweetalert = withReactContent (Swal)
    const navegar = useNavigate()

    const enviarFormulario = async (e) => {
        e.preventDefault()
    
        const formulario = e.target 
        const nombre = formulario.name.value
        const apellido = formulario.surname.value
        const mail = formulario.email.value 
        const telefono = formulario.phone.value 
    
    const order = {
        items: cart,
        usuarioDatos: {name: nombre, surname: apellido, email: mail, phone: telefono},
        horario: serverTimestamp(),
        total: obtenerTotal()
    }

    const id = await crearOrdenCompra(order)

    Sweetalert.fire ({
        title: <p>Muchas gracias por tu compra!</p>,
        text: `Este es el ID de tu orden: ${id}`,
        icon: "success",
    }).then (() => {
        navegar ('/')
        vaciarCarrito()
    })

}

  return (
      <CheckoutForm enviarFormulario={enviarFormulario}/>
    )

}

export default Checkout