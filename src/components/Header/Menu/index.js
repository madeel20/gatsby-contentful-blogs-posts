import React from "react";
import { Link } from "gatsby";
import { MenuWrapper, MenuItem, SubMenuItemWrapper } from "./style";
import useMenuItems from "hooks/menuItems";

const Menu = () => {
    const menuItems = useMenuItems();
    return (
        <MenuWrapper>
            {menuItems.map((menuItem) => (
                <MenuItem key={menuItem.id}>
                    {menuItem.subMenuItems ? (
                        <SubMenuItemWrapper>
                            <div>{menuItem.text}</div>
                            <div>
                                {menuItem.subMenuItems.map((subMenuItem) => (
                                    <div key={subMenuItem.id}>
                                        <Link to={`/${subMenuItem.page.slug}`}>
                                            {subMenuItem.text}
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </SubMenuItemWrapper>
                    ) : (
                        <Link to={`/${menuItem.page.slug}`}>
                            {menuItem.text}
                        </Link>
                    )}
                </MenuItem>
            ))}
            <MenuItem>
                <Link to="/contact">Contact</Link>
            </MenuItem>
        </MenuWrapper>
    );
};

export default Menu;
