import styled, { css } from "styled-components";
import { Button } from "../../../components/UI/button";
import { breakpoints } from "../../../helpers/breakpoints";
import bubbleArrowSvg from "../../../assets/svg/bubble-arrow.svg";

export const StyledInfoContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 27px;
  ${breakpoints.onlyDesktop} {
    gap: 80px;
  }
`;

export const StyledInfoTextMobile = styled.p`
  font-size: 18px;
  line-height: 112.63%;
  text-align: center;
  color: #000d3a;
  max-width: 298px;
  width: 100%;
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
  color: #000d3a;
  width: 847px;
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
  width: 1239px;
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

export const StyledInfoTextButton = styled.span`
  position: relative;
  border: 2px solid #8253aa;
  border-radius: 6px;
  ${(props) =>
    props.show &&
    css`
      border: 2px solid transparent;
    `}
`;

export const StyledInfoTextDescription = styled.div`
  position: absolute;
  filter: drop-shadow(0px 4px 4px rgba(81, 93, 173, 0.48));
  top: 0;
  right: -18px;
  transform: translate(0, calc(-100% - 8px));
  font-size: 10px;
  line-height: 112.63%;
  color: #000;
  background: #fff;
  border-radius: 11px;
  padding: 22px 32px;
  font-weight: normal;
  width: 270px;
  pointer-events: none;
  display: none;
  &::after {
    content: "";
    position: absolute;
    bottom: -14px;
    right: 15px;
    background-image: url(${bubbleArrowSvg});
    background-repeat: no-repeat;
    background-size: contain;
    width: 17px;
    height: 20px;
    ${breakpoints.onlyTablet} {
      bottom: -31px;
      width: 34.47px;
      height: 40.66px;
      right: 112px;
    }
    ${breakpoints.onlyDesktop} {
      bottom: -39px;
      right: 141px;
      width: 47.88px;
      height: 56.32px;
    }
  }
  p:last-child {
    ${breakpoints.onlyTablet} {
      margin-top: 15px;
    }
    ${breakpoints.onlyDesktop} {
      margin-top: 15px;
    }
  }
  ${(props) =>
    props.show &&
    css`
      display: block;
    `}
  ${breakpoints.onlyTablet} {
    font-size: 16px;
    top: -10px;
    padding: 37px 24px;
    width: 506px;
  }
  ${breakpoints.onlyDesktop} {
    font-size: 30px;
    padding: 40px 53px;
    width: 741px;
  }
`;

export const StyledInfoButton = styled(Button)`
  width: 325px;
  height: 59px;
  font-size: 26px;
  line-height: 112.63%;
  text-transform: uppercase;
  color: #ffffff;
  margin-top: 60px;
  ${breakpoints.onlyTablet} {
    width: 462px;
    height: 84px;
    font-size: 40px;
    margin-top: 150px;
  }
  ${breakpoints.onlyDesktop} {
    width: 781px;
    height: 132px;
    font-size: 50px;
    margin-top: 80px;
  }
`;
