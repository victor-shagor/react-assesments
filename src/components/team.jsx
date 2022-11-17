import React from "react";
import styled from "styled-components";
import Card from "./card";
import hero1 from "../assets/images/hero1image.png";
import hero2 from "../assets/images/hero2image.png";
import hero3 from "../assets/images/hero3image.png";

const Team = () => {
  return (
    <Wrapper>
      <div className="content_container">
        <div>
          <p className="title">Our team</p>
          <p className="content_one">The people behind the work</p>
          <p className="content_two">
            Conversion angel investor entrepreneur first mover advantage.
            Handshake infographic mass market crowdfunding iteration. Traction
            stock user experience deployment beta innovator incubator focus.
          </p>
        </div>
      </div>
      <div className="card">
        {[...Array(3).keys()].map((el, idx) => (
          <Card
            key={idx}
            title="Micheal Scott"
            subTitle="General Manager"
            img={hero1}
            imgHeight={"250px"}
          />
        ))}
      </div>
      <div className="flex_card">
        {[...Array(4).keys()].map((el, idx) => (
          <Card
            img={idx === 0 ? hero2 : hero3}
            key={idx}
            title="Dwight Schrute"
            subTitle="General Manager"
            flex={true}
            imgHeight={"120px"}
          />
        ))}
      </div>
    </Wrapper>
  );
};

export default Team;

const Wrapper = styled.div`
  font-family: Manrope;
  height: 140vh;
  background-color: white;
  padding: 4rem 15rem;
  display: flex;
  flex-direction: column;

  .content_container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .content_one {
    font-weight: 400;
    font-size: 48px;
    line-height: 72px;
    margin: 0;
    text-align: left;
  }
  .content_two {
    width: 745px;
    font-weight: 400;
    font-size: 20px;
    line-height: 32px;
    color: #777777;
  }
  .title {
    color: #777777;
    font-weight: 400;
    font-size: 20px;
  }
  .card {
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 5rem;
    margin-top: 2rem;
  }
  .flex_card {
    display: flex;
    flex-wrap: wrap;
    div {
      flex: 50%;
      margin-bottom: 40px;
    }
  }
  @media screen and (max-width: 850px) {
    width: 100vw;
    height: 100%;
    padding: 4rem 5rem;
    .card {
      display: block;
    }
    .content_one {
      font-size: 20px;
      line-height: 30px;
    }
    .content_two {
      width: 200px;
      font-size: 10px;
      line-height: 10px;
    }
  }
`;
