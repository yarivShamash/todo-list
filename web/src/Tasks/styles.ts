export const TasksContainer = {
  paddingInline: "2rem",

  "&:nthChild(2)": {
    marginBlock: "3rem",
    borderTop: "1px solid gray",
    paddingTop: "1rem",
  },
};

export const NewTaskButtonContainer = {
  width: "100%",
  marginBlock: 2,
  display: "flex",
  justifyContent: "center",
};

export const NewTaskButton = { width: "fit-content" };

export const TaskLineContainer = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

export const TodoContainer = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

export const SectionHeading = {
  textAlign: "center",
  marginBottom: "2rem",
};
