import { cartContext } from "./cartContext"
import { useState } from "react"

function CartProvider ({ children }) {
    const [cart, setCart] = useState([])

    const agregarCarrito = (product) => {
        const evitarDuplicados = cart.find(prod => prod.id === product.id)
        if (!evitarDuplicados) {
            setCart([...cart, product])
        }
    }

    const obtenerCantidad = () => {
        const cantidad = cart.map(product => product.quantity)
        const total = cantidad.reduce((acc, current) => acc + current, 0)

        return total
    }

    const obtenerTotal = () => {
        const preciosTotal = cart.map(item => item.price * item.quantity)
        const total = preciosTotal.reduce((acc, current) => acc + current, 0)

        return total
    }

    const obtenerTotalProducto = (id) => {
        const producto = cart.find(prod => prod.id === id)
        if (producto) {
            return producto.price * producto.quantity
         } else { return 0 } 
    }

    const vaciarCarrito = () => {
        setCart([])
    }

    const eliminarProducto = (id) => {
        setCart(cart.filter(prod => prod.id !== id))
    }

    const sumarProducto = (id) => {
        const suma = cart.map(prod => 
        prod.id === id ? {...prod, quantity: prod.quantity + 1} : prod )
        setCart(suma)
    }

    const restarProducto = (id) => {
        const resta = cart.map(prod => 
        (prod.id === id && prod.quantity > 1) ? {...prod, quantity: prod.quantity - 1} : prod )
        setCart(resta)
    }


    return (
        <cartContext.Provider value={{ agregarCarrito, obtenerCantidad, obtenerTotal, vaciarCarrito, eliminarProducto, sumarProducto, restarProducto, obtenerTotalProducto, cart }}>
            {children}
        </cartContext.Provider>
    )
}

export default CartProvider
