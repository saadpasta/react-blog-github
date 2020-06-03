import React from "react";
import Sun from "./Sun";
import Moon from "./Moon";
import { func, string } from "prop-types";
import styled from "styled-components";
const Button = styled.button`
  background-color: ${({ theme }) => theme.background};
  border: 2px solid ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  width: 70px;
  height: 70px;
  outline: none;
  border-radius: 50%;
  transition: all 0.1s ease-in-out;
  color: white;
  text-align: center;
  position: fixed;
  cursor: pointer;
  right: 30px;
  bottom: 30px;
  box-shadow:
  0 2.8px 2.2px rgba(0, 0, 0, 0.034),
  0 6.7px 5.3px rgba(0, 0, 0, 0.048),
  0 12.5px 10px rgba(0, 0, 0, 0.06),
  0 22.3px 17.9px rgba(0, 0, 0, 0.072),
  0 41.8px 33.4px rgba(0, 0, 0, 0.086),
  0 100px 80px rgba(0, 0, 0, 0.12);
  }`;
const Toggle = ({ theme, toggleTheme }) => {
  return (
    <Button onClick={toggleTheme}>
      {theme === "light" ? <Moon /> : <Sun />}
    </Button>
  );
};
Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};
export default Toggle;
