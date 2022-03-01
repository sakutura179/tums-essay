import { Routes, Route } from "react-router-dom";

import LandingPage from "./Components/LandingPage";
import Shop from "./Components/Shop";
import Terms from "./Components/Terms";
import Contact from "./Components/Contact";
import Cart from "./Components/Cart";
import Detail from "./Components/Detail";
// Admin Routes
import Category from "./Components/Admin/Category";
import Product from "./Components/Admin/Product";
import Dashboard from "./Components/Admin/Dashboard";
import Feedback from "./Components/Admin/Feedback";
import Invoice from "./Components/Admin/Invoice";
// Error Route
import Error from "./Components/Error";

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
				<Route path="/admin/dashboard" element={<Dashboard />} />
				<Route path="/admin/category" element={<Category />} />
				<Route path="/admin/product" element={<Product />} />
				<Route path="/admin/invoice" element={<Invoice />} />
				<Route path="/admin/feedback" element={<Feedback />} />
				{/* 404 Page */}
				<Route path="*" element={<Error />} />
			</Routes>
		</div>
	);
}

export default App;
