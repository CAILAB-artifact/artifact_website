// src/components/Header.jsx
import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <NavBar>
      {/* 햄버거 버튼 */}
      <MenuButton onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX size={28} color="black" /> : <FiMenu size={28} color="black" />}
      </MenuButton>

      {/* 메뉴 목록 */}
      <NavMenu $open={menuOpen}>
        <NavItem><StyledLink to="/" onClick={() => setMenuOpen(false)}>HOME</StyledLink></NavItem>
        <NavItem><StyledLink to="/work" onClick={() => setMenuOpen(false)}>WORK</StyledLink></NavItem>
        <NavItem><StyledLink to="/artists" onClick={() => setMenuOpen(false)}>ARTISTS</StyledLink></NavItem>
        <NavItem><StyledLink to="/about" onClick={() => setMenuOpen(false)}>ABOUT</StyledLink></NavItem>
      </NavMenu>
    </NavBar>
  );
}

/* ---------------- styled ---------------- */

const NavBar = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box; /* padding이 width에 포함되도록 하여 우측 오버플로우 방지 */
  padding: 20px 30px;
  background: transparent;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  z-index: 1000;
`;


const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 1100;

  @media (max-width: 768px) {
    display: block;
  }
`;

const NavMenu = styled.ul`
  list-style: none;
  display: flex;
  gap: 40px;
  margin-left: 20px;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: ${({ $open }) => ($open ? "0" : "-100%")};
    height: 100vh;
    width: 200px;
    background: rgba(0, 0, 0, 0.95);
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    transition: left 0.3s ease;
    margin-left: 0;
  }
`;

const NavItem = styled.li`
  font-size: 18px;
  font-weight: 600;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  position: relative;
  transition: color 0.3s ease;

  @media (max-width: 768px) {
    color: white;
    &::after {
      background: white;
    }
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -4px;
    width: 0;
    height: 2px;
    background: black;
    transition: width 0.3s ease;
  }

  &:hover {
    color: #555;
  }

  &:hover::after {
    width: 100%;
  }
`;
