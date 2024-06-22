import React from "react";
import styled from "styled-components";



import { Container } from "../../../../../components/Container";
import { FlexWrapper } from "../../../../../components/FlexWrapper";
import { Icon } from "../../../../../components/icon/Icon";
import { SectionTitle } from "../../../../../components/SectionTitle";


export const Contacts = () => {
  return (
    <StyledContacts>
        <Container>
      <SectionTitle>#contacts</SectionTitle>
      <FlexWrapper justify={'space-between'}>
        <p style={{maxWidth: "500px"}}>
          I’m interested in freelance opportunities. However, if you have other
          request or question, don’t hesitate to contact me
        </p>
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
      </FlexWrapper>
      </Container>
    </StyledContacts>
  );
};

const StyledContacts = styled.section`
  background-color: turquoise;
`;

const MyContacts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 30px;
  border: 3px solid rgb(171, 178, 191);
`;

const DiscordContact = styled.div``;

const EmailContact = styled.div``;
