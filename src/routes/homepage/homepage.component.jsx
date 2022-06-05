import Directory from "../../components/directory/directory.component";

const HomePage = () => {
	// creating the model to reflect the apps object properties
	const categories = [
		{
			id: 1,
			title: "hat",
			imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
		},
		{
			id: 2,
			title: "jacket",
			imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
		},
		{
			id: 3,
			title: "sneaker",
			imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
		},
		{
			id: 4,
			title: "women",
			imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
		},
		{
			id: 5,
			title: "men",
			imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
		},
	];

	return (
    <div>
      <Directory categories={categories} />
    </div>)
};

export default HomePage;