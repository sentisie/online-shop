import { ComponentType } from "react";

export interface Route {
	path: string;
	element: ComponentType;
}

export interface ICategory {
	id: number;
	name: string;
	image: string;
}

export interface IProduct {
	id: number;
	title: string;
	price: number;
	description: string;
	images: string[];
	purch: number;
	category: {
		id: number;
		name: string;
		image: string;
	};
}

export interface IUserLogin {
	email: string;
	password: string;
}

export interface IUser extends IUserLogin {
	id?: number;
	name: string;
	avatar: string;
}

export interface IParams {
	title: string;
	price_min: number;
	price_max: number;
	limit: number;
	offset: number;
	categoryId: string | undefined;
}
