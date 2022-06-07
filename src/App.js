import { Routes, Route } from "react-router-dom";

import HomePage from "./routes/homepage/homepage.component";
import ShopPage from "./routes/shop/shop.component.jsx";
import Authentication from "./routes/authentication/authentication.component";
import SignUp from "./components/sign-up/sign-up.component";
import Navigation from "./routes/navigation/navigation.component.jsx";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Navigation />}>
				<Route index element={<HomePage />} />
				<Route path="shop" element={<ShopPage />} />
				<Route path="auth" element={<Authentication />} />
				<Route path="contact" element={<SignUp />} />
			</Route>
		</Routes>
	);
};

export default App;
