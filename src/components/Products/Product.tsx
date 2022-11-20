import React from "react";
import "./Product.css";
import { ProductCl } from "./../../hooks/useProducts";
import { useCart } from "../../contexts/CartContext";
import { useTheme } from "../../contexts/ThemeContaxt";

type ProductProps = {
	product: ProductCl;
};
function Product({ product }: ProductProps) {
	const { state } = useTheme();
	const { increaseItemQuantity } = useCart();
	return (
		<div
			className='product-container'
			style={{ color: state.color, fontFamily: state.font }}>
			<img src={product.image} alt={product.title} />
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
