import { FaThumbsUp } from "react-icons/fa6";
import useBlogsStore from "../stores/blogsStore";
import { useEffect, useState } from "react";

interface PropTypes {
  blogId: number;
  blogLikes: number;
}

function LikeButton({ blogId, blogLikes }: PropTypes) {
  // variable
  const [likes, setLikes] = useState(0);
  const [canLike, setCanLike] = useState(true);

  // store
  const { updateBlogLikes } = useBlogsStore();

  // run on first render
  useEffect(() => {
    setLikes(blogLikes);
  }, []);

  // function to update likes
  const handleClick = async () => {
    // update store and database
    let updatedLikes = blogLikes + 1;
    await updateBlogLikes(blogId, updatedLikes);
    // update state
    setLikes((prevlikes) => prevlikes + 1);
    // update can like
    setCanLike(false);
  };

  return (
    <>
      <button
        disabled={!canLike}
        onClick={handleClick}
        className="text-lg text-white font-bold me-3 bg-purple-950 py-2 px-4 flex justify-center align-center shadow-md rounded cursor-pointer hover:shadow-lg"
      >
        <span className="pt-1">
          <FaThumbsUp />
        </span>
        <span className="ms-3">Likes: {likes}</span>
      </button>
    </>
  );
}

export default LikeButton;
