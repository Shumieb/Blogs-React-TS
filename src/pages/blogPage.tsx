import { useEffect, useState } from "react";
import NewsLetterSignUp from "../components/newsLetterSignUp";

import type { blogType } from "../utils/entityTypes";
import { useParams } from "react-router";
import useBlogsStore from "../stores/blogsStore";
import LikeButton from "../components/likeButton";

function BlogPage() {
  //variable
  const [blog, setBlog] = useState<blogType>();

  // get param
  const { blogId } = useParams();

  // store
  const { getBlogById, blogs } = useBlogsStore();

  // runs when param changes
  useEffect(() => {
    if (blogId) {
      getBlog();
    }
  }, [blogId, blogs]);

  // get blog data
  const getBlog = async () => {
    let foundBlog = await getBlogById(Number(blogId));
    foundBlog && setBlog(foundBlog);
  };

  // TODO: Redirect when blog does not exist
  if (!blog) {
    return (
      <div>
        <p>Loading....</p>
      </div>
    );
  }

  return (
    <section className="w-[90%] px-4 py-4 mx-auto">
      <div className="grid grid-cols-2 gap-2 mx-auto shadow-md bg-purple-50 rounded-md mb-6">
        <div className="w-[100%] h-[50vh] rounded-md">
          <img
            className="object-cover  w-full h-full rounded-md rounded-md shadow-md mx-auto"
            src="https://images.pexels.com/photos/36308107/pexels-photo-36308107.jpeg"
            alt="blog picture"
          />
        </div>
        <div className="py-6 px-4 flex flex-col justify-between align-center">
          <div>
            <h2 className="text-2xl text-purple-950 font-bold">{blog.title}</h2>
            <p className="text-lg mb-4 text-gray-600 capitalize">
              Category: {blog.categoryName}
            </p>
            <p className="text-lg mb-4 text-purple-900">
              {blog.description} Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Possimus accusamus quasi nulla. Nobis, quae
              dolor? Molestias, autem. Sit at et impedit expedita explicabo,
              magnam temporibus sed omnis, itaque iure deserunt!
            </p>
          </div>
          <div className="flex justify-between align-center">
            <p className="text-lg text-gray-600 mb-3 capitalize pt-2">
              By {blog.userName}
            </p>
            <LikeButton blogId={blog.blogId} blogLikes={blog.likes} />
          </div>
        </div>
      </div>
      <div>
        <p className="text-2xl text-purple-950 font-bold mb-4">{blog.title}</p>
        <p className="text-lg mb-4 text-purple-900">
          {blog.content} Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Suscipit natus nihil nulla repellat? Laboriosam, amet
          consequuntur praesentium error saepe expedita ipsa repudiandae, fugit,
          minima asperiores esse velit! Dolore, maiores commodi! Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Suscipit natus nihil
          nulla repellat? Laboriosam, amet consequuntur praesentium error saepe
          expedita ipsa repudiandae, fugit, minima asperiores esse velit!
          Dolore, maiores commodi! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Suscipit natus nihil nulla repellat? Laboriosam,
          amet consequuntur praesentium error saepe expedita ipsa repudiandae,
          fugit, minima asperiores esse velit! Dolore, maiores commodi!
        </p>
        <div className="my-6">
          <NewsLetterSignUp />
        </div>
        <p className="text-lg mb-4 text-purple-900">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non fugit
          nam assumenda amet in eius fuga error, doloremque quis dolore nihil
          corrupti perspiciatis veniam! Iste aliquam animi eos atque quibusdam?
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non fugit
          nam assumenda amet in eius fuga error, doloremque quis dolore nihil
          corrupti perspiciatis veniam! Iste aliquam animi eos atque quibusdam?
        </p>
      </div>
    </section>
  );
}

export default BlogPage;
