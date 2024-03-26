import { styled } from "styled-components";

import { TasksList } from "./TasksList";

import { GlobalStyles, appBackgroundColor } from "./reset.style";

const PageTitle = styled.div`
  width: inherit;
  position: sticky;
  top: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.2rem;

  background-color: ${appBackgroundColor};
  box-shadow: 0 0 10px 3px #949292;
`;

const PageContainer = styled.div`
  width: inherit;
  padding-top: 2rem;
  padding-inline: 5rem;
`;

const App = (): React.ReactElement => {
  return (
    <>
      <GlobalStyles />
      {/* <ThemeProvider theme={original}></ThemeProvider> */}
      <PageTitle>
        <h1>Tasks List</h1>
      </PageTitle>
      <PageContainer>
        <TasksList />
      </PageContainer>
    </>
  );
};

export default App;
