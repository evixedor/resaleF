import { createSelector } from 'reselect';

const selectCategoriesReducer = (state) => state.categories; // state is the entire redux state and .categories is a slice of it

export const selectCategories = createSelector( // this gives us the categories array that resides on the categories slice of the redux state
  [selectCategoriesReducer],
  (categoriesSlice) => categoriesSlice.categories
); // memoizedSelcetor([inputSelctors], outputSelector)

// a selector transforming the categories array into a map object
export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) =>
    categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);