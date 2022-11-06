import React from "react";
import { BLOCKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Hero } from "../Hero";
import { RichTextWrapper } from "./style";
import { PriceGroup } from "../PriceGroup";
import { GatsbyImage } from "gatsby-plugin-image";

export const RichText = ({ raw, references }) => {
    const embeddedEntryMap = {};
    references.forEach((reference) => {
        embeddedEntryMap[reference.contentful_id] = reference;
    });

    const options = {
        renderNode: {
            [BLOCKS.EMBEDDED_ASSET]: (node) => {
                const data = embeddedEntryMap[node.data.target.sys.id];
                return (
                    <GatsbyImage
                        alt={data.title}
                        image={data.gatsbyImageData}
                    />
                );
            },
            [BLOCKS.EMBEDDED_ENTRY]: (node) => {
                const data = embeddedEntryMap[node.data.target.sys.id];
                switch (data.__typename) {
                    case "ContentfulHero": {
                        return (
                            <Hero
                                subHeading={data.subHeading}
                                heading={data.heading}
                                backgroundImage={
                                    data.backgroundImage.gatsbyImageData
                                }
                            />
                        );
                    }
                    case "ContentfulPriceGroup": {
                        return <PriceGroup priceOptions={data.priceOptions} />;
                    }
                    default:
                        return null;
                }
            },
        },
    };

    return (
        <RichTextWrapper>
            {documentToReactComponents(JSON.parse(raw), options)}
        </RichTextWrapper>
    );
};
