import Link from './Link.jsx';

import '../styles/header.scss';
import mailIcon from '../assets/icons/mailIcon.svg';
import linkedInIcon from '../assets/icons/linkedInIcon.svg';
import gitHubIcon from '../assets/icons/gitHubIcon.svg';

function Header() {
	return (
		<header className='portfolio__header'>
			<h1 className="title major-mono">Andres Valencia</h1>
			<ul className='links'>
				<Link link='mailto:andres.valencia74@icloud.com'  icon={mailIcon} />
				<Link link='https://www.linkedin.com/in/andresvalenciaa/'  icon={linkedInIcon} />
				<Link link='https://github.com/andresV74/'  icon={gitHubIcon} />
			</ul>
		</header>
	)
}

export default Header;