import React from "react";
import "./FilterOption.css";
import { useCategory } from "../../contexts/CategoryContext";

type FilterProps = {
	title: string;
};
function FilterOption({ title }: FilterProps) {
	const { selectCategory } = useCategory();
	return (
		<button className='filter' onClick={() => selectCategory(title)}>
			{title}
		</button>
	);
}

export default FilterOption;
