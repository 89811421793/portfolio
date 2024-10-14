import React from "react";
import styled from "styled-components";
import { theme } from "../../styles/Theme";
import { Button } from "../Button";

export const Form: React.FC = () => {
  return (
    <FormWrapper>
      <StyledForm>
        <FieldWrapper>
          <Field id="user_name" name="user_name" placeholder="" required />
          <FieldLabel htmlFor="user_name">Name</FieldLabel>
        </FieldWrapper>
        <FieldWrapper>
          <Field id="user_email" name="user_email" placeholder=" " required />
          <FieldLabel htmlFor="user_email">Email</FieldLabel>
        </FieldWrapper>
        <FieldWrapper>
          <Field id="subject" name="subject" placeholder=" " required />
          <FieldLabel htmlFor="subject">Title</FieldLabel>
        </FieldWrapper>
        <FieldWrapper>
          <Field
            id="message"
            name="message"
            as="textarea"
            placeholder=" "
            required
          />
          <FieldLabel htmlFor="message">Message</FieldLabel>
        </FieldWrapper>
        <FormButton type="submit">Send</FormButton>
      </StyledForm>
    </FormWrapper>
  );
};

const FormWrapper = styled.div`
  padding: 32px;
  border: none;
  max-width: 569px;
  background-color: ${theme.colors.primaryBg};
`;

const StyledForm = styled.form`
  max-width: 505px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto auto;
  margin: 0 auto;
  gap: 16px;

  & > div:nth-child(1) {
    grid-column: 1; // Name field in the first column
  }

  & > div:nth-child(2) {
    grid-column: 2; // Email field in the second column
  }

  & > div:nth-child(3) {
    grid-column: 1 / -1; // Title field spanning both columns
  }

  & > div:nth-child(4) {
    grid-column: 1 / -1; // Message field spanning both columns
  }

  textarea {
    resize: none;
    height: 119px;
  }
`;

const FieldWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const Field = styled.input`
  width: 100%;
  border: 1px solid ${theme.colors.borderColor};
  background-color: ${theme.colors.primaryBg};
  padding: 16px 8px 8px;
  font-family: Fira Code, sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: ${theme.colors.font};

  &:focus-visible,
  &:not(:placeholder-shown) {
    & + label {
      transform: translateY(-2.2rem);
      color: ${theme.colors.font};
      background-color: #282c33;
      padding: 8px 4px;
      border-radius: 4px;
    }
  }
`;

const FieldLabel = styled.label`
  position: absolute;
  top: 16px;
  left: 8px;
  font-family: Fira Code, sans-serif;
  font-size: 16px;
  color: ${theme.colors.borderColor};
  pointer-events: none;
  background-color: transparent;
  transform-origin: top left;
`;

const FormButton = styled(Button)`
  width: fit-content;
  padding: 8px 16px;
  font-family: Fira Code;
  font-weight: 500;
  font-size: 16px;
`;
