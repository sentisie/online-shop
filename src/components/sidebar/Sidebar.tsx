import { FC } from "react";

import classes from "./Sidebar.module.scss";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux";
import Loader from "../../UI/loaders/main-loader/Loader";
import MyWrapper from "../../UI/wrapper/MyWrapper";

const Sidebar: FC = () => {
	const { categories, catError, isCatLoading } = useAppSelector(
		(state) => state.categoriesReducer
	);

	return (
		<MyWrapper className={classes.sidebar}>
			<h3 className={classes.title}>CATEGORIES</h3>
			<nav>
				<ul className={classes.menu}>
					{isCatLoading ? (
						<Loader />
					) : catError ? (
						<p>{catError}</p>
					) : (
						categories.map((cat) => (
							<li key={cat.id}>
								<NavLink
									className={({ isActive }) =>
										`${classes.link} ${isActive ? classes.active : ""}`
									}
									to={`/categories/${cat.id}`}
								>
									{cat.name.slice(0, 1).toUpperCase() + cat.name.slice(1)}
								</NavLink>
							</li>
						))
					)}
				</ul>
			</nav>
			<div className={classes.footer}>
				<a href="#" target="_blank" className={classes.link}>
					Help
				</a>
				<a
					href="#"
					target="_blank"
					className={classes.link}
					style={{ textDecoration: "underline", opacity: "0.4" }}
				>
					Terms & Conditions
				</a>
			</div>
		</MyWrapper>
	);
};

export default Sidebar;
