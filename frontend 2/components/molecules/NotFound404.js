import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  ${props => {
    if (props.isMobile) {
      return css`
        position: relative;
      `;
    } else {
      return css`
        position: fixed;
        width: 100%;
        height: 100%;
        background-image: url(${props.image});
        background-position: bottom;
        background-size: cover;
        display: flex;
        justify-content: center;
        align-items: center;
      `;
    }
  }}
`;

const WrapperTop = styled.div`
  ${props => {
    if (props.isMobile) {
      return css`
        width: 100vw;
      `;
    } else {
      return css``;
    }
  }}
`;

const Img = styled.img`
  width: 100%;
`;

const WrapperText = styled.div`
  color: #4a4a4a;
  ${props => {
    if (props.isMobile) {
      return css`
        padding: 20px 25px;
      `;
    } else {
      return css`
        text-align: left;
        padding-left: 250px;
        padding-bottom: 50px;
      `;
    }
  }}
`;

const Title = styled.div`
  ${props => {
    if (props.isMobile) {
      return css`
        font-size: 1.2em;
        letter-spacing: 0.2px;
        font-weight: 600;
        margin-bottom: 0.7em;
      `;
    } else {
      return css`
        font-size: 1.7em;
        letter-spacing: 0.2px;
        font-weight: 600;
        margin-bottom: 0.7em;
      `;
    }
  }}
`;

const Description = styled.div`
  ${props => {
    if (props.isMobile) {
      return css`
        font-size: 1em;
        letter-spacing: 0.3px;
        font-weight: 200;
        margin-bottom: 1.2em;
      `;
    } else {
      return css`
        font-size: 1.2em;
        letter-spacing: 0.3px;
        font-weight: 200;
        margin-bottom: 1.2em;
      `;
    }
  }}
`;

const NotFound404 = props => {
  return (
    <Wrapper isMobile={props.isMobile} image={"/static/img/404Desktop.png"}>
      {props.isMobile ? (
        <WrapperTop isMobile={props.isMobile}>
          <Img src={"/static/img/404Mobile.png"} alt={"404 Image"} />
        </WrapperTop>
      ) : null}
      <WrapperText isMobile={props.isMobile}>
        <Title isMobile={props.isMobile}>¡Página no encontrada!</Title>
        <Description isMobile={props.isMobile}>
          Esta página no existe o está en desarrollo.
        </Description>
      </WrapperText>
    </Wrapper>
  );
};

NotFound404.propTypes = {
  isMobile: PropTypes.bool,
  children: PropTypes.string
};

export default NotFound404;
