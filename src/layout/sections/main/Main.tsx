import React from "react";
import styled from "styled-components";
import mainimg from "../../../assets/images/MainImg.png";
import { FlexWrapper } from "../../../components/FlexWrapper";

export const Main: React.FC = () => {
  return (
    <StyledMain>
      <FlexWrapper align="center" justify="space-around">
        <div>
          <MainTitle>
            Elias is a <span style={{ color: "fuchsia" }}>web designer</span>{" "}
            and <span style={{ color: "fuchsia" }}>front-end developer</span>
          </MainTitle>
          <p>
            He crafts responsive websites where technologies meet creativity
          </p>
          <button>Contact me!!</button>
        </div>
        <figure>
          <MainImage src={mainimg} alt="" />
          <figcaption style={{ border: "2px solid #ABB2BF", padding: 8 }}>
            <span
              style={{
                display: "inline-block",
                width: "20px",
                height: 20,
                backgroundColor: "crimson",
                marginRight: 5,
              }}
            ></span>
            Currently working on{" "}
            <span style={{ color: "#FFF" }}>Portfolio</span>
          </figcaption>
        </figure>
      </FlexWrapper>
      <Quotation>
        <p style={{ border: "2px solid #ABB2BF" }}>
          With great power comes great electricity bill
        </p>
        <Cite>
          <span>- Dr. Who</span>
        </Cite>
      </Quotation>
    </StyledMain>
  );
};

const StyledMain = styled.section`
  min-height: 100vh;
  background-color: moccasin;
`;

const MainImage = styled.img`
  width: 457px;
  height: 386px;
`;

const MainTitle = styled.h1`
  maxwidth: "450px";
`;

const Quotation = styled.blockquote`
  position: relative;
  padding: 32px;
  max-width: 712px;

  &: before {
    position: absolute;
  }
`;

const Cite = styled.cite`
  border: 2px solid #abb2bf;
  padding: 16px;
  font-style: normal;
`;
