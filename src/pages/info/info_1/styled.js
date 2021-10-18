import styled, { css, keyframes } from "styled-components";
import { Button } from "../../../components/UI/button";
import Lottie from "lottie-react";
import { breakpoints } from "../../../helpers/breakpoints";
import ArrowPinkSvg from "../../../assets/svg/arrow--pink.svg";
import ArrowPurpleSvg from "../../../assets/svg/arrow--purple.svg";

const pulse = keyframes`
 0% {
    transform: translate(-50%, -50%) scale(0.5);
 }
 100% {
    transform: translate(-50%, -50%) scale(1);
 }
`;

export const StyledLitenContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;

export const StyledLitenLottie = styled(Lottie)`
  overflow: hidden;
  position: absolute;
  transform: rotate(157deg);
  top: -440px;
  left: -30px;
  z-index: 10;
  ${breakpoints.onlyTablet} {
    top: -641px;
    left: 95px;
  }
  ${breakpoints.onlyDesktop} {
    top: -641px;
    left: 95px;
  }
  svg {
    width: auto !important;
    height: 600px !important;
    ${breakpoints.onlyTablet} {
      width: auto !important;
      height: 900px !important;
    }
    ${breakpoints.onlyDesktop} {
      width: auto !important;
      height: 900px !important;
    }
  }
`;

export const StyledCircles = styled.div`
  pointer-events: none;
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  &::after {
    content: "";
    width: 345px;
    height: 345px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    border: 3px solid rgba(255, 255, 255, 0.2);
    animation: 1.5s ${pulse} infinite alternate;
  }
  ${breakpoints.onlyTablet} {
    display: none;
  }
  ${breakpoints.onlyDesktop} {
    display: none;
  }
  div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    border: 3px solid rgba(255, 255, 255, 0.2);
  }
  div:first-child {
    width: 473px;
    height: 473px;
    animation: 4.5s ${pulse} infinite alternate;
  }
  div:last-child {
    width: 593px;
    height: 593px;
    animation: 2.5s ${pulse} infinite alternate;
  }
`;

export const StyledInfoContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 21px;
  width: 298px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  ${breakpoints.onlyTablet} {
    top: 262px;
    transform: translate(-50%, 0);
    max-width: 884px;
    width: 100%;
    display: grid;
    gap: 32px;
    grid-template-areas:
      "text1 text1"
      "text2 text2"
      "button1 button2";
  }
  ${breakpoints.onlyDesktop} {
    top: 244px;
    transform: translate(-50%, 0);
    max-width: 1660px;
    width: 100%;
    display: grid;
    gap: 63px;
    grid-template-areas:
      "text1 text1"
      "text2 text2"
      "button1 button2";
  }
`;

export const StyledInfoText = styled.span`
  font-weight: normal;
  font-size: 22px;
  line-height: 112.63%;
  text-align: center;
  color: #000d3a;
  position: relative;
  ${breakpoints.onlyTablet} {
    font-size: 30px;
    &:first-of-type {
      grid-area: text1;
      &::after {
        content: "";
        position: absolute;
        width: 192.13px;
        left: 0;
        top: 38px;
        height: 269.12px;
        background-image: url(${ArrowPurpleSvg});
        background-repeat: no-repeat;
        background-size: contain;
      }
    }
    &:last-of-type {
      grid-area: text2;
      max-width: 568px;
      margin: 0 auto;
      &::after {
        content: "";
        position: absolute;
        width: 192.13px;
        right: -110px;
        height: 269.12px;
        background-image: url(${ArrowPinkSvg});
        background-repeat: no-repeat;
        background-size: contain;
      }
    }
  }
  ${breakpoints.onlyDesktop} {
    font-size: 50px;
    &:first-of-type {
      grid-area: text1;
      &::after {
        content: "";
        position: absolute;
        width: 233.13px;
        left: 0;
        top: 62px;
        height: 361.12px;
        background-image: url(${ArrowPurpleSvg});
        background-repeat: no-repeat;
        background-size: contain;
      }
    }
    &:last-of-type {
      grid-area: text2;
      max-width: 1187px;
      width: 100%;
      margin: 0 auto;
      &::after {
        content: "";
        position: absolute;
        width: 248.13px;
        right: -117px;
        height: 294.12px;
        background-image: url(${ArrowPinkSvg});
        background-repeat: no-repeat;
        background-size: contain;
      }
    }
  }
`;

export const StyledInfoButton = styled(Button)`
  text-transform: uppercase;
  line-height: 112.63%;
  a {
    text-decoration: none;
    color: inherit;
  }
  ${(props) =>
    props.pink &&
    css`
      background: #c860ca;
    `}
  ${breakpoints.onlyTablet} {
    font-size: 20px;
    margin-top: 150px;
  }
  ${breakpoints.onlyDesktop} {
    font-size: 40px;
    margin-top: 150px;
  }
  &:first-of-type {
    font-size: 20px;
    padding: 0 19px;
    width: 298px;
    height: 55px;
    grid-area: button1;
    ${breakpoints.onlyTablet} {
      width: 399px;
      height: 73px;
    }
    ${breakpoints.onlyDesktop} {
      font-size: 40px;
      width: 781px;
      height: 132px;
    }
  }
  &:last-of-type {
    padding: 10px 28px;
    font-size: 16px;
    width: 298px;
    height: 55px;
    grid-area: button2;
    ${breakpoints.onlyTablet} {
      width: 399px;
      height: 73px;
    }
    ${breakpoints.onlyDesktop} {
      font-size: 40px;
      width: 781px;
      height: 132px;
    }
  }
`;
