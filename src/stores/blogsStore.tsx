import { create } from "zustand";
import { combine } from "zustand/middleware";
import type { blogType } from "../utils/entityTypes";
import {
  getAllBlogFromDb,
  getBlogByIdFromDb,
  getBlogsBySearchOrFilterFromDb,
  getFeaturedBlogsFromDb,
  updateBlogLikesInDb,
} from "../clients/expressSqliteClient";

const useBlogsStore = create(
  combine(
    {
      blogs: [] as blogType[],
      searchTerm: "",
      filterCategory: 0,
      filterAuthor: 0,
    },

    (set) => ({
      // Blogs
      // Function to initialize the store
      initializeBlogs: async () => {
        if (useBlogsStore.getState().blogs.length < 1) {
          // Get data from database
          const dbData = await getAllBlogFromDb();
          // set state
          set({ blogs: dbData });
          return dbData;
        } else {
          // return state data
          return useBlogsStore.getState().blogs;
        }
      },

      // Function to get a blog by ID
      getBlogById: async (id: number) => {
        let blog: blogType | undefined;

        if (useBlogsStore.getState().blogs.length < 1) {
          //get data from the database
          blog = await getBlogByIdFromDb(id);
        } else {
          blog = useBlogsStore
            .getState()
            .blogs.find((blog: blogType) => blog.blogId === id);
        }

        return blog;
      },

      //Function to get featured blogs
      getFeaturedBlog: async () => {
        let featureBlogs: blogType[] = [];

        if (useBlogsStore.getState().blogs.length < 1) {
          //Get data from database
          featureBlogs = await getFeaturedBlogsFromDb();
          return featureBlogs;
        } else {
          // get from state
          featureBlogs = useBlogsStore
            .getState()
            .blogs.filter((blog: blogType) => blog.featured);
        }

        return featureBlogs;
      },

      // Function to get blogs by search term
      getBlogsBySearchOrFilter: async (
        term: string = "",
        filterCategoryId: number = 0,
        filterAuthorId: number = 0,
      ) => {
        let searchFilterBlogs: blogType[] = [];

        if (useBlogsStore.getState().blogs.length < 1) {
          //Get data from database
          searchFilterBlogs = await getBlogsBySearchOrFilterFromDb(
            term,
            filterCategoryId,
            filterAuthorId,
          );
          return searchFilterBlogs;
        } else {
          // get from state
          // filter by search term only
          if (term.length > 0 && filterCategoryId == 0 && filterAuthorId == 0) {
            searchFilterBlogs = useBlogsStore
              .getState()
              .blogs.filter(
                (blog: blogType) =>
                  blog.title.toLowerCase().includes(term.toLowerCase()) ||
                  blog.description.toLowerCase().includes(term.toLowerCase()) ||
                  blog.content.toLowerCase().includes(term.toLowerCase()),
              );
          }

          // filter by categoryId only
          if (
            term.length < 1 &&
            filterCategoryId !== 0 &&
            filterAuthorId == 0
          ) {
            searchFilterBlogs = useBlogsStore
              .getState()
              .blogs.filter(
                (blog: blogType) => blog.categoryId == filterCategoryId,
              );
          }

          // filter by authorId only
          if (
            term.length < 1 &&
            filterCategoryId == 0 &&
            filterAuthorId !== 0
          ) {
            searchFilterBlogs = useBlogsStore
              .getState()
              .blogs.filter((blog: blogType) => blog.userId == filterAuthorId);
          }

          // filter by categoryId and search term only
          if (
            term.length > 0 &&
            filterCategoryId !== 0 &&
            filterAuthorId == 0
          ) {
            searchFilterBlogs = useBlogsStore
              .getState()
              .blogs.filter(
                (blog: blogType) =>
                  blog.categoryId == filterCategoryId &&
                  (blog.title.toLowerCase().includes(term.toLowerCase()) ||
                    blog.description
                      .toLowerCase()
                      .includes(term.toLowerCase()) ||
                    blog.content.toLowerCase().includes(term.toLowerCase())),
              );
          }

          // filter by authorId and search term only
          if (
            term.length > 0 &&
            filterCategoryId == 0 &&
            filterAuthorId !== 0
          ) {
            searchFilterBlogs = useBlogsStore
              .getState()
              .blogs.filter(
                (blog: blogType) =>
                  blog.userId == filterAuthorId &&
                  (blog.title.toLowerCase().includes(term.toLowerCase()) ||
                    blog.description
                      .toLowerCase()
                      .includes(term.toLowerCase()) ||
                    blog.content.toLowerCase().includes(term.toLowerCase())),
              );
          }

          // filter by authorId and categoryId only
          if (
            term.length < 1 &&
            filterCategoryId !== 0 &&
            filterAuthorId !== 0
          ) {
            searchFilterBlogs = useBlogsStore
              .getState()
              .blogs.filter(
                (blog: blogType) =>
                  blog.userId == filterAuthorId &&
                  blog.categoryId == filterCategoryId,
              );
          }

          // filter by categoryId, authorId and search term only
          if (
            term.length > 0 &&
            filterCategoryId !== 0 &&
            filterAuthorId !== 0
          ) {
            searchFilterBlogs = useBlogsStore
              .getState()
              .blogs.filter(
                (blog: blogType) =>
                  blog.categoryId == filterCategoryId &&
                  blog.userId == filterAuthorId &&
                  (blog.title.toLowerCase().includes(term.toLowerCase()) ||
                    blog.description
                      .toLowerCase()
                      .includes(term.toLowerCase()) ||
                    blog.content.toLowerCase().includes(term.toLowerCase())),
              );
          }
          //end
        }

        return searchFilterBlogs;
      },

      // Function to add to a new blog
      addNewBlog: (newBlog: blogType) => {
        //TODO: Add to database
        // add to state
        set((state) => ({
          blogs: [...state.blogs, newBlog],
        }));
      },

      //Function to edit an existing blog
      updateBlog: (id: number, updatedBlog: blogType) => {
        // TODO: Add to database
        // update state
        set((state) => ({
          blogs: state.blogs.map((blog: blogType) =>
            blog.blogId == id ? updatedBlog : blog,
          ),
        }));
      },

      //Function to edit an existing blog
      updateBlogLikes: async (blogId: number, updatedLikes: number) => {
        // Add to database
        let dbdata = updateBlogLikesInDb(blogId);

        // update state
        set((state) => ({
          blogs: state.blogs.map((blog: blogType) =>
            blog.blogId == blogId ? { ...blog, likes: updatedLikes } : blog,
          ),
        }));

        return dbdata;
      },

      //Function to delete a blog
      deleteBlog: (id: number) => {
        //TODO: Delete from database
        // update state
        set((state) => ({
          blogs: state.blogs.filter((blog: blogType) => blog.blogId != id),
        }));
      },

      // searchTerm
      //Function to set searchTerm
      addSearchTerm: (term: string) => {
        // add to state
        set(() => ({
          searchTerm: term,
        }));
      },

      //Function to remove searchTerm
      removeSearchTerm: () => {
        // add to state
        set(() => ({
          searchTerm: "",
        }));
      },

      // filterCategory
      //Function to set filterCategory
      addFilterCategory: (categoryId: number) => {
        // add to state
        set(() => ({
          filterCategory: categoryId,
        }));
      },

      //Function to remove filterCategory
      removeFilterCategory: () => {
        // add to state
        set(() => ({
          filterCategory: 0,
        }));
      },

      // filterAuthors
      //Function to set filterAuthors
      addFilterAuthor: (authorId: number) => {
        // add to state
        set(() => ({
          filterAuthor: authorId,
        }));
      },

      //Function to remove filterAuthors
      removeFilterAuthor: () => {
        // add to state
        set(() => ({
          filterAuthor: 0,
        }));
      },

      // end
    }),
  ),
);

export default useBlogsStore;
