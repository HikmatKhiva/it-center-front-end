import { BsTelegram,BsFillTelephoneFill } from "react-icons/bs";
import { INavigation, ISocial} from "../types/types";

export const navigation: INavigation[] = [
  { id: 1, title: "asosiy", url: "/" },
  { id: 2, title: "yangiliklar", url: "/news" },
  { id: 3, title: "kurslar", url: "/course" },
  { id: 4, title: "biz-haqimizda", url: "/about-us" },
  { id: 5, title: "aloqa", url: "/contact" },
];
export const socialUrl: ISocial[] = [
  {
    id: 1,
    name: "telegram",
    url: "https://t.me/Raqamli_Xiva_shahar",
    icon: BsTelegram,
    color: "#27A7E7",
  },
  {
    id: 2,
    name: "phone",
    url: "tel:+998912798401",
    icon: BsFillTelephoneFill,
    color: "",
  },
];

export const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 45, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};
