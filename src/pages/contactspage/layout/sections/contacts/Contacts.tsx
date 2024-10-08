import React from "react";
import styled from "styled-components";
import { Container } from "../../../../../components/Container";
import { FlexWrapper } from "../../../../../components/FlexWrapper";
import { Icon } from "../../../../../components/icon/Icon";
import { theme } from "../../../../../styles/Theme";
import { SectionTitle } from "../../../../../components/SectionTitle";
import { StyledSlash } from "../../../../../components/StyledSlash";
import { AllMedia } from "../mediasection/AllMedia";
import { useLocation } from "react-router-dom";
import rect from "../../../../../assets/images/rectangle.png";

export const Contacts: React.FC = () => {
  const location = useLocation();

  React.useEffect(() => {
    const sectionTitle = document.getElementById("contacts");
    if (sectionTitle) {
      sectionTitle.scrollIntoView();
    }
  }, [location.pathname]);

  return (
    <StyledContacts>
      <Container>
        <SectionTitle>
          <SectionTitleLink id="contacts" href="#">
            <StyledSlash>/</StyledSlash>contacts
          </SectionTitleLink>
        </SectionTitle>
        <WhoAmIText>Who am I?</WhoAmIText>
        <FlexWrapper justify={"space-between"}>
          <InviteText>
            I’m interested in freelance opportunities. However, if you have
            other request or question, don’t hesitate to contact me
          </InviteText>
          <FlexWrapper>
            <SupportBlock>
              <SupportText>Support me here</SupportText>
              <WalletLink href="">4149500120690030</WalletLink>
            </SupportBlock>
            <MessageBlock>
              <MessageMeText>Message me here</MessageMeText>
              <DiscordContact>
                <Icon iconId={"discord"} />
                <DiscordLinkText href="">!Elias#3519</DiscordLinkText>
              </DiscordContact>
              <EmailContact>
                <Icon iconId={"email"} />
                <EmailLinkText href="">elias@elias-dev.ml</EmailLinkText>
              </EmailContact>
            </MessageBlock>
          </FlexWrapper>
        </FlexWrapper>
      </Container>
      <AllMedia />
      <DecorRect src={rect} alt="" />
    </StyledContacts>
  );
};

const StyledContacts = styled.section`
  position: relative;
`;

const DiscordContact = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const EmailContact = styled.div`
  display: flex;
  align-items: center;
`;

const SupportBlock = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid ${theme.colors.borderColor};
  height: 100%;
  padding: 15px;
`;

const MessageBlock = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  border: 2px solid ${theme.colors.borderColor};
  margin-left: 15px;
  padding: 12px;
`;

const WhoAmIText = styled.span`
  font-family: Fira Code;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  display: inline-block;
  margin-top: 17px;
  margin-bottom: 40px;
`;

const InviteText = styled.p`
  font-family: Fira Code;
  max-width: 400px;
  line-height: 26px;
  color: ${theme.colors.borderColor};
  font-weight: 500;
  font-size: 16px;
`;

const SupportText = styled.span`
  font-family: Fira Code;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 5px;
`;

const WalletLink = styled.a`
  font-family: Fira Code;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
`;

const MessageMeText = styled.span`
  font-family: Fira Code;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 15px;
`;

const DiscordLinkText = styled.a`
  font-family: Fira Code;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
`;

const EmailLinkText = styled.a`
  font-family: Fira Code;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
`;

const SectionTitleLink = styled.a`
  color: ${theme.colors.font};
`;

const DecorRect = styled.img`
  width: 155px;
  height: 155px;
  position: absolute;
  top: 28%;
  right: -1%;
`;
