import { useEffect, useState } from "react";
import BlogAuthorCard from "../components/blogAuthorCard";
import { FaPen } from "react-icons/fa6";
import type { blogType, userType } from "../utils/entityTypes";
import { Link, useParams } from "react-router";
import useBlogsStore from "../stores/blogsStore";
import useUsersStore from "../stores/userStore";

function UserDashBoardPage() {
  // variables
  const [userblogs, setUserBlogs] = useState<blogType[] | []>([]);
  const [author, setAuthor] = useState<userType>();

  // params
  const { userId } = useParams();

  // store
  const { getBlogByAuthorId, blogs } = useBlogsStore();
  const { getAuthorById } = useUsersStore();

  // runs when param changes
  useEffect(() => {
    if (!userId) return;
    getAuthor();
  }, [userId]);

  // runs when param changes
  useEffect(() => {
    if (!userId) return;
    getBlog();
  }, [blogs]);

  // get blog data
  const getBlog = async () => {
    let foundBlogs = await getBlogByAuthorId(Number(userId));
    foundBlogs && setUserBlogs(foundBlogs);
  };

  // get aurhor data
  const getAuthor = async () => {
    let foundAuthor = await getAuthorById(Number(userId));
    foundAuthor && setAuthor(foundAuthor);
  };

  // loading
  if (!userId) {
    return <p>Loading....</p>;
  }

  // loading
  if (!author) {
    return <p>Loading....</p>;
  }

  return (
    <section className="w-[90%] mx-auto mt-6 text-purple-950">
      <div>
        <img
          className="object-cover w-50 h-50 rounded-full shadow-md mx-auto"
          src="https://images.pexels.com/photos/57905/pexels-photo-57905.jpeg"
          alt="user image"
        />
        <div className="text-center py-2 px-2 flex justify-center align-center ">
          <p className="ms-2 text-xl px-2 pt-1 relative capitalize">
            {author.userName}
            <span>
              <Link
                to={`/edit-user-details/${userId}`}
                className="text-lg cursor-pointer text-gray-200 bg-gray-700 py-2 px-2 rounded-full absolute -top-10 -right-4"
              >
                <FaPen />
              </Link>
            </span>
          </p>
        </div>
        <p className="text-lg text-center text-gray-700">
          {userblogs.length} Published Blogs
        </p>
      </div>
      <div>
        <div className="my-8">
          <p className="text-2xl font-bold underline">Biography </p>
          <p className="text-lg  text-purple-950">{author.biography}</p>
        </div>
        <div className="userHrContainer">
          <hr />
        </div>
        <div className="flex justify-between align-end my-6">
          <h2 className="text-2xl font-bold underline">My Blogs</h2>
          <div>
            <Link
              to={`/create-blog/${userId}`}
              className="bg-purple-950 text-white text-lg text-center py-2 px-4 rounded-md shadow-md hover:shadow-xl"
            >
              Create New Blog
            </Link>
          </div>
        </div>
        <div>
          {userblogs &&
            userblogs.map((blog) => {
              return <BlogAuthorCard blog={blog} key={blog.blogId} />;
            })}
        </div>
      </div>
    </section>
  );
}

export default UserDashBoardPage;
