import { CSSProperties, FC, MouseEvent, ReactNode } from "react";
import classes from "./Overlay.module.scss";
import { useAppSelector } from "../../hooks/redux";

interface OverlayProps {
	children: ReactNode;
	className?: string;
	style?: CSSProperties;
	onClick?: (event: MouseEvent<HTMLDivElement>) => void;
}

const Overlay: FC<OverlayProps> = ({ children, className, style, onClick }) => {
	const { showForm } = useAppSelector((state) => state.userReducer);
	return (
		<div
			className={`${classes.overlay} ${className}`}
			style={{
				visibility: showForm === true ? "visible" : "hidden",
				opacity: showForm === true ? "1" : "0",
				...style,
			}}
			onClick={onClick}
		>
			{children}
		</div>
	);
};

export default Overlay;
