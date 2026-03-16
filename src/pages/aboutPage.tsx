import ContactUsForm from "../components/contactUsForm";
import NewsLetterSignUp from "../components/newsLetterSignUp";
import SocialsLinks from "../components/socialsLinks";

function AboutPage() {
  return (
    <section>
      {/* about hero section */}
      <div className="bg-purple-100 py-10 px-4 text-purple-950 text-center">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="text-lg mx-auto w-[60%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
          corporis molestiae dolores, beatae non quos blanditiis cumque nulla
          neque accusantium aperiam fugiat, sit officia dolorum. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Dolor, corporis molestiae
          dolores, beatae non quos blanditiis cumque nulla neque accusantium
          aperiam fugiat, sit officia dolorum.
        </p>
        <div className="flex justify-center align-center mt-4">
          <SocialsLinks />
        </div>
      </div>

      {/* our vision section */}
      <div className="grid grid-cols-2 gap-4 px-2 mx-auto mt-12 w-[90%]">
        <div className="w-[100%] h-[50vh] rounded-md py-2 px-2">
          <img
            className="object-cover  w-[90%] h-[90%] rounded-md shadow-md mx-auto"
            src="https://images.pexels.com/photos/36308107/pexels-photo-36308107.jpeg"
            alt="hero picture"
          />
        </div>
        <div className="px-2 py-2">
          <h2 className="text-2xl font-bold text-purple-950 underline py-2">
            Our Vision
          </h2>
          <p className="text-lg py-2 text-purple-950">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Dignissimos et odit aliquam obcaecati eveniet architecto dolore quis
            maxime dolores. Inventore eaque repellat cum aut, tempora expedita
            ullam iste placeat ut, impedit deserunt est adipisci. Reiciendis
            similique sint vel hic pariatur. Enim voluptatibus praesentium esse
            soluta animi atque! Optio omnis mollitia delectus eum voluptatibus
            consectetur nihil pariatur ipsam, sequi, tempore sunt.
          </p>
        </div>
      </div>

      {/* about the creater section */}
      <div className="px-2 mx-auto mt-6 bg-purple-100 pt-6">
        <div className="grid grid-cols-2 gap-4 mx-auto w-[90%]">
          <div className="px-2 py-2">
            <h2 className="text-2xl font-bold text-purple-950 underline py-2">
              About the Creater
            </h2>
            <p className="text-lg py-2 text-purple-950">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Dignissimos et odit aliquam obcaecati eveniet architecto dolore
              quis maxime dolores. Inventore eaque repellat cum aut, tempora
              expedita ullam iste placeat ut, impedit deserunt est adipisci.
              Reiciendis similique sint vel hic pariatur. Enim voluptatibus
              praesentium esse soluta animi atque! Optio omnis mollitia delectus
              eum voluptatibus consectetur nihil pariatur ipsam, sequi, tempore
              sunt.
            </p>
          </div>
          <div className="w-[100%] h-[50vh] rounded-md py-2 px-2">
            <img
              className="object-cover  w-[90%] h-[90%] rounded-md shadow-md mx-auto"
              src="https://images.pexels.com/photos/36308107/pexels-photo-36308107.jpeg"
              alt="hero picture"
            />
          </div>
        </div>
      </div>

      {/* contact form */}
      <div className="mt-8 py-2 px-2 mx-auto">
        <ContactUsForm />
      </div>

      {/* newsletter */}
      <div className="mt-5 py-2 mb-2">
        <NewsLetterSignUp />
      </div>
    </section>
  );
}

export default AboutPage;
