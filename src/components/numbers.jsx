import React from "react";
import styled from "styled-components";

const Numbers = () => {
  return (
    <Wrapper>
      <p className="title">Our numbers</p>
      <p className="content">
        Handshake infographic mass market crowdfunding iteration.
      </p>
      <div className="flex_div">
        <div className="flex_item">
          <p>
            120m <br />
            <span>Cool feature title</span>
          </p>
        </div>
        <div className="flex_item">
          <p>
            10.000 <br />
            <span>Cool feature title</span>
          </p>
        </div>
        <div className="flex_item">
          <p>
            240 <br />
            <span>Cool feature title</span>
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Numbers;

const Wrapper = styled.div`
  font-family: Manrope;
  color: #0a2640;
  height: 60vh;
  background-color: white;
  padding: 4rem 15rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  .title {
    font-weight: 400;
    font-size: 20px;
  }
  .content {
    width: 842px;
    font-size: 48px;
    font-weight: 400;
    line-height: 72px;
    text-align: center;
    margin: 0;
  }
  .flex_div {
    display: flex;
    width: 100%;
    justify-content: space-between;
    font-weight: 400;
    font-size: 96px;
    line-height: 56px;
    span {
      font-size: 24px;
      line-height: 36px;
    }
  }
  @media screen and (max-width: 850px) {
    width: 100vw;
    height: 100%;
    padding: 4rem 5rem;
    .flex_div {
      display: block;
    }
    .content {
      width: 200px;
      font-size: 18px;
      line-height: 30px;
    }
  }
`;
