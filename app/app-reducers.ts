import { groupCategoriesReducer } from './pages/group-category-list/group-category-list.reducer';
import { groupCategoryReducer } from './pages/group-category-list/new-group-category/new-group-category.reducer';

export const reducers = {
    groupCategories: groupCategoriesReducer,
    groupCategory: groupCategoryReducer
}