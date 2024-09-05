import styled from "styled-components";

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 100%;
  gap: 2rem;
  width: 100%;
  margin-top: 3rem;

  @media(min-width: 767px) {
    grid-template-columns: minmax(100px, 400px) 1fr;
    align-items: center;
    gap: 5rem;
  }

  @media(min-width: 1024px) {
    grid-template-columns: minmax(400px, 500px) 1fr;
  }
  `;

const InfoImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const InfoTitle = styled.h1`
  margin: 0;
  font-weight: var(--fw-normal);
`;

const ListGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media(min-width: 1024px) {
    flex-direction: row;
    gap: 4rem;
  }
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  line-height: 2;
  max-width: 300px;

  & > span:first-of-type {
    font-weight: var(--fw-bold)
  }
`;


export const Info = (props) => {
  const {
    name: { common: name, official: officialName },
    flags: { png: flag },
    capital = [],
    population,
    region,
    subregion,
    tld = [],
    currencies = {},
    languages = {},
    navigate
  } = props;

  const currencyNames = Object.values(currencies).map((currency) => currency.name)

  const languageNames = Object.values(languages);

  return (
    <Wrapper>
      <InfoImage src={flag} alt={name} />
      <div>
        <InfoTitle>{name}</InfoTitle>
        <ListGroup>
          <List>
            <ListItem>
              <span>Official Name:</span> {officialName}
            </ListItem>
            <ListItem>
              <span>Population:</span> {population}
            </ListItem>
            <ListItem>
              <span>Region:</span> {region}
            </ListItem>
            <ListItem>
              <span>Sub Region:</span> {subregion}
            </ListItem>
          </List>
          <List>
            <ListItem>
              <span>Capital:</span> {capital}
            </ListItem>
            <ListItem>
              <span>Top Level Domain:</span> {tld.map((domain) => (
                <span
                  key={domain}
                  style={{
                    backgroundColor: 'var(--colors-ui-base)',
                    marginInline: '5px',
                    padding: '4px 8px',
                    borderRadius: 'var(--radii)',
                    boxShadow: 'var(--shadow)'
                    }}>
                    {domain}
                  </span>
                ))}
            </ListItem>
            <ListItem>
              <span>Currencies:</span> {currencyNames.join(', ')}
            </ListItem>
            <ListItem>
              <span>Languages:</span> {languageNames.join(', ')}
            </ListItem>
          </List>
        </ListGroup>
      </div>

    </Wrapper>
  )
}