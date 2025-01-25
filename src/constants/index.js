import {
	mobile,
	backend,
	creator,
	web,
	javascript,
	typescript,
	html,
	css,
	reactjs,
	redux,
	tailwind,
	nodejs,
	mongodb,
	git,
	figma,
	docker,
	meta,
	starbucks,
	tesla,
	shopify,
	carrent,
	jobit,
	threejs,
	net,
} from '../assets';

export const navLinks = [
	{
		id: 'about',
		title: 'About',
	},
	{
		id: 'work',
		title: 'Work',
	},
	{
		id: 'contact',
		title: 'Contact',
	},
];

const services = [
	{
		title: 'Web Developer',
		icon: web,
	},
	{
		title: 'React Native Developer',
		icon: mobile,
	},
	{
		title: 'Next.js Developer',
		icon: backend,
	},
	{
		title: 'Content Creator',
		icon: creator,
	},
];

const technologies = [
	{
		name: 'HTML 5',
		icon: html,
	},
	{
		name: 'CSS 3',
		icon: css,
	},
	{
		name: 'JavaScript',
		icon: javascript,
	},
	{
		name: 'TypeScript',
		icon: typescript,
	},
	{
		name: 'React JS',
		icon: reactjs,
	},
	{
		name: 'Redux Toolkit',
		icon: redux,
	},
	{
		name: 'Tailwind CSS',
		icon: tailwind,
	},
	{
		name: 'Node JS',
		icon: nodejs,
	},
	{
		name: 'MongoDB',
		icon: mongodb,
	},
	{
		name: 'Three JS',
		icon: threejs,
	},
	{
		name: 'git',
		icon: git,
	},
	{
		name: 'figma',
		icon: figma,
	},
	{
		name: 'docker',
		icon: docker,
	},
];

const experiences = [
	{
		title: 'Front-End Developer',
		company_name: 'Independent Learning',
		icon: meta,
		iconBg: '#E6DEDD',
		date: 'Dec 2024 - Present',
		points: [
			'Currently learning Next.js and React to build scalable, high-performance web applications.',
			'Exploring features like Server-Side Rendering (SSR), Static Site Generation (SSG), and API routes in Next.js.',
			'Practicing state management, React hooks, and component-driven architecture for dynamic user interfaces.',
			'Working on self-initiated projects to apply knowledge and enhance hands-on experience.',
		],
	},
	{
		title: 'Web Developer',
		company_name: 'Independent Learning',
		icon: shopify,
		iconBg: '#383E56',
		date: 'Nov 2024 - Dec 2023',
		points: [
			'Gained a solid foundation in HTML, CSS, and JavaScript, focusing on web development fundamentals',
			'Learned to create responsive and visually appealing web pages with modern design techniques.',
			'Developed skills in DOM manipulation and adding interactivity to websites using JavaScript.',
			'Built small projects to enhance practical knowledge and improve problem-solving abilities.',
		],
	},
	{
		title: 'Quality Assurance',
		company_name: 'Najot Talim',
		icon: tesla,
		iconBg: '#E6DEDD',
		date: 'Jan 2024 - May 2024',
		points: [
			'Graduated from a QA course, gaining expertise in quality assurance principles and practices.',
			'Specialized in functional testing, test case creation, bug reporting, and ensuring software quality.',
			'Acquired hands-on experience with defect tracking tools like Trello.',
			'Developed strong skills in identifying, documenting, and resolving software issues to meet user requirements.',
		],
	},
	{
		title: 'University Student',
		company_name: 'MDIST in Tashkent',
		icon: starbucks,
		iconBg: '#383E56',
		date: 'September 2020 - May 2024',
		points: [
			'Studied at the Management Development Institute of Singapore in Tashkent (MDIST).',
			'Specialized in Computer Information Systems for Businesss',
			'Learned to implement responsive designs and ensure cross-browser compatibility.',
			'Worked on academic projects, enhancing teamwork and problem-solving skills in the field of information systems.',
		],
	},
];

const testimonials = [
	{
		testimonial:
			'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
		name: 'Sara Lee',
		designation: 'CFO',
		company: 'Acme Co',
		image:
			'https://img.freepik.com/premium-psd/cartoon-3d-avatar-transparent-background_986479-245.jpg?semt=ais_hybrid',
	},
	{
		testimonial:
			"I've never met a web developer who truly cares about their clients' success like Rick does.",
		name: 'Chris Brown',
		designation: 'COO',
		company: 'DEF Corp',
		image:
			'https://static.vecteezy.com/system/resources/thumbnails/027/951/137/small/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png',
	},
	{
		testimonial:
			"After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
		name: 'Lisa Wang',
		designation: 'CTO',
		company: '456 Enterprises',
		image:
			'https://thumbs.dreamstime.com/b/d-icon-stylish-smiling-woman-glasses-laptop-online-learning-avatar-cartoon-hipster-character-people-close-up-portrait-344602097.jpg',
	},
];

const projects = [
	{
		name: 'IMDB Clone',
		description:
			' This dynamic platform is a movie database built using Next.js for fast server-side rendering and optimized performance. It offers a rich user experience by showcasing an extensive collection of movies with detailed descriptions, ratings, and categorized section. Users can explore trending titles and discover highly-rated movies effortlessly.',
		tags: [
			{
				name: 'Next.js 14',
				color: 'blue-text-gradient',
			},

			{
				name: 'Tailwind',
				color: 'pink-text-gradient',
			},
		],

		image: carrent,
		net,
		// image: eye,
		source_code_link: 'https://github.com/bunyodabdullaevqa/imdb-next.git',
		second_source_code_link: 'https://imdb-clone-zeta-roan.vercel.app/',
	},
	{
		name: 'TodoList',
		description:
			'This To-Do List Website is a sleek and modern task management application designed to help users organize their daily tasks efficiently. Built with React for a dynamic and interactive user experience, and styled with Tailwind CSS for a clean and responsive design, it offers intuitive features that make managing tasks effortless and enjoyable for all types of users.',
		tags: [
			{
				name: 'Next.js 14',
				color: 'blue-text-gradient',
			},

			{
				name: 'Tailwind',
				color: 'pink-text-gradient',
			},
		],
		image: jobit,
		// image: eye,
		source_code_link: 'https://github.com/bunyodabdullaevqa/TodoList-Next.js',
		second_source_code_link: 'https://todo-list-next-js-phi.vercel.app',
	},
];

export { services, technologies, experiences, testimonials, projects };
