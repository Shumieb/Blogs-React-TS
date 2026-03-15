import { useEffect, useState } from "react";
import BlogAuthorCard from "../components/blogAuthorCard";
import { FaPen } from "react-icons/fa6";
import type { blogType } from "../utils/entityTypes";
import { Link, useParams } from "react-router";
import useBlogsStore from "../stores/blogsStore";

function UserDashBoardPage() {
  // variables
  const [userblogs, setUserBlogs] = useState<blogType[] | []>([]);

  // params
  const { userId } = useParams();

  // store
  const { getBlogByAuthorId, blogs } = useBlogsStore();

  // runs when param changes
  useEffect(() => {
    if (userId) {
      getBlog();
    }
  }, [blogs]);

  // get blog data
  const getBlog = async () => {
    let foundBlogs = await getBlogByAuthorId(Number(userId));
    foundBlogs && setUserBlogs(foundBlogs);
  };

  return (
    <section className="w-[90%] mx-auto mt-6 text-purple-950">
      <div>
        <img
          className="object-cover w-50 h-50 rounded-full shadow-md mx-auto"
          src="https://images.pexels.com/photos/57905/pexels-photo-57905.jpeg"
          alt="user image"
        />
        <div className="text-center py-2 px-2 flex justify-center align-center">
          <button className="text-lg cursor-pointer bg-purple-400 py-2 px-2 rounded-full shadow-md hover:shadow-lg">
            <FaPen />
          </button>
          <p className="ms-2 text-xl px-2 pt-1">UserName</p>
        </div>
        <p className="text-lg text-center text-gray-700">
          {userblogs.length} Published Blogs
        </p>
      </div>
      <div>
        <div className="flex justify-between align-end my-6">
          <h2 className="text-2xl font-bold">My Blogs</h2>
          <div>
            <Link
              to={`/create-blog/${userId}`}
              className="bg-purple-950 text-white text-lg text-center py-2 px-4 rounded-md shadow-md hover:shadow-xl"
            >
              Create New Blog
            </Link>
          </div>
        </div>

        <div className="">
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
