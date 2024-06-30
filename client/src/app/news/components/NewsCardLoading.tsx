import { Skeleton } from "@nextui-org/skeleton";
const NewsCardLoading = () => {
  return (
    <figure className="w-[300px] relative overflow-hidden rounded-md dark:bg-background/70  backdrop-saturate-150">
      <Skeleton className="w-[300px] h-[216px]" />
      <figcaption className="p-5">
        <Skeleton className="w-full h-[56px] mb-2 rounded-md " />
        <Skeleton className="w-full h-[60px] mb-2 rounded-md " />
        <Skeleton className="w-[123px] bg-indigo-600 h-[36px] mb-2 rounded-md " />
      </figcaption>
    </figure>
  );
};
export default NewsCardLoading;