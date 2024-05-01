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
				<section className="videoHero-videoContainer">
					<video
						controls
						loop
						src="https://video.asos-media.com/Navigation/_content_UK_DESKTOPHERO_WW_2880x1000-redpen_Flash9_2560xAuto_5000K.mp4"
						poster="https://i.ibb.co/9NKJ7S1/Resale-fortune.png"
						height="322"
						width="100%"
					>
						Sorry, your browser doesn't support embedded videos, but don't
						worry, you can
						<a href="https://streamable.com/juhhx8">download it</a>
						and watch it with your favorite video player!
					</video>
				</section>
			}
			
			{categories.map((category) => (
				<DirectoryItem key={category.id} category={category} />
			))}
		</DirectoryContainer>
	);
};

export default Directory;
