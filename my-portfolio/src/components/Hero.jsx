import hero from '../assets/hero-img.jpg'

const Hero = () => {

    return (
        <>
            <div className="hero bg-white min-h-screen" id='hero'>
                <div className="mx-auto max-w-screen px-10 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
                        <div className="hero-content text-center ">
                            <div className=" max-w-3xl ">
                                <div className=''>
                                    <h1 className=" z-10 relative text-9xl m-0 p-0 text-black" >PORTFOLIO</h1>
                                    <img className='z-3 relative rotate-[-5deg] bottom-6 left-[100px] object-cover w-4/6 h-auto rounded-md shadow-lg ' src={hero} />
                                    <div className="z-2 relative bottom-5 left-[50px] text-black w-[max-content] text-2xl before:absolute before:inset-0 before:animate-typewriter before:bg-white after:absolute after:inset-0 after:w-[0.125em] after:animate-caret after:bg-black">
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
            </div>
        </>
    );
}

export default Hero;
