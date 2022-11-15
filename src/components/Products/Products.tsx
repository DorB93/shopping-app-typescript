import React from "react";
import Product from "./Product";
import useProducts, { ProductCl } from "../../hooks/useProducts";
import "./Products.css";
import { useCategory } from "../../contexts/CategoryContext";

function Products() {
	const { category } = useCategory();
	const catalog = useProducts();

	const products = catalog
		.filter((product) => {
			if (category === "All") return product;
			return product.category === category;
		})
		.map((p) => <Product key={p.id} product={p as ProductCl} />);

	return <div className='container-products'>{products}</div>;
}

export default Products;
