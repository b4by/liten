import styled, { keyframes } from "styled-components";
import { breakpoints } from "../../helpers/breakpoints";
import shareScreenMobileBgImg from "../../assets/img/shrare-screen__mobile@2x.jpg";
import shareScreenTabletBgImg from "../../assets/img/shrare-screen__tablet@2x.jpg";
import shareScreenDesktopBgImg from "../../assets/img/shrare-screen__desktop@2x.jpg";
import Lottie from "lottie-react";

export const StyledShare = styled.div`
  background: no-repeat center / cover url(${shareScreenMobileBgImg});
  height: 100%;
  ${breakpoints.onlyTablet} {
    background: no-repeat center / cover url(${shareScreenTabletBgImg});
  }
  ${breakpoints.onlyDekstop} {
    background: no-repeat center / cover url(${shareScreenDesktopBgImg});
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
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(0, -50%);
  z-index: 1;
  div:first-child {
    position: absolute;
    height: 374px;
    width: 374px;
    border: 3px solid rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    animation: 2.5s ${pulse} infinite;
  }
  div:nth-child(2) {
    position: absolute;
    height: 511px;
    width: 511px;
    border: 3px solid rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    animation: 3.5s ${pulse} infinite;
  }
  div:last-child {
    position: absolute;
    height: 641px;
    width: 641px;
    border: 3px solid rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    animation: 4.5s ${pulse} infinite;
  }
`;

export const ShareScreenLottieContainer = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
`;

export const ShareScreenLottie = styled(Lottie)`
  position: absolute;
  bottom: -187px;
  right: -40px;
  transform: rotate(-9deg);
  svg {
    width: 308px !important;
    height: 461px !important;
  }
  ${breakpoints.onlyTablet} {
    width: 360px !important;
    transform: rotate(-21deg);
  }
`;

export const StyledShareContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  width: 298px;
  ${breakpoints.onlyTablet} {
    width: 812px;
  }
  ${breakpoints.onlyDesktop} {
    width: 1415px;
  }
`;

export const StyledShareText = styled.div`
  font-size: 18px;
  line-height: 112.63%;
  text-align: center;
  color: #000d3a;
  margin-bottom: 34px;
  display: grid;
  gap: 27px;
`;

export const StyledShareTextMobile = styled.div`
  font-size: 18px;
  line-height: 112.63%;
  text-align: center;
  color: #000d3a;
  margin-bottom: 34px;
  display: grid;
  gap: 27px;
  ${breakpoints.onlyMobile} {
    display: grid;
  }
  ${breakpoints.onlyTablet} {
    display: none;
  }
  ${breakpoints.onlyDesktop} {
    display: none;
  }
`;

export const StyledShareTextTablet = styled.div`
  font-size: 28px;
  line-height: 112.63%;
  text-align: center;
  color: #000d3a;
  margin-bottom: 71px;
  display: grid;
  gap: 40px;
  ${breakpoints.onlyMobile} {
    display: none;
  }
  ${breakpoints.onlyTablet} {
    display: grid;
  }
  ${breakpoints.onlyDesktop} {
    display: none;
  }
`;

export const StyledShareTextDesktop = styled.div`
  font-size: 50px;
  line-height: 112.63%;
  text-align: center;
  color: #000d3a;
  margin-bottom: 108px;
  display: grid;
  gap: 74px;
  ${breakpoints.onlyMobile} {
    display: none;
  }
  ${breakpoints.onlyTablet} {
    display: none;
  }
  ${breakpoints.onlyDesktop} {
    display: grid;
  }
`;

export const StyledShareGroup = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  ${breakpoints.onlyTablet} {
    gap: 28px;
  }
  ${breakpoints.onlyDesktop} {
    gap: 46px;
  }
`;

export const StyledShareImg = styled.img`
  width: 39px;
  height: 39px;
  ${breakpoints.onlyTablet} {
    width: 90px;
    height: 90px;
  }
  ${breakpoints.onlyDesktop} {
    width: 146px;
    height: 148px;
  }
`;
