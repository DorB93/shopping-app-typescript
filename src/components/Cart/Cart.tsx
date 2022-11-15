import React from "react";
import { useCart } from "../../contexts/CartContext";
import CartProduct from "./CartProduct";
import "./Cart.css";
function Cart() {
	const { cart, cartFullPrice, cartQuantity, closeCart, removeCart, catalog } =
		useCart();

	const items = Object.entries(cart).map(([id, q]) => {
		const item = catalog.find((p) => p.id === Number(id));
		if (!item) return "";
		return <CartProduct key={item.id} item={item} />;
	});

	return (
		<div className='cart-absolute'>
			<div className='cart-container'>
				<button className='btn-close' onClick={closeCart}>
					X
				</button>
				<h3>Cart Items</h3>
				<div className='cart'>{items}</div>
				<div className='total-container'>
					<span>Total quantity: {cartQuantity}</span>
					<span>Total price: {cartFullPrice.toFixed(2)}$</span>
				</div>
				<div className='btn-container'>
					<button disabled={true}>Check Out</button>
					<button
						className='btn-reset'
						onClick={() => {
							removeCart();
							closeCart();
						}}>
						Reset
					</button>
				</div>
			</div>
		</div>
	);
}

export default Cart;
