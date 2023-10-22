import React from "react";
import Project from "./Projects/Project";
import { useInView } from "react-intersection-observer";

const ScrollAnimationComponent = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  return (
    <div ref={ref}>
      {inView && (
        <div className="animation-element slide-up">
          <Project />
        </div>
      )}
    </div>
  );
};

export default ScrollAnimationComponent;
