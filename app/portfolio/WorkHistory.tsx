import { TEXTS } from "../constants/Constants"

export default function WorkHistory() {
   const workHistory = [
  {
    title: "Aroya Cruises",
    position: "Frontend Developer",
    company: "Royal Cyber",
    description:
      "Worked as a Frontend Developer on a Cruise Management System. Built responsive user interfaces and collaborated with the development team to deliver production-ready features.",
    startDate: "October 2025",
    endDate: "December 2025",
  },
  {
    title: "Luminate Software",
    position: "Frontend Developer",
    company: "Cloud Primero",
    description:
      "Developed the frontend for an online medical system, building responsive user interfaces and integrating APIs to deliver a seamless user experience.",
    startDate: "January 2026",
    endDate: "April 2026",
  },
  {
    title: "The Peace Destination",
    position: "Frontend Developer",
    company: "Freelance",
    description:
      "Designed and developed the user interface for a travel agency website, focusing on responsive design, usability, and user experience.",
    startDate: "April 2025",
    endDate: "May 2025",
    // link: "https://thepeacedestinations.com"
  },
];
    return (
        <div className="py-14 md:py-32 space-y-10 flex flex-col justify-center">
            <div className="space-y-3">
                <h2 className={`${TEXTS.subHeading} font-bold`}>Work History</h2>
                <p className="text-sm text-neutral-100 font-extralight leading-7">
                    I am currently building my experience through personal and freelance projects, focusing on real-world applications. I have developed multiple responsive and user-friendly web apps that demonstrate my skills in frontend development and UI/UX design.                </p>
                <p className="underline decoration-wavy decoration-sky-500 decoration-2 underline-offset-4 text-transparent">
                    Wavy underline text
                </p>
                <div className="flex flex-col gap-10 border-l pl-3 sm:pl-6 mt-10">
                    {workHistory.map((work, index) => (
                        <div key={index} className="relative">
                            <div className="absolute h-5 md:h-7 w-5 md:w-7 bg-blue-200 -left-[23px] md:-left-[39px] rounded-full flex justify-center items-center">
                                <div className="bg-blue-500 h-2 md:h-4 w-2 md:w-4 rounded-full"></div>
                            </div>
                            <div className="flex justify-between items-center">
                                <h3 className="text-lg sm:text-xl font-bold">{work.title}</h3>
                                <div className="flex gap-2">
                                    <p className="text-xs sm:text-sm text-neutral-100 font-extralight leading-7">{work.startDate} - </p>
                                    <p className="text-xs sm:text-sm text-neutral-100 font-extralight leading-7"> {work?.endDate}</p>
                                </div>
                            </div>
                            <p className="text-xs sm:text-sm text-neutral-100 font-extralight leading-7">{work.company} - {work.position}</p>
                            <p className="text-xs sm:text-sm text-neutral-100 font-extralight leading-7">{work.description}</p>
                            <a href={work?.link} className="text-sm text-neutral-100 font-extralight leading-7">{work?.link}</a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}