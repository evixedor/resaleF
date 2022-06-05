import { Routes, Route } from "react-router-dom";

import HomePage from "./routes/homepage/homepage.component";
import ShopPage from "./routes/shop/shop.component.jsx";
import SignIn from "./routes/sign-in/sign-in.component";
import SignUp from "./routes/sign-up/sign-up.component";
import Navigation from "./routes/navigation/navigation.component.jsx";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Navigation />}>
				<Route index element={<HomePage />} />
				<Route path="shop" element={<ShopPage />} />
				<Route path="sign-in" element={<SignIn />} />
				<Route path="sign-up" element={<SignUp />} />
			</Route>
		</Routes>
	);
};

export default App;
