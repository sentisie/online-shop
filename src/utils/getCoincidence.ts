export const getCoincidence = (title: string) => {
	const products = [
		"phone case",
		"phone",
		"laptop",
		"headphones",
		"mouse",
		"watch",
		"toaster",
		"table",
		"setup",
		"chair",
		"sandals",
		"boots",
		"heels",
		"sneaker",
		"bag",
		"sofa",
		"pullover",
		"hoodie",
		"sweatshirt",
		"t-shirt",
		"cap",
		"joggers",
		"shorts",
		"bicycle",
		"hat",
	];

	for (const product of products) {
		if (title.toLowerCase().includes(product)) {
			return product;
		}
	}

	return "";
};
