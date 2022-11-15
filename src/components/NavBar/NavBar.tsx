import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { HiShoppingCart } from "react-icons/hi";
import { useCart } from "../../contexts/CartContext";

function NavBar() {
	const { openCart, cartQuantity } = useCart();

	return (
		<div className='container'>
			<div className='nav-container'>
				<div className='nav-link'>
					<NavLink to='/'>Home</NavLink>
				</div>
				<div className='nav-link'>
					<NavLink to='/store'>Store</NavLink>
				</div>
				<div className='nav-link'>
					<NavLink to='/about'>About</NavLink>
				</div>
			</div>
			<div className='cart-icon-container'>
				<div className='nav-link'>
					<NavLink to='/login'>Login</NavLink>
				</div>
				<div className='nav-link'>
					<NavLink to='/signup'>SignUp</NavLink>
				</div>
				{cartQuantity > 0 && (
					<button className='cart-icon' onClick={openCart}>
						<HiShoppingCart />
						<div className='cart-count'>{cartQuantity}</div>
					</button>
				)}
			</div>
		</div>
	);
}

export default NavBar;
