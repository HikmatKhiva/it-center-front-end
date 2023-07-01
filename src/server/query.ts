export const news = '*[_type=="news"]';
export const courseQ = '*[_type=="courses"]';
export const mentorQ = '*[_type=="mentor"]';
export const newsQuery = `*[ _type == "news" && slug.current == $title ]`;
