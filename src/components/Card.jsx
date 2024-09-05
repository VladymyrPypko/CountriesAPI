import styled from "styled-components"

const Wrapper = styled.article`
  border-radius: var(--radii);
  background-color: var(--colors-ui-base);
  box-shadow: var(--shadow);
  overflow: hidden;
  cursor: pointer;
`;

const CardImage = styled.img`
  display: block;
  width: 100%;
  height: 150px;
  object-fit: cover;
  object-position: center;
`;

const CardBody = styled.div`
  padding-block: 1.5rem 2rem;
  padding-inline: 1.5rem;
`;

const CardTitle = styled.h3`
  margin: 0;
  font-size: var(--fs-md);
  font-weight: var(--fw-bold);
`;

const CardList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  margin: 0;
  list-style: none;
  padding: 1rem 0 0;
`;

const CardListItem = styled.li`
  font-size: var(--fs-sm);
  line-height: 1.5;

  & > span {
    font-weight: var(--fw-normal);
  }
`;

export const Card = ({ img, name, info, onClick}) => {
  return (
    <Wrapper onClick={onClick}>
      <CardImage src={img} alt={name}/>
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardList>
          {info.map((el) => (
            <CardListItem key={el.title}>
              <span>{el.title}</span>: {el.description}
            </CardListItem>
          ))}
        </CardList>
      </CardBody>
    </Wrapper>
  )
}