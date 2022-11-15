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
					<NavLink to='/'>
						<img className='logo' src='/logo.png' alt='logo' />
					</NavLink>
				</div>

				<div className='nav-link'>
					<NavLink to='/about'>About</NavLink>
				</div>
			</div>
			<div className='cart-icon-container'>
				<div className='nav-link'>
					<NavLink to='/login'>Log in</NavLink>
				</div>
				<div className='nav-link'>
					<NavLink to='/signup'>Sign Up</NavLink>
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
