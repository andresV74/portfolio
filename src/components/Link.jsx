function Link({ link, icon }) {
	return(
		<li>
			<a href={ link } className="link" target="_blank" rel="noopener noreferrer">
				{ icon }
			</a>
		</li>
	)
}

export default Link