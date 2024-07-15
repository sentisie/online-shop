import { FC, useEffect, useState } from "react";
import classes from "./Product.module.scss";
import { IProduct } from "../../types/types";
import { Link } from "react-router-dom";
import MyWrapper from "../../UI/wrapper/MyWrapper";
import useColorTranslation from "../../hooks/useColorTranslation";
import { useAppDispatch } from "../../hooks/redux";
import { addItemToCart } from "../../store/reducers/user/userSlice";
import MyButton from "../../UI/button/MyButton";

const Product: FC<IProduct> = (item) => {
	const { title, images, price, description, category, purch } = item;
	const [curImage, setCurImage] = useState<string>();
	const [curSize, setCurSize] = useState<number | null>(null);

	const dispatch = useAppDispatch();

	const colorTranslation = useColorTranslation(description);

	const sizes = [4, 4.5, 5];

	useEffect(() => {
		if (!images.length) return;
		setCurImage(images[0]);
	}, [images]);

	const addToCart = () => {
		dispatch(addItemToCart(item));
	};

	return (
		<MyWrapper className={classes.product}>
			<div className={classes.images}>
				<div
					className={classes.current}
					style={{ backgroundImage: `url(${curImage})` }}
				/>
				<div className={classes["images-list"]}>
					{images.map((image, index) => (
						<div
							key={index}
							className={classes.image}
							style={{ backgroundImage: `url(${image})` }}
							onClick={() => {
								setCurImage(image);
							}}
						/>
					))}
				</div>
			</div>

			<div className={classes.info}>
				<h1 className={classes.title}>{title}</h1>
				<div className={classes.price}>{price}$</div>

				{colorTranslation && (
					<div className={classes.color}>
						<span className={classes.name}>Color: </span> {colorTranslation}
					</div>
				)}

				{category.name === "Clothes" && (
					<div className={classes.sizes}>
						<span className={classes.name}>Sizes:</span>
						<div className={classes.list}>
							{sizes.map((size) => (
								<div
									onClick={() =>
										setCurSize((prevSize) => (prevSize === size ? null : size))
									}
									className={`${curSize === size ? classes.active : ""} ${
										classes.size
									}`}
									key={size}
								>
									{size}
								</div>
							))}
						</div>
					</div>
				)}

				<p className={classes.description}>{description}</p>

				<div className={classes.actions}>
					<MyButton
						onClick={addToCart}
						disabled={category.name === "Clothes" ? !curSize : false}
						className={classes.add}
					>
						Add to cart
					</MyButton>
					<MyButton className={classes.favourite}>Add to favourite</MyButton>
				</div>

				<div className={classes.bottom}>
					<div className={classes.purchase}>{`${purch} people purchased`}</div>

					<Link to="/Home">Return to store</Link>
				</div>
			</div>
		</MyWrapper>
	);
};

export default Product;
