import { styled } from "styled-components";

export const TasksContainer = styled.div`
  padding-inline: 2rem;

  &:nth-child(2) {
    margin-block: 3rem;
    border-top: 1px solid gray;
    padding-top: 1rem;
  }
`;

export const TodoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SectionHeading = styled.h3`
  text-align: center;
  margin-bottom: 2rem;
`;
