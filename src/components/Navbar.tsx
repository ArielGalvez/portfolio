import React, { useMemo, useRef, useState } from 'react';
import NavbarItem from './NavbarItem';
import useClickOutside from '../hooks/useClickOutside';
import { SocialMedia } from './SocialMedia';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const menuRef = useRef<HTMLUListElement | null>(null);
	useClickOutside({
		ref: menuRef,
		callback: () => {
			setIsOpen(false);
			// const html = document.getElementsByTagName('html').item(0) as HTMLHtmlElement;
			// html.style.overflow = 'auto';
		}
	});

	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.stopPropagation();
		setIsOpen((old) => {
			// const html = document.getElementsByTagName('html').item(0) as HTMLHtmlElement;
			// if (!old) {
			// 	html.style.overflow = 'hidden';
			// } else {
			// 	html.style.overflow = 'auto';
			// }
			return !old;
		});
	};

	const memorizedItems = useMemo(
		() => (
			<>
				<NavbarItem title='About' href='#about' />
				<NavbarItem title='Experience' href='#experience' />
				<NavbarItem title='Projects' href='#projects' />
				<NavbarItem title='Contact' href='#contact' />
			</>
		),
		[]
	);

	return (
		<>
			<header className='sticky top-0 backdrop-blur-sm'>
				<nav className='flex justify-between items-center'>
					<ul className='flex gap-3'>
						<SocialMedia />
					</ul>
					<ul className='hidden gap-6 items-center sm:flex'>{memorizedItems}</ul>
				</nav>
			</header>
			<div className='fixed top-2 right-2 z-10'>
				<button
					id='menu'
					className={`relative w-9 h-8 p-1 cursor-pointer sm:hidden
					`}
					onClick={handleClick}
				>
					<span
						className={`absolute block w-4 h-1 bg-black rounded-sm sibling-checked:bg-blue-500 ${
							isOpen ? 'w-8 rotate-45 top-5' : 'top-2'
						} transition-all`}
					></span>
					<span
						className={`absolute block top-4 w-6 h-1 bg-black rounded-sm ${
							isOpen && 'opacity-0'
						} transition-all`}
					></span>
					<span
						className={`absolute block w-8 h-1 bg-black rounded-sm ${
							isOpen ? 'rotate-[-45deg] top-5' : 'top-6'
						} transition-all`}
					></span>
				</button>
			</div>
			{isOpen && (
				<div className='fixed top-0 right-0 w-[100vw] h-[100vh] bg-[rgba(0,0,0,0.1)] sm:hidden overflow-hidden'>
					<ul
						ref={menuRef}
						className='absolute right-0 bg-gray-100
									 top-0 h-full w-full xs:w-48 flex flex-col pt-12 shadow-md p-4 gap-1
									 animate-[wiggle_0.333s_ease-in-out_forwards] z-20'
					>
						{memorizedItems}
					</ul>
				</div>
			)}
		</>
	);
};

export default Navbar;
