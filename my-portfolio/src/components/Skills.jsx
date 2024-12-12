import person from '../assets/person.jpg';

const Skills = () => {
    return (
        <div className="bg-gradient-to-t from-black via-gray-950 to-white p-10 pb-40">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_40%] sx:pt-[25rem] grid-rows-[auto] items-center min-h-screen">
                {/* Skills Section */}
                <div className="row-start-1 lg:row-start-2" id="skills">
                    <div className="grid grid-cols-1 lg:grid-cols-[25%_25%_23%_23%] lg:grid-rows-[auto] gap-4 lg:gap-2">
                        {/* Header */}
                        <div className="col-span-full lg:col-span-5 lg:row-start-1">
                            <h1 className="text-white text-5xl sm:text-5xl md:text-6xl lg:text-7xl uppercase">
                                Skills <br />& Services
                            </h1>
                        </div>
                        {/* Programming Skills */}
                        <div className="col-span-1">
                            <h3 className="text-xl pb-1 text-white">Programming Skills</h3>
                            <ul className="list-disc list-inside text-sm md:text-base text-white">
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
                        <div className="col-span-1">
                            <h3 className="text-xl pb-1 text-white">Services</h3>
                            <ul className="list-disc list-inside text-sm md:text-base text-white">
                                <li>Content Creation</li>
                                <li>Crisis Management</li>
                                <li>Chatbot Integration</li>
                                <li>Social Listening</li>
                                <li>Adapting to Platform Changes</li>
                            </ul>
                        </div>
                        {/* Graphic Design */}
                        <div className="col-span-1">
                            <h3 className="text-xl pb-1 text-white">Graphic Design</h3>
                            <ul className="list-disc list-inside text-sm md:text-base text-white">
                                <li>Logo Design</li>
                                <li>Poster Design</li>
                                <li>T-Shirt Design</li>
                                <li>Video Editor</li>
                            </ul>
                        </div>
                        {/* Skills */}
                        <div className="col-span-1">
                            <h3 className="text-xl pb-1 text-white">Skills</h3>
                            <ul className="list-disc list-inside text-sm md:text-base text-white">
                                <li>Adaptability</li>
                                <li>Critical Thinking</li>
                                <li>Design Knowledge</li>
                                <li>Attention to Detail</li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Image Section */}
                <div className="row-start-2 lg:row-start-2">
                    <div className="aspect-w-4 aspect-h-3 lg:aspect-auto">
                        <img
                            src={person}
                            alt="person"
                            className="object-cover w-full rounded-md shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
