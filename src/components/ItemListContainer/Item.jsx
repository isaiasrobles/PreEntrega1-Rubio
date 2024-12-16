import { Link } from "react-router-dom"
import "./item.css"

const Item = ({ product }) => {
    return (
    <Link to={"/detail/"+product.id} className="item">
        <img src={product.image} width={200} alt=""></img>
        <p>{product.name}</p>
        <p>Precio: ${product.price}</p>
    </Link>
    )
}

export default Item
