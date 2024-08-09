import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';

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
        <TitleWrapper>
          <h1>Box Office</h1>
          <p>
            This is a React app developed by Anupam Lugun to search for shows
            and actors.
          </p>
        </TitleWrapper>
        <nav>
          <NavList>
            {link.map(items => (
              <li key={items.to}>
                <LinkStyled to={items.to}>{items.text}</LinkStyled>
              </li>
            ))}
          </NavList>
        </nav>
      </header>
      <form onSubmit={onsearch}>
        <SearchInput
          type="text"
          value={input}
          onChange={inputchange}
        ></SearchInput>

        <RadiosWrapper>
          <StyledRadio>
            <input
              type="radio"
              name="search-option"
              value="shows"
              onChange={inputRadiochange}
              checked={inputRadio === 'shows'}
            ></input>
            Shows
          </StyledRadio>
          <StyledRadio>
            <input
              type="radio"
              name="search-option"
              value="people"
              onChange={inputRadiochange}
              checked={inputRadio === 'people'}
            ></input>
            Actors
          </StyledRadio>
        </RadiosWrapper>
        <SearchButtonWrapper>
          <button type="submit">search</button>
        </SearchButtonWrapper>
      </form>
      <Outlet />
    </>
  );
};

export default Nav;

const TitleWrapper = styled.div`
  text-align: center;
  margin: 0 0 40px;
  h1 {
    color: ${({ theme }) => theme.mainColors.blue};
    letter-spacing: 10px;
    text-transform: uppercase;
    margin: 0 0 10px;
  }
  p {
    color: ${({ theme }) => theme.mainColors.blue};
    margin: 0;
  }
`;

const NavList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0 0 30px;
  padding: 0;
  li {
    margin: 0 10px;
  }
`;

const LinkStyled = styled(NavLink)`
  display: block;
  padding: 3px 15px;
  position: relative;
  text-decoration: none;
  color: ${({ theme }) => theme.mainColors.gray};
  &.active {
    color: ${({ theme }) => theme.mainColors.blue};
    &:after {
      content: '';
      position: absolute;
      display: block;
      height: 2px;
      left: 0%;
      bottom: 0;
      background-color: ${({ theme }) => theme.mainColors.blue};
      animation: slide-in 0.3s ease-in forwards;
      @keyframes slide-in {
        from {
          left: 50%;
          width: 0;
        }
        to {
          left: 0%;
          width: 100%;
        }
      }
    }
  }
`;

const StyledRadio = styled.label`
  display: block;
  position: relative;
  padding-left: 25px;
  cursor: pointer;
  font-size: 13px;
  user-select: none;
  font-weight: 700;
  line-height: 1.65;
  input {
    cursor: pointer;
  }
  span {
    position: absolute;
    top: 0;
    left: 0;
    height: 16px;
    width: 16px;
    background-color: #fff;
    border: 2px solid ${({ theme }) => theme.mainColors.blue};
    border-radius: 50%;
  }
  input:checked ~ span {
    background-color: #fff;
    border: 2px solid ${({ theme }) => theme.mainColors.blue};
  }
  span:after {
    content: '';
    position: absolute;
    display: none;
  }
  input:checked ~ span:after {
    display: block;
  }
  span:after {
    top: 4px;
    left: 4px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${({ theme }) => theme.mainColors.blue};
  }
`;

const SearchInput = styled.input`
  display: block;
  font-family: 'Roboto', sans-serif;
  width: 200px;
  margin: auto;
  outline: none;
  padding: 13px 15px;
  border: 1px solid #dbdbdb;
  box-shadow: 0px 0px 10px 0px rgba(219, 219, 219, 0.5);
  font-size: 14px;
  border-radius: 12px;
  color: #8d8d8d;
  &::placeholder {
    font-weight: 300;
    color: #8d8d8d;
  }
`;

const RadiosWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  label {
    margin: 0 15px;
  }
`;

const SearchButtonWrapper = styled.div`
  text-align: center;
  margin-bottom: 35px;
  button {
    color: #fff;
    background-color: ${({ theme }) => theme.mainColors.blue};
    margin: auto;
    padding: 10px 50px;
    font-size: 15px;
    border: none;
    outline: none;
    border-radius: 12px;
    &:hover {
      cursor: pointer;
    }
  }
`;
