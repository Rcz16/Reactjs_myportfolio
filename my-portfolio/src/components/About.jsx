
import hello from '../assets/hello_world.jpg'
import laptop from '../assets/laptop.jpg'

const About = () => {
    return (
        <div className="grid grid-cols-2 gap-4 items-center bg-white min-h-screen p-10" id='about'>
            <div className="ms-3">
                <h1 className="text-7xl uppercase mb-4 text-black">Learn <br /> About Me</h1>
                <p className="text-xl text-justify text-gray-700 max-w-2xl">
                    To obtain a job in a respectable company where I can use my technical
                    expertise and strategic thinking to promote innovation, maximize IT
                    infrastructure, and support the company&apos;s growth. Well-known for my
                    creative and strategic thinking, superb problem-solving skills, and
                    dedication to attaining remarkable outcomes, I am excited to
                    contribute my enthusiasm and expertise to a cooperative team setting.
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
