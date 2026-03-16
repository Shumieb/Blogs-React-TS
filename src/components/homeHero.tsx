import SocialsLinks from "./socialsLinks";

function HomeHero() {
  return (
    <section className="bg-purple-50 rounded-md shadow mb-4 py-2">
      <div className="grid grid-cols-2 gap-2 w-[90%] mx-auto pt-6">
        <div className="flex flex-col justify-center align-center py-4 px-4">
          <h1 className="text-2xl text-purple-950 font-bold">Amazing Blogs</h1>
          <p className="text-lg text-gray-600 mb-3">by Shumie</p>
          <p className="text-lg mb-4 text-purple-900">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            quisquam suscipit ab architecto quas, in placeat explicabo eum iusto
            labore. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Magni quisquam suscipit ab architecto quas, in placeat explicabo eum
            iusto labore.
          </p>
          <div className="flex justify-start align-center">
            <SocialsLinks />
          </div>
        </div>
        <div className="w-[100%] h-[50vh] rounded-md">
          <img
            className="object-cover  w-[90%] h-[90%] rounded-md shadow-md mx-auto"
            src="https://images.pexels.com/photos/36308107/pexels-photo-36308107.jpeg"
            alt="hero picture"
          />
        </div>
      </div>
    </section>
  );
}

export default HomeHero;
