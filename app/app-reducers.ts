import { groupCategoriesReducer } from './pages/group-category/group-category.reducer';
import { groupCategoryReducer } from './pages/group-category/new-group-category.reducer';

export const reducers = {
    groupCategories: groupCategoriesReducer,
    groupCategory: groupCategoryReducer
}