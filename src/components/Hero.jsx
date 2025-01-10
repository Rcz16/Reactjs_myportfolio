import hero from '../assets/hero-img.jpg'

const Hero = () => {

    return (
        <>
            <div className="hero bg-white min-h-screen sx:min-h-[80vh] sm:min-h-[80vh] md:min-h-[80vh] lg:min-h-screen xxl:min-h-screen" id='hero'>
                <div className="mx-auto max-w-screen px-10 sx:px-6 lg:px-10 absolute xs:max-w-[320px] sm:max-w-[425px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1440px]">
                    <div className="mx-auto max-w-2xl py-16 sx:py-16 sm:py-32 md:py-32 xl:py-32">
                        <div className="hero-content text-center ">
                            <div className=" ">
                                <h1 className=" z-10 relative lg:top-3 sx:bottom-[10px] m-0 p-0 text-black xl:text-[125px] lg:text-9xl md:text-[120px] sm:text-6xl sx:text-5xl" >PORTFOLIO</h1>
                                <img className='z-3 relative rotate-[-5deg] bottom-6 left-1/2 transform -translate-x-1/2 object-cover xl:w-[66%] lg:w-[66%] md:w-[80%] sm:w-[80%] sx:w-[80%] h-auto rounded-md shadow-lg ' src={hero} />
                                <div className="z-2 relative lg:bottom-4 md:bottom-3 sx:bottom-5 left-1/2 transform -translate-x-1/2  text-black w-[max-content] before:absolute before:inset-0 before:animate-typewriter before:bg-white after:absolute after:inset-0 after:w-[0.125em] after:animate-caret after:bg-black  xl:text-2xl lg:text-2xl md:text-[22px] sm:text-[11.5px] sx:text-[9px] ">
                                    <h1 >
                                        I am a Graphic Designer,
                                        Web Developer and a problem solver.
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hero;
