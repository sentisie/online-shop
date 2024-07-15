import { FC } from "react";
import classes from "./Poster.module.scss";
import bg from "../../images/poster/bg.png";
import MyWrapper from "../../UI/wrapper/MyWrapper";
import MyButton from "../../UI/button/MyButton";

const Poster: FC = () => {
	return (
		<MyWrapper className={classes.home}>
			<h2 className={classes.title}>BIG SALE 20%</h2>
			<article className={classes.product}>
				<article className={classes.text}>
					<h2 className={classes.subtitle}>the bestseller of 2022</h2>
					<h1 className={classes.head}>
						LENNON r2d2 with <br /> nvidia 5090 TI
					</h1>
					<MyButton type="button">Shop Now</MyButton>
				</article>
				<article className={classes.image}>
					<img src={bg} alt="bg" />
				</article>
			</article>
		</MyWrapper>
	);
};

export default Poster;
