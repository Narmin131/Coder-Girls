export const addBlogFunction = (blog) => {
  return {
    type: "ADD_BLOG",
    payload: blog,
  };
};
