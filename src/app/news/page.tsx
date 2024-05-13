import { HeroHighlight } from "@/components/ui/hero-highlight";
import NewsCard from "./components/NewsCard";
// import NewsCardLoading from "./components/NewsCardLoading";
const NewsPage = () => {
  return (
    <main>
      <HeroHighlight className="min-h-screen">
        <section>
          <div className="container mx-auto">
            <div className="flex gap-5 pt-5 flex-wrap md:justify-start justify-center">
              <NewsCard />
              <NewsCard />
              <NewsCard />
              <NewsCard />
              <NewsCard />
            </div>
          </div>
        </section>
      </HeroHighlight>
    </main>
  );
};
export default NewsPage;
