import React, { useState, ReactNode, createContext, useContext } from "react";
import useFetch from "../hooks/useFetch";

type CategoryProviderProps = {
	children: ReactNode;
};
type CategoryContextProps = {
	selectCategory: (category: string) => void;
	category: string;
};
const CategoryContext = createContext({} as CategoryContextProps);

export function useCategory() {
	return useContext(CategoryContext);
}

export function CategoryProvider({ children }: CategoryProviderProps) {
	const [category, setCategory] = useState("All");
	const selectCategory = (category: string) => {
		setCategory(category);
	};
	return (
		<CategoryContext.Provider
			value={{
				category,
				selectCategory,
			}}>
			{children}
		</CategoryContext.Provider>
	);
}
