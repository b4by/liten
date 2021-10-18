import styled from "styled-components";
import imgBgMobile from "../../assets/img/screen-2__mobile@2x.jpg";
import imgBgTablet from "../../assets/img/start-screen__tablet@2x.jpg";
import { Button } from "../../components/UI/button";
import { breakpoints } from "../../helpers/breakpoints";
import imgRobots from "../../assets/img/bg_desk.png";
import Lottie from "lottie-react";

export const StyledStartContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-image: url(${imgBgMobile});
  background-repeat: no-repeat;
  background-size: cover;
  ${breakpoints.onlyTablet} {
    background-image: url(${imgBgTablet});
  }
`;

export const StyledMobileCircles = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -222px);
  z-index: -1;
  div:first-child {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 590.32px;
    height: 590.32px;
    border-radius: 50%;
    border: 3px solid rgba(255, 255, 255, 0.2);
  }
  div:last-child {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 740px;
    height: 740px;
    border-radius: 50%;
    border: 3px solid rgba(255, 255, 255, 0.2);
    z-index: 100;
  }
  ${breakpoints.onlyMobile} {
    display: block;
  }
  ${breakpoints.onlyTablet} {
    display: none;
  }
  ${breakpoints.onlyDesktop} {
    display: none;
  }
`;

export const Styled2RobotsLottieContainer = styled.div`
  height: 314px;
  overflow: hidden;
  background-image: url(${imgRobots});
  background-size: 120%;
  background-repeat: no-repeat;
  background-position: center bottom;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  ${breakpoints.onlyTablet} {
    width: 810px;
    height: 810px;
    position: absolute;
    overflow: unset;
    top: 50%;
    transform: translate(0, -50%);
    right: -323px;
    background-size: cover;
    background-position: initial;
    display: flex;
    align-items: start;
    justify-content: center;
  }
  ${breakpoints.onlyDesktop} {
    width: 1289px;
    height: 1289px;
    position: absolute;
    overflow: unset;
    top: 50%;
    transform: translate(0, -50%);
    right: -323px;
    background-size: cover;
    background-position: initial;
    display: flex;
    align-items: start;
    justify-content: center;
  }
`;

export const Styled2RobotsLottie = styled(Lottie)`
  position: relative;

  z-index: 100;
  svg {
    width: auto !important;
    height: auto !important;
  }
  ${breakpoints.onlyTablet} {
    top: 50%;
    left: unset;
    right: 50px;
    transform: translate(0, -50%);
    svg {
      width: 600px !important;
      height: auto !important;
    }
  }
  ${breakpoints.onlyDesktop} {
    top: 50%;
    left: unset;
    right: 0;
    transform: translate(0, -50%);
    svg {
      width: 1100px !important;
      height: auto !important;
    }
  }
`;

export const StyledStartTop = styled.div`
  position: absolute;
  top: -190px;
  left: 50%;
  height: inherit;
  width: 526px;
  transform: translate(-50%, 0);
  background-image: url(${imgRobots});
  background-repeat: no-repeat;
  background-size: contain;
  ${breakpoints.onlyTablet} {
    top: 50%;
    left: 100%;
    width: 810px;
    transform: translate(-50%, -50%);
    background-size: cover;
  }
  ${breakpoints.onlyDesktop} {
    top: 50%;
    left: 100%;
    width: 1289px;
    transform: translate(-50%, -50%);
    background-size: cover;
  }
`;

export const StyledStartContent = styled.div`
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.7) 46.88%,
    rgba(255, 255, 255, 0) 100%
  );
  border-radius: 11px;
  padding: 27px 0 20px 0;
  ${breakpoints.onlyTablet} {
    padding: 0;
    padding-top: 181px;
    background: none;
    max-width: 470px;
  }
  ${breakpoints.onlyDesktop} {
    padding: 0;
    padding-top: 198px;
    background: none;
    max-width: 781px;
  }
`;

export const StyledStartTextContainer = styled.div`
  font-style: normal;
  font-size: 18px;
  max-width: 320px;
  margin: 0 auto;
  line-height: 112.63%;
  text-align: center;
  color: #000d3a;
  margin-bottom: 35px;
  ${breakpoints.onlyTablet} {
    text-align: left;
    font-size: 32px;
    margin: 0;
    margin-bottom: 105px;
    max-width: 100%;
  }
  ${breakpoints.onlyDesktop} {
    text-align: left;
    font-size: 50px;
    margin: 0;
    margin-bottom: 64px;
    max-width: 100%;
  }
`;

export const StyledStartText = styled.div`
  white-space: pre-line;
  user-select: none;
  ${breakpoints.onlyTablet} {
    white-space: unset;
  }
  ${breakpoints.onlyDesktop} {
    white-space: unset;
  }
`;

export const StyledStartTextMobile = styled(StyledStartText)`
  margin-top: 4px;
  ${breakpoints.onlyMobile} {
    display: block;
  }
  ${breakpoints.onlyTablet} {
    display: none;
  }
  ${breakpoints.onlyDesktop} {
    display: none;
  }
`;

export const StyledStartTextTablet = styled(StyledStartText)`
  ${breakpoints.onlyMobile} {
    display: none;
  }
  ${breakpoints.onlyTablet} {
    display: block;
  }
  ${breakpoints.onlyDesktop} {
    display: none;
  }
`;

export const StyledStartTextDesktop = styled(StyledStartText)`
  ${breakpoints.onlyMobile} {
    display: none;
  }
  ${breakpoints.onlyTablet} {
    display: none;
  }
  ${breakpoints.onlyDesktop} {
    display: block;
  }
`;

export const StyledStartButton = styled(Button)`
  text-transform: uppercase;
  font-weight: 600;
  font-size: 30px;
  line-height: 112.63%;
  color: #ffffff;
  height: 59px;
  width: 100%;
  z-index: 1000;
  position: relative;
  ${breakpoints.onlyTablet} {
    font-size: 40px;
    height: 84px;
  }
  ${breakpoints.onlyDesktop} {
    font-size: 64px;
    height: 132px;
  }
`;
