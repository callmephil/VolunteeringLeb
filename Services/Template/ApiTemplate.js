export const Template = {
  GET_TEMPLATE: { method: "GET", path: "/" },
  GET_TEMPLATE_BY_ID: { method: "GET", path: "/:id" },
  CREATE_TEMPLATE: {
    method: "POST",
    path: "users/profile",
    body: ["column_1", "column_2", "column_3"],
  },
  UPDATE_TEMPLATE_BY_ID: {
    method: "PATCH",
    path: "/:id",
    body: ["column_1", "column_2", "column_3"],
  },
  DELETE_TEMPLATE_BY_ID: {
    method: "DELETE",
    path: "/:id",
  }
};
