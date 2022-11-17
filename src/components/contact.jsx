import React from "react";
import styled from "styled-components";

const Contact = () => {
  return (
    <Wrapper>
      <p className="title">
        An enterprise template to ramp up your company website
      </p>
      <span>
        <input placeholder="Your email address" />
        <button>Start now</button>
      </span>
    </Wrapper>
  );
};

export default Contact;

const Wrapper = styled.div`
  font-family: Manrope;
  width: 100%;
  height: 400px;
  background-color: #0a2640;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .title {
    font-size: 48px;
    line-height: 72px;
    width: 716px;
    text-align: center;
  }
  input {
    background: #ffffff;
    border: 2px solid #ffffff;
    border-radius: 240px;
    width: 370px;
    height: 56px;
    margin: 1rem;
    font-size: 20px;
    line-height: 32px;
    text-align: center;
  }
  button {
    background: #65e4a3;
    text-align: center;
    border: 2px solid #65e4a3;
    border-radius: 56px;
    margin: 1rem;
    width: 210px;
    height: 60px;
    font-size: 20px;
    font-weight: 700;
    align-items: center;
    color: #0a2640;
  }
`;
