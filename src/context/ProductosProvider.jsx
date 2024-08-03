import {  useEffect, useState } from "react"
import { ProductosContext } from "./ProductosContext"

export const ProductosProvider = ({children}) => {
    const [productos, setProductos] = useState([])
    
    const fetchProductos = async()=>{
        try {
            const results = await fetch('https://fakestoreapi.com/products')
            const data = await results.json()
            console.log(data)
            setProductos(data)
        } catch (error) {
            console.log("Error al consultar los productos",error)
        }
    }
    //para hacer la llamada apenas arranque
    useEffect(() => {
      fetchProductos()
    }, [])
  return (
    <ProductosContext.Provider value={{productos}}>
        {children}
    </ProductosContext.Provider>
  )
}
