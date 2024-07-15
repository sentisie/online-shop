import { FC, useEffect } from "react";
import AppRouter from "./components/router/AppRouter";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { useAppDispatch } from "./hooks/redux";
import Sidebar from "./components/sidebar/Sidebar";
import { getCategories } from "./store/reducers/categories/categoriesActionCreator";
import { getProducts } from "./store/reducers/products/productsActionCreator";
import User from "./components/user/User";

const App: FC = () => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getCategories());
		dispatch(getProducts());
	}, [dispatch]);

	return (
		<div>
			<div className="wrapper">
				<div style={{ height: "96px" }}></div>
				<Header />
				<main>
					<div className="container">
						<div style={{ display: "flex", position: "relative" }}>
							<Sidebar />
							<AppRouter />
						</div>
					</div>
				</main>
				<Footer />
				<User />
			</div>
		</div>
	);
};

export default App;
