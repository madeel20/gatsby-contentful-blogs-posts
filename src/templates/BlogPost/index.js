import React from "react";
import { Content, Layout, SEO, RichText } from "components";
import { graphql } from "gatsby";

const BlogPost = ({ data: { contentfulBlogPost } }) => {
    return (
        <Layout>
            <SEO
                title={contentfulBlogPost.title}
                description={contentfulBlogPost.description}
            />
            <Content>
                <h1>{contentfulBlogPost.title}</h1>
                <div>
                    <RichText
                        raw={contentfulBlogPost.pageContent.raw}
                        references={contentfulBlogPost.pageContent.references}
                    />
                </div>
            </Content>
        </Layout>
    );
};

export const query = graphql`
    query PostQuery($postId: String) {
        contentfulBlogPost(contentful_id: { eq: $postId }) {
            title
            description
            publishedDate(formatString: "Do MMM YYYY")
            pageContent {
                raw
                references {
                    contentful_id
                    title
                    gatsbyImageData(
                        layout: CONSTRAINED
                        width: 1200
                        placeholder: BLURRED
                    )
                }
            }
        }
    }
`;

export default BlogPost;
