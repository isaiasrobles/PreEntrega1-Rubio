import { useState, useEffect } from "react"
import { getProducts } from "../../../Data/data.js"
import ItemList from "./ItemList.jsx"
import { useParams } from "react-router-dom"
import { ClipLoader } from "react-spinners"
import "./item-list-container.css"


const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)


    const { idCategory } = useParams()

    useEffect(()=>{

        setLoading(true)

        getProducts()
        .then((data)=> {

            if(idCategory){
                const filterProducts = data.filter( (product) => product.category === idCategory )
                setProducts(filterProducts)
            }else{
                setProducts(data)
            }
            })
            .finally(()=> {
                setLoading(false)
            })
    }, [idCategory])
    
    return (
    <div className="item-list-container"> 
        <h1>{ greeting }</h1>
        {
            loading === true ? ( <div><ClipLoader /></div> ) : ( <ItemList products={products} /> )
        }
    </div>
)
}

export default ItemListContainer
