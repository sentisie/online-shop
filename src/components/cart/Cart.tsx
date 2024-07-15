import { FC } from "react";
import classes from "./Cart.module.scss";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { sumBy } from "../../utils/sumBy";
import MyButton from "../../UI/button/MyButton";
import {
	addItemToCart,
	removeItemFromCart,
} from "../../store/reducers/user/userSlice";
import { IProduct } from "../../types/types";

const Cart: FC = () => {
	const dispatch = useAppDispatch();
	const { cart } = useAppSelector((state) => state.userReducer);

	const changeQuantity = (item: IProduct, quantity: number) => {
		dispatch(addItemToCart({ ...item, quantity }));
	};

	const removeItem = (id: number) => {
		dispatch(removeItemFromCart(id));
	};

	return (
		<section className={classes.cart}>
			<h2 className={classes.title}>Your cart</h2>

			{!cart.length ? (
				<div className={classes.empty}>Here is empty 😢</div>
			) : (
				<>
					<div className={classes.list}>
						{cart.map((item) => {
							const { title, category, images, price, id, quantity } = item;
							return (
								<div className={classes.item} key={id}>
									<div
										className={classes.image}
										style={{ backgroundImage: `url(${images[0]})` }}
									/>
									<div className={classes.info}>
										<h3 className={classes.name}>{title}</h3>
										<div className={classes.category}>{category.name}</div>
									</div>

									<div className={classes.price}>{price}$</div>

									<div className={classes.quantity}>
										<MyButton
											disabled={quantity < 2}
											className={classes.minus}
											onClick={() =>
												changeQuantity(item, Math.max(1, quantity - 1))
											}
										>
											-
										</MyButton>

										<span className={classes.quan}>{quantity}</span>

										<MyButton
											className={classes.plus}
											onClick={() =>
												changeQuantity(item, Math.max(1, quantity + 1))
											}
										>
											+
										</MyButton>
									</div>

									<div className={classes.total}>{price * quantity}$</div>

									<div
										className={classes.remove}
										onClick={() => removeItem(item.id)}
									>
										X
									</div>
								</div>
							);
						})}
					</div>

					<div className={classes.actions}>
						<div className={classes.total}>
							TOTAL PRICE:
							<span>
								{" "}
								{sumBy(
									cart.map(({ quantity, price }) => quantity * price)
								)}${" "}
							</span>
						</div>

						<MyButton type="button" className={classes.proceed}>
							Proceed to checkout
						</MyButton>
					</div>
				</>
			)}
		</section>
	);
};

export default Cart;
