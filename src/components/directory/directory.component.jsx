import DirectoryItem from "../directory-item/directory-item.component";

import { DirectoryContainer } from "./directory.styles";

const categories = [
	{
		id: 1,
		title: "hats",
		imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
		route: "shop/hats",
	},
	{
		id: 2,
		title: "jackets",
		imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
		route: "shop/jackets",
	},
	{
		id: 3,
		title: "sneakers",
		imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
		route: "shop/sneakers",
	},
	{
		id: 4,
		title: "womens",
		imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
		route: "shop/womens",
	},
	{
		id: 5,
		title: "mens",
		imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
		route: "shop/mens",
	},
];

const Directory = () => {
	return (
		<DirectoryContainer>
			{
				<section className="video-ad">
					<video
						controls
						loop
						src="https://www.canva.com/design/DAGDKVqLJ-s/fOpZNhsW-lfWV4Ohm1a22g/watch?utm_content=DAGDKVqLJ-s&utm_campaign=designshare&utm_medium=link&utm_source=editor"
						poster="https://i.ibb.co/9NKJ7S1/Resale-fortune.png"
						width="100%"
						height="322"
					>
						Sorry, your browser doesn't support embedded videos, but don't
						worry, you can
						<a href="https://streamable.com/juhhx8">download it</a>
						and watch it with your favorite video player!
					</video>
					<img src="https://www.canva.com/design/DAGDKVqLJ-s/fOpZNhsW-lfWV4Ohm1a22g/watch?utm_content=DAGDKVqLJ-s&utm_campaign=designshare&utm_medium=link&utm_source=editor"></img>
				</section>
			}
			
			{categories.map((category) => (
				<DirectoryItem key={category.id} category={category} />
			))}
		</DirectoryContainer>
	);
};

export default Directory;
