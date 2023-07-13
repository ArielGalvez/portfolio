interface Props {
	href: string;
	title: string;
}

function NavbarItem(props: Props): React.ReactElement {
	const { href, title } = props;
	return (
		<li className='hover:text-blue-500 text-lg font-bold'>
			<a href={href}>{title}</a>
		</li>
	);
}

export default NavbarItem;
