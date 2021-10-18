import Lottie from "lottie-react";
import styled from "styled-components";
import { Button } from "../../../components/UI/button";
import { breakpoints } from "../../../helpers/breakpoints";

export const StyledLitenContainer = styled.div`
  overflow: hidden;
`;

export const StyledLitenLottie = styled(Lottie)`
  overflow: hidden;
  position: fixed;
  top: 0;
  right: -88px;
  transform: rotate(-36deg);
  z-index: 10;
  ${breakpoints.onlyTablet} {
    top: unset;
    bottom: -83px;
    right: -100px;
  }
  ${breakpoints.onlyDesktop} {
    top: unset;
    bottom: -150px;
    right: -100px;
    transform: rotate(-19deg);
  }
  svg {
    width: auto !important;
    height: 300px !important;
    ${breakpoints.onlyTablet} {
      width: auto !important;
      height: 380px !important;
    }
    ${breakpoints.onlyDesktop} {
      width: auto !important;
      height: 500px !important;
    }
  }
`;

export const StyledInfo3Content = styled.div`
  padding-top: 185px;
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 33px;
  z-index: 100;
  ${breakpoints.onlyTablet} {
    padding-top: 220px;
  }
  ${breakpoints.onlyDesktop} {
    padding-top: 255px;
    gap: 64px;
  }
`;

export const StyledInfoTextMobile = styled.p`
  font-size: 22px;
  line-height: 112.63%;
  text-align: center;
  color: #000d3a;
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

export const StyledInfoTextDesktop = styled.p`
  font-size: 50px;
  line-height: 112.63%;
  text-align: center;
  color: #000d3a;
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
  font-size: 26px;
  width: 298px;
  height: 55px;
  font-weight: bold;
  text-transform: uppercase;
  ${breakpoints.onlyTablet} {
    width: 462px;
    height: 84px;
    font-size: 40px;
    margin-top: 45px;
  }
  ${breakpoints.onlyDesktop} {
    margin-top: 150px;
    font-size: 50px;
    width: 781px;
    height: 132px;
  }
`;
