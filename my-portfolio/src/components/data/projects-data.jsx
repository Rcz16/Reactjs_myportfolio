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
        name: 'Meet-up data',
        description: 'built with SvelteKit and Firebase, allows users to filter events by various criteria and receive email notifications about upcoming meetups. It features modals that display event details, providing a seamless user experience. Firebase handles real-time data syncing and email notifications, while SvelteKit ensures a responsive frontend.',
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
        name: 'Ui design',
        description: 'focuses on creating visually appealing, responsive, and user-friendly interfaces, incorporating interactive elements and ensuring accessibility. Wireframing helps map out the structure and flow of the design, which is then refined through user feedback and collaboration with stakeholders. Design decisions are made with a user-centered approach, ensuring functionality and adaptability throughout the development process.',
        imageSrc: uidesign,
        imageAlt: 'ui_design',
        href: 'https://www.figma.com/design/JNCER6KNkNehWR8EgiyG0L/Portfolio?node-id=0-1&node-type=canvas&t=Mte8mPEwLnUBYUGE-0',
        logo: [
            html,
            figma,
            photoshop,
            illustrator
        ],
    },
    {
        name: 'Company Website',
        description: 'Developed a fully functional and fully responsive website, managing all aspects of frontend development and design. Leveraged SvelteKit for the framework to ensure optimized performance, Figma for creating wireframes, and Photoshop and Canva for picture editing. Delivered a visually appealing user interface aligned with brand guidelines, enhancing user engagement across devices.',
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