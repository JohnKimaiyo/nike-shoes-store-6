export const deletePost = (id) => {
  return {
    tyoe: "DELETE_POST",
    id,
  };
};
