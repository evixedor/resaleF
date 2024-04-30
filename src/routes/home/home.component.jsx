import { Outlet } from "react-router-dom";

import Directory from "../../components/directory/directory.component";
import Footer from '../../components/footer/footer.component';


const HeroPic = () => {

	return (
		<div>
			<section className="">
				<div className="">
					<a href="https://ibb.co/G0YXqN8">
						<img src="https://i.ibb.co/Xkswt9P/Heropic.png" alt="Resale-fortuune" border="0" width="100%" height="222" />
					</a>
				</div>
			</section>
		</div>
	);
};

const Home = () => {
	return (
		<div>
			<Directory />
			<HeroPic />
			<Footer />
			<Outlet />
		</div>
	);
};

export default Home;
