import { useEffect, useState } from 'react';
import axios from 'axios';

import { ALL_COUNTRIES } from './../config';

import { Controls } from './../components/Controls';
import { List } from './../components/List';
import { Card } from './../components/Card';
import { useNavigate } from 'react-router-dom';



export const Homepage = ({ countries, setCountries }) => {
  const [filteredCountries, setFilteredCountries] = useState(countries);
  const navigate = useNavigate();

  useEffect(() => {
    if(!countries.length) axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data));
  }, [])

  useEffect(() => {
    handleSearch();
  }, [countries])

  const handleSearch = (search, region) => {
    let data = [...countries];

    if(region) {
      data = data.filter(country => country.region.includes(region))
    }

    if(search) {
      data = data.filter(country => country.name.common.toLowerCase().includes(search.toLowerCase()));
    }

    setFilteredCountries(data);
  }

  return (
    <>
      <Controls onSearch={handleSearch} />
      <List>
        {filteredCountries.map((c) => {
          const country = {
            img: c.flags.png,
            name: c.name.common,
            info: [
              {
                title: 'Population',
                description: c.population.toLocaleString()
              },
              {
                title: 'Region',
                description: c.region
              },
              {
                title: 'Capital',
                description: c.capital
              }
            ]
          }

           return (
            <Card key={c.name.common} {...country} onClick={() => navigate(`/country/${c.name.common}`)}/>
          )
        })}
      </List>
    </>
  )
}