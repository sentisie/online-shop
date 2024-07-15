import { FC, useEffect, useRef, useState } from "react";
import Poster from "../components/poster/Poster";
import Products from "../components/products/Products";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import Categories from "../components/categories/Categories";
import Banner from "../components/banner/Banner";
import { filterByPrice } from "../store/reducers/products/productsSlice";

const Home: FC = () => {
	const dispatch = useAppDispatch();

	const { products, filtered, isProdLoading, prodError } = useAppSelector(
		(state) => state.productsReducer
	);
	const { categories, isCatLoading, catError } = useAppSelector(
		(state) => state.categoriesReducer
	);

	const absContRef = useRef<HTMLDivElement>(null);
	const [height, setHeight] = useState<number | undefined>(undefined);

	useEffect(() => {
		const handleResize = () => {
			if (absContRef.current) {
				setHeight(absContRef.current.offsetHeight);
			}
		};
		handleResize();

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [absContRef.current?.offsetHeight, products, categories]);

	useEffect(() => {
		if (!products.length) return;
		dispatch(filterByPrice(40));
	}, [dispatch, products.length]);

	return (
		<section style={{ width: "100%" }}>
			<Poster />
			<div style={{ height: height }}></div>
			<article
				ref={absContRef}
				style={{
					position: "absolute",
					bottom: "0",
					left: "0",
					maxWidth: "1240px",
					width: "100%",
				}}
			>
				<Products
					products={products}
					amount={5}
					title="Trending"
					isLoading={isCatLoading}
					error={catError}
				/>
				<Categories
					categories={categories}
					amount={5}
					title="Worth seeing"
					isLoading={isProdLoading}
					error={prodError}
				/>
				<Banner />
				<Products
					isLoading={isCatLoading}
					error={catError}
					products={filtered}
					amount={5}
					title="Less than 40$"
				/>
			</article>
		</section>
	);
};

export default Home;
