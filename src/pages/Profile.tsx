import { ChangeEvent, FC, FormEvent, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import UserForm from "../components/user/authorization/UserForm";
import { updateUser } from "../store/reducers/user/userActionCreator";
import { SIGN_UP_VALUES, UPDATE } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import MyWrapper from "../UI/wrapper/MyWrapper";

export const Profile: FC = () => {
	const navigate = useNavigate();

	const { curUser } = useAppSelector((state) => state.userReducer);

	const [initialValues] = useState(curUser || {});
	const [values, setValues] = useState(SIGN_UP_VALUES);
	const [countdown, setCountdown] = useState(5);

	const dispatch = useAppDispatch();

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setValues({ ...values, [name]: value });
	};

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const isNotEmpty = Object.values(values).some((val) => val);

		if (!isNotEmpty) return;

		dispatch(updateUser(values));
	};

	useEffect(() => {
		if (!curUser) {
			const timer = setInterval(() => {
				setCountdown((prevCountdown) => prevCountdown - 1);
			}, 1000);

			return () => clearInterval(timer);
		} else {
			setValues(curUser);
		}
	}, [curUser]);

	useEffect(() => {
		if (countdown === 0) {
			navigate("/Home");
		}
	}, [countdown, navigate]);

	return (
		<>
			{!curUser ? (
				<MyWrapper
					style={{
						width: "100%",
						paddingTop: "65px",
					}}
				>
					<h1 style={{ textAlign: "center" }}>
						<span style={{ fontSize: "46px" }}>You are not authorized! 😢</span>
						<br /> Redirection will take place in
						<span style={{ color: "orange" }}> {countdown} </span> seconds
					</h1>
				</MyWrapper>
			) : (
				<UserForm
					formType={UPDATE}
					userValues={values}
					initialValues={initialValues}
					handleChange={handleChange}
					handleSubmit={handleSubmit}
				/>
			)}
		</>
	);
};
