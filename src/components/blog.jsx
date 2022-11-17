import React from "react";
import styled from "styled-components";

const Blog = () => {
  return (
    <Wrapper>
      <p className="title">Our Blog</p>
      <p className="content_one">
        Value proposition accelerator product management venture
      </p>
      <hr />
      <div className="flex_container">
        <div className="flex_item">
          <p className="flex_title">
            We are <span>commited.</span>
          </p>
          <p className="flex_p">
            Conversion angel investor entrepreneur first mover advantage.
            Handshake infographic mass market crowdfunding iteration.{" "}
          </p>
        </div>
        <div className="flex_item">
          <p className="flex_title">
            We are <span>responsible.</span>
          </p>
          <p className="flex_p">
            Mass market iPhone buzz conversion analytics stock iteration
            responsive web design user experience business plan handshake.
            Return on investment seed round MVP backing supply chain.
          </p>
        </div>
        <div className="flex_item">
          <p className="flex_title">
            We aim for <span>progress.</span>
          </p>
          <p className="flex_p">
            Bootstrapping rockstar first mover advantage business model canvas
            alpha deployment launch party beta facebook metrics gamification
            growth hacking customer focus.
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Blog;

const Wrapper = styled.div`
  font-family: Manrope;
  height: 100vh;
  background-color: #0a2640;
  color: white;
  padding: 4rem 8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .title {
    font-weight: 400;
    font-size: 20px;
  }
  .content_one {
    font-size: 48px;
    line-height: 72px;
    text-align: center;
    width: 842px;
  }
  hr {
    width: 100%;
  }
  .flex_container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
  }
  .flex_item {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  .flex_p {
    width: 509px;
    font-size: 20px;
    line-height: 32px;
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
    padding: 4rem 5rem;
    .card {
      display: block;
    }
  }
  @media screen and (max-width: 500px) {
    .content_one {
      font-size: 18px;
      line-height: 30px;
      text-align: center;
      width: 200px;
    }
    .flex_item {
      display: block;
    }
    .flex_p {
      width: 200px;
      font-size: 15px;
      line-height: 22px;
    }
  }
`;
