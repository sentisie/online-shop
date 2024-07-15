import { ChangeEvent, FC, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import classes from "./Header.module.scss";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { toggleForm } from "../../store/reducers/user/userSlice";
import { AVATAR } from "../../utils/constants";
import UserLoader from "../../UI/loaders/user-loader/UserLoader";
import { useGetProductsQuery } from "../../services/ProductServices";
import Loader from "../../UI/loaders/main-loader/Loader";
import { IProduct } from "../../types/types";

const Header: FC = () => {
	const navigate = useNavigate();

	const dispatch = useAppDispatch();

	const [searchValue, setSearchValue] = useState("");
	const { curUser, isUserLoading, userError, cart } = useAppSelector(
		(state) => state.userReducer
	);

	const [values, setValues] = useState({ name: "Guest", avatar: AVATAR });

	const { data, isLoading } = useGetProductsQuery({
		title: searchValue,
	});

	useEffect(() => {
		if (curUser) {
			setValues(curUser);
		} else {
			setValues({ name: "Guest", avatar: AVATAR });
		}
	}, [curUser]);

	useEffect(() => {
		if (userError) {
			alert(userError);
		}
	}, [userError]);

	const handleClick = () => {
		if (!curUser) dispatch(toggleForm(true));
		else navigate("/Profile");
	};

	const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
		setSearchValue(event.target.value);
	};

	return (
		<div className={classes.header}>
			<div className={`${classes.container} container`}>
				<article className={classes.logo}>
					<Link to="/Home">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							aria-hidden="true"
							role="img"
							width="38"
							height="38"
							preserveAspectRatio="xMidYMid meet"
							viewBox="0 0 256 257"
						>
							<defs>
								<linearGradient
									id="IconifyId1813088fe1fbc01fb466"
									x1="-.828%"
									x2="57.636%"
									y1="7.652%"
									y2="78.411%"
								>
									<stop offset="0%" stopColor="#41D1FF"></stop>
									<stop offset="100%" stopColor="#BD34FE"></stop>
								</linearGradient>
								<linearGradient
									id="IconifyId1813088fe1fbc01fb467"
									x1="43.376%"
									x2="50.316%"
									y1="2.242%"
									y2="89.03%"
								>
									<stop offset="0%" stopColor="#FFEA83"></stop>
									<stop offset="8.333%" stopColor="#FFDD35"></stop>
									<stop offset="100%" stopColor="#FFA800"></stop>
								</linearGradient>
							</defs>
							<path
								fill="url(#IconifyId1813088fe1fbc01fb466)"
								d="M255.153 37.938L134.897 252.976c-2.483 4.44-8.862 4.466-11.382.048L.875 37.958c-2.746-4.814 1.371-10.646 6.827-9.67l120.385 21.517a6.537 6.537 0 0 0 2.322-.004l117.867-21.483c5.438-.991 9.574 4.796 6.877 9.62Z"
							></path>
							<path
								fill="url(#IconifyId1813088fe1fbc01fb467)"
								d="M185.432.063L96.44 17.501a3.268 3.268 0 0 0-2.634 3.014l-5.474 92.456a3.268 3.268 0 0 0 3.997 3.378l24.777-5.718c2.318-.535 4.413 1.507 3.936 3.838l-7.361 36.047c-.495 2.426 1.782 4.5 4.151 3.78l15.304-4.649c2.372-.72 4.652 1.36 4.15 3.788l-11.698 56.621c-.732 3.542 3.979 5.473 5.943 2.437l1.313-2.028l72.516-144.72c1.215-2.423-.88-5.186-3.54-4.672l-25.505 4.922c-2.396.462-4.435-1.77-3.759-4.114l16.646-57.705c.677-2.35-1.37-4.583-3.769-4.113Z"
							></path>
						</svg>
						Moksha
					</Link>
				</article>

				<article className={classes.info}>
					{isUserLoading ? (
						<UserLoader />
					) : (
						<article className={classes.user} onClick={handleClick}>
							<div
								className={classes.avatar}
								style={{ backgroundImage: `url(${values.avatar})` }}
							></div>
							<div className={classes.username}>{values.name}</div>
						</article>
					)}

					<form className={classes.form}>
						<article className={classes.icon}>
							<svg
								width="18"
								height="17"
								viewBox="0 0 18 17"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M6.41196 12.0999L1.92259 16.5892C1.59715 16.9147 1.06951 16.9147 0.744078 16.5892C0.418641 16.2638 0.418641 15.7362 0.744078 15.4107L5.23345 10.9214C4.3559 9.79246 3.83333 8.37392 3.83333 6.83332C3.83333 3.15142 6.8181 0.166656 10.5 0.166656C14.1819 0.166656 17.1667 3.15142 17.1667 6.83332C17.1667 10.5152 14.1819 13.5 10.5 13.5C8.95941 13.5 7.54087 12.9774 6.41196 12.0999ZM10.5 11.8333C13.2614 11.8333 15.5 9.59475 15.5 6.83332C15.5 4.0719 13.2614 1.83332 10.5 1.83332C7.73858 1.83332 5.5 4.0719 5.5 6.83332C5.5 9.59475 7.73858 11.8333 10.5 11.8333Z"
									fill="#fff"
								/>
							</svg>
						</article>

						<article className={classes.input}>
							<input
								type="search"
								name="search"
								placeholder="Search for anything..."
								autoComplete="off"
								onChange={handleSearch}
								value={searchValue}
							/>
						</article>

						{searchValue && (
							<article className={classes.box}>
								{isLoading ? (
									<Loader />
								) : !data?.length ? (
									"No results"
								) : (
									data
										?.slice(0, 5)
										.map(({ title, images, id }: IProduct) => {
											return (
												<Link
													onClick={() => setSearchValue("")}
													key={id}
													className={classes.item}
													to={`/products/${id}`}
												>
													<div
														className={classes.image}
														style={{ backgroundImage: `url(${images[0]})` }}
													/>
													<div className={classes.title}>{title}</div>
												</Link>
											);
										})
								)}
							</article>
						)}
					</form>

					<Link to="/cart">
						<article className={classes.cart}>
							<svg
								width="22"
								height="20"
								viewBox="0 0 22 20"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M2.2338 0.933289L1.43051 0.000305176H0.5V1.16663H1.23607L3.52092 3.71876L6.35553 11.2154L5.73841 12.2645C5.2152 13.2176 5.94092 14.4002 7.02226 14.4002H17.6667V13.2339H7.02226C6.75172 13.2339 6.55562 12.9564 6.68469 12.7138L7.14152 11.7996L18.4871 11.6666C19.2702 11.6563 19.9814 11.163 20.2387 10.4078L21.9902 5.26328L22 5.23332V5.16663C22 4.38701 21.4196 3.73331 20.6408 3.63333H5.56028L4.68737 1.39855L4.67696 1.36663C4.45772 0.746804 3.86174 0.333298 3.19811 0.333298L2.2338 0.933289ZM5.56028 4.79996H20.6408C20.7833 4.8166 20.8963 4.92957 20.9129 5.07208C20.9165 5.10001 20.9165 5.12925 20.9129 5.15718L19.1614 10.3017C19.0364 10.6464 18.6776 10.8833 18.3204 10.8888L7.80479 11.0186L5.56028 4.79996Z"
									fill="white"
								/>
								<path
									d="M9.16667 16.3334C8.27424 16.3334 7.55556 17.0521 7.55556 17.9445C7.55556 18.8369 8.27424 19.5556 9.16667 19.5556C10.0591 19.5556 10.7778 18.8369 10.7778 17.9445C10.7778 17.0521 10.0591 16.3334 9.16667 16.3334ZM6.38889 17.9445C6.38889 16.5106 7.73283 15.1667 9.16667 15.1667C10.6005 15.1667 11.9444 16.5106 11.9444 17.9445C11.9444 19.3783 10.6005 20.7222 9.16667 20.7222C7.73283 20.7222 6.38889 19.3783 6.38889 17.9445Z"
									fill="white"
								/>
								<path
									d="M15.1667 16.3334C14.2742 16.3334 13.5556 17.0521 13.5556 17.9445C13.5556 18.8369 14.2742 19.5556 15.1667 19.5556C16.0591 19.5556 16.7778 18.8369 16.7778 17.9445C16.7778 17.0521 16.0591 16.3334 15.1667 16.3334ZM12.3889 17.9445C12.3889 16.5106 13.7328 15.1667 15.1667 15.1667C16.6005 15.1667 17.9444 16.5106 17.9444 17.9445C17.9444 19.3783 16.6005 20.7222 15.1667 20.7222C13.7328 20.7222 12.3889 19.3783 12.3889 17.9445Z"
									fill="white"
								/>
							</svg>
							{cart.length > 0 && (
								<span className={classes.badge}>{cart.length}</span>
							)}
						</article>
					</Link>
				</article>
			</div>
		</div>
	);
};

export default Header;
