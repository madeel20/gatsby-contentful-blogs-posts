import React from "react";
import { Wrapper, PageNumber } from "./style";
import { Link } from "gatsby";

const Pagination = ({ currentPage, totalPages, slug }) => {
    return (
        <Wrapper>
            {Array.from({ length: totalPages }).map((n, i) => (
                <PageNumber key={i} isActive={i + 1 === currentPage}>
                    <Link to={`/${slug}/${i + 1 === 1 ? "" : i + 1}`}>
                        {i + 1}
                    </Link>
                </PageNumber>
            ))}
        </Wrapper>
    );
};

export default Pagination;
