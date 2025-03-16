import { useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa6";

import '../styles/marquee.scss';

function Marquee({ text }) {
	const [isPaused, setIsPaused] = useState(false);
	const subtitleClassName = isPaused
		? 'marquee__subtitle doto-font paused'
		: 'marquee__subtitle doto-font';
	const iconButton = isPaused
		? <FaPlay />
		: <FaPause />;

	const handleClick = () => {
		setIsPaused(!isPaused);
	}
	return(
		<div className="marquee">
			<h2 className={ subtitleClassName }>{ text }</h2>
			<button className="marquee__pause-button" onClick={ handleClick }>
				{ iconButton}
			</button>
		</div>
	)
}

export default Marquee;
