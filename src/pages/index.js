import { useStaticQuery, graphql } from "gatsby";
import React from "react";
import { Layout, RichText } from "components";

const IndexPage = () => {
    const data = useStaticQuery(graphql`
        {
            contentfulPage(isHomepage: { eq: "Yes" }) {
                title
                pageContent {
                    raw
                    references {
                        ... on ContentfulHero {
                            __typename
                            contentful_id
                            heading
                            subHeading
                            backgroundImage {
                                gatsbyImageData(
                                    layout: CONSTRAINED
                                    width: 1200
                                )
                            }
                        }
                        ... on ContentfulPriceGroup {
                            __typename
                            contentful_id
                            priceOptions {
                                contentful_id
                                title
                                amount
                                mostPopular
                                description {
                                    raw
                                }
                            }
                        }
                    }
                }
            }
        }
    `);

    return (
        <Layout>
            <RichText
                references={data.contentfulPage.pageContent.references}
                raw={data.contentfulPage.pageContent.raw}
            />
        </Layout>
    );
};

export default IndexPage;
