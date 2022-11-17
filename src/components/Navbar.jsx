import React from "react";
import styled from "styled-components";
import logo from "../assets/images/Logo.png";
import { navLink } from "../constants";

const Navbar = () => {
  return (
    <Nav>
      <img src={logo} height="42px" alt="" />
      <div className="navlink">
        {navLink.map((link) => (
          <div
            className={link.title === "Log In" ? "active" : "inactive"}
            key={link.title}
          >
            {link.title}
          </div>
        ))}
      </div>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.div`
  font-family: Manrope;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .navlink {
    color: #0a2640;
    display: flex;
    justify-content: space-between;
    width: 30vw;
    font-weight: 600;
    font-size: 16px;
    line-height: 28px;

    .active {
      border: 1px solid #0a2640;
      border-radius: 20px;

      padding: 5px 30px;
    }
    .inactive {
      border: 1px solid #65e4a3;
      border-radius: 20px;

      padding: 5px 20px;
    }
  }
  @media screen and (max-width: 1150px) {
    .navlink {
      display: none;
      .active {
        padding: 5px 5px;
      }
      .inactive {
        padding: 5px 5px;
      }
    }
  }
`;
