import { useEffect } from "react";
import FeaturedList from "../components/featuredList";
import HomeHero from "../components/homeHero";
import NewsLetterSignUp from "../components/newsLetterSignUp";
import useBlogsStore from "../stores/blogsStore";

function HomePage() {
  // store
  const { initializeBlogs } = useBlogsStore();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await initializeBlogs();
  };

  return (
    <div>
      <HomeHero />
      <FeaturedList />
      <NewsLetterSignUp />
    </div>
  );
}

export default HomePage;
