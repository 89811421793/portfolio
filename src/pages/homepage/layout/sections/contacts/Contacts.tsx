import React from "react";
import styled from "styled-components";
import { Container } from "../../../../../components/Container";
import { Icon } from "../../../../../components/icon/Icon";
import { SectionTitle } from "../../../../../components/SectionTitle";
import { StyledHash } from "../../../../../components/StyledHash";
import { theme } from "../../../../../styles/Theme";

export const Contacts: React.FC = () => {
  return (
    <StyledContacts>
      <Container>
        <SectionTitle>
          <StyledHash>#</StyledHash>contacts
        </SectionTitle>
        <FlexContainer>
          <MessageInvitation>
            I’m interested in freelance opportunities. However, if you have
            other request or question, don’t hesitate to contact me
          </MessageInvitation>
          <MyContacts>
            <span>Message me here</span>
            <DiscordContact>
              <Icon iconId={"discord"} />
              <a href="">!Elias#3519</a>
            </DiscordContact>
            <EmailContact>
              <Icon iconId={"email"} />
              <a href="">elias@elias.me</a>
            </EmailContact>
          </MyContacts>
        </FlexContainer>
      </Container>
    </StyledContacts>
  );
};

const StyledContacts = styled.section``;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 35px;
`;

const MyContacts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; 
  margin-left: 30px;
  border: 3px solid rgb(171, 178, 191);
  padding: 10px 30px 10px 10px;
`;

const DiscordContact = styled.div`
  display: flex; 
  align-items: center; 
  margin-bottom: 10px;
  margin-top: 10px;
`;

const EmailContact = styled.div`
  display: flex; 
  align-items: center; 
`;

const MessageInvitation = styled.p`
max-width: 500px;
color:${theme.colors.borderColor};
`;