import React from "react";
import {
    PriceOption,
    PriceGroupWrapper,
    Title,
    Amount,
    PriceOptionInner,
    MostPopularLabel,
    Description,
} from "./style";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export const PriceGroup = ({ priceOptions }) => {
    return (
        <PriceGroupWrapper>
            {priceOptions.map((priceOption) => (
                <PriceOption key={priceOption.contentful_id}>
                    <PriceOptionInner mostPopular={priceOption.mostPopular}>
                        {!!priceOption.mostPopular && (
                            <MostPopularLabel>Most popular!</MostPopularLabel>
                        )}
                        <Title mostPopular={priceOption.mostPopular}>
                            {priceOption.title}
                        </Title>
                        <Amount>
                            <span> £</span>
                            {priceOption.amount}
                            <span> / month</span>
                        </Amount>
                        <Description>
                            {documentToReactComponents(
                                JSON.parse(priceOption.description.raw)
                            )}
                        </Description>
                    </PriceOptionInner>
                </PriceOption>
            ))}
        </PriceGroupWrapper>
    );
};
