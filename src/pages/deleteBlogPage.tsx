import SubmitBtn from "../components/submitBtn";
import CancelBtn from "../components/cancelBtn";
import { useEffect, useState } from "react";
import type { blogType } from "../utils/entityTypes";
import { useNavigate, useParams } from "react-router";
import useBlogsStore from "../stores/blogsStore";
import { capitalizeFirstLetter } from "../utils/helperFunctions";

function DeleteBlogPage() {
  //variables
  const [blogToDelete, setBlogToDelete] = useState<blogType>();

  // params
  const { blogId } = useParams();

  let navigate = useNavigate();

  // store
  const { getBlogById, deleteBlog } = useBlogsStore();

  // run on first render
  useEffect(() => {
    // get blogs
    getBlogData();
  }, []);

  // get blog data
  const getBlogData = async () => {
    // get blog data
    if (!blogId) return;
    let blog = await getBlogById(Number(blogId));

    if (blog) {
      setBlogToDelete(blog);
    }
  };

  // handle form submit
  const handleFormSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!blogToDelete) return;

    // delete from state and database
    await deleteBlog(blogToDelete.userId, blogToDelete.blogId);

    // redirect to author's page
    navigate(`/user-dashboard/${blogToDelete.userId}`);
  };

  if (!blogToDelete) {
    return <p>Loading.......</p>;
  }

  return (
    <section className="w-[90%] px-4 py-4 mx-auto">
      <h2 className="text-center text-purple-950 text-2xl py-2 px-2 mb-4 font-bold underline">
        Delete Blog
      </h2>
      <form
        onSubmit={(e) => handleFormSubmit(e)}
        className="text-lg text-purple-950 py-2 px-2 w-[70%] mx-auto"
      >
        <p className="text-xl font-bold text-center mb-2">
          Are you sure you want to delete the following blog?
        </p>
        <p>
          <b>Title: </b>
          {capitalizeFirstLetter(blogToDelete.title)}
        </p>
        <p className="capitalize">
          <b>Category: </b>
          {blogToDelete.categoryName}
        </p>
        <p className="pb-2">
          <b>Likes: </b>
          {blogToDelete.likes}
        </p>
        <p>
          <b>Summary: </b> {blogToDelete.description}
        </p>
        {/* action buttons */}
        <div className="py-1 mb-2 mt-10 flex justify-center align-center">
          <SubmitBtn valueTxt="Delete Blog" />
          <CancelBtn
            backLink={`/user-dashboard/${blogToDelete.userId}`}
            linkTxt="Cancel"
          />
        </div>
      </form>
    </section>
  );
}

export default DeleteBlogPage;
