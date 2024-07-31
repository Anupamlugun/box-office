import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Starred from './Starred';
import './App.css';
import Nav from './Nav';
import Home from './Home';
import { useState } from 'react';
import { tvmaze } from './api/tvmaze';
function App() {
  const [input, setinput] = useState('');
  const [search, setSearch] = useState(null);
  const [searcherror, setSearcherror] = useState([]);

  const inputchange = ev => {
    setinput(ev.target.value);
  };

  const onsearch = async ev => {
    ev.preventDefault();

    try {
      const tvdata = await tvmaze(input);
      setSearch(tvdata);
    } catch (error) {
      setSearcherror(error);
    }
  };

  const renderSearch = () => {
    if (search) {
      return search.map(data => (
        <div key={data.show.id}> {data.show.name}</div>
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
