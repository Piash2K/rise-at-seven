"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    title: "Pioneers",
    bg: "bg-black",
    text: "text-white",
    rotate: 4,
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/b2087e0cd3f699d3efc76f809ec72a85a6ab378e-1080x1350.jpg?w=2000&h=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847630&s=69735376fddade35059585570e316087",
    alt: "B2087e0cd3f699d3efc76f809ec72a85a6ab378e 1080x1350",
    content: (
      <>
        <p className="text-sm lg:text-base leading-normal mb-5 text-white">
          We’re dedicated to creating the industry narrative that others follow
          3 years from now. We paved the path for creative SEO, multi-channel
          search with Digital PR, and Social Search and we will continue to do
          it.
        </p>

        <p className="text-sm lg:text-base leading-normal text-white">
          We’re on a mission to be the first search-first agency to win a Cannes
          Lion disrupting the status quo.
        </p>
      </>
    ),
  },

  {
    title: "Award Winning",
    bg: "bg-[#b2f6e3]",
    text: "text-[#111212]",
    rotate: 8,
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/d4df0d30-d590-4e94-9056-9491f4beacba.JPG?w=2000&h=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847714&s=9b6e0a98f94b563a89840f3250cd1656",
    alt: "Award Winning",
    content: (
      <p className="text-sm lg:text-base leading-normal text-[#111212]">
        A roll top bath full of 79 awards. Voted The Drum's best agency outside
        of London. We are official judges for industry awards including Global
        Search Awards and Global Content Marketing Awards.
      </p>
    ),
  },

  {
    title: "Speed",
    bg: "bg-white",
    text: "text-[#111212]",
    rotate: 12,
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-23-at-23.15.19.png?w=2000&h=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847626&s=211fe5c665b93a978c596f9070aed44c",
    alt: "Speed",
    content: (
      <p className="text-sm lg:text-base leading-normal text-[#111212]">
        People ask us why we are called Rise at Seven? Ever heard the saying
        Early Bird catches the worm? Google is moving fast, but humans are
        moving faster. We chase consumers, not algorithms. We’ve created a
        service which takes ideas to result within 60 minutes.
      </p>
    ),
  },
];

function LegacyCard({ card }) {
  return (
    <div
      className="w-full max-w-lg xl:max-w-xl 4xl:max-w-2xl"
      style={{
        transform: `rotate(${card.rotate}deg)`,
      }}
    >
      <div
        className={`w-full rounded-2xl lg:rounded-3xl p-7 xl:px-14 xl:py-10 ${card.bg}`}
      >
        <div className="flex flex-col items-center text-center gap-y-5">
          
          <div className="relative overflow-hidden rounded-xl lg:rounded-2xl w-full aspect-4/3 lg:aspect-square lg:w-48 4xl:w-56">
            <img
              src={card.image}
              alt={card.alt}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          <div className="flex flex-col items-center gap-y-4">
            <h2
              className={`font-medium tracking-[-0.035em] ${card.text}
              text-3xl lg:text-5xl xl:text-6xl 3xl:text-7xl leading-none`}
            >
              {card.title}
            </h2>

            <div className="w-full">
              {card.content}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LegacyInTheMaking() {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      itemsRef.current.forEach((item, index) => {
        if (!item) return;

        gsap.set(item, {
          yPercent: -100,
          rotate: -50,
        });

        gsap.to(item, {
          yPercent: 0,
          rotate: 0,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: `${index * 25}% top`,
            end: `${(index + 1) * 25}% top`,
            scrub: 1.2,
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full py-0"
    >
      <div className="w-full px-0">

        {/* MOBILE */}
        <div className="w-full py-10 px-4 md:px-7 lg:hidden">

          <div className="flex justify-center mb-3">
            <h2
              className="
              text-[#111212]
              text-[1.063rem]
              lg:text-[1.375rem]
              xl:text-[1.5rem]
              font-medium
              tracking-[-0.035em]
              "
            >
              Legacy In The Making
            </h2>
          </div>

          <Swiper
            modules={[Pagination]}
            pagination={{
              type: "progressbar",
            }}
            spaceBetween={20}
            slidesPerView={1}
            speed={700}
            className="w-full"
          >
            {cards.map((card, index) => (
              <SwiperSlide key={index}>
                <LegacyCard card={card} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* DESKTOP */}
        <div
          className="relative hidden lg:flex w-full"
          style={{
            height: "300vh",
          }}
        >
          <div className="sticky top-0 left-0 h-screen w-full overflow-hidden">

            <div className="absolute top-10 left-0 w-full flex justify-center z-50">
              <h2
                className="
                text-[#111212]
                text-[1.063rem]
                lg:text-[1.375rem]
                xl:text-[1.5rem]
                font-medium
                tracking-[-0.035em]
                "
              >
                Legacy In The Making
              </h2>
            </div>

            {cards.map((card, index) => (
              <div
                key={index}
                ref={(el) => (itemsRef.current[index] = el)}
                className="absolute inset-0 flex items-center justify-center top-8"
                style={{
                  zIndex: cards.length - index,
                  willChange: "transform",
                }}
              >
                <LegacyCard card={card} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}