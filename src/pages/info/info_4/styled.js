import Lottie from "lottie-react";
import styled, { css } from "styled-components";
import { Button } from "../../../components/UI/button";
import { breakpoints } from "../../../helpers/breakpoints";
import littleBubbleSvg from "../../../assets/svg/little_bubble.svg";
import bigBubbleSvg from "../../../assets/img/big_bubble.png";
import bigBubbleMirroredSvg from "../../../assets/img/big_bubble_mirrored@2x.png";
import bigBubbleMirroredDeskImg from "../../../assets/img/big_bubble_mirrored_desk@2x.png";

export const StyledLitenContainer = styled.div`
  position: fixed;
  bottom: -90px;
  right: 0;
  transform: rotate(15.96deg);
  z-index: 1000;
  ${breakpoints.onlyTablet} {
    right: unset;
    left: 0;
    bottom: -116px;
  }
  ${breakpoints.onlyDesktop} {
    right: unset;
    left: 0;
  }
`;

export const StyledInfoBigBubbleText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -172px;
  left: -230px;
  font-size: 18px;
  width: 354px;
  height: 252px;
  padding-top: 6%;
  padding-bottom: 20%;
  padding-left: 20px;
  padding-right: 20px;
  text-align: center;
  transform: rotate(344deg);
  background-image: url(${bigBubbleSvg});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
  z-index: 110;
  font-size: 18px;
  line-height: 112.63%;
  color: #0b134a;
  display: none;
  ${(props) =>
    props.show &&
    css`
      display: flex;
    `}
  ${breakpoints.onlyTablet} {
    background-image: url(${bigBubbleMirroredSvg});
    top: -250px;
    left: auto;
  }
  ${breakpoints.onlyDesktop} {
    font-size: 50px;
    background-image: url(${bigBubbleMirroredDeskImg});
    top: -576px;
    left: -51px;
    width: 1215px;
    height: 594px;
  }
`;

export const StyledInfoBigBubbleButton = styled(Button)`
  font-size: 10px;
  line-height: 112.63%;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
  width: 170px;
  height: 35px;
  margin-top: 10px;
  ${breakpoints.onlyDesktop} {
    width: 460px;
    height: 94.71px;
    font-size: 26px;
    margin-top: 40px;
  }
`;

export const StyledInfoBubble = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: -25px;
  transform: rotate(-16deg);
  background-image: url(${littleBubbleSvg});
  background-repeat: no-repeat;
  background-size: contain;
  width: 73px;
  height: 82px;
  z-index: 100;
  ${(props) =>
    props.hidden &&
    css`
      display: none;
    `}
  ${breakpoints.onlyTablet} {
    transform: rotate(-16deg) scaleX(-1);
    right: -17px;
    top: -93px;
    width: 139px;
    height: 132px;
  }
  ${breakpoints.onlyDesktop} {
    transform: rotate(-16deg) scaleX(-1);
    right: -39px;
    top: -151px;
    width: 229.16px;
    height: 244.39px;
  }
`;

export const StyledInfoBubbleText = styled.p`
  position: absolute;
  top: 39%;
  left: 46%;
  transform: translate(-50%, -50%);
  font-weight: bold;
  font-size: 46px;
  line-height: 112.63%;
  text-align: center;
  color: #8253aa;
  ${breakpoints.onlyTablet} {
    font-size: 80px;
    top: 41%;
    left: 40%;
  }
  ${breakpoints.onlyDesktop} {
    font-size: 130px;
  }
`;

export const StyledLitenLottie = styled(Lottie)`
  svg {
    width: 188px !important;
    ${breakpoints.onlyTablet} {
      width: 250px !important;
    }
    ${breakpoints.onlyDesktop} {
      width: 380px !important;
    }
  }
`;

export const StyledInfoContent = styled.div`
  padding-top: 141px;
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 26px;
  z-index: 100;
  ${breakpoints.onlyTablet} {
    padding-top: 172px;
    gap: 40px;
  }
  ${breakpoints.onlyDesktop} {
    padding-top: 176px;
    gap: 64px;
  }
`;

export const StyledInfoTextMobile = styled.p`
  font-size: 18px;
  line-height: 112.63%;
  font-weight: 400;
  text-align: center;
  color: #0b134a;
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

export const StyledInfoTextTablet = styled.p`
  font-size: 30px;
  line-height: 112.63%;
  text-align: center;
  color: #0b134a;
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

export const StyledInfoTextDesktop = styled.p`
  font-size: 50px;
  line-height: 112.63%;
  text-align: center;
  color: #0b134a;
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

export const StyledInfoButton = styled(Button)`
  width: 298px;
  height: 55px;
  font-size: 16px;
  line-height: 112.63%;
  text-transform: uppercase;
  color: #ffffff;
  ${(props) =>
    props.pink &&
    css`
      background: #c860ca;
    `}
  ${breakpoints.onlyTablet} {
    font-size: 25px;
    width: 462px;
    height: 84px;
    margin-top: 150px;
  }
  ${breakpoints.onlyDesktop} {
    font-size: 40px;
    width: 781px;
    height: 132px;
  }
`;
