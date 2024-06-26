import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../../../../components/icon/Icon';
import { SectionTitle } from '../../../../../components/SectionTitle';
import { Container } from '../../../../../components/Container';

export const AllMedia = () => {
    return (
        <StyledMedia>
            <Container>
            <SectionTitle>#all-media</SectionTitle>
            <Icon iconId={"twitter"} />
            <a href="">elias@elias.me</a>
            <Icon iconId={"twitter"} />
            <a href="">elias@elias.me</a>
            </Container>
        </StyledMedia>
    );
};

const StyledMedia = styled.section`
`;
