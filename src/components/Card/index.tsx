import { Company, Container, Name } from "./styles"

interface ICard {
    name: string;
    company: string;
}

export const Card = ({ name, company }: ICard) => {
    return (
        <Container>
            <Name>{name}</Name>
            <Company>{company}</Company>
        </Container>
    )
}