import { FC } from "react";
import classes from "./MyButton.module.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	onClick?: () => void;
}

const MyButton: FC<ButtonProps> = ({ children, className, ...props }) => {
	return (
		<button {...props} className={`${classes.myBtn} ${className}`}>
			{children}
		</button>
	);
};

export default MyButton;
