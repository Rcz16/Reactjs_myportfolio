import design from '../assets/design.jpg'
import code from '../assets/code.jpg'
import { experiences } from './data/experiences-data'

const Experiences = () => {
    return (
        <div className="min-h-screen bg-white p-10 xs:p-0 items-center" id='experiences'>
            <div className="grid sx:grid-cols-1 lg:grid-cols-2 items-center">
                <div className="" >
                    <h1 className="xl:text-[100px] lg:text-7xl md:text-[90px] sm:text-5xl sx:text-4xl uppercase text-black">Work<br />Experiences</h1>
                    <p className="xl:text-xl lg:text-md md:text-[18px] sm:text-[11.5px] sx:text-[9px] ps-2 sx:ps-0 mb-4 text-gray-800">hold shift + scroll down to see my other experiences</p>
                    <div className="carousel rounded-box xxl:w-[50] xl:w-[45rem] lg:w-[35rem] md:w-[25rem] sm:w-[20rem] sx:w-[15rem] mx-auto ">
                        {experiences.map((experiences) => (
                            <div key={experiences} className="carousel-item w-full">
                                <div className="text-black sx:p-1 lg:p-5">
                                    <h1 className="xl:text-xl lg:text-md md:text-[18px] sm:text-[11.5px] sx:text-[12px] pb-1">{experiences.jobTitle} </h1>
                                    <h2 className="pb-3 sx:pb-1 sx:text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[20px] xxl:text-[24px] ">
                                        {experiences.companyName}</h2>
                                    {experiences.jobDescription.map((jobDescription, index) => (
                                        <ul key={index} className="text-sm sx:text-[9px] sm:text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px] xxl:text-[18px] pb-1 sx:pb-0.5 sm:pb-0.5 list-disc ps-5 sx:ps-4 sm:ps-5 lg:ps-6 xl:ps-7">
                                            <li>{jobDescription}</li>
                                        </ul>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="relative sx:hidden lg:block">
                    <div className="absolute top-[200px]  rotate-[-25deg]  left-1/2 transform -translate-x-1/2  rounded-xl bg-white transition duration-300 hover:scale-105">
                        <img
                            src={code}
                            alt="code"
                            className="object-cover w-[23rem] h-[auto] rounded-md "
                        />
                    </div>
                    <div className="absolute bottom-[0px]  rotate-[20deg]  left-1/2 transform -translate-x-1/2  rounded-xl bg-white transition duration-300 hover:scale-105">
                        <img
                            src={design}
                            alt="design"
                            className="object-cover  w-[15rem] h-[auto] rounded-md "
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Experiences; 