import React from "react";
import FilterSelector from "../components/Filter/FilterSelector";
import Products from "../components/Products/Products";
import { CategoryProvider } from "../contexts/categoryContext";

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
