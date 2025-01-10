import image from '../assets/cta.jpg'

const Cta = () => {
    return (
        <div className="gap-4 grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center bg-white min-h-screen p-10 md:p-10">
            <div className="ms-3">
                <h1 className="text-5xl md:text-7xl uppercase mb-4 text-black">work <br /> with Me</h1>
                <div className="text-xl md:text-4xl text-justify text-gray-700 max-w-xl">
                    <h1 className="py-3">San Jose Del Monte , Bulacan. </h1>
                    <h1 className="py-3">General Trias, Bagong Kalasada, Cavite.</h1>
                    <h1 className="py-3">
                        <a href="https://www.linkedin.com/in/ralph-christian-zarraga-859993219/" target="_blank" rel="noopener noreferrer">
                            www.linkedin.com/in/ralph-christian-zarraga-859993219/
                        </a>
                    </h1>
                </div>
            </div>
            <div className="m-3 flex items-center justify-center">
                <img
                    src={image}
                    className="w-full max-w-[600px] h-auto xl:h-[500px] xl:w-[600px] object-contain"
                    alt="CTA"
                />
            </div>
        </div>
    );
}

export default Cta;
