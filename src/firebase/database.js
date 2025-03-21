import { getFirestore, collection, getDocs, query, where, doc, getDoc, addDoc } from "firebase/firestore"
import { app } from './configuration'

const database = getFirestore(app)

export const obtenerProductos = async () => {
    const querySnapshot = await getDocs(collection(database, "products"))
    const products = []
    querySnapshot.forEach((doc) => {
    products.push({...doc.data(), id: doc.id})
})
    return products
}

export const obtenerProductosCategoria = async (categoria) => {
    const q = query(collection(database, "products"), where("category", "==", categoria))
    const querySnapshot = await getDocs(q)
    const products = []
    querySnapshot.forEach((doc) => {
        products.push({...doc.data(), id: doc.id})
    })
    return products
}

export const obtenerProductoIndividual = async (id) => {
    const docRef = doc(database, "products", id)
    
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
        return {...docSnap.data(), id: docSnap.id}
    } else {
    console.log("El documento no existe")
    }
}

export const crearOrdenCompra = async (orden) => {
    try {
        const docRef = await addDoc(collection(database, "orders"), orden)
        return docRef.id
    }
        catch (error) {
            console.error("Error añadiendo Documento: ", error)
        }
}