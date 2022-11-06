import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    margin: 40px 0;
    justify-content: center;
`;

export const PageNumber = styled.div`
    width: 50px;
    height: 50px;
    background: ${({ isActive }) => (isActive ? "#333" : "black")};
    color: white;
    cursor: pointer;
    display: flex;
    font-size: ${({ isActive }) => (isActive ? "20px" : "16px")};

    font-weight: ${({ isActive }) => (isActive ? "bold" : "normal")};
    > a {
        color: white;
        text-align: center;
        line-height: 50px;
        text-decoration: none;
        display: block;
        height: 100%;
        width: 100%;
    }

    &:first-child {
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
    }

    &:last-child {
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
    }

    &:hover {
        background: #333;
    }
`;
