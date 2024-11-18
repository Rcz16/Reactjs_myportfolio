import image from '../assets/cta.jpg'

const Cta = () => {
    return (
        <div className="gap-4 grid grid-cols-2 justify-items: center content-center items-center bg-white min-h-screen p-10 ">
            <div className="ms-3">
                <h1 className="text-7xl uppercase mb-4 text-black">work <br /> with Me</h1>
                <div className="text-4xl text-justify text-gray-700 max-w-xl">
                    <h1 className="py-3">San Jose Del Monte , Bulacan. </h1>
                    <h1 className="py-3">General Trias, Bagong Kalasada, Cavite.</h1>
                    <h1 className="py-3">www.linkedin.com/in/ralph-christian-zarraga-859993219/</h1>
                </div>
            </div>
            <div><img src={image} className="h-[500px] w-[600px] justify-self-end" /></div>
        </div>
    );
}

export default Cta;
