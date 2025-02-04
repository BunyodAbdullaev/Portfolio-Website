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
	promptopia,
} from '../assets';

export const navLinks = [
	{
		id: 'about',
		title: 'About',
	},
	{
		id: 'work',
		title: 'Experience',
	},
	{
		id: 'projects',
		title: 'Projects',
	},
	{
		id: 'contact',
		title: 'Contact',
	},
];

const services = [
	{
		title: 'Frontend Developer',
		icon: web,
	},
	{
		title: 'QA Engineer',
		icon: mobile,
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
		name: 'Tailwind CSS',
		icon: tailwind,
	},
	{
		name: 'Node JS',
		icon: nodejs,
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
];

const experiences = [
	{
		title: 'Frontend Developer',
		company_name: 'Independent Learning',
		icon: meta,
		iconBg: '#E6DEDD',
		date: 'Nov 2024 - Present',
		points: [
			'Currently learning Next.js and React to build scalable, high-performance web applications',

			'Working on self-initiated projects to apply knowledge and enhance hands-on experience.',
			'Gained a solid foundation in HTML, CSS, and JavaScript, focusing on web development fundamentals.',
			'Learned to create responsive and visually appealing web pages with modern design techniques.',
		],
	},
	{
		title: 'Manual QA Engineer',
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
		company_name: 'MDIS in Tashkent',
		icon: starbucks,
		iconBg: '#383E56',
		date: 'Sep 2020 - May 2024',
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
				name: 'next.js',
				color: 'blue-text-gradient',
			},

			{
				name: 'tailwind',
				color: 'pink-text-gradient',
			},
		],

		image: carrent,
		net,
		// image: eye,
		source_code_link: 'https://github.com/bunyodabdullaevqa/imdb-next.git',
		second_source_code_link: 'https://imdb-bunyod.vercel.app/',
	},
	{
		name: 'TodoList',
		description:
			'This To-Do List Website is a sleek and modern task management application designed to help users organize their daily tasks efficiently. Built with React for a dynamic and interactive user experience, and styled with Tailwind CSS for a clean and responsive design, it offers intuitive features that make managing tasks effortless and enjoyable for all types of users.',
		tags: [
			{
				name: 'next.js',
				color: 'blue-text-gradient',
			},

			{
				name: 'tailwind',
				color: 'pink-text-gradient',
			},
		],
		image: jobit,
		// image: eye,
		source_code_link: 'https://github.com/bunyodabdullaevqa/TodoList-Next.js',
		second_source_code_link: 'https://todolist-bunyod.vercel.app/',
	},
	{
		name: 'Promptopia',
		description:
			'Promptopia is a Next.js-powered web application that allows users to create, edit, and explore prompts from different accounts. With a modern, responsive design and authentication features, it provides an intuitive platform for managing and discovering creative prompts. Users can seamlessly browse, contribute, and engage with a community of prompt creators.',
		tags: [
			{
				name: 'next.js',
				color: 'blue-text-gradient',
			},

			{
				name: 'tailwind',
				color: 'pink-text-gradient',
			},
		],
		image: promptopia,
		// image: eye,
		source_code_link: 'https://github.com/BunyodAbdullaev/Prompt',
		second_source_code_link: 'https://promptopiafinal.vercel.app/',
	},
];

export { services, technologies, experiences, testimonials, projects };
