import React from "react";
import styled from "styled-components";
import Contact from "./contact";
import logo from "../assets/images/Logo.png";

const Footer = () => {
  return (
    <Wrapper>
      <Contact />
      <div className="flex_container">
        <div>
          <div className="flex_column">
            <img src={logo} height="41px" alt="" />
            <p className="content">
              Social media validation business model canvas graphical user
              interface launch party creative facebook iPad twitter.
            </p>
          </div>
        </div>
        <div className="container_two">
          <div className="flex_item">
            <p className="header">Landing</p>
            <p>Home</p>
            <p>Products</p>
            <p>Services</p>
          </div>
          <div className="flex_item">
            <p className="header">Company</p>
            <p>Home</p>
            <p>
              Careers <span>Hiring</span>
            </p>
            <p>Services</p>
          </div>
          <div className="flex_item">
            <p className="header">Resources</p>
            <p>Blog</p>
            <p>Products</p>
            <p>Services</p>
          </div>
        </div>
      </div>
      <p className="right">All rights reserved.</p>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
  height: 100vh;
  background-color: white;
  padding: 6rem 6rem;
  display: flex;
  flex-direction: column;

  color: #777777;
  justify-content: space-between;
  .flex_container {
    display: flex;
    width: 100%;
  }
  .content {
    font-size: 16px;
    line-height: 28px;
    width: 300px;
  }
  .container_two {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .flex_column {
    margin-right: 200px;
  }
  .flex_item {
    display: flex;
    justify-content: space-between;

    flex-direction: column;
    width: 100%;
    span {
      padding: 1px 14px;
      width: 72px;
      height: 40px;
      background: #65e4a3;
      border-radius: 120px;
      font-size: 13px;
      line-height: 28px;
      color: #0a2640;
    }
  }
  .flex_p {
    width: 509px;
    font-size: 20px;
    line-height: 32px;
  }
  .header {
    font-weight: 700;
    font-size: 20px;
    color: #000000 !important;
  }

  .flex_title {
    font-size: 48px;
    line-height: 72px;
    span {
      color: #69e6a6;
    }
  }
  @media screen and (max-width: 850px) {
    width: 100vw;
    height: 100%;
    padding: 4rem 1rem;
    .flex_container {
      margin-top: 4rem;
      display: block;
    }
  }
`;
