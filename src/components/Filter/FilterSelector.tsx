import React from "react";

import useFetch from "../../hooks/useFetch";
import FilterOption from "./FilterOption";
import "./FilterSelector.css";

function FilterSelector() {
	const categories: string[] = [
		"All",
		...useFetch("https://fakestoreapi.com/products/categories"),
	];
	const selection = categories.map((atr: string) => (
		<FilterOption key={atr} title={atr} />
	));
	return <div className='filter-bar-container'>{selection}</div>;
}

export default FilterSelector;
