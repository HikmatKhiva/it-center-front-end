export type INavigation = { /* Nav */
  id: number;
  title: string;
  url: string;
}

export type ISocial = { /* social */
  id?: number;
  name?: string;
  url?: string;
  icon?: any;
  color?: string;
  image?: any
}
export type ITeamSocial = { /* */
  name: string;
  url: string;
  icon: string;
}
export type ITeam = {
  _id: string;
  name: string;
  experience: string;
  occupation: string;
  image: any;
  social: ISocial[];
  stacks: ISocial[]
}
export type IFooterContact = {
  id: number
  title: string
  url: string
  content: string
}

export type IMentorStack = {
  url: string,
  image: any
}

type IStack = {
  name?: string;
  icon?: any;
  _key?: string
  _type?: string
  asset?: object
}

type ISlug = {
  current: string;
  _type: string;
}

export type INews = {
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
export type ICourse = {
  mentor?: string
  name?: string
  stack?: IStack[]
  _createdAt?: string
  _id?: string
  _rev?: string
  _type?: string
  _updatedAt?: string
  duration?: string
  url?: string
  contact?: string
}

export type I_IP = {
  asn?: string
  city?: string
  continent_code?: string
  country?: string
  country_area?: number
  country_calling_code?: string
  country_capital?: string
  country_code?: string
  country_code_iso3?: string
  country_name?: string
  country_population?: number
  country_tld?: string
  currency?: string
  currency_name?: string
  in_eu?: boolean
  ip?: string
  languages?: string
  latitude?: number
  longitude?: number
  network?: string
  org?: string
  postal?: null | string | any
  region?: string
  region_code?: string
  timezone?: string
  utc_offset?: string
  version?: string
}

export type IAboutCard = {
  id: number
  title: string
  image: any
  graduates: number
}

export type ClientState = {
  alertUser: boolean;
  userInfo: I_IP;
}

export type IComplaint = {
  course: string;
  text: string;
};