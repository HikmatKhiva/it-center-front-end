import { motion } from "framer-motion";
const CourseSVG = () => {
  return (
    <svg
      width="60px"
      height="60px"
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        whileInView={{ pathLength: [0, 1], transition: { duration: 2 } }}
        fill="none"
        stroke="#000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        d="M1 2h16v11H1z"
      />
      <motion.path
        whileInView={{ pathLength: [0, 1], transition: { duration: 2 } }}
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        d="M4 5.5v5s3-1 5 0v-5s-2-2-5 0zM9 5.5v5s3-1 5 0v-5s-2-2-5 0z"
      />
      <motion.path
        whileInView={{ pathLength: [0, 1], transition: { duration: 2 } }}
        fill="#000"
        stroke="#000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        d="M8.5 14l-3 3h7l-3-3z"
      />
    </svg>
  );
};

export default CourseSVG;
