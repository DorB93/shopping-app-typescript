import React from "react";
import FilterSelector from "../components/Filter/FilterSelector";
import Products from "../components/Products/Products";
import { CategoryProvider } from "../contexts/CategoryContext";

function Store() {
	return (
		<>
			<CategoryProvider>
				<FilterSelector />
				<Products />
			</CategoryProvider>
		</>
	);
}

export default Store;
