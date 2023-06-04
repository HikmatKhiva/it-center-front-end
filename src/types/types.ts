export interface INavigation { /* Nav */
  id: number;
  title: string;
  url: string;
}

export interface ISocial { /* social */
  id?: number;
  name?: string;
  url?: string;
  icon?: any;
  color?: string;
}
export interface ITeamSocial { /* */
  name: string;
  url: string;
  icon: string;
}
export interface ITeam {
  id: number;
  name: string;
  experience: string;
  profession: string;
  img: any;
  social: ISocial[];
}
export interface IFooterContact {
  id:number
  title:string
  url:string
  content:string
}

interface IStack {
  name?: string;
  icon?: any;
  _key?: string
  _type?: string
  asset?: object
}

interface ISlug {
  current: string;
  _type: string;
}

export interface INews {
  title: string;
  slug: ISlug;
  descr: string;
  desc: any;
  image: any;
  date: string;
  _rev: string;
  _updatedAt?: string;
  _createdAt?: string;
  _id?: string;
  _type?: string;
}
export interface ICourse {
  mentor?: string
  name?: string
  stack?: IStack[]
  _createdAt?: string
  _id?: string
  _rev?: string
  _type?: string
  _updatedAt?: string
  duration?:string
  url?:string
}
