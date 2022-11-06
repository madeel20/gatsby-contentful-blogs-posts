const path = require("path");

exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
        resolve: {
            modules: [path.resolve(__dirname, "src"), "node_modules"],
        },
    });
};

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const {
        data: {
            contentfulBlog: { slug, postsPerPage },
            allContentfulBlogPost,
        },
    } = await graphql(`
        {
            contentfulBlog {
                slug
                postsPerPage
            }
            allContentfulBlogPost(
                sort: { fields: publishedDate, order: DESC }
            ) {
                edges {
                    node {
                        contentful_id
                        slug
                        title
                        description
                        publishedDate(formatString: "Do MMM YYYY")
                        pageContent {
                            raw
                        }
                    }
                }
            }
        }
    `);

    allContentfulBlogPost.edges.forEach(({ node }) => {
        createPage({
            path: `${slug}/${node.slug}`,
            component: path.resolve(`./src/templates/BlogPost/index.js`),
            context: {
                postId: node.contentful_id,
            },
        });
    });

    const numPages = Math.ceil(
        allContentfulBlogPost.edges.length / postsPerPage
    );

    const mappedPosts = allContentfulBlogPost.edges.map(({ node }) => node);

    for (let i = 0; i < numPages; i++) {
        createPage({
            path: `${slug}${i !== 0 ? `/${i + 1}` : ""}`,
            component: path.resolve(
                `./src/templates/PaginatedBlogPage/index.js`
            ),
            context: {
                blogSlug: slug,
                currentPage: i + 1,
                totalPages: numPages,
                posts: mappedPosts.slice(
                    i * postsPerPage,
                    i * postsPerPage + postsPerPage
                ),
            },
        });
    }
};
