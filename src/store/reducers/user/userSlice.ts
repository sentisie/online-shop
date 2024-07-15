import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IProduct, IUser } from "../../../types/types";
import { createUser, loginUser, updateUser } from "./userActionCreator";
import { SIGN_UP } from "../../../utils/constants";

export interface ICartProduct extends IProduct {
	quantity: number;
}

interface UserState {
	curUser: IUser | null;
	cart: ICartProduct[];
	formType: string;
	showForm: boolean;
	isUserLoading: boolean;
	userError: string | null;
}

const initialState: UserState = {
	curUser: null,
	cart: [],
	formType: SIGN_UP,
	showForm: false,
	isUserLoading: false,
	userError: "",
};

const handlePending = (state: UserState) => {
	state.isUserLoading = true;
};

const handleFulfilled = (state: UserState, action: PayloadAction<IUser>) => {
	state.isUserLoading = false;
	state.curUser = action.payload;
	state.userError = "";
};

const handleRejected = (state: UserState, action: PayloadAction<string>) => {
	state.isUserLoading = false;
	state.userError = action.payload;
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		addItemToCart: (state, action) => {
			let newCart = [...state.cart];
			const found = state.cart.find(({ id }) => id === action.payload.id);

			if (found) {
				newCart = newCart.map((item) => {
					return item.id === action.payload.id
						? {
								...item,
								quantity: action.payload.quantity || item.quantity + 1,
								// eslint-disable-next-line no-mixed-spaces-and-tabs
						  }
						: item;
				});
			} else newCart.push({ ...action.payload, quantity: 1 });

			state.cart = newCart;
		},

		removeItemFromCart: (state, action) => {
			state.cart = state.cart.filter((item) => item.id !== action.payload);
		},

		toggleForm: (state, action) => {
			state.showForm = action.payload;
		},

		toggleFormType: (state, action) => {
			state.formType = action.payload;
		},

		logoutUser(state) {
			state.curUser = null;
			state.cart = [];
		},
	},

	extraReducers: (builder) => {
		builder
			//sign-up
			.addCase(createUser.pending.type, handlePending)
			.addCase(createUser.fulfilled.type, handleFulfilled)
			.addCase(createUser.rejected.type, handleRejected)

			//login
			.addCase(loginUser.pending.type, handlePending)
			.addCase(loginUser.fulfilled.type, handleFulfilled)
			.addCase(loginUser.rejected.type, handleRejected)

			//update
			.addCase(updateUser.pending.type, handlePending)
			.addCase(updateUser.fulfilled.type, handleFulfilled)
			.addCase(updateUser.rejected.type, handleRejected);
	},
});

export const {
	addItemToCart,
	removeItemFromCart,
	toggleForm,
	toggleFormType,
	logoutUser,
} = userSlice.actions;

export default userSlice.reducer;
