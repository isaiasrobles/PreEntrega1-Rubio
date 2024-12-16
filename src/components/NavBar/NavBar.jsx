import CartWidget from "./CartWidget"
import { NavLink, Link, useNavigate } from "react-router-dom"
import { GoChevronLeft } from "react-icons/go";
import "./navbar.scss"

const NavBar = () => {

    const navigate = useNavigate()

return (
        <nav className="navbar">

            <button className="navigate-style" onClick={()=> navigate(-1)}> < GoChevronLeft /> </button>

            <Link to="/">
            <div className="brand">
                <img src="../../public/img/logo.png" alt="" />
            </div>
            </Link>

            <ul className="categories">
                <NavLink to="/category/remeras" className={ ( { isActive } ) => isActive ? "category-active" : "category"}>Remeras</NavLink>
                <NavLink to="/category/camperas" className={ ( { isActive } ) => isActive ? "category-active" : "category"}>Camperas</NavLink>
                <NavLink to="/category/buzos" className={ ( { isActive } ) => isActive ? "category-active" : "category"}>Buzos</NavLink>
            </ul>
        

        <CartWidget />
    </nav>
    )
}

export default NavBar
