import { useEffect } from "react";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { useAppDispatch, useAppSelector } from "../hooks/app";
import { handleChangeThemeMode } from "../redux/reducer/setting";
import { motion } from "framer-motion";
const ThemeIcon = () => {
    const { isLight, themeMode } = useAppSelector(state => state.setting);
    const dispatch = useAppDispatch();
    const colorTheme = isLight ? "light" : "dark";
    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove(colorTheme);
        root.classList.add(themeMode);
        localStorage.setItem("theme", themeMode);
    }, [colorTheme, themeMode]);
    return (
        <motion.button
            onClick={() => dispatch(handleChangeThemeMode())}
            className="dark:text-white text-black text-xl outline-none">
            {isLight ? <BsFillSunFill /> : <BsFillMoonFill />}
        </motion.button>
    );
};
export default ThemeIcon;