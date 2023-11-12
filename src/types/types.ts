export type INavigation = {
  /* Nav */ id: number;
  title: string;
  url: string;
};
export type ISocial = {
  /* social */ id?: number;
  name?: string;
  url?: string;
  icon?: string;
  color?: string;
  image?: string;
};
export type ITeamSocial = {
  /* */ name: string;
  url: string;
  icon: string;
};
export type ITeam = {
  _id: string;
  name: string;
  experience: string;
  occupation: string;
  image: string;
  social: ISocial[];
  stacks: ISocial[];
};
export type IFooterContact = {
  id: number;
  title: string;
  url: string;
  content: string;
};
export type IMentorStack = {
  url: string;
  image: string | unknown;
};
type IStack = {
  name?: string;
  icon?: string;
  _key?: string;
  _type?: string;
  asset?: object;
};
type ISlug = {
  current: string;
  _type: string;
};
export type INews = {
  title: string;
  slug: ISlug;
  descr: string;
  desc: string;
  image: string;
  date: string;
  _rev: string;
  _updatedAt?: string;
  _createdAt?: string;
  _id?: string;
  _type?: string;
};
export type ICourse = {
  mentor?: string;
  name?: string;
  stack?: IStack[];
  _createdAt?: string;
  _id?: string;
  _rev?: string;
  _type?: string;
  _updatedAt?: string;
  duration?: string;
  url?: string;
  contact?: string;
};
export type Type_IP = {
  ip: string;
  network: string;
  version: string;
  city: string;
  region: string;
  region_code: string;
  country: string;
  country_name: string;
  country_code: string;
  country_code_iso3: string;
  country_capital: string;
  country_tld: string;
  continent_code: string;
  in_eu: boolean;
  postal: string | null;
  latitude: number;
  longitude: number;
  timezone: string;
  utc_offset: string;
  country_calling_code: string;
  currency: string;
  currency_name: string;
  languages: string[];
  country_area: number;
  country_population: number;
  asn: string;
  org: string;
};
export type AboutCard = {
  id: number;
  title: string;
  image: string;
  graduates: number;
};
export type ClientState = {
  alertUser: boolean;
  userInfo: Type_IP | null;
};
export type IComplaint = {
  course: string;
  text: string;
};
export type Type_Location = {
  _type: string;
  country: string;
  city: string;
  ip: string;
  network: string;
  lat: number;
  lng: number;
  country_number: string;
};
export type ErrorResponse = {
  data?: unknown;
  status?: number;
  statusText: string;
  message?: string;
};