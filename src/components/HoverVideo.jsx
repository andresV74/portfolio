import '../styles/hoverVideo.scss';

function HoverVideo({ videoSrc, article, isHovered}) {
	return (
		<div className={isHovered ? `video ${article} visible` : `video ${article}`}>
			<div className="empty-box"></div>
			<video loop muted autoPlay>
				<source src={ videoSrc } type='video/mp4' />
			</video>
		</div>
	)
}

export default HoverVideo;