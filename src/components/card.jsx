import React from "react";
import styled from "styled-components";

const Card = ({ img, title, subTitle, flex = false, imgHeight }) => {
  return (
    <Wrapper flex={flex}>
      <img src={img} alt="png" height={imgHeight} />
      <div className={flex ? "flex_item" : ""}>
        <p className="title">{title}</p>
        <p className="sub">{subTitle}</p>
      </div>
    </Wrapper>
  );
};

export default Card;

const Wrapper = styled.div`
  font-family: Manrope;
  display: ${(props) => (props.flex ? "flex" : "")};
  .flex_item {
    margin-left: 2rem;
  }
  .title {
    font-weight: 400;
    font-size: 28px;
    color: #000000;
    margin: 3px;
    padding: 7px 0px;
  }
  .sub {
    color: #777777;
    font-weight: 400;
    font-size: 20px;
    margin: 0;
    padding: 7px 0px;
  }
`;
