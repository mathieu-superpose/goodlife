import { Link } from "react-router-dom";

import goodlife from './img/goodlife.png'

import './Home.scss'

const Home = () => {
	return (
		<div className="Home">
			<h1 className="Home__title">The Good Life</h1>
			<img className="Home__closeup" src={goodlife} alt="3d game character face closeup" />
			<Link to="/play">Play</Link>
		</div>
	)
}

export default Home
