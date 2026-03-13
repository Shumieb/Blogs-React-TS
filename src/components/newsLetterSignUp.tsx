import { useState } from "react";

function NewsLetterSignUp() {
  // variables
  const [email, setEmail] = useState("");

  // function to handle submit
  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Add functionality to add to mailing list
    console.log("Add to mailing list");
  };

  return (
    <section className="text-center w-[90%] py-3 px-2 mt-1 mb-4 mx-auto bg-purple-100 shadow-md rounded">
      <h2 className="py-2 px-2 text-2xl text-purple-950 font-bold mb-2">
        Don't miss any Amazing Blogs. Sign up to our Newsletter
      </h2>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex flex-col justify-center align-center mx-auto w-[620px]"
      >
        <input
          type="email"
          name="email"
          placeholder="email address"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className="block outline-none border-2 border-purple-950 rounded py-1 px-2 text-lg"
        />
        <input
          type="submit"
          value="Sign Up"
          className="block bg-purple-950 text-white text-lg text-center py-2 px-4 rounded shadow-md hover:shadow-xl my-4"
        />
      </form>
    </section>
  );
}

export default NewsLetterSignUp;
