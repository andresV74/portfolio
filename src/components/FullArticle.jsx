import { useState } from 'react';
import Article from './Article.jsx';
import HoverVideo from './HoverVideo.jsx';

function FullArticle({id, title, content, videoSrc}) {
	const [hoverStates, setHoverStates] = useState({});

  const handleHover = (id, value) => {
    setHoverStates({ ...hoverStates, [id]: value });
  };

	return (
		<>
			<Article
				id={id}
				title={title}
				content={content}
				setHover={handleHover} />
			<HoverVideo
				videoSrc={videoSrc}
				article={id}
				isHovered={hoverStates[id]} />
		</>
	)
}

export default FullArticle