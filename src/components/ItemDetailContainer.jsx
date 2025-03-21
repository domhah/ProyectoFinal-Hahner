import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { obtenerProductoIndividual } from '../firebase/database'
import ItemDetail from './ItemDetail'

function ItemDetailContainer () {
    const [detail, setDetail] = useState()
    const { id } = useParams()

    useEffect(() => {
        const obtenerDetail = async () => {
            const respuesta = await obtenerProductoIndividual(id)
            setDetail(respuesta)
        }
        obtenerDetail()
    }, [id])

    return (
        <ItemDetail detailProd={detail} />
    )
}

export default ItemDetailContainer