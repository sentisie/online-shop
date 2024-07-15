/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IUser, IUserLogin } from "../../../types/types";
import { BASE_URL } from "../../../utils/constants";

export const createUser = createAsyncThunk(
	"users/createUser",
	async (payload: IUser, thunkAPI) => {
		try {
			const response = await axios.post(
				`${BASE_URL}/users`,
				payload
			);
			return response.data;
		} catch (err: any) {
			return thunkAPI.rejectWithValue(err.response.data.message);
		}
	}
);

export const loginUser = createAsyncThunk(
	"users/loginUser",
	async (payload: IUserLogin, thunkAPI) => {
		try {
			const response = await axios.post(
				`${BASE_URL}/auth/login`,
				payload
			);
			const login = await axios.get(
				`${BASE_URL}/auth/profile`,
				{
					headers: {
						Authorization: `Bearer ${response.data.access_token}`,
					},
				}
			);
			return login.data;
		} catch (err: any) {
			return thunkAPI.rejectWithValue(err.response.data.message);
		}
	}
);

export const updateUser = createAsyncThunk(
	"users/updateUser",
	async (payload: IUser, thunkAPI) => {
		try {
			const response = await axios.put(
				`${BASE_URL}/users/${payload.id}`,
				payload
			);
			return response.data;
		} catch (err: any) {
			console.log(err);
			return thunkAPI.rejectWithValue(err.response.data.message);
		}
	}
);
