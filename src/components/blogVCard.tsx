import { useEffect, useState } from "react";
import type { blogType } from "../utils/entityTypes";
import { Link } from "react-router";
import useUsersStore from "../stores/userStore";

interface PropTypes {
  blog: blogType;
}

function BlogVCard({ blog }: PropTypes) {
  // variables
  const [blogAuthor, setBlogAuthor] = useState("");

  // store
  const { getAuthorById } = useUsersStore();

  // run when blog changes
  useEffect(() => {
    getAuthorName();
  }, [blog]);

  // getAuthor Name
  const getAuthorName = async () => {
    let author = await getAuthorById(blog.userId);
    author && setBlogAuthor(author.name);
  };

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
        <h2 className="text-xl pt-1 px-2">{blog.title}</h2>
        <p className="text-lg pb-1 text-gray-600 capitalize px-2">
          by {blogAuthor}
        </p>
        <p className="text-lg px-2 py-2 text-purple-900">{blog.description}</p>
      </div>
      <div className="py-2 px-4 mb-4">
        <Link
          to={`/blogs/${blog.blogId}`}
          className="bg-purple-950 text-white text-lg text-center py-2 px-4 rounded-md shadow-md hover:shadow-xl"
        >
          Read More
        </Link>
      </div>
    </div>
  );
}

export default BlogVCard;
