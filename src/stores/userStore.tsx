import { create } from "zustand";
import { combine } from "zustand/middleware";
import type { userType } from "../utils/entityTypes";
import {
  getAllAuthorsFromDb,
  getAuthorByIdFromDb,
} from "../clients/expressSqliteClient";

const useUsersStore = create(
  combine(
    {
      authors: [] as userType[],
    },

    (set) => ({
      // Function to initialize the store
      initializeAuthors: async () => {
        if (useUsersStore.getState().authors.length < 1) {
          // Get data from database
          const dbData = await getAllAuthorsFromDb();
          // set state
          set({ authors: dbData });
          return dbData;
        } else {
          // return state data
          return useUsersStore.getState().authors;
        }
      },

      // Function to get a author by ID
      getAuthorById: async (id: number) => {
        let author: userType | undefined;

        if (useUsersStore.getState().authors.length < 1) {
          //get data from the database
          author = await getAuthorByIdFromDb(id);
        } else {
          author = useUsersStore
            .getState()
            .authors.find((author: userType) => author.userId === id);
        }

        return author;
      },

      // end
    }),
  ),
);

export default useUsersStore;
