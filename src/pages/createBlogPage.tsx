import { useEffect, useState } from "react";
import type { blogType, categoryType, userType } from "../utils/entityTypes";
import useUsersStore from "../stores/userStore";
import useCategoriesStore from "../stores/categoriesStore";
import { useNavigate, useParams } from "react-router";
import { FaRegSquare, FaSquareCheck } from "react-icons/fa6";
import FormLabel from "../components/formLabel";
import FormTextInput from "../components/FormTextInput";
import FormTextArea from "../components/formTextArea";
import useBlogsStore from "../stores/blogsStore";
import SubmitBtn from "../components/submitBtn";
import CancelBtn from "../components/cancelBtn";

function CreateBlogPage() {
  //variables
  const [blogTitle, setBlogTitle] = useState("");
  const [blogDescription, setBlogDescription] = useState("");
  const [blogContent, setBlogContent] = useState("");
  const [blogImage, setBlogImage] = useState("");
  const [blogFeatured, setBlogFeatured] = useState(false);
  const [blogCategoryId, setBlogCategoryId] = useState(0);
  const [author, setAuthor] = useState<userType | undefined>();
  const [categories, setCategories] = useState<categoryType[] | []>([]);
  const [error, serError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("This is an error");

  // params
  const { userId } = useParams();

  let navigate = useNavigate();

  // store
  const { getAuthorById } = useUsersStore();
  const { initializeCategories } = useCategoriesStore();
  const { addNewBlog } = useBlogsStore();

  // run on first render
  useEffect(() => {
    getAllData();
  }, []);

  // get authors and categories
  const getAllData = async () => {
    // get author
    if (userId) {
      let dbAuthor = await getAuthorById(Number(userId));
      dbAuthor && setAuthor(dbAuthor);
    }

    // get categories
    let dbCategories = await initializeCategories();
    dbCategories && setCategories(dbCategories);
  };

  // handle form submit
  const handleFormSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (blogTitle.length < 3) {
      setErrorMsg("Please enter a Title.");
      serError(true);
      return;
    }

    if (blogDescription.length < 10) {
      setErrorMsg("Please enter a Summary.");
      serError(true);
      return;
    }

    if (blogContent.length < 20) {
      setErrorMsg("Please enter Content.");
      serError(true);
      return;
    }

    let newCategory: categoryType | undefined;
    let imageUrl: string = "";

    if (blogCategoryId == 0) {
      setErrorMsg("Please select a Category.");
      serError(true);
      return;
    } else {
      newCategory = categories.find(
        (category) => category.categoryId == blogCategoryId,
      );
    }

    if (blogImage.length < 1) {
      newCategory ? (imageUrl = newCategory.image) : "";
    } else {
      imageUrl = blogImage;
    }

    if (!author || !newCategory || !userId) return;

    let newBlog = {
      blogId: 0,
      title: blogTitle,
      description: blogDescription,
      content: blogContent,
      image: imageUrl,
      featured: blogFeatured,
      userId: Number(userId),
      userName: author.name,
      categoryId: blogCategoryId,
      categoryName: newCategory.name,
      likes: 0,
    };

    // add to state and database
    await addCreatedBlog(newBlog);

    // reset state
    ResetError();
    setBlogTitle("");
    setBlogDescription("");
    setBlogContent("");
    setBlogImage("");
    setBlogFeatured(false);
    setBlogCategoryId(0);

    // redirect to author's page
    navigate(`/user-dashboard/${userId}`);
  };

  // add to state and database
  const addCreatedBlog = async (newBlog: blogType) => {
    await addNewBlog(newBlog);
  };

  // reset error
  const ResetError = () => {
    serError(false);
    setErrorMsg("");
  };

  return (
    <section className="w-[90%] px-4 py-4 mx-auto">
      <h2 className="text-center text-purple-950 text-2xl py-2 px-2 mb-4 font-bold underline">
        Create New
      </h2>
      <form
        onSubmit={(e) => handleFormSubmit(e)}
        className="w-[60%] mx-auto py-2 px-2"
      >
        {/* title */}
        <div className="py-1 mb-1">
          <FormLabel forTxt="title" labelText="Title:" />
          <p className="text-gray-600 italic px-2">
            A title must be at least 4 characters long
          </p>
          <FormTextInput
            name="title"
            inputValue={blogTitle}
            handleChange={setBlogTitle}
          />
        </div>

        {/* description */}
        <div className="py-1 mb-1">
          <FormLabel forTxt="description" labelText="Summary:" />
          <p className="text-gray-600 italic px-2">
            A summary must be at least 10 characters long
          </p>
          <FormTextArea
            name="description"
            inputValue={blogDescription}
            handleChange={setBlogDescription}
            rowNum={5}
          />
        </div>

        {/* content*/}
        <div className="py-1 mb-1">
          <FormLabel forTxt="content" labelText="Content:" />
          <p className="text-gray-600 italic px-2">
            Content must be at least 20 characters long
          </p>
          <FormTextArea
            name="content"
            inputValue={blogContent}
            handleChange={setBlogContent}
            rowNum={10}
          />
        </div>

        {/* imageUrl */}
        <div className="py-1 mb-1">
          <FormLabel forTxt="imageUrl" labelText="ImageUrl:" />
          <p className="text-gray-600 italic px-2">
            If this field if not filled a default image for the category will be
            used
          </p>
          <FormTextInput
            name="imageUrl"
            inputValue={blogImage}
            handleChange={setBlogImage}
          />
        </div>

        {/* categories */}
        <div className="grid grid-cols-2 gap-2 mt-4 mb-6">
          <div className="py-1">
            <select
              value={blogCategoryId}
              onChange={(e) => setBlogCategoryId(Number(e.target.value))}
              className="border-2 border-purple-950 text-lg py-1 px-2 rounded outline-none bg-purple-950 text-white capitalize w-[80%] cursor-pointer"
            >
              <option value={0}>Select Category</option>
              {categories &&
                categories.map((category: categoryType) => {
                  return (
                    <option
                      value={category.categoryId}
                      key={category.categoryId}
                    >
                      {category.name}
                    </option>
                  );
                })}
            </select>
          </div>

          {/* featured */}
          <div className=" flex align-center">
            <FormLabel forTxt="featured" labelText="Feature:" />
            <div className=" flex align-center">
              {blogFeatured ? (
                <p
                  onClick={() => setBlogFeatured(false)}
                  className="border-purple-950 text-purple-950 text-3xl mt-2 mx-2 font-bold cursor-pointer"
                >
                  <FaSquareCheck />
                </p>
              ) : (
                <p
                  onClick={() => setBlogFeatured(true)}
                  className="border-purple-950 text-purple-950 text-3xl mt-2  mx-2 font-bold cursor-pointer"
                >
                  <FaRegSquare />
                </p>
              )}
            </div>
          </div>
        </div>

        {/* error */}
        {error && (
          <p className="text-red-950 text-lg text-center font-bold">
            {errorMsg}
          </p>
        )}

        {/* action buttons */}
        <div className="py-1 mb-2 mt-8 flex justify-center align-center">
          <SubmitBtn valueTxt="Create Blog" />
          <CancelBtn backLink={`/user-dashboard/${userId}`} linkTxt="Cancel" />
        </div>
      </form>
    </section>
  );
}

export default CreateBlogPage;
