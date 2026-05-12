import { useEffect, useRef } from "react";
import gsap from "gsap";

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    
    if (!cursor) return;

    // Initially hide the custom cursor
    gsap.set(cursor, { opacity: 0, scale: 0 });
    
    // Flag to track if we're hovering a trigger
    let isHoveringTrigger = false;

    const onMouseMove = (e) => {
      if (isHoveringTrigger) {
        gsap.to(cursor, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.15,
          ease: "power2.out",
        });
      }
    };

    // Handle hover on cursor-trigger elements
    const handleElementHover = (e) => {
      isHoveringTrigger = true;
      const target = e.currentTarget;
      const rect = target.getBoundingClientRect();
      
      // Hide default cursor on the target element
      document.body.style.cursor = "none";
      target.style.cursor = "none";
      
      // Show and animate cursor to center of element
      gsap.to(cursor, {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
        opacity: 1,
        scale: 1,
        duration: 0.3,
        ease: "back.out(0.4)",
      });
    };

    const handleElementLeave = () => {
      isHoveringTrigger = false;
      
      // Restore default cursor
      document.body.style.cursor = "";
      
      // Hide custom cursor
      gsap.to(cursor, {
        opacity: 0,
        scale: 0,
        duration: 0.2,
        ease: "power2.out",
      });
    };

    // Function to add event listeners to cursor triggers
    const addEventListeners = () => {
      const triggers = document.querySelectorAll('.cursor-trigger');
      
      triggers.forEach((trigger) => {
        trigger.addEventListener('mouseenter', handleElementHover);
        trigger.addEventListener('mouseleave', handleElementLeave);
        // Force hide cursor on trigger elements
        trigger.style.cursor = "none";
        
        // Also hide cursor on all child elements
        const children = trigger.querySelectorAll('*');
        children.forEach(child => {
          child.style.cursor = "none";
        });
      });
    };

    // Initial add
    addEventListeners();

    // Observe for dynamically added cursor-trigger elements
    const observer = new MutationObserver(() => {
      addEventListeners();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    document.addEventListener('mousemove', onMouseMove);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      observer.disconnect();
      
      // Clean up
      document.body.style.cursor = "";
      const triggers = document.querySelectorAll('.cursor-trigger');
      triggers.forEach((trigger) => {
        trigger.removeEventListener('mouseenter', handleElementHover);
        trigger.removeEventListener('mouseleave', handleElementLeave);
        trigger.style.cursor = "";
        
        const children = trigger.querySelectorAll('*');
        children.forEach(child => {
          child.style.cursor = "";
        });
      });
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-9999 rounded-full flex items-center justify-center"
      style={{
        width: "140px",
        height: "140px",
        backgroundColor: "#B7F3E4",
        transform: "translate(-50%, -50%)",
        boxShadow: "0 0 30px rgba(183, 243, 228, 0.4)",
        opacity: 0,
      }}
    >
      <svg 
        width="48" 
        height="48" 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M7 17L17 7M17 7H7M17 7V17" 
          stroke="#000000" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default CustomCursor;