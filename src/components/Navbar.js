import React from 'react'
import { FiShoppingCart } from 'react-icons/fi'
import '../style/navbar.css'

function Navbar() {
    return (
        <div className='navbar_container' >
            <div>FunStock.</div>
            <div className='navbar_center' >
                <div>Men</div>
                <div>Women</div>
                <div>Accessoires</div>
            </div>
            <div>
                <FiShoppingCart/>
            </div>
        </div>
    )
}

export default Navbar
