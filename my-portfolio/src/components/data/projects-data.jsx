import svelte_project from '../../assets/svelte-project.jpg'
import website from '../../assets/website.jpg'
import portfolio from '../../assets/portfolio.jpg'
import javascript from '../../assets/logo-javascript.png'
import uidesign from '../../assets/uidesign.png'
import figma from '../../assets/logo-figma.png'
import photoshop from '../../assets/logo-photoshop.png'
import illustrator from '../../assets/logo-illustrator.png'
import css from '../../assets/logo-css.png'
import svelte from '../../assets/logo-svelte.png'
import tailwind from '../../assets/logo-tailwind.png'
import react from '../../assets/logo-react.png'
import daiyui from '../../assets/logo-daisyui.png'
import html from '../../assets/logo-html.png'

export const projects = [
    {
        name: 'Graphic Design Portfolio',
        description: 'Updated my Canva portfolio by converting it into a fully responsive, hard-coded website, ensuring seamless functionality, performance, and accessibility across all devices.',
        imageSrc: portfolio,
        imageAlt: 'portfolio',
        href: 'https://ralphchristianz.my.canva.site/myportfolio',
        logo: [
            html,
            css,
            javascript,
            react,
            tailwind,
            daiyui
        ],
    },
    {
        name: 'Company Website',
        description: 'Developed a fully responsive website using SvelteKit for optimized performance, Figma for wireframes, and Photoshop and Canva for design, delivering a visually appealing interface that aligned with brand guidelines and enhanced user engagement.',
        imageSrc: website,
        imageAlt: 'website',
        href: 'https://www.payrollsolutions.ph/',
        logo: [
            html,
            css,
            javascript,
            svelte
        ],
    },
    {
        name: 'Figma Design Portfolio',
        description: 'This process emphasizes creating visually appealing, responsive, and user-friendly interfaces through wireframing, user feedback, and a user-centered approach to ensure accessibility, functionality, and adaptability.',
        imageSrc: uidesign,
        imageAlt: 'ui_design',
        href: 'https://www.figma.com/design/JNCER6KNkNehWR8EgiyG0L/Portfolio?node-id=0-1&node-type=canvas&t=Mte8mPEwLnUBYUGE-0',
        logo: [
            figma,
            photoshop,
            illustrator
        ],
    },
    {
        name: 'Meet-up data',
        description: 'Built with SvelteKit and Firebase, this project enables event filtering, email notifications, real-time data syncing, and responsive modals for a seamless user experience.',
        imageSrc: svelte_project,
        imageAlt: 'meet-up data',
        href: 'https://sveltekit-project-meet-up-p164.vercel.app/',
        logo: [
            html,
            css,
            javascript,
            svelte
        ],
    }
];