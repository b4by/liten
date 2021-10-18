import Lottie from "lottie-react";
import styled from "styled-components";
import submitBgImg from "../../assets/img/screen-2__mobile@2x.jpg";
import circleImg from "../../assets/img/bg_desk.png";
import { WaveSurferSubmit } from "../../components/WaveSurferSubmit";
import { breakpoints } from "../../helpers/breakpoints";

export const StyledSubmit = styled.div`
  //   position: relative;
  //   top: 50%;
  //   left: 50%;
  //   width: 640px;
  //   height: 360px;
  //   overflow: hidden;
  position: absolute;
  overflow-x: hidden;
  background-image: url(${submitBgImg});
  background-repeat: no-repeat;
  background-position: center top;
  background-size: cover;
  height: 100%;
  width: 100%;
`;

export const StyledRoundContainer = styled.div`
  position: relative;
  overflow: hidden;
  background-image: url(${circleImg});
  background-repeat: no-repeat;
  background-size: 120%;
  background-position: bottom;
  height: 203px;
  display: flex;
  justify-content: center;
  ${breakpoints.onlyTablet} {
    position: absolute;
    display: block;
    top: 50%;
    left: auto;
    left: auto;
    right: -421px;
    transform: translate(0, -50%);
    background-position: unset;
    background-size: cover;
    width: 892px;
    height: 892px;
    border-radius: 50%;
    overflow: hidden;
  }
  ${breakpoints.onlyDesktop} {
    position: absolute;
    top: 50%;
    left: auto;
    right: -379px;
    transform: translate(0, -50%);
    background-position: unset;
    background-size: cover;
    width: 1289px;
    height: 1289px;
    border-radius: 50%;
    overflow: hidden;
  }
`;

export const StyledLitenLottie = styled(Lottie)`
  position: relative;
  z-index: 100;
  svg {
    width: 230px !important;
    height: auto !important;
  }
  ${breakpoints.onlyTablet} {
    top: 300px;
    left: 58px;
    svg {
      width: 530px !important;
      height: auto !important;
    }
  }
  ${breakpoints.onlyDesktop} {
    top: 250px;
    left: 55px;
    svg {
      width: 1000px !important;
      height: auto !important;
    }
  }
`;

export const StyledSubmitContainer = styled.div`
  padding: 0 16px;
  ${breakpoints.onlyTablet} {
    padding: 0;
    box-sizing: content-box;
    width: 482px;
    padding-left: 68px;
    padding-top: 93px;
  }
  ${breakpoints.onlyDesktop} {
    padding: 0;
    box-sizing: content-box;
    width: 869px;
    padding-left: 131px;
    padding-top: 147px;
  }
`;

export const StyledSubmitContent = styled.div`
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.7) 46.88%,
    rgba(255, 255, 255, 0) 100%
  );
  border-radius: 11px;
  padding: 0 14px;
  ${breakpoints.onlyTablet} {
    background: none;
    padding: 0;
  }
  ${breakpoints.onlyDesktop} {
    background: none;
    padding: 0;
  }
`;

export const StyledSubmitWaveSurfer = styled(WaveSurferSubmit)``;

export const StyledSubmitBg = styled.div``;

export const StyledSubmitTextMobile = styled.p`
  font-size: 16px;
  line-height: 112.63%;
  text-align: center;
  color: #000d3a;
  margin: 33px 0;
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

export const StyledSubmitTextTablet = styled.p`
  font-size: 28px;
  line-height: 112.63%;
  text-align: left;
  color: #000d3a;
  margin-top: 37px;
  margin-bottom: 78px;
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

export const StyledSubmitTextDesktop = styled.p`
  font-size: 40px;
  line-height: 112.63%;
  text-align: left;
  color: #000d3a;
  margin-top: 75px;
  margin-bottom: 78px;
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

export const StyledSubmitForm = styled.form``;

export const StyledSubmitInputGroup = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  background: #d1c0e7;
  border-radius: 13px;
  height: 47px;
  margin: 0 -14px;
  ${breakpoints.onlyTablet} {
    height: 76px;
  }
  ${breakpoints.onlyDesktop} {
    height: 113px;
  }
`;

export const StyledSubmitInput = styled.input`
  flex-grow: 2;
  background: none;
  border: 0;
  font-size: 12px;
  line-height: 112.63%;
  color: #000d3a;
  padding: 17px 0 17px 12px;
  outline: none;
  &::placeholder {
    color: #000d3a;
    text-transform: uppercase;
  }
  ${breakpoints.onlyTablet} {
    font-size: 20px;
    padding: 20px 0 16px 16px;
  }
  ${breakpoints.onlyDesktop} {
    font-size: 35px;
    padding: 27px 0 25px 28px;
  }
`;

export const StyledSubmitError = styled.span`
  position: absolute;
  bottom: -18px;
  left: 12px;
  color: red;
  font-size: 11px;
`;

export const StyledSubmitCheckboxContainer = styled.div`
  margin: 40px 0 0 -14px;
`;

export const StyledSubmitCheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

export const StyledSubmitCheckbox = styled.input.attrs({
  type: "checkbox",
})`
  position: absolute;
  appearance: none;
  &:not(:checked) + ${StyledSubmitCheckboxLabel} svg path:first-child {
    display: none;
  }
`;

export const StyledSubmitCheckboxText = styled.p`
  font-weight: 300;
  font-size: 7px;
  line-height: 136.8%;
  color: #000d3a;
  opacity: 0.5;
  ${breakpoints.onlyTablet} {
    font-size: 10px;
  }
  ${breakpoints.onlyDesktop} {
    font-size: 15px;
  }
`;

export const StyledSubmitLink = styled.a`
  text-decoration: underline;
`;

export const StyledSubmitButton = styled.button.attrs({
  type: "submit",
})`
  font-size: 12px;
  line-height: 112.63%;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
  background: #8253aa;
  border-radius: 13px;
  width: 110px;
  border: none;
  ${breakpoints.onlyTablet} {
    width: 177px;
    font-size: 20px;
  }
  ${breakpoints.onlyDesktop} {
    min-width: 264px;
    font-size: 35px;
  }
`;

export const StyledSubmitFooterText = styled.p`
  margin: 0 -14px;
  font-weight: 300;
  font-size: 7px;
  line-height: 136.8%;
  color: #000d3a;
  opacity: 0.5;
  ${breakpoints.onlyTablet} {
    font-size: 10px;
  }
  ${breakpoints.onlyDesktop} {
    font-size: 15px;
  }
`;
