"use client"
import { TypeAnimation } from 'react-type-animation';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaReddit } from "react-icons/fa";
import { FaSquareUpwork } from "react-icons/fa6";
import { TEXTS } from '../constants/Constants';

export default function Profile() {
    return (
    <div className="pb-14 md:pb-32 grid grid-cols-1 md:grid-cols-3 gap-10">
                <div className="md:col-span-2 py-14 pb-32 md:py-32 space-y-1 md:space-y-5 flex flex-col justify-center">
            <h2 className= {`${TEXTS.heading} font-bold`}>Hello, I'm Fiza</h2>
            <TypeAnimation
                sequence={[
                    'I am a Web Developer',
                    1000,
                    'I am a Fullstack Developer',
                    1000,
                    'I am a MERN Stack Developer',
                    1000,
                ]}
                wrapper="h2"
                speed={50}
                style={{ display: 'inline-block', fontSize: TEXTS.subHeading, fontWeight: 'bold' }}
                repeat={Infinity}
            />
            <p className={`${TEXTS.body} text-neutral-100 font-extralight leading-7`}>
                I’m a dedicated and passionate Frontend Developer with a strong foundation in modern web technologies. I enjoy transforming ideas into interactive and visually appealing web applications.

                Currently, I’m focused on improving my full-stack skills and gaining real-world experience by building practical projects. I’m always eager to learn new technologies, solve challenging problems, and grow as a developer.
            </p>
            <p className="underline decoration-wavy decoration-sky-500 decoration-2 underline-offset-4 text-transparent">
                Wavy underline text
            </p>
            <div className='space-y-2'>
                <p className={`${TEXTS.caption} font-semibold mt-10`}>Find me on</p>
                <div className="flex gap-4">
                    <p className={`${TEXTS.body} flex items-center gap-2`}><FaGithub className='fill-purple-400 text-xl' /> Github</p>
                    <p className={`${TEXTS.body} flex items-center gap-2`}><FaLinkedin className='text-2xl fill-blue-400' /> Linkedin</p>
                    {/* <p className={`${TEXTS.body} flex items-center gap-2`}><FaReddit className='text-2xl fill-orange-400' /> Reddit</p>
                    <p className={`${TEXTS.body} flex items-center gap-2`}><FaSquareUpwork className='text-2xl fill-green-400' /> Upwork</p> */}
                </div>
            </div>
            <div className='space-y-2'>
                <p className={`${TEXTS.caption} font-semibold mt-10`}>Contact</p>
                <p className={`${TEXTS.body} font-extralight`}>You can reach me anytime at
                    <a href="mailto:fizabatool0278@gmail.com" className={`${TEXTS.body} ml-2 font-medium underline decoration-sky-500 decoration-1 underline-offset-4`}>fizabatool0278@gmail.com</a>
                </p>
            </div>
        </div>
        <div className="col-span-1 flex flex-col justify-center rounded-2xl"><img className="rounded-2xl w-80 mx-auto -mt-20 h-96 md:h-auto" src="./images/profile.jpeg" alt="profile" /></div>
    </div>
    )
}