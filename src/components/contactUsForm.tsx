import { useState } from "react";
import FormLabel from "./formLabel";
import FormTextInput from "./formTextInput";
import FormTextArea from "./formTextArea";
import SubmitBtn from "./submitBtn";

function ContactUsForm() {
  // variables
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [error, serError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("This is an error");

  // handle form submit
  const handleFormSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (name.trim().length < 3) {
      setErrorMsg("Please enter a Name.");
      serError(true);
      return;
    }

    if (message.trim().length < 3) {
      setErrorMsg("Please enter a Message.");
      serError(true);
      return;
    }

    //TODO: Add to database
    console.log("Contact us", name, message);

    // reset
    ResetError();
    setName("");
    setMessage("");
  };

  // reset error
  const ResetError = () => {
    serError(false);
    setErrorMsg("");
  };

  return (
    <div className="text-purple-950 rounded-md w-[70%] mx-auto py-4 px-2 bg-purple-100">
      <h2 className="text-2xl font-bold underline mb-3 mt-3 text-center">
        Contact Us
      </h2>
      <p className="text-lg px-2 w-[80%] mx-auto text-center">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis,
        possimus labore! Quae officiis id beatae? Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. Reiciendis, possimus labore! Quae officiis
        id beatae?
      </p>

      <form
        onSubmit={(e) => handleFormSubmit(e)}
        className="py-2 px-2 w-[80%] mx-auto"
      >
        {/* name */}
        <div className="mb-2 pt-1 px-2">
          <FormLabel forTxt="name" labelText="Name:" />
          <FormTextInput name="name" inputValue={name} handleChange={setName} />
        </div>

        {/* message */}
        <div className="mb-2 pt-1 px-2">
          <FormLabel forTxt="message" labelText="Message:" />
          <FormTextArea
            name="message"
            inputValue={message}
            handleChange={setMessage}
            rowNum={4}
          />
        </div>

        {/* error */}
        {error && (
          <p className="text-red-950 text-lg text-center font-bold pt-4">
            {errorMsg}
          </p>
        )}

        {/* action buttons */}
        <div className="py-1 mb-2 mt-6 flex justify-center align-center">
          <SubmitBtn valueTxt="Send Message" />
        </div>
      </form>
    </div>
  );
}

export default ContactUsForm;
