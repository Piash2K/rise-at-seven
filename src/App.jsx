import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Home from "./pages/Home";

let introHasPlayed = false;

function MintRevealOverlay() {
  const overlayRef = useRef(null);
  const revealEllipseRef = useRef(null);
  const [isVisible, setIsVisible] = useState(() => {
    const prefersReducedMotion = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isFinePointer = typeof window !== "undefined" && window.matchMedia("(pointer: fine)").matches;

    return !introHasPlayed && !prefersReducedMotion && isFinePointer;
  });
  const [viewport] = useState(() =>
    typeof window !== "undefined"
      ? { width: window.innerWidth, height: window.innerHeight }
      : { width: 1920, height: 1080 }
  );

  useEffect(() => {
    if (introHasPlayed) {
      return undefined;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    let timeline;

    if (prefersReducedMotion || !isFinePointer) {
      introHasPlayed = true;
      return undefined;
    }

    const rafId = window.requestAnimationFrame(() => {
      introHasPlayed = true;
      const { width, height } = viewport;
      const revealRadius = Math.hypot(width, height) * 1.15;

      document.body.style.overflow = "hidden";

      gsap.set(revealEllipseRef.current, {
        attr: {
          cx: width / 2,
          cy: height * 1.85,
          rx: 0,
          ry: 0,
        },
      });

      gsap.set(overlayRef.current, {
        opacity: 1,
        display: "block",
      });

      timeline = gsap.timeline({
        onComplete: () => {
          document.body.style.overflow = "";
          gsap.set(overlayRef.current, { display: "none" });
          setIsVisible(false);
        },
      });

      timeline.to(revealEllipseRef.current, {
        attr: {
          rx: revealRadius * 1.35,
          ry: revealRadius * 1.05,
        },
        duration: 3,
        ease: "power2.out",
      });
    });

    return () => {
      window.cancelAnimationFrame(rafId);
      timeline?.kill();
      document.body.style.overflow = "";
    };
  }, [viewport]);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 pointer-events-none"
      style={{
        zIndex: 9999,
        transform: "translateZ(0)",
        backfaceVisibility: "hidden",
        willChange: "transform",
      }}
      aria-hidden="true"
    >
      <svg
        className="h-full w-full"
        viewBox={`0 0 ${viewport.width} ${viewport.height}`}
        preserveAspectRatio="none"
        shapeRendering="geometricPrecision"
      >
        <defs>
          <mask id="mint-reveal-mask">
            <rect width="100%" height="100%" fill="white" />
            <ellipse
              ref={revealEllipseRef}
              cx={viewport.width / 2}
              cy={viewport.height}
              rx="0"
              ry="0"
              fill="black"
            />
          </mask>
        </defs>

        <rect width="100%" height="100%" fill="#B2F6E3" mask="url(#mint-reveal-mask)" />
      </svg>
    </div>
  );
}

function App() {
  return (
    <>
      <MintRevealOverlay />
      <Home className="bg-grey-100" />
    </>
  );
}

export default App;
