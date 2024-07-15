import { FC, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetProductQuery } from "../services/ProductServices";
import Product from "../components/product/Product";
import Loader from "../UI/loaders/main-loader/Loader";
import Products from "../components/products/Products";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { getRelatedProducts } from "../store/reducers/products/productsSlice";

const ProductIdPage: FC = () => {
	const dispatch = useAppDispatch();

	const { id } = useParams();
	const navigate = useNavigate();

	const { products, related, isProdLoading, prodError } = useAppSelector(
		(state) => state.productsReducer
	);

	const { data, isLoading, isFetching, isSuccess } = useGetProductQuery(id!);

	useEffect(() => {
		if (!isFetching && !isLoading && !isSuccess) {
			navigate("/Home");
		}
	}, [isLoading, isFetching, isSuccess, navigate]);

	useEffect(() => {
		if (!data || !products.length) return;
		if (data) {
			dispatch(
				getRelatedProducts({ title: data.title, currentProductId: data.id })
			);
		}
	}, [data, id, products.length, dispatch]);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [data]);

	if (isLoading) {
		return <Loader />;
	}

	if (!data || !isSuccess) {
		return <div>Product not found!</div>;
	}

	return (
		<section style={{ width: "100%", height: "100%" }}>
			<Product {...data} />
			<Products
				isLoading={isProdLoading}
				error={prodError}
				products={related}
				amount={4}
				title="Related products"
			/>
		</section>
	);
};

export default ProductIdPage;
