import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "../../routes/routes";
import Home from "../../pages/Home";

const AppRouter: FC = () => {
	return (
		<Routes>
			{routes.map((route) => (
				<Route key={route.path} element={<route.element />} path={route.path} />
			))}
			<Route path="/*" element={<Home />} />
		</Routes>
	);
};

export default AppRouter;
