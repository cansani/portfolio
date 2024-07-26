import { CardContainer, HoverRender } from "./styles";

interface CardProps {
    name: string
    url: string
    randomImg: string
    homepage: string
}

export function Card({ name, url, randomImg, homepage }: CardProps) {
    const handleLinkOrRepo = homepage === '' ? url : homepage

    return (
        <CardContainer href={handleLinkOrRepo}>
            <img src={randomImg} />
            <HoverRender>{name}</HoverRender>
        </CardContainer>
    )
}