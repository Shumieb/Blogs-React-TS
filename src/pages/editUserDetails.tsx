import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import useUsersStore from "../stores/userStore";
import FormLabel from "../components/formLabel";
import FormTextInput from "../components/FormTextInput";
import FormTextArea from "../components/formTextArea";
import SubmitBtn from "../components/submitBtn";
import CancelBtn from "../components/cancelBtn";
import type { userType } from "../utils/entityTypes";

function EditUserDetails() {
  //variables
  const [userToEdit, setUserToEdit] = useState<userType>();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [userImage, setUserImage] = useState("");
  const [userBiograpgy, setUserBiography] = useState("");
  const [error, serError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("This is an error");

  // params
  const { userId } = useParams();

  let navigate = useNavigate();

  // store
  const { getAuthorById, updateAuthorDetails } = useUsersStore();

  // run on first render
  useEffect(() => {
    // get user
    getUserData();
  }, []);

  // get user data
  const getUserData = async () => {
    // get user data
    if (!userId) return;
    let user = await getAuthorById(Number(userId));

    if (user) {
      setUserToEdit(user);
      setUserName(user.userName);
      setUserImage(user.image);
      setUserBiography(user.biography);
    }
  };

  // handle form submit
  const handleFormSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (userName.trim().length < 3) {
      setErrorMsg("Please enter a user name.");
      serError(true);
      return;
    }

    if (password.trim().length < 3) {
      setErrorMsg("Please enter a password.");
      serError(true);
      return;
    }

    let imageUrl: string = "";

    if (userImage.trim().length < 1) {
      imageUrl = "default_user";
    } else {
      imageUrl = userImage.trim();
    }

    if (!userId || !userToEdit) return;

    let newUserDetails = {
      userId: Number(userId),
      name: userToEdit.name,
      userName: userName.trim(),
      biography: userBiograpgy.trim(),
      image: userImage.trim(),
      type: userToEdit.type.trim(),
    };

    // update state and database
    await updateAuthorDetails(newUserDetails);

    // reset state
    ResetError();

    // redirect to author's page
    navigate(`/user-dashboard/${userId}`);
  };

  // reset error
  const ResetError = () => {
    serError(false);
    setErrorMsg("");
  };

  return (
    <section className="w-[90%] px-4 py-4 mx-auto">
      <h2 className="text-center text-purple-950 text-2xl py-2 px-2 mb-4 font-bold underline">
        Edit Details
      </h2>
      <form
        onSubmit={(e) => handleFormSubmit(e)}
        className="w-[60%] mx-auto py-2 px-2"
      >
        {/* userName */}
        <div className="py-1 mb-1">
          <FormLabel forTxt="userName" labelText="UserName:" />
          <p className="text-gray-600 italic px-2">
            A name must be at least 4 characters long
          </p>
          <FormTextInput
            name="userName"
            inputValue={userName}
            handleChange={setUserName}
          />
        </div>

        {/* imageUrl */}
        <div className="py-1 mb-1">
          <FormLabel forTxt="imageUrl" labelText="ImageUrl:" />
          <p className="text-gray-600 italic px-2">
            If this field if not filled a default image will be used
          </p>
          <FormTextInput
            name="imageUrl"
            inputValue={userImage}
            handleChange={setUserImage}
          />
        </div>

        {/* biography */}
        <div className="py-1 mb-1">
          <FormLabel forTxt="biography" labelText="Biography:" />
          <FormTextArea
            name="biography"
            inputValue={userBiograpgy}
            handleChange={setUserBiography}
            rowNum={10}
          />
        </div>

        {/* password */}
        <div className="py-1 mb-4">
          <FormLabel forTxt="password" labelText="Password:" />
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            className="border-2 outline-purple-950 text-lg text-purple-950 py-1 px-2 rounded-md w-[100%]"
          />
        </div>

        {/* error */}
        {error && (
          <p className="text-red-950 text-lg text-center font-bold">
            {errorMsg}
          </p>
        )}

        {/* action buttons */}
        <div className="py-1 mb-2 mt-5 flex justify-center align-center">
          <SubmitBtn valueTxt="Update Details" />
          <CancelBtn backLink={`/user-dashboard/${userId}`} linkTxt="Cancel" />
        </div>
      </form>
    </section>
  );
}

export default EditUserDetails;
