import  { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ChaseMarquee() {
  const trackRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    const container = containerRef.current;

    if (!track || !container) return;

    // Animate the WHOLE track
    gsap.to(track, {
      x: "-50%",
      duration: 30,
      repeat: -1,
      ease: "none",
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % (track.scrollWidth / 2))
      }
    });

    // ScrollTrigger parallax effect
    ScrollTrigger.matchMedia({
      '(pointer: fine)': () => {
        gsap.to(container, {
          xPercent: -20,
          scrollTrigger: {
            trigger: container,
            start: 'top 100%',
            end: 'bottom -100%',
            markers: false,
            scrub: 1,
          }
        });
      },
      '(pointer: coarse)': () => {
        gsap.set(container, {
          xPercent: 0
        });
      }
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      gsap.killTweensOf(track);
    };
  }, []);

  return (
    <div className="overflow-hidden">
      <section className="w-full py-0">
        <div className="w-full px-0">
          <a 
            href="https://riseatseven.com/contact/" 
            className="w-full relative overflow-hidden block cursor-pointer"
          >
            <div 
              ref={containerRef}
              className="relative z-0 overflow-hidden"
            >
              <div 
                ref={trackRef}
                className="flex w-max will-change-transform transform-gpu"
                style={{ whiteSpace: 'nowrap' }}
              >
                {/* Item 1 - Chasing Consumers */}
                <div className="shrink-0 flex items-center gap-x-4 px-2 pb-3 lg:pt-5 lg:pb-10 lg:gap-x-10 lg:px-5">
                  <h2 className="inline-flex flex-wrap text-balance relative text-left justify-start text-grey-900 text-[15vw] md:text-[12vw] lg:text-[10vw] xl:text-[8vw] leading-[0.85] font-sans-primary font-medium tracking-tight js-heading flex-1 lg:pb-10 whitespace-nowrap">
                    Chasing Consumers
                  </h2>
                  <div className="shrink-0 rounded-2xl overflow-hidden w-[20vw] md:w-[15vw] lg:mb-10 lg:rounded-3xl lg:w-[12vw]">
                    <div className="relative overflow-hidden w-full" style={{ paddingTop: '100%' }}>
                      <picture className="absolute top-0 left-0 w-full h-full">
                        <source 
                          type="image/webp" 
                          srcSet="https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-25-at-14.49.00.png?w=400&amp;h=400&amp;q=80&amp;fm=webp&amp;fit=crop&amp;crop=focalpoint&amp;fp-x=0.5&amp;fp-y=0.5&amp;dm=1750859361&amp;s=f220bffc8303450846250315e3fcb457 400w, https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-25-at-14.49.00.png?w=800&amp;h=800&amp;q=80&amp;fm=webp&amp;fit=crop&amp;crop=focalpoint&amp;fp-x=0.5&amp;fp-y=0.5&amp;dm=1750859361&amp;s=85672a22ce9c7c4d764fe422cdde43ad 800w, https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-25-at-14.49.00.png?w=1200&amp;h=1200&amp;q=80&amp;fm=webp&amp;fit=crop&amp;crop=focalpoint&amp;fp-x=0.5&amp;fp-y=0.5&amp;dm=1750859361&amp;s=f63f7d31e9373654c2e31cb90e37b162 1200w" 
                          sizes="100vw" 
                        />
                        <img 
                          src="https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-25-at-14.49.00.png?w=800&amp;h=800&amp;q=90&amp;auto=format&amp;fit=crop&amp;crop=focalpoint&amp;fp-x=0.5&amp;fp-y=0.5&amp;dm=1750859361&amp;s=71402550445fa031b6e492341292c03e" 
                          srcSet="https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-25-at-14.49.00.png?w=400&amp;h=400&amp;q=90&amp;auto=format&amp;fit=crop&amp;crop=focalpoint&amp;fp-x=0.5&amp;fp-y=0.5&amp;dm=1750859361&amp;s=ae56e69440c910cb1562450757f5a5ea 400w, https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-25-at-14.49.00.png?w=800&amp;h=800&amp;q=90&amp;auto=format&amp;fit=crop&amp;crop=focalpoint&amp;fp-x=0.5&amp;fp-y=0.5&amp;dm=1750859361&amp;s=71402550445fa031b6e492341292c03e 800w, https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-25-at-14.49.00.png?w=1200&amp;h=1200&amp;q=90&amp;auto=format&amp;fit=crop&amp;crop=focalpoint&amp;fp-x=0.5&amp;fp-y=0.5&amp;dm=1750859361&amp;s=a5ba93e84729851fa765fa1cda592c2c 1200w" 
                          sizes="100vw" 
                          alt="Screenshot 2025 06 25 at 14 49 00" 
                          className="absolute top-0 left-0 w-full h-full object-cover transition-opacity" 
                          loading="lazy" 
                        />
                      </picture>
                    </div>
                  </div>
                </div>

                {/* Item 2 - Not Algorithms */}
                <div className="shrink-0 flex items-center gap-x-4 px-2 pb-3 lg:pt-5 lg:pb-10 lg:gap-x-10 lg:px-5">
                  <h2 className="inline-flex flex-wrap text-balance relative text-left justify-start text-grey-900 text-[15vw] md:text-[12vw] lg:text-[10vw] xl:text-[8vw] leading-[0.85] font-sans-primary font-medium tracking-tight js-heading flex-1 lg:pb-10 whitespace-nowrap">
                    Not Algorithms
                  </h2>
                  <div className="shrink-0 rounded-2xl overflow-hidden w-[20vw] md:w-[15vw] lg:mb-10 lg:rounded-3xl lg:w-[12vw]">
                    <div className="relative overflow-hidden w-full" style={{ paddingTop: '100%' }}>
                      <picture className="absolute top-0 left-0 w-full h-full">
                        <source 
                          type="image/webp" 
                          srcSet="https://rise-atseven.transforms.svdcdn.com/production/images/IMG_5023.jpg?w=400&amp;h=400&amp;q=80&amp;fm=webp&amp;fit=crop&amp;crop=focalpoint&amp;fp-x=0.5&amp;fp-y=0.5&amp;dm=1750846538&amp;s=cb2016613a41d1153d28e086f39c0c72 400w, https://rise-atseven.transforms.svdcdn.com/production/images/IMG_5023.jpg?w=800&amp;h=800&amp;q=80&amp;fm=webp&amp;fit=crop&amp;crop=focalpoint&amp;fp-x=0.5&amp;fp-y=0.5&amp;dm=1750846538&amp;s=34b13289f53f19252c5d5414dae6d40d 800w, https://rise-atseven.transforms.svdcdn.com/production/images/IMG_5023.jpg?w=1200&amp;h=1200&amp;q=80&amp;fm=webp&amp;fit=crop&amp;crop=focalpoint&amp;fp-x=0.5&amp;fp-y=0.5&amp;dm=1750846538&amp;s=c0feddd70413291ac98a72d65d0beaff 1200w" 
                          sizes="100vw" 
                        />
                        <img 
                          src="https://rise-atseven.transforms.svdcdn.com/production/images/IMG_5023.jpg?w=800&amp;h=800&amp;q=90&amp;auto=format&amp;fit=crop&amp;crop=focalpoint&amp;fp-x=0.5&amp;fp-y=0.5&amp;dm=1750846538&amp;s=65b6be8825440054ae9ced44b7525598" 
                          srcSet="https://rise-atseven.transforms.svdcdn.com/production/images/IMG_5023.jpg?w=400&amp;h=400&amp;q=90&amp;auto=format&amp;fit=crop&amp;crop=focalpoint&amp;fp-x=0.5&amp;fp-y=0.5&amp;dm=1750846538&amp;s=aff60c98f7060409ee313fa2de2d8b04 400w, https://rise-atseven.transforms.svdcdn.com/production/images/IMG_5023.jpg?w=800&amp;h=800&amp;q=90&amp;auto=format&amp;fit=crop&amp;crop=focalpoint&amp;fp-x=0.5&amp;fp-y=0.5&amp;dm=1750846538&amp;s=65b6be8825440054ae9ced44b7525598 800w, https://rise-atseven.transforms.svdcdn.com/production/images/IMG_5023.jpg?w=1200&amp;h=1200&amp;q=90&amp;auto=format&amp;fit=crop&amp;crop=focalpoint&amp;fp-x=0.5&amp;fp-y=0.5&amp;dm=1750846538&amp;s=0a73977d57a894cd3e62a036c725eea5 1200w" 
                          sizes="100vw" 
                          alt="IMG 5023" 
                          className="absolute top-0 left-0 w-full h-full object-cover transition-opacity" 
                          loading="lazy" 
                        />
                      </picture>
                    </div>
                  </div>
                </div>

                {/* Duplicate Item 3 - Chasing Consumers (for seamless loop) */}
                <div className="shrink-0 flex items-center gap-x-4 px-2 pb-3 lg:pt-5 lg:pb-10 lg:gap-x-10 lg:px-5">
                  <h2 className="inline-flex flex-wrap text-balance relative text-left justify-start text-grey-900 text-[15vw] md:text-[12vw] lg:text-[10vw] xl:text-[8vw] leading-[0.85] font-sans-primary font-medium tracking-tight js-heading flex-1 lg:pb-10 whitespace-nowrap">
                    Chasing Consumers
                  </h2>
                  <div className="shrink-0 rounded-2xl overflow-hidden w-[20vw] md:w-[15vw] lg:mb-10 lg:rounded-3xl lg:w-[12vw]">
                    <div className="relative overflow-hidden w-full" style={{ paddingTop: '100%' }}>
                      <picture className="absolute top-0 left-0 w-full h-full">
                        <source 
                          type="image/webp" 
                          srcSet="https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-25-at-14.49.00.png?w=400&amp;h=400&amp;q=80&amp;fm=webp&amp;fit=crop&amp;crop=focalpoint&amp;fp-x=0.5&amp;fp-y=0.5&amp;dm=1750859361&amp;s=f220bffc8303450846250315e3fcb457 400w, https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-25-at-14.49.00.png?w=800&amp;h=800&amp;q=80&amp;fm=webp&amp;fit=crop&amp;crop=focalpoint&amp;fp-x=0.5&amp;fp-y=0.5&amp;dm=1750859361&amp;s=85672a22ce9c7c4d764fe422cdde43ad 800w, https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-25-at-14.49.00.png?w=1200&amp;h=1200&amp;q=80&amp;fm=webp&amp;fit=crop&amp;crop=focalpoint&amp;fp-x=0.5&amp;fp-y=0.5&amp;dm=1750859361&amp;s=f63f7d31e9373654c2e31cb90e37b162 1200w" 
                          sizes="100vw" 
                        />
                        <img 
                          src="https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-25-at-14.49.00.png?w=800&amp;h=800&amp;q=90&amp;auto=format&amp;fit=crop&amp;crop=focalpoint&amp;fp-x=0.5&amp;fp-y=0.5&amp;dm=1750859361&amp;s=71402550445fa031b6e492341292c03e" 
                          srcSet="https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-25-at-14.49.00.png?w=400&amp;h=400&amp;q=90&amp;auto=format&amp;fit=crop&amp;crop=focalpoint&amp;fp-x=0.5&amp;fp-y=0.5&amp;dm=1750859361&amp;s=ae56e69440c910cb1562450757f5a5ea 400w, https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-25-at-14.49.00.png?w=800&amp;h=800&amp;q=90&amp;auto=format&amp;fit=crop&amp;crop=focalpoint&amp;fp-x=0.5&amp;fp-y=0.5&amp;dm=1750859361&amp;s=71402550445fa031b6e492341292c03e 800w, https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-25-at-14.49.00.png?w=1200&amp;h=1200&amp;q=90&amp;auto=format&amp;fit=crop&amp;crop=focalpoint&amp;fp-x=0.5&amp;fp-y=0.5&amp;dm=1750859361&amp;s=a5ba93e84729851fa765fa1cda592c2c 1200w" 
                          sizes="100vw" 
                          alt="Screenshot 2025 06 25 at 14 49 00" 
                          className="absolute top-0 left-0 w-full h-full object-cover transition-opacity" 
                          loading="lazy" 
                        />
                      </picture>
                    </div>
                  </div>
                </div>

                {/* Duplicate Item 4 - Not Algorithms (for seamless loop) */}
                <div className="shrink-0 flex items-center gap-x-4 px-2 pb-3 lg:pt-5 lg:pb-10 lg:gap-x-10 lg:px-5">
                  <h2 className="inline-flex flex-wrap text-balance relative text-left justify-start text-grey-900 text-[15vw] md:text-[12vw] lg:text-[10vw] xl:text-[8vw] leading-[0.85] font-sans-primary font-medium tracking-tight js-heading flex-1 lg:pb-10 whitespace-nowrap">
                    Not Algorithms
                  </h2>
                  <div className="shrink-0 rounded-2xl overflow-hidden w-[20vw] md:w-[15vw] lg:mb-10 lg:rounded-3xl lg:w-[12vw]">
                    <div className="relative overflow-hidden w-full" style={{ paddingTop: '100%' }}>
                      <picture className="absolute top-0 left-0 w-full h-full">
                        <source 
                          type="image/webp" 
                          srcSet="https://rise-atseven.transforms.svdcdn.com/production/images/IMG_5023.jpg?w=400&amp;h=400&amp;q=80&amp;fm=webp&amp;fit=crop&amp;crop=focalpoint&amp;fp-x=0.5&amp;fp-y=0.5&amp;dm=1750846538&amp;s=cb2016613a41d1153d28e086f39c0c72 400w, https://rise-atseven.transforms.svdcdn.com/production/images/IMG_5023.jpg?w=800&amp;h=800&amp;q=80&amp;fm=webp&amp;fit=crop&amp;crop=focalpoint&amp;fp-x=0.5&amp;fp-y=0.5&amp;dm=1750846538&amp;s=34b13289f53f19252c5d5414dae6d40d 800w, https://rise-atseven.transforms.svdcdn.com/production/images/IMG_5023.jpg?w=1200&amp;h=1200&amp;q=80&amp;fm=webp&amp;fit=crop&amp;crop=focalpoint&amp;fp-x=0.5&amp;fp-y=0.5&amp;dm=1750846538&amp;s=c0feddd70413291ac98a72d65d0beaff 1200w" 
                          sizes="100vw" 
                        />
                        <img 
                          src="https://rise-atseven.transforms.svdcdn.com/production/images/IMG_5023.jpg?w=800&amp;h=800&amp;q=90&amp;auto=format&amp;fit=crop&amp;crop=focalpoint&amp;fp-x=0.5&amp;fp-y=0.5&amp;dm=1750846538&amp;s=65b6be8825440054ae9ced44b7525598" 
                          srcSet="https://rise-atseven.transforms.svdcdn.com/production/images/IMG_5023.jpg?w=400&amp;h=400&amp;q=90&amp;auto=format&amp;fit=crop&amp;crop=focalpoint&amp;fp-x=0.5&amp;fp-y=0.5&amp;dm=1750846538&amp;s=aff60c98f7060409ee313fa2de2d8b04 400w, https://rise-atseven.transforms.svdcdn.com/production/images/IMG_5023.jpg?w=800&amp;h=800&amp;q=90&amp;auto=format&amp;fit=crop&amp;crop=focalpoint&amp;fp-x=0.5&amp;fp-y=0.5&amp;dm=1750846538&amp;s=65b6be8825440054ae9ced44b7525598 800w, https://rise-atseven.transforms.svdcdn.com/production/images/IMG_5023.jpg?w=1200&amp;h=1200&amp;q=90&amp;auto=format&amp;fit=crop&amp;crop=focalpoint&amp;fp-x=0.5&amp;fp-y=0.5&amp;dm=1750846538&amp;s=0a73977d57a894cd3e62a036c725eea5 1200w" 
                          sizes="100vw" 
                          alt="IMG 5023" 
                          className="absolute top-0 left-0 w-full h-full object-cover transition-opacity" 
                          loading="lazy" 
                        />
                      </picture>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}