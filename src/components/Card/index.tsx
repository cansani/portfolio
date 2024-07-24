import { CardContainer, HoverRender } from "./styles";

interface CardProps {
    name: string
    url: string
    randomImg: string
}

export function Card({ name, url, randomImg }: CardProps) {
    return (
        <CardContainer href={url}>
            <img src={randomImg} />
            <HoverRender>{name}</HoverRender>
        </CardContainer>
    )
}