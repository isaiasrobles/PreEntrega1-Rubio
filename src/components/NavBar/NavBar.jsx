import CartWidget from "./CartWidget"
import "./navbar.scss"


const NavBar = () => {
return (
        <nav className="navbar">

            <div className="brand">
                <img src="https://img.freepik.com/premium-vector/food-drink-logo-design-product-restaurant_125269-77.jpg?w=740" alt="" />
                <p className="brand-text">VINTAGE LABEL</p>
            </div>

            <ul className="categories">
                <li>Remeras</li>
                <li>Camperas</li>
                <li>Buzos</li>
            </ul>
        

        <CartWidget />
    </nav>
    )
}

export default NavBar
