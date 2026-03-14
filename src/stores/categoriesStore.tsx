import { create } from "zustand";
import { combine } from "zustand/middleware";
import type { categoryType } from "../utils/entityTypes";
import {
  getAllCategoriesFromDb,
  getCategoryByIdFromDb,
} from "../clients/expressSqliteClient";

const useCategoriesStore = create(
  combine(
    {
      categories: [] as categoryType[],
    },

    (set) => ({
      // Function to initialize the store
      initializeCategories: async () => {
        if (useCategoriesStore.getState().categories.length < 1) {
          // Get data from database
          const dbData = await getAllCategoriesFromDb();
          // set state
          set({ categories: dbData });
          return dbData;
        } else {
          // return state data
          return useCategoriesStore.getState().categories;
        }
      },

      // Function to get a category by ID
      getCategoryById: async (id: number) => {
        let category: categoryType | undefined;

        if (useCategoriesStore.getState().categories.length < 1) {
          //get data from the database
          category = await getCategoryByIdFromDb(id);
        } else {
          category = useCategoriesStore
            .getState()
            .categories.find(
              (category: categoryType) => category.categoryId === id,
            );
        }

        return category;
      },

      // end
    }),
  ),
);

export default useCategoriesStore;
