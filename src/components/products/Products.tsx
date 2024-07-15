import { FC } from "react";
import { Link } from "react-router-dom";
import { IProduct } from "../../types/types";
import Loader from "../../UI/loaders/main-loader/Loader";
import classes from "./Products.module.scss";
import MyWrapper from "../../UI/wrapper/MyWrapper";

interface ProductsProps {
	title?: string;
	products: IProduct[];
	style?: {
		[key: string]: string;
	};
	amount: number;
	isLoading: boolean;
	error?: string | null;
}

const Products: FC<ProductsProps> = ({
	title,
	style = {},
	products,
	amount,
	isLoading,
	error,
}) => {
	const list = products.filter((_, i) => i < amount);

	return (
		list.length !== 0 && (
			<MyWrapper className={classes.products} style={style}>
				{title && <h2>{title}</h2>}
				<div className={classes.list}>
					{isLoading ? (
						<Loader />
					) : error ? (
						<p>{error}</p>
					) : (
						list.map(({ id, images, title, category, price, purch }) => (
							<Link to={`/products/${id}`} key={id} className={classes.product}>
								<div
									className={classes.image}
									style={{
										backgroundImage:
											images && images[0] ? `url(${images[0]})` : "",
									}}
								></div>
								<div className={classes.wrapper}>
									<h3 className={classes.title}>
										{title ? title : "No title"}
									</h3>
									<div className={classes.cat}>
										{category && category.name ? category.name : "No category"}
									</div>
									<div className={classes.info}>
										<div className={classes.prices}>
											<div className={classes.price}>{price}$</div>
											<div className={classes.oldPrice}>
												{Math.floor(price * 0.8)}$
											</div>
										</div>
										<div className={classes.purchases}>{purch} purchased</div>
									</div>
								</div>
							</Link>
						))
					)}
				</div>
			</MyWrapper>
		)
	);
};

export default Products;
