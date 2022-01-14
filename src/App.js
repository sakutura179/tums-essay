import { Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";

import Header from "./Components/Header";
import LandingPage from "./Components/LandingPage";
import Shop from "./Components/Shop";
import Terms from "./Components/Terms";
import Contact from "./Components/Contact";
import Cart from "./Components/Cart";

function App() {
	const [headerColor, setHeaderColor] = useState("black");

	return (
		<HeaderColor.Provider value={[headerColor, setHeaderColor]}>
			<div className="App">
				<Header />
				<Routes>
					<Route path="/" element={<LandingPage />} />
					<Route path="/shop" element={<Shop />} />
					<Route path="/terms" element={<Terms />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/cart" element={<Cart />} />
				</Routes>
			</div>
		</HeaderColor.Provider>
	);
}

export const HeaderColor = createContext();
export default App;
