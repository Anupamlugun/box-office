import { NavLink, Outlet } from 'react-router-dom';
//import { useState } from 'react';
//import { tvmaze } from './api/tvmaze';
const Nav = ({ input, inputchange, onsearch }) => {
  const link = [
    {
      to: '/',
      text: 'Home',
    },
    {
      to: '/starred',
      text: 'Starred',
    },
  ];

  /*const [input, setinput] = useState('');
  const [search, setSearch] = useState(null);
  console.log(search);
  const inputchange = ev => {
    setinput(ev.target.value);
  };
  const onsearch = async ev => {
    ev.preventDefault();
    const tvdata = await tvmaze(input);
    setSearch(tvdata);
  };*/
  return (
    <>
      <header>
        <nav>
          <ul>
            {link.map(items => (
              <li key={items.to}>
                <NavLink to={items.to}>{items.text}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <form onSubmit={onsearch}>
        <input type="text" value={input} onChange={inputchange}></input>
        <button type="submit">search</button>
      </form>
      <Outlet />
    </>
  );
};

export default Nav;
