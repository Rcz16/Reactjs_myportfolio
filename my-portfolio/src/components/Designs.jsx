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
        <div className="grid grid-cols-1 grid-rows-2-[15%,1fr] h-full w-full items-center justify-center bg-black sx:p-10 lg:p-10 max-h-auto max-w-full" id="designs">
            <div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase text-white pb-4">
                    Designs
                </h1>
            </div>
            <div className="flex h-full w-full items-center justify-center">
                <div className="w-full max-w-full">
                    <ul
                        ref={wrapperRef}
                        className="group flex flex-col gap-3 md:h-[640px] md:flex-row md:gap-[1.5%]"
                    >
                        {designs.map((designs, index) => (
                            <li
                                onClick={() => setActiveItem(index)}
                                aria-current={activeItem === index}
                                className={classNames(
                                    "relative cursor-pointer md:w-[8%] xs:first:w-[1%] md:last:w-[1%] md:[&[aria-current='true']]:w-[48%]",
                                    "md:[transition:width_var(--transition,200ms_ease-in)]",
                                    "md:before-block before:absolute before:bottom-0 before:left-[-10px] before:right-[-10px] before:top-0 before:hidden before:bg-white",
                                    "md:[&:not(:hover),&:not(:first),&:not(:last)]:group-hover:w-[7%] md:hover:w-[12%]",
                                    "first:pointer-events-none last:pointer-events-none md:[&_img]:first:opacity-0 md:[&_img]:last:opacity-0"
                                )}
                                key={designs.name}
                            >
                                <div className="relative h-full w-full overflow-hidden rounded-2xl bg-[#000000]">
                                    <img
                                        className="absolute left-1/2 top-1/2 h-150 w-auto max-w-none -translate-y-1/2 object-cover md:left-1/2 md:h-[640px] md:w-[240px] -translate-x-1/2"
                                        src={designs.img}
                                        alt={designs.name}
                                        width="590px"
                                        height="640px"
                                    />
                                    <div
                                        className={classNames(
                                            "inset-0 opacity-25 duration-300 before:absolute before:bottom-0 before:left-[-546px] before:right-0 before:top-[-148px] before:z-10 before:bg-texture  after:bottom-[28px] after:left-0 after:right-[-434px] after:top-0 after:z-10 after:bg-texture md:absolute md:transition-opacity",
                                            activeItem === index ? "md:opacity-25" : "md:opacity-0"
                                        )}
                                    />
                                    <div
                                        className={classNames(
                                            "left-8 top-8 w-[590px] p-12 transition-[transform,opacity] md:absolute md:p-0",
                                            activeItem === index
                                                ? "md:translate-x-0 md:opacity-100"
                                                : "md:translate-x-4 md:opacity-0"
                                        )}
                                    >
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>

    );
};

export default Designs;
