import { SiNextdotjs } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";
import { SiShadcnui } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { SiBun } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiFigma } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io";
import { SiVite } from "react-icons/si";
import { TEXTS } from "../constants/Constants";

export default function Skills() {
    const skills = [
        { name: "Next.js", icon: <SiNextdotjs className="text-xl" /> },
        { name: "React.js", icon: <RiReactjsLine className="text-cyan-400 text-2xl" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-400 text-xl" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-400 text-xl" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400 text-2xl" /> },
        { name: "Github", icon: <FaGithub className="text-xl" /> },
        { name: "Node.js", isShowName: true, icon: <DiNodejs className="text-7xl -mt-1" /> },
        { name: "Shadcn UI", icon: <SiShadcnui className="text-xl" /> },
        { name: "Git", icon: <FaGitAlt className="text-2xl text-orange-500" /> },
        { name: "Bun", icon: <SiBun className="text-2xl text-white" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-2xl text-green-500" /> },
        { name: "Figma", icon: <SiFigma className="text-2xl text-purple-500" /> },
        { name: "Bootstrap", icon: <SiBootstrap className="text-3xl text-blue-400 text-lg" /> },
        { name: "HTML5", icon: <SiHtml5 className="text-2xl text-orange-500" /> },
        { name: "CSS3", icon: <IoLogoCss3 className="text-xl text-blue-500" /> },
        { name: "Vite", icon: <SiVite className="text-lg text-yellow-500" /> },
    ]
    return (
        <div className="space-y-3">
            <h2 className={`${TEXTS.subHeading} font-bold`}>Skills</h2>
            <p className={`${TEXTS.body} text-neutral-100 font-extralight leading-7`}>
                Here are the technologies and tools I work with:            </p>

            <div className="gap-4 flex flex-wrap mt-10">
                {skills.map((skill, index) => (
                    <p key={index} className="text-lg flex items-center gap-2" title={skill?.name}>{skill?.icon} {skill?.isShowName ? "" : skill?.name}</p>
                ))}
            </div>
        </div>
    )
}