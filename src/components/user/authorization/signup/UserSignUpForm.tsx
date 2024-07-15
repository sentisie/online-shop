import {
	CSSProperties,
	ChangeEvent,
	FC,
	FormEvent,
	MouseEvent,
	useState,
} from "react";
import classes from "../UserForm.module.scss";
import { SIGN_UP_VALUES } from "../../../../utils/constants";
import UserForm from "../UserForm";
import { createUser } from "../../../../store/reducers/user/userActionCreator";
import { useAppDispatch } from "../../../../hooks/redux";
import Overlay from "../../../../UI/overlay/Overlay";

interface SignUpFormProps {
	closeModal: (event?: MouseEvent<HTMLDivElement | HTMLButtonElement>) => void;
	toggleCurrentFormType: (type: string) => void;
	formType: string;
	style?: CSSProperties;
}

const UserSignUpForm: FC<SignUpFormProps> = ({
	formType,
	closeModal,
	toggleCurrentFormType,
	style,
}) => {
	const [initialValues] = useState(SIGN_UP_VALUES);
	const [values, setValues] = useState(SIGN_UP_VALUES);

	const dispatch = useAppDispatch();

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setValues({ ...values, [name]: value });
	};

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const isNotEmpty = Object.values(values).some((val) => val);

		if (!isNotEmpty) return;

		dispatch(createUser(values));
		setValues(SIGN_UP_VALUES);
		closeModal();
	};

	return (
		<Overlay style={style} className={classes.overlay} onClick={closeModal}>
			<UserForm
				formType={formType}
				userValues={values}
				initialValues={initialValues}
				toggleType={toggleCurrentFormType}
				handleSubmit={handleSubmit}
				handleChange={handleChange}
				closeModal={closeModal}
			/>
		</Overlay>
	);
};

export default UserSignUpForm;
