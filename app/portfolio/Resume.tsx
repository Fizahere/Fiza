import { TEXTS } from "../constants/Constants";
import Projects from "./Projects";
import Skills from "./Skills";
import WorkHistory from "./WorkHistory";

export default function Resume() {
    return (
        <div className="py-14 md:py-32 space-y-10 flex flex-col justify-center">
            <div className="space-y-3">
                <h2 className={`${TEXTS.heading} font-bold`}>My Resume</h2>
                <p className={`${TEXTS.body} text-neutral-100 font-extralight leading-7`}>
                    I am an aspiring Frontend Developer with hands-on experience in building responsive and dynamic web applications. I specialize in React and Next.js, and I’m continuously learning backend technologies to become a well-rounded Full-Stack Developer.
                </p>
                <p className="underline decoration-wavy decoration-sky-500 decoration-2 underline-offset-4 text-transparent">
                    Wavy underline text
                </p>
            </div>
            <Skills />
            <WorkHistory />
            <Projects />
        </div>
    )
}