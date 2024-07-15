import { FC } from "react";
import classes from "./Banner.module.scss";
import bannerImg from "../../images/banner/banner-bg.jpg";
import MyWrapper from "../../UI/wrapper/MyWrapper";
import MyButton from "../../UI/button/MyButton";

const Banner: FC = () => {
	return (
		<MyWrapper className={classes.banner}>
			<article className={classes.left}>
				<p className={classes.content}>
					NEW YEAR
					<span> SALE</span>
				</p>
				<MyButton className={classes.more}>See More</MyButton>
			</article>
			<article
				className={classes.right}
				style={{ backgroundImage: `url(${bannerImg})` }}
			>
				<p className={classes.discount}>
					save up to <span> 50% </span> of
				</p>
			</article>
		</MyWrapper>
	);
};

export default Banner;
