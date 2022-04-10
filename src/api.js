import API_URL from "./config";

// detail
const getMealById = async (id) => {
  const response = await fetch(API_URL + "lookup.php?i=" + id);
  return await response.json();
};

// all
const getAllCategories = async () => {
  const response = await fetch(API_URL + "categories.php");
  return response.json();
};

// filter by category
const getFilterCategory = async (categoryName) => {
  const response = await fetch(API_URL + "filter.php?c=" + categoryName);
  return response.json();
};

export { getMealById, getAllCategories, getFilterCategory };
