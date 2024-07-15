import { FC } from "react";
import classes from "./Categories.module.scss";
import { Link } from "react-router-dom";
import { ICategory } from "../../types/types";
import Loader from "../../UI/loaders/main-loader/Loader";
import MyWrapper from "../../UI/wrapper/MyWrapper";

interface CategoriesProps {
	title: string;
	categories: ICategory[];
	amount: number;
	isLoading: boolean;
	error: string | null;
}

const Categories: FC<CategoriesProps> = ({
	title,
	categories,
	amount,
	isLoading,
	error,
}) => {
	const list = categories.filter((_, i) => i < amount);

	return (
		<MyWrapper className={classes.categories}>
			<h2>{title}</h2>
			<div className={classes.list}>
				{isLoading ? (
					<Loader />
				) : error ? (
					<p>{error}</p>
				) : (
					list.map(({ id, name, image }) => (
						<Link
							to={`/categories/${id}`}
							key={id}
							className={classes.category}
						>
							<div
								className={classes.image}
								style={{ backgroundImage: `url(${image}` }}
							/>
							<h3 className={classes.title}>{name}</h3>
						</Link>
					))
				)}
			</div>
		</MyWrapper>
	);
};

export default Categories;
