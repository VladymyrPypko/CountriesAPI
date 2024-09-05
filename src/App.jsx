import { useState } from 'react';

import { Routes, Route } from 'react-router-dom';

import { Header } from './components/Header';
import { Main } from './components/Main';
import { Homepage } from './pages/Homepage';
import { Details } from './pages/Details';
import { NotFound } from './pages/NotFound';

function App() {
  const [countries, setCountries] = useState([]);

  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<Homepage countries={countries} setCountries={setCountries} />}></Route>
          <Route path="/country/:name" element={<Details />}></Route>
          <Route element={<NotFound />}></Route>
        </Routes>
      </Main>
    </>
  );
}

export default App;
