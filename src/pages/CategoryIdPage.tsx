import { FC, useEffect, useRef, useState } from "react";
import Poster from "../components/poster/Poster";
import Category from "../components/category/Category";
import { useGetProductsQuery } from "../services/ProductServices";
import { useParams } from "react-router-dom";
import { IProduct } from "../types/types";

const CategoryIdPage: FC = () => {
	const { id } = useParams();

	const defaultValues = {
		title: "",
		price_min: 0,
		price_max: 0,
	};

	const defaultParams = {
		categoryId: id,
		limit: 5,
		offset: 0,
		...defaultValues,
	};

	const [params, setParams] = useState(defaultParams);

	const { data = [], isLoading, isSuccess, error } = useGetProductsQuery(params); // Значение по умолчанию для data

	const [items, setItems] = useState<IProduct[]>([]);

	const absContRef = useRef<HTMLDivElement>(null);
	const hidBlRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleResize = () => {
			if (absContRef.current && hidBlRef.current) {
				const height = absContRef.current?.offsetHeight;

				hidBlRef.current.style.height = `${height}px`;
			}
		};

		handleResize();

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [absContRef.current?.offsetHeight, data, items]);

	return (
		<>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
				}}
			>
				<Poster />
				<div ref={hidBlRef} id="hid-bl" style={{ height: "100%" }}></div>
				<article
					style={{
						position: "absolute",
						bottom: "0",
						left: "0",
						maxWidth: "1240px",
						width: "100%",
					}}
					ref={absContRef}
				>
					<Category
						id={id}
						data={data}
						error={error}
						isLoading={isLoading}
						isSuccess={isSuccess}
						defaultParams={defaultParams}
						params={params}
						setParams={setParams}
						defaultValues={defaultValues}
						items={items}
						setItems={setItems}
					/>
				</article>
			</div>
		</>
	);
};

export default CategoryIdPage;
