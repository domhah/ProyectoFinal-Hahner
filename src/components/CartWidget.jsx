import Button from 'react-bootstrap/Button'
import { cartContext } from '../context/cartContext'
import { useContext } from 'react'
import { useNavigate } from 'react-router'

function CartWidget() {

  const { obtenerCantidad } = useContext(cartContext)
  const navigate = useNavigate()

  const cantidadCarrito = obtenerCantidad()
  const navegarCarrito = () => {
    navigate ('/cart')
  }

  return (
    <>
      <Button variant="danger" onClick={navegarCarrito}>Carrito 🛒 ( {cantidadCarrito} )</Button>
    </>
  );
}

export default CartWidget