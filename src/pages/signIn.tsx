import { useState } from "react";
import { Link } from "react-router";

function SignIn() {
  // variables
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  // function to handle sign in
  const handleSubmit = (e: any) => {
    e.preventDefault();

    console.log("handle submit in sign in", userName, password);
  };

  return (
    <section className="w-[80%] mx-auto mt-4 text-purple-950">
      <h1 className="text-3xl text-center py-2 font-bold">
        Explore the Amazing Blogs!
      </h1>
      <div className="home-hr-style mb-6">
        <hr />
      </div>

      <p className="text-lg text-center mb-10">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br /> Ab,
        optio. Temporibus consequuntur repellendus accusamus exercitationem{" "}
        <br /> delectus veniam facere dicta expedita quibusdam reprehenderit
        libero in, <br />
        autem repudiandae ipsam quasi, recusandae dolores.
      </p>

      <form
        className="flex justify-center content-center flex-col w-[600px] mx-auto mb-10"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="userName"
          placeholder="Username"
          className="text-lg p-2 border-2 border-purple-950 rounded-md mb-3 text-purple-950 outline-purple-900"
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="text-lg p-2 border-2 border-purple-950 rounded-md mb-5 text-purple-950 outline-purple-900"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="submit"
          value="Sign In"
          className="bg-purple-950 text-white py-2 px-6 text-lg rounded-md cursor-pointer"
        />
      </form>

      <div className="flex justify-center align-center">
        <p className="text-lg mx-1">Don't have an account?</p>
        <Link
          to="/sign-up"
          className="text-purple-950 text-lg italic underline mx-1"
        >
          Create a Free Account
        </Link>
      </div>
    </section>
  );
}

export default SignIn;
