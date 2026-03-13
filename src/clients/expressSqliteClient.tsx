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
    console.log("Error fetching featured data");
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
