import Lottie from "lottie-react";
import styled, { keyframes } from "styled-components";
import imgBubble from "../../assets/svg/bubble.svg";
import imgLogo from "../../assets/svg/music.svg";
import imgMobileBg from "../../assets/img/screen-1__mobile@2x.jpg";
import imgTabletBg from "../../assets/img/screen-1__tablet@2x.jpg";
import imgDesktopBg from "../../assets/img/screen-1__desktop@2x.jpg";
import { Button } from "../../components/UI/button";
import Logo from "../../assets/svg/szb-logo-white.svg";
import { breakpoints } from "../../helpers/breakpoints";

export const StyledHomeContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-image: url(${imgMobileBg});
  background-repeat: no-repeat;
  background-size: cover;
  ${breakpoints.onlyTablet} {
    background-image: url(${imgTabletBg});
  }
  ${breakpoints.onlyDesktop} {
    background-image: url(${imgDesktopBg});
  }
`;

export const StyledLitenContainer = styled.div`
  position: absolute;
  top: 0;
  right: -105px;
  z-index: -1;
  ${breakpoints.onlyTablet} {
    position: fixed;
    top: unset;
    bottom: -28px;
    right: -205px;
  }
`;

export const pulse = keyframes`
0% {
    opacity: 1;
    transform: scale3d(0, 0, 0);
}
100% {
    opacity: 0;
}
`;

export const StyledCircles = styled.div`
  pointer-events: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 50%;
  left: 100%;
  transform: translate(0, -50%);
  z-index: -2;
  div:first-child {
    position: fixed;
    height: 374px;
    width: 374px;
    border: 3px solid rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    animation: 2.5s ${pulse} infinite;
  }
  div:nth-child(2) {
    position: fixed;
    height: 511px;
    width: 511px;
    border: 3px solid rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    animation: 3.5s ${pulse} infinite;
  }
  div:last-child {
    position: fixed;
    height: 641px;
    width: 641px;
    border: 3px solid rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    animation: 4.5s ${pulse} infinite;
  }
  ${breakpoints.onlyDesktop} {
    display: none;
  }
`;

export const StyledLitenBubble = styled.img.attrs({
  src: `${imgBubble}`,
})`
  position: absolute;
  top: 82px;
  left: -111px;
  z-index: 2;
  ${breakpoints.onlyTablet} {
    width: 278px;
    height: 204px;
    left: -110px;
    top: 45px;
  }
  ${breakpoints.onlyDesktop} {
    width: 496px;
    height: 289.12px;
    left: -400px;
    top: 46px;
  }
`;

export const StyledLottie = styled(Lottie)`
  overflow: hidden;
  transform: rotate(-9deg);
  z-index: -1;
  svg {
    width: 348px !important;
    height: 461px !important;
  }
  ${breakpoints.onlyTablet} {
    top: auto;
    right: -165px;
    bottom: -74px;
    width: auto;
    height: auto;
    svg {
      width: 654px !important;
      height: 693px !important;
    }
  }
  ${breakpoints.onlyDesktop} {
    top: auto;
    right: -165px;
    bottom: -74px;
    width: auto;
    height: auto;
    svg {
      width: 745.3px !important;
      height: 987.31px !important;
    }
  }
`;

export const StyledHomeContent = styled.div`
  display: flex;
  flex-direction: column;
  ${breakpoints.onlyTablet} {
    max-width: 580px;
  }
  ${breakpoints.onlyDesktop} {
    max-width: 1070px;
  }
`;

export const StyledTextContainer = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #000d3a;
  p:first-child {
    margin-bottom: 28px;
    max-width: 190px;
  }
  ${breakpoints.onlyTablet} {
    max-width: 580px;
    p:first-child {
      margin-bottom: 59px;
    }
  }
  ${breakpoints.onlyDesktop} {
    font-size: 45px;
    line-height: 112.63%;
    max-width: 1240px;
    p:first-child {
      margin-bottom: 59px;
    }
  }
`;

export const StyledText = styled.div`
  user-select: none;
`;

export const StyledTextMobile = styled(StyledText)`
  padding-top: 243px;
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

export const StyledTextTablet = styled(StyledText)`
  font-size: 36px;
  line-height: 112.63%;
  padding-top: 181px;
  color: #000d3a;
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

export const StyledTextDesktop = styled(StyledText)`
  ${breakpoints.onlyMobile} {
    display: none;
  }
  ${breakpoints.onlyTablet} {
    display: none;
  }
  ${breakpoints.onlyDesktop} {
    display: block;
    padding-top: 225px;
  }
`;

export const StyledTextParagraph = styled.p``;

export const StyledHomeButton = styled(Button)`
  margin-top: 65px;
  width: 298px;
  height: 59px;
  ${breakpoints.onlyTablet} {
    margin-top: 59px;
    width: 462px;
    height: 84px;
  }
  ${breakpoints.onlyDesktop} {
    margin-top: 130px;
    width: 742px;
    height: 147px;
  }
`;

export const StyledSberLogo = styled.img.attrs({
  src: `${Logo}`,
})`
  position: absolute;
  width: 88px;
  height: 29px;
  bottom: 28px;
  right: 31px;
  ${breakpoints.onlyTablet} {
    width: 185px;
    height: 61px;
    top: 34px;
    right: 36px;
    bottom: auto;
  }
  ${breakpoints.onlyDesktop} {
    width: 240px;
    height: 79px;
    top: unset;
    bottom: 94px;
    right: 84px;
  }
`;
