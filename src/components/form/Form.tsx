import React from "react";
import styled from "styled-components";
import { theme } from "../../styles/Theme";
import { Button } from "../Button";

export const Form: React.FC = () => {
  return (
    <FormWrapper>
    <StyledForm>
      <Field placeholder={"Name"} name={"user_name"} required />
      <Field placeholder={"Email"} name={"user_email"} required />
      <Field placeholder={"Title"} name={"subject"} required />
      <Field
        placeholder={"Message"}
        name={"message"}
        as={"textarea"}
        required
      />
      <FormButton type="submit">Send</FormButton>
    </StyledForm>
    </FormWrapper>
  );
};

const FormWrapper = styled.div`
padding: 32px;
border: no;
max-width: 569px;
background-color: ${theme.colors.primaryBg};
`;

const StyledForm = styled.form`
  max-width: 505px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0 auto;
  gap: 16px;

  textarea {
    resize: none;
    height: 119px;
  }
`;

const Field = styled.input`
  width: 100%;
  border: 1px solid ${theme.colors.borderColor};
  background-color: ${theme.colors.primaryBg};
  padding: 8px;

  font-family: Fira Code, sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: ${theme.colors.font};

  &::placeholder {
    color: ${theme.colors.borderColor};
  }

  &:focus-visible {
    outline: 1px solid ${theme.colors.font};
  }

  &[name="user_name"] {
    grid-column: 1;
    grid-row: 1;
  }
  &[name="user_email"] {
    grid-column: 2;
    grid-row: 1;
  }
  &[name="subject"] {
    grid-column: 1 / -1;
    grid-row: 2;
  }
  &[name="message"] {
    grid-column: 1 / -1;
    grid-row: 3;
  }
  &[type="submit"] {
    grid-column: 1 / -1;
    grid-row: 4;
  }

  /*такой же эффект дает и эта запись: grid-column: ${({ name }) =>
    name === "user_name" || name === "user_email" ? "span 1" : "span 2"};*/
`;

const FormButton = styled(Button)`
  width: fit-content;
  padding: 8px 16px;

  font-family: Fira Code;
  font-weight: 500;
  font-size: 16px;
`;
