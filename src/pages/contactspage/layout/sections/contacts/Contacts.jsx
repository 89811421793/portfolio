import React from "react";
import styled from "styled-components";
import { Container } from "../../../../../components/Container";
import { FlexWrapper } from "../../../../../components/FlexWrapper";
import { Icon } from "../../../../../components/icon/Icon";
import { theme } from "../../../../../styles/Theme";

export const Contacts = () => {
  return (
    <StyledContacts>
      <Container>
        <span>Who am I?</span>
        <FlexWrapper justify={"space-between"}>
          <p style={{ maxWidth: "500px" }}>
            I’m interested in freelance opportunities. However, if you have
            other request or question, don’t hesitate to contact me
          </p>
          <Support>
            <span>Support me here</span>
            <a href="">4149500120690030</a>
          </Support>
          <MessageBlock>
            <span>Message me here</span>
            <DiscordContact>
              <Icon iconId={"discord"} />
              <a href="">!Elias#3519</a>
            </DiscordContact>
            <EmailContact>
              <Icon iconId={"email"} />
              <a href="">elias@elias.me</a>
            </EmailContact>
          </MessageBlock>
        </FlexWrapper>
      </Container>
    </StyledContacts>
  );
};

const StyledContacts = styled.section``;

const DiscordContact = styled.div``;

const EmailContact = styled.div``;

const Support = styled.div`
  display: inline-flex;
  flex-direction: column;
  border: 2px solid ${theme.colors.borderColor};
`;
const MessageBlock = styled.div`
  border: 2px solid ${theme.colors.borderColor};
`;
