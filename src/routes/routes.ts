import Cart from "../pages/CartPage";
import CategoryIdPage from "../pages/CategoryIdPage";
import Home from "../pages/Home";
import ProductIdPage from "../pages/ProductIdPage";
import { Profile } from "../pages/Profile";
import { Route } from "../types/types";

export const routes: Route[] = [
	{
		path: "/home",
		element: Home,
	},
	{
		path: "/cart",
		element: Cart,
	},
	{
		path: "/profile",
		element: Profile,
	},
	{
		path: "/categories/:id",
		element: CategoryIdPage,
	},
	{
		path: "/products/:id",
		element: ProductIdPage,
	},
];
