import styled from "styled-components";
import imgBgMobile from "../../../assets/img/task-5__mobile@2x.jpg";
import imgBgTablet from "../../../assets/img/task-5__tablet@2x.jpg";
import imgBgDesktop from "../../../assets/img/task-5__desktop@2x.jpg";
import { Button } from "../../../components/UI/button";
import playSvg from "../../../assets/svg/play2.svg";
import pauseSvg from "../../../assets/svg/pause.svg";
import { breakpoints } from "../../../helpers/breakpoints";
import Lottie from "lottie-react";

export const StyledLottieContainer = styled.div`
  position: absolute;
  left: 45%;
  bottom: -200px;
  transform: rotate(-2.69deg);
  overflow: hidden;
  z-index: 10;
  ${breakpoints.onlyMobile} {
    display: none;
  }
  ${breakpoints.onlyDesktop} {
    bottom: -400px;
  }
`;
export const StyledLitenLottie = styled(Lottie)`
  svg {
    width: 188px !important;
    ${breakpoints.onlyTablet} {
      width: 450px !important;
    }
    ${breakpoints.onlyDesktop} {
      width: 780px !important;
    }
  }
`;

export const StyledTask = styled.div`
  position: relative;
  overflow: hidden;
  height: 100%;
  background-image: url(${imgBgMobile});
  background-repeat: no-repeat;
  background-size: cover;
  ${breakpoints.onlyTablet} {
    background-image: url(${imgBgTablet});
  }
  ${breakpoints.onlyDesktop} {
    background-image: url(${imgBgDesktop});
  }
`;

export const StyledTaskContent = styled.div`
  padding-top: 173px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1000;
  ${breakpoints.onlyTablet} {
    padding-top: 148px;
  }
  ${breakpoints.onlyDesktop} {
    padding-top: 169px;
  }
`;

export const StyledTaskList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 312px;
  ${breakpoints.onlyTablet} {
    gap: 87px;
    width: 886px;
  }
  ${breakpoints.onlyDesktop} {
    gap: 191px;
    width: 1656px;
  }
`;

export const StyledTaskItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledTaskButton = styled(Button)`
  height: 44px;
  width: 152px;
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
  padding: 0;
  border-radius: 4px;
  ${breakpoints.onlyTablet} {
    width: 208px;
    height: 66px;
    font-size: 30px;
  }
  ${breakpoints.onlyDesktop} {
    width: 478px;
    height: 120px;
    font-size: 50px;
  }
`;

export const StyledCircles = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  z-index: 1;
  overflow: hidden;
  div:first-child {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 478px;
    height: 478px;
    border: 3px solid rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    ${breakpoints.onlyDesktop} {
      width: 1171.22px;
      height: 1171.22px;
    }
  }
  div:nth-child(2) {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 672.29px;
    height: 672.29px;
    border: 3px solid rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    ${breakpoints.onlyDesktop} {
      width: 1411.29px;
      height: 1411.29px;
    }
  }
  div:nth-child(3) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 918.18px;
    height: 918.18px;
    border: 3px solid rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    ${breakpoints.onlyDesktop} {
      width: 1695px;
      height: 1695px;
    }
  }
  div:last-child {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 1151px;
    height: 1151px;
    border: 3px solid rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    ${breakpoints.onlyDesktop} {
      display: none;
    }
  }
  ${breakpoints.onlyMobile} {
    display: none;
  }
  ${breakpoints.onlyTablet} {
    display: block;
  }
  ${breakpoints.onlyDesktop} {
    display: block;
  }
`;

export const StyledTaskPlayButton = styled.div`
  width: 58px;
  height: 58px;
  background-image: url(${(props) => (!props.playing ? playSvg : pauseSvg)});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
  ${breakpoints.onlyTablet} {
    width: 76.28px;
    height: 76.28px;
  }
  ${breakpoints.onlyDesktop} {
    width: 120.81px;
    height: 120.81px;
  }
`;

export const StyledTaskAudio = styled.audio`
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
`;
