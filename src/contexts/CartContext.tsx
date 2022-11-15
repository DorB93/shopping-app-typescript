import React, { useState, ReactNode, createContext, useContext } from "react";
import Cart from "../components/Cart/Cart";
import useLocalStoerge from "../hooks/useLocalStoerge";
import useProducts, { ProductCl } from "../hooks/useProducts";

type CartProviderProps = {
	children: ReactNode;
};
type CartContextProps = {
	openCart: () => void;
	closeCart: () => void;
	removeCart: () => void;
	getItemQuantity: (id: number) => number;
	increaseItemQuantity: (id: number) => void;
	decreaseItemQuantity: (id: number) => void;
	removeItem: (id: number) => void;
	cart: CartItem;
	cartFullPrice: number;
	cartQuantity: number;
	catalog: ProductCl[];
};
type CartItem = {
	[key: number]: number;
};

const CartContext = createContext({} as CartContextProps);

export function useCart() {
	return useContext(CartContext);
}
export function CartProvider({ children }: CartProviderProps) {
	const [cart, setCart] = useLocalStoerge<CartItem>("cart", {});
	const [isOpen, setIsOpen] = useState(false);
	const catalog = useProducts();

	const cartQuantity = Object.values(cart).reduce((pre, curr) => pre + curr, 0);
	const cartFullPrice = Object.keys(cart)
		.map((id) => {
			const item = catalog.find((p) => p.id === Number(id));
			return item ? cart[Number(id)] * item.getPrice() : 0;
		})
		.reduce((pre, curr) => pre + curr, 0);

	const openCart = () => {
		setIsOpen(true);
	};
	const closeCart = () => {
		setIsOpen(false);
	};
	const removeCart = () => {
		setCart({});
	};

	function getItemQuantity(id: number) {
		if (!cart[id]) return 0;
		return cart[id];
	}
	function increaseItemQuantity(id: number) {
		if (!cart[id]) {
			cart[id] = 1;
			console.log(cart[id]);
			setCart((currCart) => {
				return { ...currCart };
			});
		} else {
			cart[id] += 1;
			console.log(cart[id]);
			setCart((pre) => {
				return { ...pre };
			});
		}
	}
	function removeItem(id: number) {
		delete cart[id];
		setCart((currCart) => {
			return { ...currCart };
		});
	}
	function decreaseItemQuantity(id: number) {
		if (cart[id] === 1) {
			removeItem(id);
		} else {
			cart[id]--;
			setCart((pre) => {
				return { ...pre };
			});
		}
	}

	return (
		<CartContext.Provider
			value={{
				getItemQuantity,
				increaseItemQuantity,
				decreaseItemQuantity,
				removeItem,
				openCart,
				removeCart,
				closeCart,
				cart,
				cartFullPrice,
				cartQuantity,
				catalog,
			}}>
			{children}
			{isOpen && <Cart />}
		</CartContext.Provider>
	);
}
