
import hello from '../assets/hello_world.jpg'
import laptop from '../assets/laptop.jpg'

const About = () => {
    return (
        <div className="grid grid-cols-2 gap-4 items-center bg-white min-h-screen p-10" id='about'>
            <div className="ms-3">
                <h1 className="text-7xl uppercase mb-4 text-black">Learn <br /> About Me</h1>
                <p className="text-xl text-justify text-gray-700 max-w-2xl">
                    I am a passionate Web/Software Developer and Graphic Designer with a proven ability to deliver user-focused and impactful solutions. With experience in creating SEO-optimized websites using the SvelteKit framework, I ensure enhanced visibility and performance, while leveraging my expertise in JavaScript, CSS, HTML, and Svelte to build responsive and visually appealing interfaces. I have also developed scalable software services using ExtJS, PHP (WebSocket), and MySQL, addressing complex business needs with efficiency and precision. Additionally, my background in graphic design allows me to craft compelling visuals and designs using tools like Figma, Photoshop, and Canva, ensuring seamless alignment with brand identity. My unique blend of technical expertise and creative skills positions me to contribute effectively to innovative and user-driven projects.
                </p>
            </div>
            <div className="relative mt-10">
                <div className="absolute top-[130px] left-[200px] rotate-[-45deg] rounded-xl bg-white  transition duration-300 hover:scale-105">
                    <img
                        src={laptop}
                        alt="laptop"
                        className="object-cover w-[20rem] h-[10rem] rounded-md"
                    />
                </div>
                <div className="absolute bottom-[150px] right-[145px] rotate-[15deg] rounded-xl bg-white  transition duration-300 hover:scale-105">
                    <img
                        src={hello}
                        alt="hello world"
                        className="object-cover w-[25rem] h-[12.5] rounded-md  "
                    />
                </div>
            </div>
        </div>
    );
};

export default About;
