import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./../pages/Home";
import Store from "../pages/Store";
import About from "../pages/About";
import NavBar from "./NavBar/NavBar";
import { CartProvider } from "../contexts/CartContext";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

function App() {
	return (
		<>
			<CartProvider>
				<NavBar />
				<div className='App-container'>
					<Routes>
						<Route path='/' element={<Store />}></Route>
						<Route path='/about' element={<About />}></Route>
						<Route path='/login' element={<Login />}></Route>
						<Route path='/signup' element={<Signup />}></Route>
					</Routes>
				</div>
			</CartProvider>
		</>
	);
}

export default App;
