import { motion } from "framer-motion";
import { mentorQ } from "../server/query";
import Teacher from "../components/Teacher";
import { ITeam } from "../types/types";
import { Error, FetchLoading } from "../loadings";
import { TabTitle } from "../utils/TabTitle";
import { useQueryData } from "../hooks/useQueryData";
const About = () => {
  TabTitle('Bizning Jamoa')
  const { data, error, isLoading: loading } = useQueryData(mentorQ);
  return (
    <section id="about" className="dark:bg-dark bg-gray-100 flex flex-col">
      <div className="title py-5 dark:text-white flex items-center flex-col">
        <h2 className="text-3xl capitalize">Bizning Jamoa</h2>
      </div>
      <motion.div className="container mx-auto gap-5 flex flex-col flex-grow">
        {(data && !loading) ? (
          data?.map((mentor: ITeam, index: number) => <Teacher key={mentor._id} teacher={mentor} index={index} />)
        ) : error ? <Error error={error} /> : (
          <FetchLoading />
        )}
      </motion.div>
    </section>
  );
};
export default About;