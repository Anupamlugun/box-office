import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Starred from './Starred';
import './App.css';
import Nav from './Nav';
import Home from './Home';
import { useState } from 'react';
import { searcForShows, searcForPeople } from './api/tvmaze';
function App() {
  const [input, setinput] = useState('');
  const [inputRadio, setinputRadio] = useState('shows');
  const [search, setSearch] = useState(null);
  const [searcherror, setSearcherror] = useState([]);
  console.log(inputRadio);

  const inputchange = ev => {
    setinput(ev.target.value);
  };
  const inputRadiochange = ev => {
    setinputRadio(ev.target.value);
  };

  const onsearch = async ev => {
    ev.preventDefault();

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

  const renderSearch = () => {
    if (search) {
      return search[0].show
        ? search.map(data => <div key={data.show.id}> {data.show.name}</div>)
        : search.map(data => (
            <div key={data.person.id}> {data.person.name}</div>
          ));
    }

    if (searcherror) {
      return <div>{searcherror.message}</div>;
    }
    return null;
  };

  return (
    <div>
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
