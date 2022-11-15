import React from "react";
import FilterSelector from "../components/Filter/FilterSelector";
import Products from "../components/Products/Products";

function Store() {
	return (
		<>
			<FilterSelector />
			<Products />
		</>
	);
}

export default Store;
