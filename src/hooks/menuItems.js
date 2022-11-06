import { useStaticQuery, graphql } from "gatsby";

const useMenuItems = () => {
    const { contentfulMenu } = useStaticQuery(graphql`
        fragment menuItemFields on ContentfulMenuItem {
            id
            text
            page {
                ... on ContentfulPage {
                    slug
                }
                ... on ContentfulBlog {
                    slug
                }
            }
        }
        query {
            contentfulMenu {
                menuItems {
                    ...menuItemFields
                    subMenuItems {
                        ...menuItemFields
                    }
                }
            }
        }
    `);

    const subMenuItems = {};
    contentfulMenu.menuItems.forEach((menuItem) => {
        if (menuItem.subMenuItems) {
            menuItem.subMenuItems.forEach((subMenuItem) => {
                subMenuItems[subMenuItem.id] = true;
            });
        }
    });

    const filteredMenuItems = contentfulMenu.menuItems.filter((menuItem) => {
        return !subMenuItems[menuItem.id];
    });

    return filteredMenuItems;
};

export default useMenuItems;
