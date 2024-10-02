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
            <StyledMes>Message me here</StyledMes>
            <DiscordContact>
              <Icon iconId={"discord"} />
              <MailLink href="">!Elias#3519</MailLink>
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
  margin-bottom: 5px;
  margin-top: 5px;

   & > :first-child {
    margin-right: 5px; 
`;

const EmailContact = styled.div`
  display: flex; 
  align-items: center; 

  & > :first-child {
    margin-right: 5px; 
  }
`;

const MessageInvitation = styled.p`
max-width: 500px;
color:${theme.colors.borderColor};
`;

const StyledMes = styled.span`

`;

const MailLink = styled.a`

`;

