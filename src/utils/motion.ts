export const svgVariants = {
  start: {
    opacity: 0,
    pathLength: 0,
  },
  finished: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
      type: "spring",
    },
  },
};