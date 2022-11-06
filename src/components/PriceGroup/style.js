import styled from "styled-components";

export const Description = styled.div`
    font-size: 16px;
`;

export const PriceGroupWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    max-width: 1000px;
    margin: 0 auto;
`;

export const PriceOptionInner = styled.div`
    margin: 0 auto;
    border: 1px solid ${({ mostPopular }) => (mostPopular ? "orange" : "#999")};
    background: ${({ mostPopular }) => (mostPopular ? "orange" : "#efefef")};
    padding: 10px 10px 30px 10px;
    border-radius: 10px;
    position: relative;
    box-sizing: border-box;
    height: 100%;
    transform: scale(${({ mostPopular }) => (mostPopular ? "1.1" : "1")});
`;

export const MostPopularLabel = styled.div`
    position: absolute;
    right: -1px;
    top: -1px;
    padding: 5px;
    background: limegreen;
    color: white;
    font-size: 14px;
    font-weight: bold;
`;

export const PriceOption = styled.div`
    padding: 20px;
`;

export const Title = styled.div`
    font-size: 30px;
    font-weight: bold;
    color: ${({ mostPopular }) => (mostPopular ? "white" : "#999")};
    text-align: center;
    margin-top: 20px;
    margin-bottom: 10px;
`;
export const Amount = styled.div`
    font-size: 40px;
    font-weight: bold;
    text-align: center;
    > span {
        font-size: 20px;
        font-weight: 400;
    }
`;
