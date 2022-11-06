import styled from "styled-components";

export const Form = styled.form`
    label {
        display: block;
        font-weight: bold;
        margin: 10px 0;
        > span {
            display: block;
            margin-bottom: 5px;
            > span {
                color: red;
            }
        }
    }

    input,
    textarea {
        border: 1px solid #ddd;
        min-height: 20px;
        font-size: 16px;
        font-family: "Open Sans", sans-serif;
        padding: 10px;
        &:focus {
            border-color: black;
            outline: black;
        }
    }

    input {
        min-width: 25%;
    }

    textarea {
        min-width: 50%;
    }

    button {
        background: black;
        padding: 8px;
        color: white;
        border: 1px solid black;
        font-size: 16px;
        font-family: "Open Sans", sans-serif;
        cursor: pointer;
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: 2px;
        &:hover {
            color: black;
            background: white;
        }
    }
`;
