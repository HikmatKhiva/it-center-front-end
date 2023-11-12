import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_ID,
  dataset: "production",
  apiVersion: "2022-03-10",
  useCdn: true,
  ignoreBrowserTokenWarning: true,
  token: import.meta.env.VITE_SANITY_TOKEN,
});
const builder = imageUrlBuilder(client);
export const urlFor = (source: any) => builder.image(source);