import { NavLink, Outlet } from 'react-router-dom';
import { useState } from 'react';

const Nav = () => {
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

  const [input, setinput] = useState('');
  //console.log(input);
  const inputchange = ev => {
    setinput(ev.target.value);
  };
  const onsearch = async ev => {
    ev.preventDefault();
    const items = await fetch(`https://api.tvmaze.com/search/shows?q=${input}`);
    const body = await items.json();
    console.log(body);
  };
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
