import useFetch from "./useFetch";

export class ProductCl {
	private discountFormula: number = 0.95;
	constructor(
		public id: number,
		public category: string | null,
		private price: number,
		public title: string,
		public image: string,
		public rating: number | null,
		public description: string | null
	) {
		this.id = id;
		this.category = category;
		this.price = price;
		this.title = title;
		this.image = image;
		this.rating = rating;
		this.description = description;
	}
	getPrice() {return this.price}
	getDisPrice() {
		return this.category === "electronics"
			? this.price * this.discountFormula
			: this.price;
	}
}
function useProducts() {
	const productsList = useFetch("https://fakestoreapi.com/products");
	return productsList.map(
		({ id, category, price, title, image, rating, description }) =>
			new ProductCl(id, category, price, title, image, rating, description)
	);
}

export default useProducts;
