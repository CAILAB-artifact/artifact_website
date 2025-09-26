// src/components/Header.jsx
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Header({ color = "white" }) { 
  return (
    <NavBar>
      <NavMenu>
        <NavItem><StyledLink to="/" $color={color}>HOME</StyledLink></NavItem>
        <NavItem><StyledLink to="/work" $color={color}>WORK</StyledLink></NavItem>
        <NavItem><StyledLink to="/artists" $color={color}>ARTISTS</StyledLink></NavItem>
        <NavItem><StyledLink to="/about" $color={color}>ABOUT</StyledLink></NavItem>
      </NavMenu>
    </NavBar>
  );
}

const NavBar = styled.header`
  position: absolute;
  top: 0;
  left: -90px;
  width: 100%;
  padding: 20px 40px;
  background: transparent;
  display: flex;
  justify-content: flex-end;
  z-index: 1000;
`;

const NavMenu = styled.ul`
  list-style: none;
  display: flex;
  gap: 40px;
`;

const NavItem = styled.li`
  font-size: 18px;
  font-weight: 600;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ $color }) => $color}; 
  position: relative;
  transition: color 0.3s ease;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -4px;
    width: 0;
    height: 2px;
    background: ${({ $color }) => $color};
    transition: width 0.3s ease;
  }

  &:hover {
    color: ${({ $color }) =>
      $color === "white" ? "#ccc" : "#555"};
  }

  &:hover::after {
    width: 100%;
  }
`;
