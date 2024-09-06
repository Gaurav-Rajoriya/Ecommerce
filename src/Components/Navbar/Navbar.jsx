import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Assest/logo.png'
import cart_icon from '../Assest/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
const Navbar = () => {

    const [menu,setMenu] = useState("shop");
    const {getTotalCartItem}= useContext(ShopContext);
    const [isopenMenu, setisopenMenu] = useState(false)

    const handleChange = () =>{
      setisopenMenu(!isopenMenu)
    }

    const handleClose = () =>{
      setisopenMenu(false)
    }

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <Link to={'/'}><img src={logo} alt="" /></Link>
        <p>SHOPPER</p>
      </div>
          <ul className={`nav-menu ${isopenMenu ? 'click' : ''}`}>
            <li onClick={()=>{setMenu("shop"); handleClose();}}><Link style={{textDecoration:'none'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("mens"); handleClose();}}><Link style={{textDecoration:'none'}} to='/mens'>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("womens"); handleClose();}}><Link style={{textDecoration:'none'}} to='/womens'>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kids"); handleClose();}}><Link style={{textDecoration:'none'}} to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
          </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt="" /> </Link> 
        <div className="nav-cart-count">{getTotalCartItem()}</div>
        <div className='responsive'><i onClick={handleChange} class="ri-menu-2-line"></i></div>
      </div>     
    </div>
  )
}

export default Navbar