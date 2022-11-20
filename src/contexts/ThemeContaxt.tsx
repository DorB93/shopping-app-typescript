import React, { ReactNode, createContext, useContext, useReducer } from "react";

type ThemeProviderProps = {
	children: ReactNode;
};
type ThemeContextProps = {
	state: ReducerState;
	setThemeColor: (newColor: string) => void;
	setThemeFont: (newFont: string) => void;
};
type ReducerState = {
	color: string;
	font: string;
};
interface ChangeAction {
	type: string;
	payload: string;
}

export const COLORS: string[] = ["black", "red", "blue"];
export const FONTS: string[] = ["ariel", "david", "Helvetica", "sans-serif"];

export const CHANGED_COLOR_ACTION = "changed_color";
export const CHANGED_FONT_ACTION = "changed_font";

const ThemeContext = createContext({} as ThemeContextProps);

function reducer(state: ReducerState, action: ChangeAction) {
	switch (action.type) {
		case CHANGED_COLOR_ACTION: {
			return {
				...state,
				color: action.payload,
			};
		}
		case CHANGED_FONT_ACTION: {
			return {
				...state,
				font: action.payload,
			};
		}
		default:
			return state;
	}
}

export function useTheme() {
	return useContext(ThemeContext);
}

function ThemeProvider({ children }: ThemeProviderProps) {
	const [state, dispatch] = useReducer(reducer, {
		color: COLORS[0],
		font: FONTS[0],
	} as ReducerState);
	return (
		<ThemeContext.Provider
			value={{
				state,
				setThemeColor: (newColor) =>
					dispatch({ type: CHANGED_COLOR_ACTION, payload: newColor }),
				setThemeFont: (newFont) =>
					dispatch({ type: CHANGED_FONT_ACTION, payload: newFont }),
			}}>
			{children}
		</ThemeContext.Provider>
	);
}

export default ThemeProvider;
