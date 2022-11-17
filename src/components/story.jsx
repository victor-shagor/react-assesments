import React from "react";
import styled from "styled-components";

const Story = () => {
  return (
    <Wrapper>
      <p className="title">Our story</p>
      <p className="content_one">
        Handshake infographic mass market crowdfunding iteration.
      </p>
      <p className="content_two">
        Conversion angel investor entrepreneur first mover advantage. Handshake
        infographic mass market crowdfunding iteration. Traction stock user
        experience deployment beta innovator incubator focus. Sales user
        experience branding growth hacking holy grail monetization conversion
        prototype stock network effects. Learning curve network effects return
        on investment bootstrapping business-to-consumer.
      </p>
    </Wrapper>
  );
};

export default Story;

const Wrapper = styled.div`
  font-family: Manrope;
  height: 55vh;
  background-color: #0a2640;
  color: white;
  padding: 4rem 20rem;
  display: flex;
  flex-direction: column;
  .title {
    font-weight: 400;
    font-size: 20px;
  }
  .content_one {
    width: 842px;
    font-weight: 400;
    font-size: 48px;
    line-height: 72px;
    margin: 0;
  }
  .content_two {
    width: 745px;
    font-weight: 400;
    font-size: 20px;
    line-height: 32px;
  }
  @media screen and (max-width: 850px) {
    width: 100vw;
    height: 100%;
    padding: 4rem 5rem;
    .content_one {
      width: 200px;
      font-size: 18px;
      line-height: 30px;
    }
    .content_two {
      width: 200px;
      font-size: 12px;
      line-height: 20px;
    }
  }
`;
