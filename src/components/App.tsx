import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./../pages/Home";
import Store from "../pages/Store";
import About from "../pages/About";
import NavBar from "./NavBar/NavBar";
import { CartProvider } from "../contexts/CartContext";
import { CategoryProvider } from "../contexts/CategoryContext";
function App() {
	return (
		<>
			<CartProvider>
				<NavBar />
				<div className='App-container'>
					<Routes>
						<Route path='/' element={<Home />}></Route>
						<CategoryProvider>
							<Route path='/store' element={<Store />}></Route>
						</CategoryProvider>
						<Route path='/about' element={<About />}></Route>
					</Routes>
				</div>
			</CartProvider>
		</>
	);
}

export default App;
