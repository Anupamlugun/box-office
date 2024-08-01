import { NavLink, Outlet } from 'react-router-dom';

const Nav = ({
  input,
  inputchange,
  onsearch,
  inputRadiochange,
  inputRadio,
}) => {
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
        <label>
          Shows
          <input
            type="radio"
            name="search-option"
            value="shows"
            onChange={inputRadiochange}
            checked={inputRadio === 'shows'}
          ></input>
        </label>
        <label>
          Actors
          <input
            type="radio"
            name="search-option"
            value="people"
            onChange={inputRadiochange}
            checked={inputRadio === 'people'}
          ></input>
        </label>
        <button type="submit">search</button>
      </form>
      <Outlet />
    </>
  );
};

export default Nav;
