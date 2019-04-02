import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

const NavItems = ['home', 'about', 'speaking', 'blog']

const NavRoot = styled(`nav`)`
  margin: 2rem;
`

const NavList = styled(`ul`)`
  display: flex;
  justify-content: center;
  list-style-type: none;
  padding-left: 0;

  @media (min-width: 1025px) {
    justify-content: flex-end;
  }
`

const NavItem = styled(`li`)`
  padding: 0 0.5rem;

  @media (min-width: 1025px) {
    padding: 0 1rem;
  }
`

const NavLink = styled(Link)`
  text-decoration: none;
  color: #000;
  position: relative;
  letter-spacing: 0;
  text-transform: uppercase;

  :after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: '';
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: #000;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }

  &:hover:after {
    width: 100%;
    left: 0;
  }

  &.active {
    border-bottom: 2px solid #000;

    &:hover:after {
        width: 0%;
    }
  }

  @media (min-width: 1025px) {
    letter-spacing: 0.15rem;
  }
`

const Navigation = () => (
  <NavRoot>
    <NavList>
      {NavItems.map(item => (
        <NavItem key={item}>
          <NavLink to={item !== 'home' ? `/${item}` : `/`} activeClassName="active">{item}</NavLink>
        </NavItem>
      ))}
    </NavList>
  </NavRoot>
)

export default Navigation
