import styled, { css, keyframes } from "styled-components";
import imgBgMobile from "../../../assets/img/screen-3__mobile@2x.jpg";
import imgBgTablet from "../../../assets/img/task-1__tablet@2x.jpg";
import imgBgDesktop from "../../../assets/img/task-1__desktop@2x.jpg";
import { Button } from "../../../components/UI/button";
import { breakpoints } from "../../../helpers/breakpoints";

const spin = keyframes`
from {
    transform: translate(-50%, -50%) rotate(360deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(0deg);
  }`;

export const StyledLevelContainer = styled.div`
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

export const StyledLevelDescriptionText = styled.div`
  padding: 0 38px;
  position: absolute;
  top: 0;
  left: 0;
  ${(props) => (props.hidden ? "display: none;" : "display: flex;")}
  flex-direction: column;
  color: #fff;
  font-size: 22px;
  line-height: 112.63%;
  text-align: center;
  color: #ffffff;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100%;
  z-index: 9000;
  p {
    ${breakpoints.onlyTablet} {
      max-width: 742px;
    }
    ${breakpoints.onlyDesktop} {
      max-width: 1355px;
    }
  }
  p:first-child {
    margin-bottom: 30px;
    ${breakpoints.onlyTablet} {
      margin-bottom: 48px;
    }
    ${breakpoints.onlyDesktop} {
      margin-bottom: 64px;
    }
  }
  ${breakpoints.onlyTablet} {
    font-size: 40px;
    line-height: 112.63%;
    text-align: center;
    color: #ffffff;
  }
  ${breakpoints.onlyDesktop} {
    font-size: 60px;
  }}
`;

export const StyledLevelContent = styled.div`
  padding-top: 49px;
  ${breakpoints.onlyTablet} {
    max-width: 509px;
    padding-top: 155px;
  }
  ${breakpoints.onlyDesktop} {
    max-width: 985px;
    padding-top: 199px;
  }}
`;

export const StyledLevelPlayer = styled.div`
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.7) 46.88%,
    rgba(255, 255, 255, 0) 100%
  );
  border-radius: 11px;
  padding: 13px 15px;
  ${breakpoints.onlyTablet} {
    background: none;
    padding: 0;
  }
  ${breakpoints.onlyDesktop} {
    background: none;
    padding: 0;
  }
`;

export const StyledPlaySvg = styled.img`
  display: inline-block;
  width: 28px;
  height: 28px;
  ${breakpoints.onlyTablet} {
    width: 38px;
    height: 38px;
  }
  ${breakpoints.onlyDesktop} {
    width: 84px;
    height: 84px;
  }
`;

export const StyledBorderedText = styled.span`
  display: inline-block;
  border: 1px solid #fff;
  border-radius: 2px;
`;

export const StyledLevelVinyl = styled.div`
  margin: 0 auto;
  border-radius: 50%;
  width: 275px;
  height: 275px;
  background: radial-gradient(50% 50% at 50% 50%, #445aaa 8.85%, #c89dff 100%);
  padding: 19px;
  position: relative;
  ${breakpoints.onlyTablet} {
    position: fixed;
    width: 862px;
    height: 862px;
    top: 50%;
    left: 50%;
    transform: translate(0, -50%);
    padding: 60px;
  }
  ${breakpoints.onlyDesktop} {
    position: fixed;
    width: 1348px;
    height: 1348px;
    top: 50%;
    left: 50%;
    transform: translate(0, -50%);
    padding: 94px;
  }
  span {
    display: block;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.1);
    ${breakpoints.onlyTablet} {
      border: 2px solid rgba(255, 255, 255, 0.3);
    }
    ${breakpoints.onlyDesktop} {
      border: 2px solid rgba(255, 255, 255, 0.3);
    }
  }
  span:first-child {
    height: 236px;
    width: 236px;
    ${breakpoints.onlyTablet} {
      width: 741px;
      height: 741px;
    }
    ${breakpoints.onlyDesktop} {
      width: 1159px;
      height: 1159px;
    }
  }
  span:nth-child(2) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 196px;
    width: 196px;
    ${breakpoints.onlyTablet} {
      width: 617px;
      height: 617px;
    }
    ${breakpoints.onlyDesktop} {
      width: 965px;
      height: 965px;
    }
  }
  span:nth-child(3) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 163px;
    width: 163px;
    ${breakpoints.onlyTablet} {
      width: 512px;
      height: 512px;
    }
    ${breakpoints.onlyDesktop} {
      width: 801px;
      height: 801px;
    }
  }
  span:last-child {
    position: absolute;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #ffe6fd;
    width: 26px;
    height: 26px;
    ${breakpoints.onlyTablet} {
      width: 80px;
      height: 80px;
    }
    ${breakpoints.onlyDesktop} {
      width: 138px;
      height: 138px;
    }
    // border: 3px solid;
    // border-image-slice: 1;
    // border-width: 3px;
    // border-image-source: linear-gradient(to left, #743ad5, #d53a9d);
  }
`;

export const StyledLevelVinylImg = styled.img`
  position: absolute;
  width: 133px;
  height: 133px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  animation: ${spin} 1.5s linear infinite;
  animation-play-state: ${(props) => (props.started ? "running" : "paused")};
  ${breakpoints.onlyTablet} {
    width: 419px;
    height: 419px;
  }
  ${breakpoints.onlyDesktop} {
    width: 655px;
    height: 655px;
  }
`;

export const StyledLevelMusic = styled.div`
  display: flex;
  height: 52px;
  margin-bottom: 20px;
  ${breakpoints.onlyTablet} {
    height: 63px;
    margin-bottom: 79px;
  }
  ${breakpoints.onlyDesktop} {
    height: auto;
    margin-bottom: 86px;
  }
`;

export const StyledLevelAnswers = styled.div`
  display: flex;
  flex-direction: column;
  gap: 21px;
  ${breakpoints.onlyTablet} {
    gap: 62px;
  }
  ${breakpoints.onlyDesktop} {
    gap: 75px;
  }
`;

export const StyledLevelButton = styled(Button)`
  width: 100%;
  font-size: 20px;
  font-weight: bold;
  line-height: 112.63%;
  text-align: center;
  text-transform: uppercase;
  height: 54px;
  color: #ffffff;
  ${breakpoints.onlyTablet} {
    font-size: 30px;
    height: 75px;
  }
  ${breakpoints.onlyDesktop} {
    font-size: 50px !important;
    height: 117px;
  }
`;

const appearing = keyframes`
  0% {
    opacity: 0;
    top: 100%;
  }

  70% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`;

export const StyledEmojiReaction = styled.div`
  position: fixed;
  opacity: 0;
  pointer-events: none;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  animation: ${(props) =>
    props.animate &&
    css`
      ${appearing} 0.6s ease-in-out
    `};
  font-size: 60px;
`;
