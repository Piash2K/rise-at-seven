'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitText from 'gsap/SplitText';

// Ensure plugins are registered (if not already globally)
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, SplitText);
}

const ReadyToRiseHeading = () => {
  const containerRef = useRef(null);
  const triggerRef = useRef(null);
  const headingRef = useRef(null);
  const animationRef = useRef(null);
  const splitTextInstanceRef = useRef(null);
  const resizeTimeoutRef = useRef(null);

  useEffect(() => {
    // Store refs in variables for cleanup
    const trigger = triggerRef.current;
    const heading = headingRef.current;
    
    // Guard against missing elements
    if (!trigger || !heading) return;
    
    // Debounced resize handler to refresh ScrollTrigger
    const handleResize = () => {
      clearTimeout(resizeTimeoutRef.current);
      resizeTimeoutRef.current = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);
    };

    const initAnimation = () => {
      // Get measurements
      const headingWidth = heading.offsetWidth;
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      // Responsive values based on viewport
      let yStart = 150;
      let yEnd = 400;
      let charyStart = -60;

      if (window.innerWidth <= 1023) {
        yStart = 100;
        yEnd = 200;
        charyStart = -60;
      }

      // Set initial position
      gsap.set(heading, {
        y: yStart,
        x: headingWidth - windowWidth + windowWidth * 0.5,
      });

      // Main scroll animation for the heading
      gsap.to(heading, {
        x: () => {
          return -(headingWidth - window.innerWidth + 1000);
        },
        y: yEnd,
        ease: 'none',
        scrollTrigger: {
          trigger: trigger,
          start: 'top 70%',
          end: '+=' + (headingWidth - windowWidth + windowHeight * 0.35),
          scrub: true,
        },
      });

      // Clean up previous SplitText instance if exists
      if (splitTextInstanceRef.current) {
        splitTextInstanceRef.current.revert();
      }

      // Create new SplitText instance for character animation
      splitTextInstanceRef.current = new SplitText(heading, {
        type: 'chars',
      });

      const chars = splitTextInstanceRef.current.chars;

      // Set initial state for each character
      chars.forEach((char) => {
        gsap.set(char, {
          yPercent: charyStart,
          rotate: 10,
        });
      });

      // Character animation with scroll trigger
      const charAnimation = gsap.to(chars, {
        yPercent: 0,
        rotate: 0,
        ease: 'back.inOut(4)',
        stagger: 0.35,
        duration: 2.5,
        scrollTrigger: {
          trigger: trigger,
          start: 'top 77%',
          end: '+=' + (headingWidth - windowWidth + 200),
          scrub: true,
        },
      });

      animationRef.current = charAnimation;
    };

    // Initial animation setup
    initAnimation();

    // Re-initialize on window resize
    window.addEventListener('resize', handleResize);

    // Rebuild on orientation change as well
    window.addEventListener('orientationchange', () => {
      setTimeout(() => {
        ScrollTrigger.refresh();
        initAnimation();
      }, 100);
    });

    // Cleanup function using the stored values
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
      
      // Kill all ScrollTriggers associated with this component using the stored trigger
      ScrollTrigger.getAll().forEach(st => {
        if (st.vars.trigger === trigger) {
          st.kill();
        }
      });
      
      // Kill GSAP animations
      if (animationRef.current) {
        animationRef.current.kill();
      }
      
      // Revert SplitText
      if (splitTextInstanceRef.current) {
        splitTextInstanceRef.current.revert();
        splitTextInstanceRef.current = null;
      }
      
      clearTimeout(resizeTimeoutRef.current);
    };
  }, []); // Empty dependency array since we're using refs

  return (
    <>
      <div
        ref={containerRef}
        className="overflow-hidden hidden lg:block"
      >
        <div
          ref={triggerRef}
          className="flex h-[35vh] lg:h-screen"
        >
          <div
            ref={headingRef}
            className="shrink-0 text-[30vw] font-medium tracking-tight leading-tight lg:text-[16vw] 4xl:text-[14vw]"
          >
            Ready to Rise at Seven?
          </div>
        </div>
      </div>
      
      {/* Extra spacer for testing scroll animation */}
      <div className="h-[200vh] bg-liner-to-b from-transparent via-gray-100/50 to-transparent lg:block hidden">
        <div className="flex items-center justify-center h-full">
          <div className="text-center">
            <p className="text-gray-400 font-mono text-sm mb-2">⬇️ Scroll to test animation ⬇️</p>
            <p className="text-gray-300 text-xs">The heading above should animate as you scroll</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReadyToRiseHeading;