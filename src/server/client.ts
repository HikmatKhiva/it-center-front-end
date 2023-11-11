import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { Type_Source } from "../types/types";
export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_ID,
  dataset: "production",
  apiVersion: "2022-03-10",
  useCdn: true,
  ignoreBrowserTokenWarning: true,
  token: import.meta.env.VITE_SANITY_TOKEN,
});
const builder = imageUrlBuilder(client);
export const urlFor = (source: Type_Source) => builder.image(source);
