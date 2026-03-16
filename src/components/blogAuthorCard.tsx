import { Link } from "react-router";
import type { blogType } from "../utils/entityTypes";
import { FaPenToSquare, FaTrashCan } from "react-icons/fa6";
import { capitalizeFirstLetter } from "../utils/helperFunctions";

interface PropTypes {
  blog: blogType;
}

function BlogAuthorCard({ blog }: PropTypes) {
  return (
    <div className="flex justify-between bg-purple-50 text-purple-950 shadow-md hover:shadow-lg rounded-md mb-4">
      <div className="rounded-md w-[40%] pt-2 pb-2 overflow-hidden h-[100%] px-2">
        <img
          className="object-cover w-full h-80 rounded-md shadow-md mx-auto"
          src="https://images.pexels.com/photos/36490984/pexels-photo-36490984.jpeg"
          alt="placeholder image"
        />
      </div>
      <div className="flex flex-col justify-between pt-2 pb-4 px-2 w-[60%]">
        <div className="py-2 px-2">
          <h2 className="text-2xl pt-1 px-2 font-bold">
            {capitalizeFirstLetter(blog.title)}
          </h2>
          <p className="text-lg text-gray-600 capitalize px-2">
            Published: Jan 2026
          </p>
          <p className="text-lg text-gray-600 capitalize px-2">
            Likes: {blog.likes}
          </p>
          <p className="text-lg pb-1 text-gray-600 capitalize px-2">
            Category: {blog.categoryName}
          </p>
          <p className="text-lg px-2 py-2 text-purple-900 mb-6">
            {blog.description.slice(0, 300)}
            {blog.description.length > 300 ? "...." : ""}
          </p>
        </div>
        <div className="px-4 flex justify-between align-center">
          <div>
            <Link
              to={`/blogs/${blog.blogId}`}
              className="bg-purple-950 text-white text-lg text-center py-2 px-4 rounded-md shadow-md hover:shadow-xl me-3"
            >
              Read More
            </Link>
          </div>
          <div className="flex justify-end align-center">
            <Link
              to={`/edit-blog/${blog.blogId}`}
              className="me-2 text-2xl text-green-950 pt-2"
            >
              <FaPenToSquare />
            </Link>
            <Link
              to={`/delete-blog/${blog.blogId}`}
              className="text-2xl text-red-950 pt-2"
            >
              <FaTrashCan />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogAuthorCard;
