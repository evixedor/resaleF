import { createSelector } from 'reselect';
import { CategoryMap } from "./categories.types";
import { RootState } from "../store";

import { CategoriesState } from './categories.reducer';

const selectCategoriesReducer = (state: RootState): CategoriesState => state.categories; // state is the entire redux state and .categories is a slice of it

export const selectCategories = createSelector( // this gives us the categories array that resides on the categories slice of the redux state
  [selectCategoriesReducer],
  (categoriesSlice) => categoriesSlice.categories
); // memoizedSelector([inputSelectors], outputSelector)

// a selector transforming the categories array into a map object
export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories): CategoryMap =>
    categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {} as CategoryMap)
);

export const selectIsLoading = createSelector(
  [selectCategoriesReducer],
  (categoriesSlice) => categoriesSlice.isLoading
);