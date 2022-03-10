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
				<Route path="/tums-essay/" element={<LandingPage />} />
				<Route path="/tums-essay/shop" element={<Shop />} />
				<Route path="/tums-essay/terms" element={<Terms />} />
				<Route path="/tums-essay/contact" element={<Contact />} />
				<Route path="/tums-essay/cart" element={<Cart />} />
				<Route path="/tums-essay/shop/:slug" element={<Detail />} />
				<Route path="/tums-essay/category/:slug" element={<Shop />} />
				{/* Admin Routes */}
				<Route path="/tums-essay/admin/dashboard" element={<Dashboard />} />
				<Route path="/tums-essay/admin/category" element={<Category />} />
				<Route path="/tums-essay/admin/product" element={<Product />} />
				<Route path="/tums-essay/admin/invoice" element={<Invoice />} />
				<Route path="/tums-essay/admin/feedback" element={<Feedback />} />
				{/* 404 Page */}
				<Route path="*" element={<Error />} />
			</Routes>
		</div>
	);
}

export default App;
