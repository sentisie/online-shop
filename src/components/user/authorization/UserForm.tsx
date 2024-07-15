import { ChangeEventHandler, FC, FormEventHandler, MouseEvent } from "react";
import MyWrapper from "../../../UI/wrapper/MyWrapper";
import classes from "./UserForm.module.scss";
import MyInput from "../../../UI/input/MyInput";
import MyButton from "../../../UI/button/MyButton";
import { LOGIN, SIGN_UP, UPDATE } from "../../../utils/constants";
import { useAppDispatch } from "../../../hooks/redux";
import { logoutUser } from "../../../store/reducers/user/userSlice";

interface UserFormProps {
	formType: string;
	userValues: { [key: string]: string };
	initialValues: { [key: string]: string };
	handleSubmit: FormEventHandler<HTMLFormElement>;
	handleChange: ChangeEventHandler<HTMLInputElement>;
	toggleType?: (type: string) => void;
	closeModal?: (event?: MouseEvent<HTMLDivElement | HTMLButtonElement>) => void;
}

const UserForm: FC<UserFormProps> = ({
	formType,
	userValues,
	initialValues,
	handleSubmit,
	handleChange,
	toggleType,
	closeModal,
}) => {
	const dispatch = useAppDispatch();

	const handleLogout = () => {
		dispatch(logoutUser());
	};

	const isDisabled =
		JSON.stringify(userValues) === JSON.stringify(initialValues);

	return (
		<MyWrapper
			className={classes.modal}
			style={formType === UPDATE ? { width: "100%" } : {}}
		>
			{formType !== UPDATE && (
				<button className={classes.close} onClick={closeModal}></button>
			)}

			<h2 className={classes.title}>
				{formType === SIGN_UP
					? "Sign Up"
					: formType === LOGIN
					? "Login"
					: "Profile"}
			</h2>

			<form action="#" className={classes.form} onSubmit={handleSubmit}>
				{formType !== LOGIN && (
					<div className={classes.group}>
						<MyInput
							type="name"
							placeholder="Your name"
							name="name"
							value={userValues.name}
							onChange={handleChange}
							required
						/>
					</div>
				)}

				<div className={classes.group}>
					<MyInput
						type="email"
						placeholder="Your email"
						name="email"
						value={userValues.email}
						onChange={handleChange}
						required
					/>
				</div>

				<div className={classes.group}>
					<MyInput
						type="password"
						placeholder="Your password"
						name="password"
						value={userValues.password}
						onChange={handleChange}
						required
					/>
				</div>

				{formType !== LOGIN && (
					<div className={classes.group}>
						<MyInput
							type="avatar"
							placeholder="Your avatar"
							name="avatar"
							value={userValues.avatar}
							onChange={handleChange}
							required
						/>
					</div>
				)}

				{toggleType && (
					<div
						className={classes.link}
						onClick={() => toggleType(formType === SIGN_UP ? LOGIN : SIGN_UP)}
					>
						{formType === SIGN_UP
							? "I already have an account"
							: "Created account"}
					</div>
				)}

				<MyButton
					type="submit"
					className={classes.submit}
					disabled={isDisabled}
				>
					{formType === SIGN_UP
						? "Sign Up"
						: formType === LOGIN
						? "Login"
						: "Update data"}
				</MyButton>

				{formType === UPDATE && (
					<MyButton className={classes.logout} onClick={handleLogout}>
						Logout
					</MyButton>
				)}
			</form>
		</MyWrapper>
	);
};

export default UserForm;
