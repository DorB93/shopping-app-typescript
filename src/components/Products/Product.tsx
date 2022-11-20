import React from "react";
import "./Product.css";
import { NavLink } from "react-router-dom";
import { ProductCl } from "./../../hooks/useProducts";
import { useCart } from "../../contexts/CartContext";
import { useTheme } from "../../contexts/ThemeContaxt";

type ProductProps = {
	product: ProductCl;
};
function Product({ product }: ProductProps) {
	const { state } = useTheme();
	const { increaseItemQuantity } = useCart();
	const url = `/products/${product.id}`;
	return (
		<div
			className='product-container'
			style={{ color: state.color, fontFamily: state.font }}>
			<NavLink to={url}>
				<img src={product.image} alt={product.title} />
			</NavLink>
			<h3>{product.title}</h3>
			<p>{product.description}</p>
			<div className='pb-container'>
				<span>${Number(product.getPrice()).toFixed(2)}</span>
				<button
					onClick={() => {
						increaseItemQuantity(product.id);
					}}>
					Add to cart
				</button>
			</div>
		</div>
	);
}

export default Product;
