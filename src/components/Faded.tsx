import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import useClickOutside from '../hooks/useClickOutside';

interface FadedProps {
	onClose: () => void;
}

const Faded = ({ onClose }: FadedProps) => {
	const ref = useRef<HTMLDivElement | null>(null);
	useClickOutside({
		ref,
		callback: onClose
	});

	return ReactDOM.createPortal(
		<div className='w-full h-full'>
			<div className='modal-content' ref={ref}>
				<div className='modal-title'>Modal Title</div>
				<div className='modal-body'>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, sint ab ex odio
					pariatur et eius? Nam, quod eum adipisci earum nisi tempora, nesciunt esse voluptate illo,
					maxime consectetur harum!
				</div>
				<div className='modal-footer'>
					<button onClick={onClose}>Close</button>
				</div>
			</div>
		</div>,
		document.body
	);
};

export default Faded;
