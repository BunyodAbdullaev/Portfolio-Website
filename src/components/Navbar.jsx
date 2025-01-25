import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';

const Navbar = () => {
	const [active, setActive] = useState('');
	const [toggle, setToggle] = useState(false);

	return (
		<nav
			className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
		>
			<div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
				{/* Logo */}
				<a
					href='/'
					className='flex items-center gap-2'
					onClick={() => {
						setActive('');
						window.scrollTo(0, 0);
					}}
				>
					<div className='rounded-full overflow-hidden h-10 w-10'>
						<img src={logo} alt='logo' className='w-full h-full object-cover' />
					</div>
					<p className='text-white text-[18px] font-bold cursor-pointer flex'>
						Bunyod Abdullaev&nbsp;
						<span className='sm:block hidden'>| Developer</span>
					</p>
				</a>
				{/* Desktop Navigation */}
				<ul className='list-none hidden sm:flex flex-row gap-10'>
					{navLinks.map((link) => (
						<li
							key={link.id}
							className={`${
								active === link.title ? 'text-white' : 'text-secondary'
							} font-poppins font-medium cursor-pointer text-[16px]`}
							onClick={() => setActive(link.title)}
						>
							<Link
								to={link.id}
								spy={true}
								smooth={true}
								offset={-70} // Adjust this value based on your navbar height
								duration={500}
							>
								{link.title}
							</Link>
						</li>
					))}
				</ul>
				{/* Mobile Navigation */}
				<div className='sm:hidden flex flex-1 justify-end items-center'>
					<img
						src={toggle ? close : menu}
						alt='menu'
						className='w-[28px] h-[28px] object-contain cursor-pointer'
						onClick={() => setToggle((prev) => !prev)}
					/>
					<div
						className={`${
							toggle ? 'flex' : 'hidden'
						} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
					>
						<ul className='list-none flex justify-end items-start flex-col gap-4'>
							{navLinks.map((link) => (
								<li
									key={link.id}
									className={`${
										active === link.title ? 'text-white' : 'text-secondary'
									} hover:text-white text-[18px] font-medium cursor-pointer`}
									onClick={() => {
										setActive(link.title);
										setToggle(false);
									}}
								>
									<Link
										to={link.id}
										spy={true}
										smooth={true}
										offset={-70}
										duration={500}
									>
										{link.title}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
