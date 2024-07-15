/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ICategory } from "../../../types/types";
import { BASE_URL } from "../../../utils/constants";

export const getCategories = createAsyncThunk(
	"categories/getCategories",
	async (_, thunkAPI) => {
		try {
			const response = await axios.get<ICategory[]>(
				`${BASE_URL
				}/categories`
			);
			return response.data.slice(0, 5);
		} catch (err: any) {
			return thunkAPI.rejectWithValue(err.response.data.message);
		}
	}
);
