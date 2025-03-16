import { useRef, useState } from 'react';
import DialogWindow from './Dialog-window.jsx';
import '../styles/Article.scss';

function Article({ id, title, content, setHover }) {
	const dialogWindow = useRef(null);
	const buttonRef = useRef(null);
	const [titleClasses, setTitleClasses] = useState('article__title');
	const [target, setTarget] = useState(null);

	const showDialogWindow = (event) => {
		setTitleClasses(titleClasses + ' hidden');
		setHover(id, false);
		setTarget(event.target);
	}
	const onTitleHide = () => {
		if (target === buttonRef.current) {
			dialogWindow.current.showModal();
		}
	}
	const showTitle = (event) => {
		dialogWindow.current.close();
		setTitleClasses('article__title');
		setTarget(event.target);
	}

	return (
		<article className="article">
			<h3 className={titleClasses}
				onTransitionEnd={onTitleHide}>
				<button
					ref={buttonRef}
					className="article__button major-mono"
					onMouseEnter={() => setHover(id, true)}
					onMouseLeave={() => setHover(id, false)}
					onClick={showDialogWindow}>
					{ title }
				</button>
			</h3>
			<DialogWindow dialogWindow={dialogWindow} showTitle={showTitle} title={title} content={content} />
		</article>
	)
}

export default Article;