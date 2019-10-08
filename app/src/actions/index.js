let nextPostId = 0;
export const addPost = text => ({
  type: "ADD_POST",
  id: nextPostId++,
  text
});
