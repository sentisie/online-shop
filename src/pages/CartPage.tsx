import { FC } from "react";
import Cart from "../components/cart/Cart";
import MyWrapper from "../UI/wrapper/MyWrapper";

const CartPage: FC = () => {
	return (
		<MyWrapper style={{ minHeight: "30rem" }}>
			<Cart />
		</MyWrapper>
	);
};

export default CartPage;
