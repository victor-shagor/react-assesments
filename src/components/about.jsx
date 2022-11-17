import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

const About = () => {
  return (
    <Wrapper>
      <Navbar />
      <div className="about_wrapper">
        <div>
          <p className="title">About</p>
          <p className="content_one">
            We love to make great things, things that matter.
          </p>
        </div>
        <div>
          <p className="content_two">
            Funding handshake buyer business-to-business metrics iPad
            partnership. First mover advantage innovator success deployment
            non-disclosure.
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default About;

const Wrapper = styled.div`
  font-family: Manrope;
  height: 35vh;
  background-color: #65e4a3;
  padding: 2rem 4rem 6rem 4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .title {
    color: #0a2640;
    font-weight: 400;
    font-size: 20px;
  }
  .about_wrapper {
    display: flex;
    justify-content: space-between;
    .title {
      margin: 0;
    }
    .content_one {
      font-size: 48px;
      line-height: 72px;
      font-weight: 400;
      width: 580px;
      margin: 0;
    }
    .content_two {
      font-size: 16px;
      width: 455px;
      line-height: 28px;
      color: #0a2640;
    }
  }
  @media screen and (max-width: 600px) {
    width: 100vw;
    .about_wrapper {
      display: block;
      .content_one {
        font-size: 20px;
        width: 200px;
        line-height: 30px;
      }
      .content_two {
        font-size: 16px;
        width: 200px;
      }
    }
  }
`;
