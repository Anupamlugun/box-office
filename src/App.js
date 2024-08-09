import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Starred from './Starred';
import './App.css';
import Nav from './Nav';
import Home from './Home';
import { useEffect, useState } from 'react';
import { searcForShows, searcForPeople } from './api/tvmaze';
import ShowsGrid from './Shows/ShowsGrid';
import ActorsGrid from './Actors/ActorsGrid';
import Shows from './Shows';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  const [input, setinput] = useState('');
  const [inputRadio, setinputRadio] = useState('shows');
  const [search, setSearch] = useState(null);
  const [searcherror, setSearcherror] = useState([]);

  const inputchange = ev => {
    setinput(ev.target.value);
  };

  const inputRadiochange = ev => {
    setinputRadio(ev.target.value);
  };

  const onsearch = async ev => {
    ev.preventDefault();
    sessionStorage.setItem('radiovalue', inputRadio);
    sessionStorage.setItem('Searchvalue', input);
    try {
      var tvdata;
      if (inputRadio === 'shows') {
        tvdata = await searcForShows(input);
      } else if (inputRadio === 'people') {
        tvdata = await searcForPeople(input);
      }
      setSearch(tvdata);
    } catch (error) {
      setSearcherror(error);
    }
  };

  useEffect(() => {
    const sessionStorageItems = JSON.parse(
      sessionStorage.getItem('listedItems')
    );
    sessionStorageItems ? setSearch(sessionStorageItems) : null;

    const sessionRadio = sessionStorage.getItem('radiovalue');
    sessionRadio ? setinputRadio(sessionRadio) : null;

    const sessionSearch = sessionStorage.getItem('Searchvalue');
    sessionSearch ? setinput(sessionSearch) : null;
  }, []);

  const renderSearch = () => {
    if (search?.length > 0) {
      sessionStorage.setItem('listedItems', JSON.stringify(search));

      return search[0].show ? (
        <ShowsGrid shows={search} />
      ) : (
        <ActorsGrid actors={search} />
      );
    }

    if (search?.length === 0) {
      return <div>Data not found</div>;
    }
    if (searcherror) {
      return <div>{searcherror.message}</div>;
    }
  };

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Nav
                  input={input}
                  inputchange={inputchange}
                  onsearch={onsearch}
                  inputRadiochange={inputRadiochange}
                  inputRadio={inputRadio}
                />
              }
            >
              <Route path="/" element={<Home renderSearch={renderSearch} />} />
              <Route path="starred" element={<Starred />} />
              <Route path="*" element={<div>Not found</div>} />
            </Route>

            <Route path="/show/:showId" element={<Shows />}></Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
