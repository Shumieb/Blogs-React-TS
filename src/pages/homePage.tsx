import BlogsList from "../components/blogsList";
import FeaturedList from "../components/featuredList";
import HomeHero from "../components/homeHero";
import NewsLetterSignUp from "../components/newsLetterSignUp";

function HomePage() {
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
