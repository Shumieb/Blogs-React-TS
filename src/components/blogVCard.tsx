import { useEffect, useState } from "react";
import type { blogType } from "../utils/entityTypes";

interface PropTypes {
  blog: blogType;
}

function BlogVCard({ blog }: PropTypes) {
  // variables
  const [blogAuthor, setBlogAuthor] = useState("");

  useEffect(() => {}, [blog]);

  return (
    <div className="bg-gray-50 text-purple-950 shadow-md hover:shadow-lg rounded-md">
      <div className="h-50 rounded-md">
        <img
          className="object-cover  w-full h-full rounded-tl-md rounded-tr-md shadow-md mx-auto"
          src="https://images.pexels.com/photos/36490984/pexels-photo-36490984.jpeg"
          alt="placeholder image"
        />
      </div>
      <div className="py-2 px-2">
        <h2 className="text-xl font-bold text-center pt-1">{blog.title}</h2>
        <p className="text-lg text-center pb-1 text-gray-600 capitalize">
          by {blog.userId}
        </p>
        <p className="text-lg px-2 py-2">{blog.description}</p>
      </div>
    </div>
  );
}

export default BlogVCard;
