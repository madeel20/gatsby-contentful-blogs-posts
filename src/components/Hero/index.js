import React from "react";
import { HeroWrapper, HeadingWrapper, Heading, SubHeading } from "./style";
import { getImage } from "gatsby-plugin-image";
import { BgImage } from "gbimage-bridge";

export const Hero = ({ backgroundImage, heading, subHeading }) => {
    const pluginImage = getImage(backgroundImage);
    return (
        <HeroWrapper>
            <BgImage image={pluginImage}>
                <HeadingWrapper>
                    <div>
                        <Heading>{heading}</Heading>
                        {!!subHeading && <SubHeading>{subHeading}</SubHeading>}
                    </div>
                </HeadingWrapper>
            </BgImage>
        </HeroWrapper>
    );
};
