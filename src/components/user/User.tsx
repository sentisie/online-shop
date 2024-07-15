import { FC, MouseEvent, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import {
	toggleForm,
	toggleFormType,
} from "../../store/reducers/user/userSlice";

import UserSignUpForm from "./authorization/signup/UserSignUpForm";
import UserLoginForm from "./authorization/login/UserLoginForm";
import { LOGIN, SIGN_UP } from "../../utils/constants";

const User: FC = () => {
	const dispatch = useAppDispatch();

	const { showForm, formType } = useAppSelector((state) => state.userReducer);

	const handleCloseModal = (
		event?: MouseEvent<HTMLDivElement | HTMLButtonElement>
	) => {
		if (event) {
			if (event.target === event.currentTarget) {
				dispatch(toggleForm(false));
			}
		} else {
			dispatch(toggleForm(false));
		}
	};

	const toggleCurrentFormType = (type: string) =>
		dispatch(toggleFormType(type));

	useEffect(() => {
		document.body.style.overflow = showForm ? "hidden" : "visible";

		return () => {
			document.body.style.overflow = "visible";
		};
	}, [showForm]);

	return (
		<>
			<UserSignUpForm
				formType={SIGN_UP}
				toggleCurrentFormType={toggleCurrentFormType}
				closeModal={handleCloseModal}
				style={{
					visibility: showForm && formType === SIGN_UP ? "visible" : "hidden",
					opacity: showForm && formType === SIGN_UP ? "1" : "0",
				}}
			/>

			<UserLoginForm
				formType={LOGIN}
				toggleCurrentFormType={toggleCurrentFormType}
				closeModal={handleCloseModal}
				style={{
					visibility: showForm && formType === LOGIN ? "visible" : "hidden",
					opacity: showForm && formType === LOGIN ? "1" : "0",
				}}
			/>
		</>
	);
};

export default User;
