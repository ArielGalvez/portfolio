import React, { useMemo, useRef, useState } from 'react';
import NavbarItem from './NavbarItem';
import useClickOutside from '../hooks/useClickOutside';

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
						<li>
							<a href='https://www.linkedin.com/in/ariel-g%C3%A1lvez-3b5119260/'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 48 48'
									width='48px'
									height='48px'
								>
									<path
										fill='#0078d4'
										d='M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5	V37z'
									></path>
									<path
										d='M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364	c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274	L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479	C18,16.523,16.521,18,14.485,18H18v19H11z'
										opacity='.05'
									></path>
									<path
										d='M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677	c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638	c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001	c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z'
										opacity='.07'
									></path>
									<path
										fill='#fff'
										d='M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12	c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698	c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19	c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z'
									></path>
								</svg>
							</a>
						</li>
						<li>
							<a href=''>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 48 48'
									width='48px'
									height='48px'
								>
									<path
										fill='#455A64'
										d='M40.3,15.7c0.6-1.7,1.2-5-0.4-8.7c-4.5,0-8.3,3.2-8.9,3.8c-2.2-0.5-4.6-0.7-7-0.7c-2.5,0-4.9,0.3-7.2,0.8C13.7,7.7,9.6,7,8,7c0,0-0.9,1.8-0.9,5c0,2,0.5,3.2,0.8,3.8C5.5,18.3,4,21.7,4,26.1c0,11.2,7.1,15,20,15s20-3.8,20-15C44,21.5,42.6,18.1,40.3,15.7z'
									></path>
									<path
										fill='#FFCCBC'
										d='M24,39c-8.2,0-15-1.4-15-9c0-2.9,1.6-4.5,2.7-5.5c2.5-2.2,6.7-1.2,12.3-1.2c4.1,0,7.6-0.7,10.4,0.2c2.8,0.9,4.6,3.5,4.6,6.3C39,37.7,35,39,24,39z'
									></path>
									<path
										fill='#D84315'
										d='M25,34c0,0.6-0.4,1-1,1s-1-0.4-1-1s0.4-1,1-1S25,33.4,25,34z M26.5,36.5c0.2-0.2,0.2-0.5,0-0.7s-0.5-0.2-0.7,0c-0.9,0.9-2.6,0.9-3.5,0c-0.2-0.2-0.5-0.2-0.7,0s-0.2,0.5,0,0.7c0.7,0.7,1.5,1,2.5,1S25.8,37.1,26.5,36.5z'
									></path>
									<path
										fill='#FFF'
										d='M19,29.5c0,2.5-1.3,4.5-3,4.5s-3-2-3-4.5s1.3-4.5,3-4.5S19,27,19,29.5z M32,25c-1.7,0-3,2-3,4.5s1.3,4.5,3,4.5c1.7,0,3-2,3-4.5S33.7,25,32,25z'
									></path>
									<path
										fill='#6D4C41'
										d='M34,30c0,1.7-0.9,3-2,3s-2-1.3-2-3c0-0.2,0-0.5,0.1-0.7c0.1,0.4,0.5,0.7,0.9,0.7c0.6,0,1-0.4,1-1c0-0.6-0.4-1-1-1c-0.2,0-0.4,0.1-0.6,0.2c0.4-0.7,0.9-1.2,1.6-1.2C33.1,27,34,28.3,34,30z M16,27c-0.7,0-1.2,0.5-1.6,1.2c0.2-0.1,0.4-0.2,0.6-0.2c0.6,0,1,0.4,1,1c0,0.6-0.4,1-1,1c-0.4,0-0.8-0.3-0.9-0.7c0,0.2-0.1,0.5-0.1,0.7c0,1.7,0.9,3,2,3s2-1.3,2-3S17.1,27,16,27z'
									></path>
								</svg>
							</a>
						</li>
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