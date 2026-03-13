import { useEffect } from "react";
import BlogsList from "../components/blogsList";
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
      <BlogsList />
    </div>
  );
}

export default HomePage;
