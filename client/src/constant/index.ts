import {
  css,
  excel,
  html,
  javascript,
  powerpoint,
  react,
  word,
} from "@/assets";
import { certificate, computer, teacher } from "@/assets/lottie";
export const navLinks: INavLink[] = [
  {
    id: 1,
    title: "Bosh sahifa",
    path: "/",
  },
  {
    id: 2,
    title: "Yangiliklar",
    path: "/news",
  },
  {
    id: 3,
    title: "Bizning Jamoa",
    path: "/team",
  },
];
export const products: IProducts[] = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cursor.png",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/rogue.png",
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editorially.png",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editrix.png",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
  },

  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
  },

  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/invoker.png",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
  },
];
export const aboutContent: IAboutContent[] = [
  {
    id: 1,
    title: "Ko'p yillik tajribaga ega o'qituvchilar",
    description:
      "Bizning o'quv markazda yuqori ma'lakaga ega o'qituvchilar o'qishtish jarayonida haqiqiy loyihalar qilish.",
    lottie: teacher,
  },
  {
    id: 2,
    title: "Zamonaviy o'qitish xonalari",
    description:
      "O'quv markazimiz 2023 yil 26 dekabrda yangi ko'rinishga keltirildi va yangi Kompyuterlar va yangi zamonaviy texnologiyalar bilan qayta ta'mirlandi",

    lottie: computer,
  },
  {
    id: 3,
    title: "O'quv kursni tugatgach Sertificat berish",
    description:
      "Bizning o'quv kurslarimizni mufaqatitali  tugatgan o'quvchilarimizni kursni tuganganligi bo'yicha sertificat bilan taqdirlash.",
    lottie: certificate,
  },
];
const keywords: string[] = [
  "IT-Khiva",
  "Khiva IT Center",
  "Khiva IT Park",
  "Khorezm IT Center",
  "IT education Uzbekistan",
  "IT courses",
  "training programs",
  "IT skills",
  "experienced instructors",
  "hands-on learning",
  "latest technologies",
  "Uzbekistan tech hub",
];
export const metaData = {
  metadataBase: new URL("http://localhost"),
  generator: "Next.js",
  applicationName: "Next.js",
  title: "IT-Park",
  keywords: keywords,
  creator: "Hikmatbek Bekturdiyev",
  description: "IT-Park Khorezm zamonavit kasblarni o'qitish markazi",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "IT-Park Khorezm",
    description: "IT-Park Khorezm zamonavit kasblarni o'qitish markazi",
    images: [
      {
        url: "./favicon.png",
        width: 300,
        height: 300,
        alt: "IT-Park Khorezm Logo",
      },
    ],
  },
  icons: {
    icon: "./favicon.png",
  },
};
export const courses: ICourse[] = [
  {
    id: 1,
    title: "Komyuter Savodxonligi",
    description:
      "Komyuter savodxonligi kursi orqali siz microsoft dasturlari bilan ",
    icons: [word, excel, powerpoint],
  },
  {
    id: 2,
    title: "Web Front End",
    description: "",
    icons: [html, css, javascript, react],
  },
];
