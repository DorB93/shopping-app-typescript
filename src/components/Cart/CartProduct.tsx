import React from "react";
import { useCart } from "../../contexts/CartContext";
import { IoTrashOutline, IoRemove, IoAdd } from "react-icons/io5";
import "./CartProduct.css";
import { ProductCl } from "../../hooks/useProducts";

type CartProductProps = {
	item: ProductCl;
};
function CartProduct({ item }: CartProductProps) {
	const {
		increaseItemQuantity,
		getItemQuantity,
		decreaseItemQuantity,
		removeItem,
	} = useCart();
	return (
		<div className='cart-product'>
			<div className='image-container'>
				<img src={item.image} alt={item.title} />
			</div>
			<div className='detail-container'>
				<span className='product-name'>{item.title}</span>

				<div className='quantity-container'>
					<button
						onClick={() => {
							increaseItemQuantity(item.id);
						}}
						className='btn btn-qControl'>
						<IoAdd />
					</button>
					<span>{getItemQuantity(item.id)}</span>
					<button
						onClick={() => {
							decreaseItemQuantity(item.id);
						}}
						className='btn btn-qControl'>
						<IoRemove />
					</button>
					<span className='qNp-detail'>
						price: {item.getPrice().toFixed(2)}$
					</span>
				</div>
			</div>
			<div className='buttons-container'>
				<button
					onClick={() => {
						removeItem(item.id);
					}}
					className='btn btn-remove'>
					<IoTrashOutline />
				</button>
			</div>
		</div>
	);
}

export default CartProduct;
