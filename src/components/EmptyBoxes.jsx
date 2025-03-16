import '../styles/Empty-boxes.scss'

function EmptyBoxes() {
	return (
		<div className="empty-boxes">
			{
				Array.from({ length: 9 }).map((_, index) => (
					<div key={index} className="empty-box"></div>
				))
			}
		</div>
	)
}

export default EmptyBoxes;