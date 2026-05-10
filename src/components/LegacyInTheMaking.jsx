'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const LegacyInTheMaking = () => {
  const triggerRef = useRef(null);
  const itemsRef = useRef([]);
  const swiperRef = useRef(null);

  useEffect(() => {
    const trigger = triggerRef.current;
    const items = itemsRef.current;

    if (!trigger || items.length === 0) return;

    let scrollTriggerInstance = null;
    let mediaQuery = null;

    const initDesktopAnimation = () => {
      scrollTriggerInstance = gsap.to(items, {
        yPercent: -100,
        rotate: -50,
        stagger: 1,
        ease: 'power2.inOut',
        duration: 3,
        scrollTrigger: {
          trigger: trigger,
          start: 'top 30%',
          end: 'bottom -50%',
          scrub: true,
          onEnter: () => {
            window.dispatchEvent(new CustomEvent('component-header', { 
              detail: { hideHeaderOverride: true } 
            }));
          },
          onLeave: () => {
            window.dispatchEvent(new CustomEvent('component-header', { 
              detail: { hideHeaderOverride: false } 
            }));
          },
          onLeaveBack: () => {
            window.dispatchEvent(new CustomEvent('component-header', { 
              detail: { hideHeaderOverride: false } 
            }));
          },
          onEnterBack: () => {
            window.dispatchEvent(new CustomEvent('component-header', { 
              detail: { hideHeaderOverride: true } 
            }));
          }
        }
      });
    };

    if (ScrollTrigger.matchMedia) {
      mediaQuery = ScrollTrigger.matchMedia({
        '(min-width: 1024px)': () => {
          initDesktopAnimation();
          return () => {
            if (scrollTriggerInstance) scrollTriggerInstance.kill();
          };
        }
      });
    }

    return () => {
      if (mediaQuery && mediaQuery.revert) mediaQuery.revert();
      if (scrollTriggerInstance) scrollTriggerInstance.kill();
      ScrollTrigger.getAll().forEach(st => {
        if (st.vars.trigger === trigger) {
          st.kill();
        }
      });
    };
  }, []);

  const cards = [
    {
      id: 1,
      title: 'Pioneers',
      bgColor: 'bg-black',
      textColor: 'text-white',
      image: 'https://rise-atseven.transforms.svdcdn.com/production/images/b2087e0cd3f699d3efc76f809ec72a85a6ab378e-1080x1350.jpg?w=800&h=800&q=90&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847630&s=c889017e88c274e24330efc5d580f091',
      description: 'We\'re dedicated to creating the industry narrative that others follow 3 years from now. We paved the path for creative SEO, multi-channel search with Digital PR, and Social Search and we will continue to do it. We\'re on a mission to be the first search-first agency to win a Cannes Lion disrupting the status quo.',
      rotate: 4
    },
    {
      id: 2,
      title: 'Award Winning',
      bgColor: 'bg-[#B0F0E0]',
      textColor: 'text-gray-900',
      image: 'https://rise-atseven.transforms.svdcdn.com/production/images/d4df0d30-d590-4e94-9056-9491f4beacba.JPG?w=800&h=800&q=90&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847714&s=f3086f66c3decedbc5aeb16f3bf0973c',
      description: 'A roll top bath full of 79 awards. Voted The Drum\'s best agency outside of London. We are official judges for industry awards including Global Search Awards and Global Content Marketing Awards.',
      rotate: 8
    },
    {
      id: 3,
      title: 'Speed',
      bgColor: 'bg-white',
      textColor: 'text-gray-900',
      image: 'https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-23-at-23.15.19.png?w=800&h=800&q=100&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847626&s=140843ab3486e306a42c0c6322d34a2b',
      description: 'People ask us why we are called Rise at Seven? Ever heard the saying Early Bird catches the worm? Google is moving fast, but humans are moving faster. We chase consumers, not algorithms. We\'ve created a service which takes ideas to result within 60 minutes.',
      rotate: 12
    }
  ];

  const Card = ({ card }) => (
    <div className={`w-full flex-col text-center rounded-2xl grid p-7 lg:items-center lg:rounded-3xl lg:aspect-square xl:py-10 xl:px-14 ${card.bgColor}`}>
      <div className="col-start-1 row-start-1 flex flex-col text-center lg:items-center gap-y-3 md:gap-y-5">
        {/* Image */}
        <div className="rounded-xl overflow-hidden w-full aspect-4/3 relative lg:aspect-square lg:rounded-2xl lg:w-48 4xl:w-56">
          <img
            src={card.image}
            alt={card.title}
            className="absolute top-0 left-0 w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col items-center gap-y-4">
          <h2 className={`inline-flex flex-wrap text-balance relative text-center justify-center ${card.textColor} text-3xl/none lg:text-5xl/none xl:text-6xl/none 3xl:text-7xl/0.9 font-sans-primary font-medium tracking-tight`}>
            {card.title}
          </h2>
          <p className={`w-full text-sm font-sans-primary leading-normal text-pretty lg:text-base ${card.textColor}`}>
            {card.description}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <section className="w-full py-0">
        <div className="w-full px-0">
          {/* Mobile Version - Swiper Carousel */}
          <div className="w-full py-10 px-4 md:px-7 gap-y-3 md:gap-y-5 lg:hidden">
            <div className="flex justify-center mb-3">
              <h2 className="inline-flex flex-wrap text-balance relative text-left justify-start text-gray-900 text-md/tight lg:text-lg/tight xl:text-xl/tight 4xl:text-2xl/none font-sans-primary font-medium tracking-tight">
                Legacy In The Making
              </h2>
            </div>

            <Swiper
              ref={swiperRef}
              modules={[Pagination]}
              slidesPerView={1}
              spaceBetween={15}
              loop={true}
              speed={700}
              breakpoints={{
                640: {
                  slidesPerView: 1.55,
                }
              }}
              pagination={{
                el: '.js-pagination-43',
                type: 'progressbar',
              }}
              className="w-full swiper"
            >
              {cards.map((card) => (
                <SwiperSlide key={card.id} className="flex! h-auto!">
                  <Card card={card} />
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="w-full relative mt-3">
              <div className="w-full swiper-pagination js-pagination-43"></div>
            </div>
          </div>

          {/* Desktop Version - Stacked Cards with GSAP */}
          <div
            ref={triggerRef}
            className="w-full relative hidden lg:flex"
            style={{ height: '300vh' }}
          >
            <div className="w-full h-screen sticky top-0 left-0 overflow-hidden">
              {/* Title */}
              <div className="absolute top-0 left-0 w-full flex justify-center mt-10 3xl:mt-16">
                <h2 className="inline-flex flex-wrap text-balance relative text-left justify-start text-gray-900 text-md/tight lg:text-lg/tight xl:text-xl/tight 4xl:text-2xl/none font-sans-primary font-medium tracking-tight">
                  Legacy In The Making
                </h2>
              </div>

              {/* Stacked Cards */}
              {cards.map((card, idx) => (
                <div
                  key={card.id}
                  ref={(el) => { 
                    if (el) itemsRef.current[idx] = el; 
                  }}
                  className="w-full h-full absolute left-0 flex items-center justify-center top-8"
                  style={{ 
                    zIndex: cards.length - idx,
                    willChange: 'transform'
                  }}
                >
                  <div
                    className="w-full max-w-lg xl:max-w-xl 4xl:max-w-2xl"
                    style={{ transform: `rotate(${card.rotate}deg)` }}
                  >
                    <Card card={card} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LegacyInTheMaking;