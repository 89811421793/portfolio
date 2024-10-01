import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 45px; 
  height: 30px; 
  background-color: #282c33;
  color: #abb2bf;
  display: flex;
  align-items: center;
  justify-content: space-between; 
  padding: 0 5px; 
  cursor: pointer;
  position: relative;
`;

const ArrowDown = styled.div`
  font-size: 16px; 
  margin-left: 2px; 
`;

const Dropdown = styled.div<{ isOpen: boolean }>`
  display: ${props => (props.isOpen ? "block" : "none")};
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #282c33;
  color: #abb2bf;
  border: none;
  z-index: 1;
`;

const Option = styled.div`
  padding: 5px;
  cursor: pointer;

  &:hover {
    background-color: #3c4043; 
  }
`;

export const Langswitcher: React.FC = () => {
  const [selectedLang, setSelectedLang] = useState("en");
  const [isOpen, setIsOpen] = useState(false);

  const handleLangChange = (lang: string) => {
    setSelectedLang(lang);
    setIsOpen(false);
  };

  return (
    <Container onClick={() => setIsOpen(!isOpen)}>
      {selectedLang.toUpperCase()}
      <ArrowDown>{'▼'}</ArrowDown> {/* Символ ">" */}
      <Dropdown isOpen={isOpen}>
        <Option onClick={() => handleLangChange("en")}>EN</Option>
        <Option onClick={() => handleLangChange("ru")}>RU</Option>
      </Dropdown>
    </Container>
  );
};