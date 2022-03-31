import { useEffect, useRef } from 'react'
import { gsap } from "gsap";



function LogInForm() {

    const tl = useRef();

    const start =
        "M0 0.999512C0 0.999512 60.5 0.999512 150 0.999512C239.5 0.999512 300 0.999512 300 0.999512";
    const end =
        "M1 0.999512C1 0.999512 61.5 7.5 151 7.5C240.5 7.5 301 0.999512 301 0.999512";


    useEffect(() => {
        const containers = document.querySelectorAll(".input-container");
        const form = document.querySelector("form");
        tl.current = gsap.timeline()
        containers.forEach((container) => {
            const input = container.querySelector(".input");
            const line = container.querySelector(".elastic-line");
            const placeholder = container.querySelector(".placeholder");

            input.addEventListener("focus", () => {
                if (!input.value) {
                    tl.current.fromTo(
                        line,
                        { attr: { d: start } },
                        { attr: { d: end }, ease: "Power2.easeOut", duration: 0.75 }
                    );
                    tl.current.to(line, { attr: { d: start }, ease: "elastic.out(3,0.5)" }, "<50%");
                    tl.current.to(
                        placeholder,
                        {
                            top: -15,
                            left: 0,
                            scale: 1.8,
                            duration: 0.5,
                            ease: "Power2.easeOut",
                        },
                        "<15%"
                    );
                }
            });
        });

        form.addEventListener("click", () => {
            containers.forEach((container) => {
                const input = container.querySelector(".input");
                const placeholder = container.querySelector(".placeholder");
                if (document.activeElement !== input) {
                    if (!input.value) {
                        tl.current.to(placeholder, {
                            top: 0,
                            left: 0,
                            scale: 1,
                            duration: 0.5,
                            ease: "Power2.easeOut",
                        });
                    }
                }
            })
        })
    })
    return (
        <div className=" w-full h-full  flex  items-center justify-center text-white">
            <form className=" h-72 lg:w-4/12 sm:w-10/12 flex flex-col items-center justify-center p-5 space-y-7 rounded-sm border border-white">
                <div className="input-container w-[19rem] " id="input-container">
                    <p className="placeholder pb-4 text-xs text-gray-400 font-bold origin-left	">Email address</p>
                    <input type="email" name="email" autoComplete="off" className="input w-full bg-transparent focus:outline-none " />
                    <svg className="line-svg overflow-visible" width="300" height="2" viewBox="0 0 300 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className="elastic-line" d="M0 0.999512C0 0.999512 60.5 0.999512 150 0.999512C239.5 0.999512 300 0.999512 300 0.999512" stroke="#D1D4DA" strokeWidth="2" />
                    </svg>
                </div>
                <div className=" input-container  w-[19rem] mb-4">
                    <p className="placeholder pb-4 text-xs text-gray-400 font-bold origin-left	">Password</p>
                    <input type="password" name="password" autoComplete="off" className="input w-full bg-transparent focus:outline-none" />
                    <svg className="line-svg overflow-visible" width="300" height="2" viewBox="0 0 300 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className="elastic-line" d="M0 0.999512C0 0.999512 60.5 0.999512 150 0.999512C239.5 0.999512 300 0.999512 300 0.999512" stroke="#D1D4DA" strokeWidth="2" />
                    </svg>
                </div>
                <button className="w-40 p-3 bg-white border-2 rounded-full text-black hover:bg-transparent hover:text-white hover:border-white font-medium text-lg" >Log In</button>
            </form>
        </div>

    )
}

export default LogInForm


