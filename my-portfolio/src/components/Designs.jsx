import classNames from "classnames";
import { designs } from "./data/designs-data";
import { useEffect, useRef, useState } from "react";

const Designs = () => {
    const [activeItem, setActiveItem] = useState(5);
    const wrapperRef = useRef(null);
    const timeoutRef = useRef(null);

    useEffect(() => {
        if (!wrapperRef.current) return;
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        wrapperRef.current.style.setProperty(
            "--transition",
            "600ms cubic-bezier(0.22, 0.61, 0.36, 1)"
        );

        timeoutRef.current = setTimeout(() => {
            wrapperRef.current?.style.removeProperty("--transition");
        }, 900);

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [activeItem]);

    return (
        <div className="grid grid-rows-2-[15%,1fr] h-full w-full items-center justify-center bg-black p-5 sm:p-8 lg:p-10 max-h-full" id="designs">
            <div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase text-white">
                    Designs
                </h1>
            </div>
            <div className="w-full max-w-full lg:w-[1440px]">
                <ul
                    ref={wrapperRef}
                    className="group flex flex-col gap-3 sm:gap-5 md:h-[300px] lg:h-[450px] lg:flex-row md:gap-[1.5%]"
                >
                    {designs.map((person, index) => (
                        <li
                            key={person.name}
                            onClick={() => setActiveItem(index)}
                            aria-current={activeItem === index}
                            className={classNames(
                                "relative cursor-pointer sm:h-[100px] md:h-[150px] lg:h-[450px] w-full sm:w-[90%] md:w-[70%] lg:md:w-[8%] lg:first:w-[1%] lg:last:w-[1%] lg:[&[aria-current='true']]:w-[48%]",
                                "transition-[width] duration-200 ease-in",
                                "before:absolute before:bottom-0 before:left-[-10px] before:right-[-10px] before:top-0 before:hidden before:bg-white",
                                "lg:[&:not(:hover),&:not(:first),&:not(:last)]:group-hover:w-[7%] lg:hover:w-[12%]",
                                "first:pointer-events-none last:pointer-events-none lg:[&_img]:first:opacity-0 lg:[&_img]:last:opacity-0"
                            )}
                        >
                            <div className="relative h-full w-full overflow-hidden rounded-2xl bg-gray-950">
                                <   img
                                    className="absolute right-0 top-1/2 h-auto w-24 max-w-none -translate-y-1/2 object-cover sm:h-[200px] sm:w-[200px] md:left-1/2 md:h-[350px] md:w-[400px] lg:h-[640px] lg:w-[590px] md:-translate-x-1/2"
                                    src={person.img}
                                    width="500px"
                                    height="250px"
                                />
                                <div
                                    className={classNames(
                                        "inset-0 opacity-25 duration-300 before:absolute before:bottom-0 before:left-[-546px] before:right-0 before:top-[-148px] before:z-10 before:bg-texture after:bottom-[28px] after:left-0 after:right-[-434px] after:top-0 after:z-10 after:bg-texture md:absolute md:transition-opacity",
                                        activeItem === index ? "lg:opacity-25" : "lg:opacity-0"
                                    )}
                                />
                                <div
                                    className={classNames(
                                        "left-4 top-4 sm:left-6 sm:top-6 w-full p-2 sm:p-4 lg:w-[590px] lg:left-8 lg:top-8 transition-[transform,opacity] md:absolute md:p-0",
                                        activeItem === index
                                            ? "lg:translate-x-0 lg:opacity-100"
                                            : "lg:translate-x-4 lg:opacity-0"
                                    )}
                                >
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Designs;
