import { useState } from "react";
import { Link } from "react-router";
import FormTextInput from "../components/formTextInput";
import FormPasswordInput from "../components/formPasswordInput";

function SignInPage() {
  // variables
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, serError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("This is an error");

  // function to handle sign in
  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (userName.trim().length < 3) {
      setErrorMsg("Please enter a UserName.");
      serError(true);
      return;
    }

    if (password.trim().length < 3) {
      setErrorMsg("Please enter a Password.");
      serError(true);
      return;
    }

    // TODO: send data to backend and log user in
    console.log("handle submit in sign in", userName, password);

    // reset state
    ResetError();
    setUserName("");
    setPassword("");
  };

  // reset error
  const ResetError = () => {
    serError(false);
    setErrorMsg("");
  };

  return (
    <section className="w-[80%] mx-auto mt-4 text-purple-950">
      <h1 className="text-3xl text-center py-2 font-bold">
        Sign In to Amazing Blogs!
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
        <div className="mb-3">
          <FormTextInput
            name="userName"
            placeHolder="Username"
            inputValue={userName}
            handleChange={setUserName}
          />
        </div>

        <div className="mb-3">
          <FormPasswordInput
            name="password"
            placeHolder="Password"
            inputValue={password}
            handleChange={setPassword}
          />
        </div>

        {/* error */}
        {error && (
          <p className="text-red-950 text-lg text-center font-bold pt-2">
            {errorMsg}
          </p>
        )}

        <input
          type="submit"
          value="Sign In"
          className="bg-purple-950 text-white py-2 px-6 text-lg rounded-md cursor-pointer mt-4"
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

export default SignInPage;
