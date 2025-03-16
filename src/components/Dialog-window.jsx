import { MdClose } from 'react-icons/md';
import '../styles/Dialog-window.scss';


function DialogWindow({dialogWindow, showTitle, title, content}) {
	return (
		<dialog
			className="dialog"
			ref={dialogWindow}>
			<header className="dialog__header">
				<button className="dialog__close" onClick={showTitle}>
					<MdClose />
				</button>
				<h3 className="dialog__title major-mono">{ title }</h3>
			</header>
			<div className="dialog__content ubuntu-mono">
				{
					content.map(({ paragraph, isTitle, link, index }) => {
						if (link) {
							return (
								<p key={index} className={isTitle ? 'ubuntu-mono-bold title' : 'paragraph'}>
									<a href={link} className='link' target='_blank'>
										{paragraph}
									</a>
								</p>
							)
						} else {
							return (
								<p key={index} className={isTitle ? 'ubuntu-mono-bold title' : 'paragraph'}>
									{paragraph}
								</p>
							)
						}
					})
				}
			</div>
		</dialog>
	)
}

export default DialogWindow;
