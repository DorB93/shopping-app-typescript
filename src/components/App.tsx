import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./../pages/Home";
import Store from "../pages/Store";
import About from "../pages/About";
import NavBar from "./NavBar/NavBar";
import { CartProvider } from "../contexts/CartContext";

function App() {
	return (
		<>
			<CartProvider>
				<NavBar />
				<div className='App-container'>
					<Routes>
						<Route path='/' element={<Home />}></Route>
						<Route path='/store' element={<Store />}></Route>
						<Route path='/about' element={<About />}></Route>
					</Routes>
				</div>
			</CartProvider>
		</>
	);
}

export default App;
