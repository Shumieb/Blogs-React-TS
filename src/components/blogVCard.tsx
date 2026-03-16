import type { blogType } from "../utils/entityTypes";
import { Link } from "react-router";
import { capitalizeFirstLetter } from "../utils/helperFunctions";
import { FaThumbsUp } from "react-icons/fa6";

interface PropTypes {
  blog: blogType;
}

function BlogVCard({ blog }: PropTypes) {
  return (
    <div className="bg-gray-50 text-purple-950 shadow-md hover:shadow-lg rounded-md">
      <div className="h-50 rounded-md relative">
        <img
          className="object-cover  w-full h-full rounded-tl-md rounded-tr-md shadow-md mx-auto"
          src="https://images.pexels.com/photos/36490984/pexels-photo-36490984.jpeg"
          alt="placeholder image"
        />
        <p className="text-lg bg-gray-100 capitalize px-2 py-2 flex align-center shadow-md text-purple-950 rounded-full absolute bottom-1 right-1">
          <span className="pe-1 pt-1">
            <FaThumbsUp />
          </span>
          {blog.likes}
        </p>
        <p className="text-lg bg-gray-100 capitalize px-2 py-1 flex align-center shadow-md text-purple-950 rounded-md absolute top-1 left-1">
          {blog.categoryName}
        </p>
      </div>
      <div>
        <div className="py-2 px-2">
          <h2 className="text-xl pt-1 px-2">
            {capitalizeFirstLetter(blog.title)}
          </h2>
          <p className="text-lg pb-1 text-gray-600 capitalize px-2">
            by {blog.userName}
          </p>
        </div>

        <p className="text-lg px-4 py-2 text-purple-900 mb-4">
          {blog.description.slice(0, 250)}
          {blog.description.length > 250 ? "...." : ""}
        </p>

        <div className="py-2 px-4 mb-4 text-end">
          <Link
            to={`/blogs/${blog.blogId}`}
            className="bg-purple-950 text-white text-lg text-center py-2 px-4 rounded-md shadow-md hover:shadow-xl"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogVCard;
