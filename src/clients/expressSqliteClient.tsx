import type { blogType, userType } from "../utils/entityTypes";

// Blogs
// get all blogs
export const getAllBlogFromDb = async () => {
  try {
    const res = await fetch(`http://127.0.0.1:8000/api/blogs`);
    const data = await res.json();

    return data;
  } catch (err: any) {
    console.log("Error fetching data");
    return err.message;
  }
};

// get blog by Id
export const getBlogByIdFromDb = async (id: number) => {
  try {
    const res = await fetch(`http://127.0.0.1:8000/api/blogs/${id}`);
    const data = await res.json();

    return data;
  } catch (err: any) {
    console.log("Error fetching data with Id");
    return err.message;
  }
};

// get blog by Id
export const getBlogByAuthorIdFromDb = async (id: number) => {
  try {
    const res = await fetch(`http://127.0.0.1:8000/api/blogs/author/${id}`);
    const data = await res.json();

    return data;
  } catch (err: any) {
    console.log("Error fetching data with Id");
    return err.message;
  }
};

// get all featured blogs
export const getFeaturedBlogsFromDb = async () => {
  try {
    const res = await fetch(`http://127.0.0.1:8000/api/blogs?featured=1`);
    const data = await res.json();

    return data;
  } catch (err: any) {
    console.log("Error fetching featured blogs data");
    return err.message;
  }
};

// get blogs by search term
export const getBlogsBySearchOrFilterFromDb = async (
  term: string,
  categoryId: number,
  authorId: number,
) => {
  let query = "";

  if (term.length > 0) {
    query += `?searchTerm=${term}`;
  } else {
    query += "?searchTerm=";
  }

  if (categoryId !== 0) {
    query += `&categoryId=${categoryId}`;
  }

  if (authorId != 0) {
    query += `&authorId=${authorId}`;
  }

  try {
    const res = await fetch(`http://127.0.0.1:8000/api/blogs${query}`);
    const data = await res.json();

    return data;
  } catch (err: any) {
    console.log(
      "Error fetching blogs by search term or categoryId or authorId",
    );
    return err.message;
  }
};

// add a new blog
export const addNewBlogToDb = async (newBlog: blogType) => {
  try {
    const res = await fetch(`http://127.0.0.1:8000/api/blogs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: newBlog.title,
        description: newBlog.description,
        content: newBlog.content,
        userId: newBlog.userId,
        categoryId: newBlog.categoryId,
        image: newBlog.image,
      }),
    });

    const data = await res.json();

    return { id: Number(data.message) };
  } catch (err: any) {
    console.log("Error adding new blog");
    return err.message;
  }
};

// update a blog
export const updateBlogInDb = async (updatedBlog: blogType) => {
  try {
    const res = await fetch(
      `http://127.0.0.1:8000/api/blogs/${updatedBlog.userId}/${updatedBlog.blogId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: updatedBlog.title,
          description: updatedBlog.description,
          content: updatedBlog.content,
          image: updatedBlog.image,
          featured: updatedBlog.featured,
          categoryId: updatedBlog.categoryId,
        }),
      },
    );

    const data = await res.json();

    return data;
  } catch (err: any) {
    console.log("Error updating blog");
    return err.message;
  }
};

// update blog likes
export const updateBlogLikesInDb = async (blogId: number) => {
  try {
    const res = await fetch(`http://127.0.0.1:8000/api/blogs/likes/${blogId}`, {
      method: "PUT",
    });

    const data = await res.json();

    return data;
  } catch (err: any) {
    console.log("Error fetching updating blog likes");
    return err.message;
  }
};

// delete a blog
export const deleteBlogInDb = async (authorId: number, blogId: number) => {
  try {
    const res = await fetch(
      `http://127.0.0.1:8000/api/blogs/${authorId}/${blogId}`,
      {
        method: "DELETE",
      },
    );

    const data = await res.json();

    return data;
  } catch (err: any) {
    console.log("Error deleting blog");
    return err.message;
  }
};

// Users or Authors
// get all authors
export const getAllAuthorsFromDb = async () => {
  try {
    const res = await fetch(`http://127.0.0.1:8000/api/users/authors`);
    const data = await res.json();

    return data;
  } catch (err: any) {
    console.log("Error fetching all authors");
    return err.message;
  }
};

// get an author by Id
export const getAuthorByIdFromDb = async (id: number) => {
  try {
    const res = await fetch(
      `http://127.0.0.1:8000/api/users/authors/${id.toString()}`,
    );
    const data = await res.json();

    return data;
  } catch (err: any) {
    console.log("Error fetching an author by Id");
    return err.message;
  }
};

// update an author
export const updateAuthorInDb = async (updatedAuthor: userType) => {
  try {
    const res = await fetch(
      `http://127.0.0.1:8000/api/users/authors/${updatedAuthor.userId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userName: updatedAuthor.userName,
          biography: updatedAuthor.biography,
          image: updatedAuthor.image,
        }),
      },
    );

    const data = await res.json();

    return data;
  } catch (err: any) {
    console.log("Error updating an author");
    return err.message;
  }
};

// categories
// get all categories
export const getAllCategoriesFromDb = async () => {
  try {
    const res = await fetch(`http://127.0.0.1:8000/api/categories`);
    const data = await res.json();

    return data;
  } catch (err: any) {
    console.log("Error fetching all categories");
    return err.message;
  }
};

// get an category by Id
export const getCategoryByIdFromDb = async (id: number) => {
  try {
    const res = await fetch(
      `http://127.0.0.1:8000/api/categories/${id.toString()}`,
    );
    const data = await res.json();

    return data;
  } catch (err: any) {
    console.log("Error fetching an category by Id");
    return err.message;
  }
};
