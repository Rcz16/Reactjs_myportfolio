import design from '../assets/design.jpg'
import code from '../assets/code.jpg'

const Experiences = () => {
    return (
        <div className="min-h-screen bg-white p-10 grid items-center" id='experiences'>
            <div className="grid grid-cols-2 items-center">
                <div className="" >
                    <h1 className="text-7xl uppercase text-black">Work<br />Experiences</h1>
                    <p className="text-5xs ps-2 mb-4 text-gray-800">hold shift + scroll down to see my other experiences</p>
                    <div className="carousel rounded-box w-128 ">
                        <div className="carousel-item w-full">
                            <div className="text-black p-5">
                                <h1 className="text-xl pb-1">Web Developer / Software Developer Associate </h1>
                                <h2 className="pb-3">
                                    Northeast Business Solution | May 2024 - December 2024</h2>
                                <ul className="text-sm pb-1 list-disc ps-5">
                                    <li>Developed a company website project using Figma for design and hard-coded the site with the SvelteKit framework. Ensured the website was optimized for SEO, enhancing visibility and user engagement.</li>
                                    <li>Enhanced the design and added new software features, while providing technical support by troubleshooting errors and fixing bugs for clients. Improved skills in SQL, PHP, and JavaScript through hands-on problem-solving</li>
                                    <li>Adopted AI techniques to improve coding efficiency, enabling faster development and more accurate solutions.</li>
                                    <li>Defined the visual style and aesthetic direction for interfaces by selecting appropriate colors, typography, icons, and imagery. Ensured alignment with brand guidelines while prioritizing visual appeal and user-friendly design principles.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="carousel-item w-full">
                            <div className=" text-black p-5">
                                <h1 className="text-xl pb-1">Support Associate / UI Designer intern</h1>
                                <h2 className="text-sm pb-1 list-disc ps-5">
                                    Northeast Business Solution
                                    Technical Support / Web Designer  | OJT | January 2024 - April 2024</h2>
                                <ul className="text-sm pb-1 list-disc ps-5">
                                    <li>Provided technical support to users, resolving issues promptly and efficiently to ensure smooth operations.</li>
                                    <li>Defined the visual style and aesthetic direction for interfaces by selecting appropriate colors, typography, icons, and imagery. Ensured alignment with brand guidelines while prioritizing visual appeal and user-friendly design principles.</li>
                                    <li>Conducted comprehensive research to understand project requirements, including analyzing target audience demographics, user needs, and business objectives. Utilized competitor analysis and industry trends to inform design strategies effectively.</li>
                                    <li>Executed usability testing procedures to assess design effectiveness and solicited feedback from real users. Analyzed user behavior patterns and identified pain points to refine designs iteratively, prioritizing improvements to enhance usability and meet user requirements.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="carousel-item w-full">
                            <div className=" text-black p-5">
                                <h1 className="text-xl pb-1">CV Writer</h1>
                                <h2 className="pb-3">
                                    Aldelia
                                    | July 2023 - October 2023</h2>
                                <ul className="text-sm pb-1 list-disc ps-5">
                                    <li>It is critical to use expertise to create short, well-written, and professionally structured CVs that are targeted to each client&Apos;s unique background and the specific position they want. This entails choosing appropriate fonts, layouts, and styles to improve readability and visual appeal</li>
                                    <li>CVs are thoroughly reviewed and revised to eliminate grammatical faults, spelling inaccuracies, and inconsistencies, resulting in a refined final product. </li>
                                </ul>
                            </div>
                        </div>
                        <div className="carousel-item w-full">
                            <div className=" text-black p-5">
                                <h1 className="text-xl pb-1">Virtual Assistant</h1>
                                <h2 className="pb-3">
                                    Status Quo Volleyball League
                                    Amazon Seller Central
                                    Traniee| January 2023 - March 2023</h2>
                                <ul className="text-sm pb-1 list-disc ps-5">
                                    <li>Processed and encoded product data with accuracy and efficiency.</li>
                                    <li>Managed a diverse range of product listings, ensuring consistency and compliance with Amazon guidelines.</li>
                                    <li>Gained hands-on experience in Amazon shipment processes, including inventory management and product fulfillment workflows.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="carousel-item w-full">
                            <div className="text-black p-5 ">
                                <h1 className="text-xl pb-1">Facebook Page Manager</h1>
                                <h2 className="pb-3">
                                    Status Quo Volleyball League
                                    Qatar Base | Dec 2020 - Mar 2022</h2>
                                <ul className="text-sm pb-1 list-disc ps-5">
                                    <li>Crafted designs utilizing Photoshop, Illustrator, and Canva.</li>
                                    <li>Directed content management and curation on Facebook Pages to amplify engagement and extend reach.
                                    </li>
                                    <li>Supervised Facebook Page community guidelines and moderation to foster a secure and respectful community for followers.</li>
                                    <li>Engaged with comments, messages, and inquiries on Facebook Pages to uphold favorable brand interactions and customer relations.
                                    </li>
                                    <li>Crafted designs utilizing Photoshop, Illustrator, and Canva.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="relative">
                    <div className="absolute top-[200px] left-[250px] rotate-[-25deg] transform  rounded-xl bg-white transition duration-300 hover:scale-105">
                        <img
                            src={code}
                            alt="code"
                            className="object-cover w-[23rem] h-[12.5rem] rounded-md "
                        />
                    </div>
                    <div className="absolute bottom-[0px] left-[250px] rotate-[20deg] transform  rounded-xl bg-white transition duration-300 hover:scale-105">
                        <img
                            src={design}
                            alt="design"
                            className="object-cover  w-[15rem] h-[8.5rem] rounded-md "
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experiences; 