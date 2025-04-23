import { MdEmail } from 'react-icons/md'
import { FaLinkedin, FaGithub } from 'react-icons/fa6'

import Link from './Link.jsx';

import '../styles/header.scss';

function Header() {
	return (
		<header className='portfolio__header'>
			<h1 className="title major-mono">Andres Valencia</h1>
			<ul className='links'>
				<Link link='mailto:andres.valencia74@icloud.com'  icon={<MdEmail />} />
				<Link link='https://www.linkedin.com/in/andresvalenciaa/'  icon={<FaLinkedin />} />
				<Link link='https://github.com/andresV74/'  icon={<FaGithub />} />
			</ul>
		</header>
	)
}

export default Header;