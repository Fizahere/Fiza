"use client"
import Card from "../components/Card";
import { useState, useRef, useEffect } from "react";
import { TEXTS } from "../constants/Constants";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface ProjectItem {
  title: string;
  description: string;
  imgUrl?: string;
  link?: string;
}

export default function Projects() {
  const projects: ProjectItem[] = [
     {
      title: "The Peace Destination",
      description:
        "Designed and developed a responsive travel agency website focusing on modern UI/UX design, smooth navigation, and a user-centric experience.",
      imgUrl: "/images/project9.png",
      link: "https://thepeacedestinations.com/",
    },
    {
      title: "De Finemedia",
      description:
        "Developed a responsive business website using React and Tailwind CSS with a modern, user-friendly interface.",
      imgUrl: "/images/project6.png",
      link: "https://de-finemedia.vercel.app",
    },
    {
      title: "YG Academy",
      description:
        "Built a responsive educational platform using React and Tailwind CSS with a clean and intuitive user experience.",
      imgUrl: "/images/project7.png",
      link: "https://young-goose.vercel.app",
    },
    {
      title: "Fitness Tracker",
      description:
        "A full-stack MERN fitness tracker that allows users to log workouts, set fitness goals, and monitor their progress through a responsive interface.",
      imgUrl: "/images/project1.png",
      link: "https://fitness-tracker-red-five.vercel.app",
    },
    {
      title: "Shop.CO",
      description:
        "A modern React e-commerce application featuring responsive layouts, dynamic product listings, and an intuitive shopping experience.",
      imgUrl: "/images/project4.png",
      link: "https://shop-co-red-two.vercel.app",
    },
    {
      title: "Home Styler",
      description:
        "An interior design platform built with React that showcases design inspirations, room collections, and home décor products.",
      imgUrl: "/images/project3.png",
      link: "https://home-styler.vercel.app",
    },
    {
      title: "Plant Palace",
      description:
        "A React-based online plant nursery featuring plant collections, detailed care guides, and an engaging user experience.",
      imgUrl: "/images/project2.png",
      link: "https://plant-palace-hazel.vercel.app",
    },
    {
      title: "Mind Mate",
      description:
        "A Python-based mental wellness platform providing self-help resources, personalized recommendations, and mental health support.",
      imgUrl: "/images/project5.png",
      link: "https://mind-mate-landing.vercel.app",
    },
    {
      title: "TVVerse",
      description:
        "A TV show discovery platform built with React, Chakra UI, React Query, Firebase Authentication, and the Episodate API. Includes an admin dashboard, Google Sign-In, and real-time data fetching.",
      imgUrl: "/images/project8.png",
      link: "https://chakra-ui-navy.vercel.app/",
    },
  ];

  const scrollRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [itemsPerPage, setItemsPerPage] = useState(2);
  const [totalPages, setTotalPages] = useState(1);

  const updateLayout = () => {
    if (!scrollRef.current) return;
    const width = window.innerWidth;
    const perPage = width < 768 ? 1 : 2;
    setItemsPerPage(perPage);
    const pagesCount = Math.ceil(projects.length / perPage);
    setTotalPages(pagesCount);

    const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 5);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
  };

  useEffect(() => {
    setIsMounted(true);
    updateLayout();

    window.addEventListener('resize', updateLayout);
    return () => window.removeEventListener('resize', updateLayout);
  }, []);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;

    const newIndex = Math.round(scrollLeft / clientWidth);
    setActiveIndex(newIndex);

    setCanScrollLeft(scrollLeft > 5);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
  };

  const scrollPrev = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    scrollRef.current.scrollTo({
      left: scrollLeft - clientWidth,
      behavior: 'smooth'
    });
  };

  const scrollNext = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    scrollRef.current.scrollTo({
      left: scrollLeft + clientWidth,
      behavior: 'smooth'
    });
  };

  const goToPage = (pageIdx: number) => {
    if (!scrollRef.current) return;
    const { clientWidth } = scrollRef.current;
    scrollRef.current.scrollTo({
      left: pageIdx * clientWidth,
      behavior: 'smooth'
    });
    setActiveIndex(pageIdx);
  };

  return (
    <div className="space-y-3">
      <h2 className={`${TEXTS.subHeading} font-bold`}>Projects</h2>
      <p className={`${TEXTS.body} text-neutral-100 font-extralight leading-7`}>
        Here are some of the projects I’ve worked on:
      </p>

      <div className="relative mt-10 group/carousel">
        {isMounted && totalPages > 1 && (
          <button
            onClick={scrollPrev}
            disabled={!canScrollLeft}
            className={`absolute -left-3 md:-left-9 2xl:-left-12 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-sky-500/80 text-white p-3 rounded-full transition-all duration-300 z-10 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed ${canScrollLeft ? "opacity-100 hover:scale-110" : "opacity-30"
              }`}
            aria-label="Previous page"
          >
            <FaChevronLeft className="text-xl" />
          </button>
        )}

        {isMounted && totalPages > 1 && (
          <button
            onClick={scrollNext}
            disabled={!canScrollRight}
            className={`absolute -right-3 md:-right-9 2xl:-right-12 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-sky-500/80 text-white p-3 rounded-full transition-all duration-300 z-10 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed ${canScrollRight ? "opacity-100 hover:scale-110" : "opacity-30"
              }`}
            aria-label="Next page"
          >
            <FaChevronRight className="text-xl" />
          </button>
        )}

        {/* Carousel Container */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-none gap-6 pb-4"
        >
          {projects.map((project) => (
            <div
              key={project.title}
              className="w-full md:w-[calc(50%-12px)] shrink-0 snap-start"
            >
              <Card project={project} />
            </div>
          ))}
        </div>

        {/* Dots Indicator */}
        {isMounted && totalPages > 1 && (
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToPage(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${activeIndex === idx ? "w-8 bg-sky-500" : "w-2.5 bg-neutral-600 hover:bg-neutral-400"
                  }`}
                aria-label={`Go to page ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}   