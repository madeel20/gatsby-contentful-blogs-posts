import styled from "styled-components";

export const HeaderWrapper = styled.header`
    width: 100%;
    background: black;
    color: white;
    border-bottom: 1px solid black;
`;

export const HeaderInner = styled.div`
    max-width: 1000px;
    height: 60px;
    margin: 0 auto;
    display: flex;
`;

export const Title = styled.div`
    margin: auto 0;
    cursor: pointer;
    font-weight: bold;

    > div {
        &:first-child {
            font-family: "Potta One", cursive;
            font-size: 18px;
            color: orange;
        }
        &:last-child {
            font-size: 14px;
            color: #999;
        }
    }
`;
