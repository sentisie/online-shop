import { FC, InputHTMLAttributes } from "react";
import classes from "./MyInput.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	validate?: (value: string | number) => string | null;
}

const MyInput: FC<InputProps> = ({ className, value, ...props }) => {
	return (
		<input
			{...props}
			className={`${classes.myInput} ${className}`}
			value={value || ""}
		/>
	);
};

export default MyInput;
