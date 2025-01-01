
import hello from '../assets/hello_world.jpg'
import laptop from '../assets/laptop.jpg'

const About = () => {
    return (
        <div className="grid grid-cols-2 sx:grid-cols-1 lg:grid-cols-2 gap-4 items-center bg-white min-h-screen sx:min-h-[30vh] sm:min-h-[50vh] md:min-h-[70vh] lg:min-h-screen xxl:min-h-screen p-10" id='about'>
            <div className="ms-3 sx:ms-0">
                <h1 className="uppercase mb-4 text-black  xl:text-[100px] lg:text-7xl md:text-[90px] sm:text-5xl sx:text-5xl">Learn <br /> About Me</h1>
                <p className="text-justify text-gray-700 xl:text-xl lg:text-md md:text-[18px] sm:text-[11.5px] sx:text-[11px]">

                    I am a versatile Web/Software Developer and Graphic Designer skilled in creating SEO-optimized, responsive websites using SvelteKit, JavaScript, CSS, and HTML, ensuring enhanced visibility and user engagement. With experience in scalable software solutions using ExtJS, PHP (WebSocket), and MySQL, I efficiently address complex business needs. My expertise in graphic design with tools like Figma, Photoshop, and Canva enables me to deliver visually appealing designs aligned with brand identity for impactful user experiences.
                </p>
            </div>
            <div className="relative mt-10 xl:block sx:hidden lg:block ">
                <div className="absolute top-[130px] left-1/2 transform -translate-x-1/2 rotate-[-45deg] rounded-xl bg-white  transition duration-300 hover:scale-105">
                    <img
                        src={laptop}
                        alt="laptop"
                        className="object-cover w-[20rem] h-[10rem] rounded-md"
                    />
                </div>
                <div className="absolute bottom-[150px] left-1/2 transform -translate-x-1/2 rotate-[15deg] rounded-xl bg-white  transition duration-300 hover:scale-105">
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
