import { useState } from "react";

function NewsLetterSignUp() {
  // variables
  const [email, setEmail] = useState("");

  // function to handle submit
  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (email.trim().length < 3) {
      return;
    }

    // TODO: Add functionality to add to mailing list
    console.log("Add to mailing list", email);

    //reset values
    setEmail("");
  };

  return (
    <section className="text-center py-3 px-2 mt-1 mb-4 mx-auto bg-purple-100 shadow-md rounded">
      <h2 className="py-1 px-2 text-2xl text-purple-950 font-bold">
        Sign up to our Newsletter
      </h2>
      <p className="py-1 text-lg text-purple-950 mb-2 w-[60%] mx-auto">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque quasi
        consequuntur corrupti. Inventore non corporis est perspiciatis cum
        libero numquam, repudiandae voluptates reiciendis voluptatem sapiente.
      </p>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex flex-col justify-center align-center mx-auto w-[600px]"
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
          className="block bg-purple-950 text-white text-lg text-center py-2 px-4 rounded shadow-md hover:shadow-xl my-4 cursor-pointer"
        />
      </form>
    </section>
  );
}

export default NewsLetterSignUp;
