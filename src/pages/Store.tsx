import React from "react";
import FilterSelector from "../components/Filter/FilterSelector";
import Products from "../components/Products/Products";
import { CategoryProvider } from "../contexts/CategoryContext";
import ThemeProvider from "../contexts/ThemeContaxt";

function Store() {
	return (
		<>
			<CategoryProvider>
				<ThemeProvider>
					<FilterSelector />
					<Products />
				</ThemeProvider>
			</CategoryProvider>
		</>
	);
}

export default Store;
