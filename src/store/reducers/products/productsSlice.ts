import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../../types/types";
import { getProducts } from "./productsActionCreator";
import { shuffle } from "../../../utils/shuffle";
import { getCoincidence } from "../../../utils/getCoincidence";

interface ProductsState {
	products: IProduct[];
	filtered: IProduct[];
	related: IProduct[];
	isProdLoading: boolean;
	prodError: null | string;
}

const initialState: ProductsState = {
	products: [],
	filtered: [],
	related: [],
	isProdLoading: false,
	prodError: "",
};

export const productsSlice = createSlice({
	name: "products",
	initialState,
	reducers: {
		filterByPrice: (state, action) => {
			state.filtered = state.products.filter(
				({ price }) => price < action.payload
			);
		},

		getRelatedProducts: (state, action) => {
			const { title, currentProductId } = action.payload;
			const searchTerm = getCoincidence(title);
			if (searchTerm !== "") {
				const list = state.products.filter(
					({ id, title }) =>
						id !== currentProductId && title.toLowerCase().includes(searchTerm)
				);
				state.related = shuffle(list);
			} else {
				state.related = [];
			}
		},
	},

	extraReducers: (builder) => {
		builder.addCase(getProducts.pending.type, (state = initialState) => {
			state.isProdLoading = true;
		});
		builder.addCase(
			getProducts.fulfilled.type,
			(state = initialState, action: PayloadAction<IProduct[]>) => {
				state.isProdLoading = false;
				state.prodError = "";
				state.products = action.payload;
			}
		);
		builder.addCase(getProducts.rejected.type, (state = initialState) => {
			state.isProdLoading = false;
			state.prodError = "Fetch products error!";
		});
	},
});

export const { filterByPrice, getRelatedProducts } = productsSlice.actions;

export default productsSlice.reducer;
