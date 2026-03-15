import { Link } from "react-router";
import type { blogType } from "../utils/entityTypes";

interface PropTypes {
  blog: blogType;
}

function BlogAuthorCard({ blog }: PropTypes) {
  return (
    <div className=" grid grid-cols-3 bg-purple-50 text-purple-950 shadow-md hover:shadow-lg rounded-md mb-4">
      <div className="h-60 rounded-md col-span-1">
        <img
          className="object-cover w-full h-full rounded shadow-md mx-auto"
          src="https://images.pexels.com/photos/36490984/pexels-photo-36490984.jpeg"
          alt="placeholder image"
        />
      </div>
      <div className="col-span-2 flex flex-col justify-between">
        <div className="py-2 px-2">
          <h2 className="text-xl pt-1 px-2">{blog.title}</h2>
          <p className="text-lg text-gray-600 capitalize px-2">
            Published: Jan 2026
          </p>
          <p className="text-lg pb-1 text-gray-600 capitalize px-2">
            Likes: {blog.likes}
          </p>
          <p className="text-lg px-2 py-2 text-purple-900">
            {blog.description}
          </p>
        </div>
        <div className="py-2 px-4 mb-4">
          <Link
            to={`/blogs/${blog.blogId}`}
            className="bg-purple-950 text-white text-lg text-center py-2 px-4 rounded-md shadow-md hover:shadow-xl me-3"
          >
            Read More
          </Link>
          <Link
            to={`/edit-blog/${blog.blogId}`}
            className="bg-purple-950 text-white text-lg text-center py-2 px-4 rounded-md shadow-md hover:shadow-xl me-3"
          >
            Edit Blog
          </Link>
          <Link
            to={`/delete-blog/${blog.blogId}`}
            className="bg-purple-950 text-white text-lg text-center py-2 px-4 rounded-md shadow-md hover:shadow-xl me-3"
          >
            Delete Blog
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogAuthorCard;
