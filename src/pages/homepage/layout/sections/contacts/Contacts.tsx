import React from "react";
import styled from "styled-components";
import fivedotsimg from "../../../../../assets/images/Dots.png";
import { Container } from "../../../../../components/Container";
import { Icon } from "../../../../../components/icon/Icon";
import { SectionTitle } from "../../../../../components/SectionTitle";
import { StyledHash } from "../../../../../components/StyledHash";
import { theme } from "../../../../../styles/Theme";
import { Link } from "react-router-dom";

export const Contacts: React.FC = () => {
  return (
    <StyledContacts>
      <Container>
        <SectionTitle id="contacts">
          <Link to="/contacts">
            <SectionTitleLink href="#">
              <StyledHash>#</StyledHash>
              contacts
            </SectionTitleLink>
          </Link>
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
              <DiscordLink href="">!Elias#3519</DiscordLink>
            </DiscordContact>
            <EmailContact>
              <Icon iconId={"email"} />
              <EmailLink href="">elias@elias.me</EmailLink>
            </EmailContact>
          </MyContacts>
        </FlexContainer>
      </Container>
      <DotsImage src={fivedotsimg} alt="" />
    </StyledContacts>
  );
};

const StyledContacts = styled.section`
  min-height: 30vh;
  position: relative;
`;

const DotsImage = styled.img`
  width: 103px;
  height: 103px;
  position: absolute;
  bottom: 18%;
  left: -2%;
`;

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
  font-family: Fira Code;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  max-width: 500px;
  color: ${theme.colors.borderColor};
`;

const StyledMes = styled.span`
  font-family: Fira Code;
  font-weight: 600;
  font-size: 16px;
  line-height: 21px;
  color: ${theme.colors.font};
`;

const DiscordLink = styled.a`
  font-family: Fira Code;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
`;

const EmailLink = styled.a`
  font-family: Fira Code;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
`;

const SectionTitleLink = styled.a`
  color: ${theme.colors.font};

  position: relative;

  &::before {
    content: "";
    display: block;
    width: 128px;
    height: 1px;
    background-color: ${theme.colors.accent};
    position: absolute;
    top: 55%;
    left: 186px;
    transform: translateY(-50%);
  }
`;
