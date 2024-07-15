import { combineReducers, configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./reducers/categories/categoriesSlice";
import productsReducer from "./reducers/products/productsSlice";
import { productApi } from "../services/ProductServices";
import userReducer from "../store/reducers/user/userSlice";

const rootReducer = combineReducers({
	categoriesReducer,
	productsReducer,
	userReducer,
	[productApi.reducerPath]: productApi.reducer,
});

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware().concat(productApi.middleware),
	});
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
