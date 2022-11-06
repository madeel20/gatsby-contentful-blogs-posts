import React from "react";
import { graphql } from "gatsby";
import { Content, Layout } from "components";

const Page = ({ data }) => {
    return (
        <Layout>
            <Content>
                <h1>{data.contentfulPage.title}</h1>
            </Content>
        </Layout>
    );
};

export const query = graphql`
    query PageQuery($id: String) {
        contentfulPage(id: { eq: $id }) {
            title
        }
    }
`;

export default Page;
