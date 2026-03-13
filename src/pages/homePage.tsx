import { useEffect } from "react";
import FeaturedList from "../components/featuredList";
import HomeHero from "../components/homeHero";
import NewsLetterSignUp from "../components/newsLetterSignUp";
import useBlogsStore from "../stores/blogsStore";
import useUsersStore from "../stores/userStore";

function HomePage() {
  // store
  const { initializeBlogs } = useBlogsStore();
  const { initializeAuthors } = useUsersStore();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await initializeBlogs();
    await initializeAuthors();
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
