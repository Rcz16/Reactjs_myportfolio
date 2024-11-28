import { projects } from "./data/projects-data";

const Projects = () => {
    return (
        <div className="pt-10 bg-gradient-to-b from-black via-gray-950 to-white " id="projects">
            <div className="mx-auto max-w-screen px-10 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
                    <h2 className="text-7xl uppercase text-white">Projects</h2>

                    <div className="mt-6 space-y-12 lg:grid lg:grid-cols-4 grid-rows-2 lg:gap-x-7 lg:space-y-0">
                        {projects.map((projects) => (
                            <div key={projects.name} className="group relative">
                                <div className="bg-gray-50 rounded-lg row-start-1">
                                    <div className="relative h-80 w-full overflow-hidden rounded-lg m:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                                        <img alt={projects.imageAlt} src={projects.imageSrc} className="size-full object-cover object-center" />
                                    </div>
                                    <div className="p-3">
                                        <h3 className="mt-1 text-base font-semibold text-gray-900 ">
                                            <a href={projects.href}>
                                                <span className="absolute inset-0" />
                                                {projects.name}
                                            </a>
                                        </h3>
                                        <p className=" mt-2 text-sm text-gray-500 ">{projects.description}</p>
                                    </div>
                                    <div className="flex flex-row p-1 bg-gray-50">
                                        {projects.logo.map((logo, index) => (
                                            <div key={index} >
                                                <img src={logo} className="w-[40px] h-[40px] object-cover object-center "  />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;