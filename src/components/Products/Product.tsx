import React from "react";
import "./Product.css";
import { ProductCl } from "./../../hooks/useProducts";
import { useCart } from "../../contexts/CartContext";

type ProductProps = {
	product: ProductCl;
};
function Product({ product }: ProductProps) {
	const { increaseItemQuantity } = useCart();
	return (
		<div className='product-container'>
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
