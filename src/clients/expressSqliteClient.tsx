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
    query += `?search=${term}`;
  }

  if (categoryId !== 0) {
    query += `?categoryId=${categoryId}`;
  }

  if (authorId != 0) {
    query += `?authorId=${authorId}`;
  }

  try {
    const res = await fetch(`http://127.0.0.1:8000/api/blogs${query}`);
    const data = await res.json();

    return data;
  } catch (err: any) {
    console.log("Error fetching blogs by search term");
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
