/* eslint-disable react-hooks/exhaustive-deps */
import {
	ChangeEvent,
	Dispatch,
	FC,
	FormEvent,
	SetStateAction,
	useEffect,
	useState,
} from "react";
import MyWrapper from "../../UI/wrapper/MyWrapper";
import classes from "./Category.module.scss";
import MyInput from "../../UI/input/MyInput";
import MyButton from "../../UI/button/MyButton";
import Loader from "../../UI/loaders/main-loader/Loader";
import Products from "../products/Products";
import { IParams, IProduct } from "../../types/types";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { SerializedError } from "@reduxjs/toolkit";
import { useAppSelector } from "../../hooks/redux";
import { useNavigate } from "react-router-dom";

interface CategoryProps {
	id: string | undefined;
	params: IParams;
	setParams: Dispatch<SetStateAction<IParams>>;
	defaultValues: {
		title: string;
		price_min: number;
		price_max: number;
	};
	defaultParams: IParams;
	data: IProduct[];
	isLoading: boolean;
	isSuccess: boolean;
	error: FetchBaseQueryError | SerializedError | undefined;
	items: IProduct[];
	setItems: Dispatch<SetStateAction<IProduct[]>>;
}

const Category: FC<CategoryProps> = ({
	id,
	params,
	setParams,
	defaultValues,
	defaultParams,
	data,
	isLoading,
	isSuccess,
	items,
	setItems,
}) => {
	const navigate = useNavigate();

	const [cat, setCat] = useState("");
	const [isEnd, setIsEnd] = useState(false);
	const [values, setValues] = useState(defaultValues);
	const { categories } = useAppSelector((state) => state.categoriesReducer);

	useEffect(() => {
		if (!id) return;

		setValues(defaultValues);
		setItems([]);
		setIsEnd(false);

		setParams({ ...defaultParams, categoryId: id });
	}, [id, setParams]);

	useEffect(() => {
		if (isLoading) return;

		if (data.length < params.limit) {
			setIsEnd(true);
		}

		setItems((_items) => [..._items, ...data]);
	}, [data, isLoading]);

	useEffect(() => {
		if (!id || !categories.length) return;
		const category = categories.find((item) => item.id === Number(id) * 1);
		if (category) {
			setCat(category.name);
		} else {
			navigate("/Home");
		}
	}, [categories, id]);

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setValues({ ...values, [name]: value });
	};

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setItems([]);
		setIsEnd(false);
		setParams({ ...defaultParams, ...values });
	};

	const handleReset = () => {
		setValues(defaultValues);
		setParams(defaultParams);
		setIsEnd(false);
	};

	return (
		<MyWrapper className={classes.wrapper}>
			<h2 className={classes.title}>{cat}</h2>
			<form className={classes.filters} onSubmit={handleSubmit}>
				<div className={classes.filter}>
					<MyInput
						type="text"
						name="title"
						id="title"
						onChange={handleChange}
						placeholder="Product name"
						value={values.title}
					/>
				</div>
				<div className={classes.filter}>
					<MyInput
						type="number"
						name="price_min"
						id="min"
						onChange={handleChange}
						placeholder="0"
						value={values.price_min}
					/>
					<span>Price from</span>
				</div>
				<div className={classes.filter}>
					<MyInput
						type="number"
						name="price_max"
						id="max"
						onChange={handleChange}
						placeholder="0"
						value={values.price_max}
					/>
					<span>Price to</span>
				</div>

				<MyButton type="submit" hidden />
			</form>

			{isLoading ? (
				<Loader />
			) : !isSuccess || !items.length ? (
				<div className={classes.back}>
					<span>No results</span>
					<MyButton type="button" onClick={handleReset}>
						Reset
					</MyButton>
				</div>
			) : (
				<Products
					products={items}
					amount={items.length}
					isLoading={isLoading}
				/>
			)}
			{!isEnd && (
				<div style={{ textAlign: "center" }}>
					<MyButton
						type="button"
						onClick={() =>
							setParams({ ...params, offset: params.offset + params.limit })
						}
					>
						See more
					</MyButton>
				</div>
			)}
		</MyWrapper>
	);
};

export default Category;
