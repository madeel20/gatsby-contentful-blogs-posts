import React from "react";
import { graphql, useStaticQuery, navigate } from "gatsby";
import { HeaderWrapper, HeaderInner, Title } from "./style";
import Menu from "./Menu";

export const Header = () => {
    const {
        site: {
            siteMetadata: { title, description },
        },
    } = useStaticQuery(
        graphql`
            {
                site {
                    siteMetadata {
                        title
                        description
                    }
                }
            }
        `
    );

    const handleTitleClick = () => {
        navigate(`/`);
    };

    return (
        <HeaderWrapper>
            <HeaderInner>
                <Title onClick={handleTitleClick}>
                    <div>{title}</div>
                    <div>{description}</div>
                </Title>
                <Menu />
            </HeaderInner>
        </HeaderWrapper>
    );
};
