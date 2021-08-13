import React from 'react'
import { FiShoppingCart } from 'react-icons/fi'
import '../style/navbar.css'
import { Link } from 'react-router-dom'

function Navbar({bagList}) {

    return (
        <div className='navbar_container' >
            <Link to="/" >FunStock.</Link>
            <div className='navbar_center' >
                <Link to="/men" >Men</Link>
                <Link to="/women" >Women</Link>
                <Link to="/accessoires"> Accessoires</Link>   
            </div>
            <Link to = "/cart" >{bagList.length}<FiShoppingCart/></Link>
        </div>
    )
}

export default Navbar
