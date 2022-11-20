import React from "react";
import { COLORS, FONTS, useTheme } from "../../contexts/ThemeContaxt";

import useFetch from "../../hooks/useFetch";
import FilterOption from "./FilterOption";
import "./FilterSelector.css";

function FilterSelector() {
	const state = useTheme();
	console.log(state);

	const { setThemeColor, setThemeFont } = state;
	const categories: string[] = [
		"All",
		...useFetch("https://fakestoreapi.com/products/categories"),
	];
	const selection = categories.map((atr: string) => (
		<FilterOption key={atr} title={atr} />
	));
	return (
		<>
			<div className='head-container'>
				<div className='filter-bar-container'>{selection}</div>
				<div className='theme-container'>
					<select onChange={(e) => setThemeColor(e.target.value)}>
						{COLORS.map((color) => (
							<option value={color}>{color}</option>
						))}
					</select>
					<select onChange={(e) => setThemeFont(e.target.value)}>
						{FONTS.map((font) => (
							<option value={font}>{font}</option>
						))}
					</select>
				</div>
			</div>
		</>
	);
}

export default FilterSelector;
