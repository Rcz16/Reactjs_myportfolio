import svelte_project from '../../assets/svelte-project.png'
import website from '../../assets/website.png'
import portfolio from '../../assets/portfolio.png'
import javascript from '../../assets/logo-javascript.png'
import html from '../../assets/logo-html.png'
import css from '../../assets/logo-css.png'
import svelte from '../../assets/logo-svelte.png'
import tailwind from '../../assets/logo-tailwind.png'
import react from '../../assets/logo-react.png'
import daiyui from '../../assets/logo-daisyui.png'

export const projects = [
    {
        name: 'Company Website',
        description: 'Responsive website for a company.',
        imageSrc: website,
        imageAlt: 'website',
        href: 'https://www.figma.com/design/JNCER6KNkNehWR8EgiyG0L/Portfolio?t=2U681eGthW9bHXgQ-0',
        // https://www.payrollsolutions.ph/
        logo:[
            html,
            css,
            javascript,
            svelte
        ],
    },
    {
        name: 'Meet-up data',
        description: 'Managing the meetups data with features of filtering, emailing and modal.',
        imageSrc: svelte_project,
        imageAlt: 'meet-up data',
        href: 'https://sveltekit-project-meet-up-p164.vercel.app/',
        logo: [
            html,
            css,
            javascript,
            svelte
        ],
    },
    {
        name: 'My portfolio',
        description: 'Good for showing my skills.',
        imageSrc: portfolio,
        imageAlt: 'portfolio',
        href: '#',
        logo: [
            html,
            css,
            javascript,
            react,
            tailwind,
            daiyui
        ],
    }
]