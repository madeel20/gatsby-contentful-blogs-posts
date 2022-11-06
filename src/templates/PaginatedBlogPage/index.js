import React from "react";
import { Layout, Content } from "components";
import Pagination from "./Pagination";
import { Post, Title, Description, PublishedDate } from "./style";
import { Link } from "gatsby";

const PaginatedBlogPage = ({ pageContext }) => {
    return (
        <Layout>
            <Content>
                {pageContext.posts.map((post) => (
                    <Post key={post.contentful_id}>
                        <Title>
                            <Link to={`/${pageContext.blogSlug}/${post.slug}`}>
                                {post.title}
                            </Link>
                        </Title>
                        <Description>{post.description}</Description>
                        <PublishedDate>{post.publishedDate}</PublishedDate>
                    </Post>
                ))}
            </Content>
            <Pagination
                slug={pageContext.blogSlug}
                totalPages={pageContext.totalPages}
                currentPage={pageContext.currentPage}
            />
        </Layout>
    );
};

export default PaginatedBlogPage;
