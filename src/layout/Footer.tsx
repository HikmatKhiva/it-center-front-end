import { Logo } from "../animationElement";
import { navigation, socialUrl } from "../settings";
import { container } from "../utils/motion";
import { motion } from "framer-motion";
import { NavItem, Social } from "../components";
const Footer = () => {
  return (
    <footer className="py-5 px-5 border-t-2 dark:bg-dark dark:border-main">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <div className="flex flex-wrap w-full sm:w-fit">
          <div className="w-full sm:w-fit">
            <Logo className="" />
            <div className="mt-2 flex items-center gap-2">
              <p className="text-xs font-medium">Design by </p>
              <a
                className="text-main hover:scale-110 transition-all duration-300 font-medium"
                href="https://hikmatbek.uz"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hikmat
              </a>
            </div>
          </div>
          <nav className="flex-grow my-3 lg:my-0 sm:ml-10">
            <motion.ul
              variants={container}
              className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-5 gap-y-2 self-start"
            >
              {navigation.map((nav, index) => (
                <NavItem index={index} key={nav.id} nav={nav} />
              ))}
            </motion.ul>
          </nav>
        </div>
        <div className="social mt-2 lg:mt-0 flex gap-5 flex-wrap">
          {socialUrl.map((social, index) => (
            <Social index={index} key={social.id} social={social} />
          ))}
        </div>
      </div>
    </footer>
  );
};
export default Footer;
