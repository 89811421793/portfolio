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
            <MediaItem>
            <Icon iconId={"twitter"} />
            <a href="">elias@elias.me</a>
            </MediaItem>
            <MediaItem>
            <Icon iconId={"twitter"} />
            <a href="">elias@elias.me</a>
            </MediaItem>
            </Container>
        </StyledMedia>
    );
};

const StyledMedia = styled.section`
`;

const MediaItem = styled.div`
display: inline;
margin-right: 15px;
`;
