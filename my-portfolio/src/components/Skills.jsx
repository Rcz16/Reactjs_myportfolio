import person from '../assets/person.jpg';

const Skills = () => {
    return (
        <div className="bg-gradient-to-t from-black via-gray-950 to-white p-10 pb-40" >
            <div className="grid grid-cols-[1fr_40%] grid-rows-[15rem_90%] items-center min-h-screen ">
                {/* Main Header and Image */}
                <div className="row-start-2" id='skills'>
                    <div className="grid grid-cols-[25%_29%_23%_23%] grid-rows-[50%_50%] content-start" >
                        <div className="col-span-5"  >
                            <h1 className=" text-white text-7xl uppercase ">Skills <br />& Services</h1>
                        </div>
                        {/* Programming Skills */}
                        <div className="text-white row-start-2">
                            <h3 className="text-xl pb-1">Programming Skills</h3>
                            <ul className="list-disc list-inside text-sm pb-1">
                                <li>Vanilla Script</li>
                                <li>SvelteKit</li>
                                <li>React</li>
                                <li>ExtJs</li>
                                <li>Tailwind</li>
                                <li>Bootstrap</li>
                                <li>Python</li>
                                <li>PHP</li>
                                <li>SQL</li>
                            </ul>
                        </div>
                        {/* Services */}
                        <div className="text-white row-start-2">
                            <h3 className="text-xl pb-1">Services</h3>
                            <ul className="list-disc list-inside text-sm pb-1">
                                <li>Content Creation</li>
                                <li>Crisis Management</li>
                                <li>Chatbot Integration</li>
                                <li>Social Listening</li>
                                <li>Adapting to Platform Changes</li>
                            </ul>
                        </div>
                        {/* Graphic Design */}
                        <div className="text-white row-start-2">
                            <h3 className="text-xl pb-1">Graphic Design</h3>
                            <ul className="list-disc list-inside text-sm pb-1">
                                <li>Logo Design</li>
                                <li>Poster Design</li>
                                <li>T-Shirt Design</li>
                                <li>Video Editor</li>
                            </ul>
                        </div>
                        {/* Skills */}
                        <div className="text-white row-start-2">
                            <h3 className="text-xl pb-1">Skills</h3>
                            <ul className="list-disc list-inside text-sm pb-1">
                                <li>Adaptability</li>
                                <li>Critical Thinking</li>
                                <li>Design knowledge</li>
                                <li>Attention to detail</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row-start-2">

                    <img
                        src={person}
                        alt="person"
                        className="object-cover w-[100%] h-[400px] rounded-md shadow-lg mt-5"
                    />
                </div>
            </div>
        </div>
    );
};

export default Skills;
