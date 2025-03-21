import { ListGroup } from "react-bootstrap"
import CloseButton from 'react-bootstrap/CloseButton'
import { cartContext } from '../context/cartContext'
import { useContext } from 'react'
import Button from 'react-bootstrap/Button'

function CartItem ({ product }) {

    const { eliminarProducto, sumarProducto, restarProducto, obtenerTotalProducto } = useContext(cartContext)

    const eliminarDelCarrito = (id) => {
       eliminarProducto(id)
    }

    const sumarCantidad = (id) => {
       sumarProducto(id)
    }

    const restarCantidad = (id) => {
       restarProducto(id)
    }     


   return (
        <ListGroup.Item key={product.id} className='d-flex justify-content-between align-items-center'>
               <img src={product.image} style={{width: '70px'}}/> 
               {product.name} 
               <div>${obtenerTotalProducto(product.id)}</div>
               <Button style={{width: '35px', height: '35px'}} variant="dark" onClick={ () => restarCantidad(product.id)}>-</Button> 
               <div>Cantidad: {product.quantity}</div> 
               <Button style={{width: '35px', height: '35px'}} variant="dark" onClick={ () => sumarCantidad(product.id)}>+</Button> 
               <CloseButton onClick={ () => eliminarDelCarrito(product.id)}/>
        </ListGroup.Item>
    )
}

export default CartItem