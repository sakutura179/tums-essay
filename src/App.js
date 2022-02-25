import { Routes, Route } from "react-router-dom";

import LandingPage from "./Components/LandingPage";
import Shop from "./Components/Shop";
import Terms from "./Components/Terms";
import Contact from "./Components/Contact";
import Cart from "./Components/Cart";
import Detail from "./Components/Detail";
import Category from "./Components/Admin/Category";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/shop" element={<Shop />} />
				<Route path="/terms" element={<Terms />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/shop/:slug" element={<Detail />} />
				<Route path="/category/:slug" element={<Shop />} />
				{/* Admin Routes */}
				<Route path="/category" element={<Category />} />
			</Routes>
		</div>
	);
}

export default App;
