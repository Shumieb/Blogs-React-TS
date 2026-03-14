import { create } from "zustand";
import { combine } from "zustand/middleware";
import type { blogType } from "../utils/entityTypes";
import {
  getAllBlogFromDb,
  getBlogsBySearchTermFromDb,
  getFeaturedBlogsFromDb,
} from "../clients/expressSqliteClient";

const useBlogsStore = create(
  combine(
    {
      blogs: [] as blogType[],
      searchTerm: "",
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
      getBlogById: (id: number) => {
        let blog: blogType | undefined;

        if (useBlogsStore.getState().blogs.length < 1) {
          //TODO: get data from the database
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
      getBlogsBySearchTerm: async (term: string) => {
        let searchBlogs: blogType[] = [];

        if (useBlogsStore.getState().blogs.length < 1) {
          //Get data from database
          searchBlogs = await getBlogsBySearchTermFromDb(term);
          return searchBlogs;
        } else {
          // get from state
          searchBlogs = useBlogsStore
            .getState()
            .blogs.filter(
              (blog: blogType) =>
                blog.title.toLowerCase().includes(term.toLowerCase()) ||
                blog.description.toLowerCase().includes(term.toLowerCase()) ||
                blog.content.toLowerCase().includes(term.toLowerCase()),
            );
        }

        return searchBlogs;
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

      // end
    }),
  ),
);

export default useBlogsStore;
