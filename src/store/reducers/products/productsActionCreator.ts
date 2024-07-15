/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IProduct } from "../../../types/types";
import axios from "axios";
import { BASE_URL } from "../../../utils/constants";

export const getProducts = createAsyncThunk(
	"products/getProducts",
	async (_, thunkAPI) => {
		try {
			const response = await axios.get<IProduct[]>(
				`${BASE_URL}/products`
			);
			const products = response.data.map((product) => ({
				...product,
				purch: Math.floor(Math.random() * 100) + 1,
			}));
			return products.sort((a, b) => a.id - b.id);
		} catch (err: any) {
			return thunkAPI.rejectWithValue(err.response.data.message);
		}
	}
);
