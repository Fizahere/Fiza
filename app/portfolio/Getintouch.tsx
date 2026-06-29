import { FaLinkedin } from "react-icons/fa";
import { TEXTS } from "../constants/Constants";

export default function Getintouch() {
    return (
        <div className="py-14 md:py-32 space-y-10 flex flex-col justify-center">
            <div className="space-y-3">
                <h2 className={`${TEXTS.heading} font-bold`}>Get in touch</h2>
                <p className={`${TEXTS.body} text-neutral-100 font-extralight leading-7`}>Do you have any exciting project? Let's talk!</p>
                <p className="underline decoration-wavy decoration-sky-500 decoration-2 underline-offset-4 text-transparent">
                    Wavy underline text
                </p>
            </div>
            <div className="space-y-3">
                <p className={`${TEXTS.body} text-neutral-100 font-extralight leading-7`}>
                    You can reach me out anytime at <a href="mailto:fizabatool0278@gmail.com" className="ml-2 underline text-white! font-medium! decoration-sky-500 decoration-1 underline-offset-4">fizabatool0278@gmail.com</a>
                </p>
                <p className={`${TEXTS.body} flex text-sm text-neutral-100 font-extralight leading-7`}>
                        As a backup option, you can 
                        <a href="https://www.linkedin.com/in/fizabatool027/" className="flex items-center gap-2 ml-2 underline text-white! font-medium! decoration-sky-500 decoration-1 underline-offset-4">
                            DM me on<FaLinkedin className="text-2xl fill-blue-300"/>
                        </a>
                </p>
            </div>
        </div>
    )
}