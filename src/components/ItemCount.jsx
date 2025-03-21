import { useContext, useState } from 'react'
import { cartContext } from '../context/cartContext'
import Button from 'react-bootstrap/Button'

function ItemCount ({ product }) {
    const [count, setCount] = useState (1)
    const { agregarCarrito } = useContext(cartContext)
    const [enCarrito, setEnCarrito] = useState (false)


    const sumarCarrito = () => {
        setCount(count + 1)
        } 

    const restarCarrito = () => {
        if (count > 1){  
        setCount(count - 1)}
    }
       

const agregarAlCarrito = () => {
    agregarCarrito({...product, quantity: count})
    setEnCarrito(true)
}

    return ( 
        (!enCarrito ? (
            <>
                <Button style={{borderRadius: '7%', width: '35px', marginRight: '15px'}} variant="dark" onClick={restarCarrito}>-</Button>
                Cantidad: {count}
                <Button style={{borderRadius: '7%', width: '35px', marginLeft: '15px'}} variant="dark" onClick={sumarCarrito}>+</Button>
                <Button style={{borderRadius: '7%', width: '180px', marginTop: '15px'}} variant="dark" onClick={agregarAlCarrito}>Agregar al Carrito</Button>
            </>
        ) : (<div style={{color: "green", fontWeight: "bold"}}>Tu producto fue agregado al carrito con éxito!</div>)
        )
    )
}

export default ItemCount