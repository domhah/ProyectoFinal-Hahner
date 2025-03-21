import CartList from './CartList'
import { cartContext } from '../context/cartContext'
import { useContext } from 'react'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router'

function CartContainer() {
    const { cart, vaciarCarrito, obtenerTotal } = useContext(cartContext)
    const navigate = useNavigate()

    const pagarCheckout = () => {
        navigate("/checkout")
    }

    const vaciarElCarrito = () => {
        vaciarCarrito()
    }

    const total = obtenerTotal()

    return (
        <div>
            {cart.length === 0 ? (<h3 className="mt-5 mx-auto" style={{width: '50%', textAlign: 'center'}}> En este momento tu carrito está vacío. Por favor dirigite al inicio o explorá nuestras secciones para agregar los productos que más te gusten. Muchas gracias!</h3>) : (
            <>
            <CartList cart = {cart} />
            <h4 className="text-center mt-3">Total: ${total}</h4>
            <div className='d-flex justify-content-center gap-4 mt-4'>
                <Button variant="primary" onClick={pagarCheckout}>Finalizar compra</Button>
                <Button variant="danger" onClick={vaciarElCarrito}>Vaciar carrito</Button>
            </div>
            </>
            )}
        </div>
    )
}


export default CartContainer