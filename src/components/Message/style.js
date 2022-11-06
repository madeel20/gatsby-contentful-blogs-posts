import styled from "styled-components";

export const Message = styled.div`
    margin: 10px 0;
    color: ${({ color }) =>
        color === "success" ? "green" : color === "error" ? "red" : "black"};
`;
