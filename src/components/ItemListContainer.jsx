import { useState, useEffect } from "react"
import { useParams } from "react-router"
import { obtenerProductos, obtenerProductosCategoria } from "../firebase/database"
import ItemList from './ItemList'

function ItemListContainer () {
    const [items, setItems] = useState([])
    const { id } = useParams()
    useEffect (() => { 
        if (id) {
            obtenerProductosCategoria(id).then(res => setItems(res))
        } else {
            obtenerProductos().then(res => setItems(res))
        }
        
    }, [id])

    return (
        <ItemList items={items} />
    )
}

export default ItemListContainer