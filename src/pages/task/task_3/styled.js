import styled, { css, keyframes } from "styled-components";
import checkboxBlankImg from "../../../assets/img/checkbox--blank.png";
import checkboxActiveImg from "../../../assets/img/checkbox--active.png";
import { breakpoints } from "../../../helpers/breakpoints";
import { Button } from "../../../components/UI/button";
import bubbleArrowSvg from "../../../assets/svg/bubble-arrow.svg";

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const StyledTaskBg = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.7) 46.88%,
    rgba(255, 255, 255, 0) 100%
  );
  width: calc(100% - 32px);
  height: 100%;
  border-radius: 11px;
  ${breakpoints.onlyTablet} {
    width: 100%;
  }
  ${breakpoints.onlyDesktop} {
    width: 100%;
  }
`;

export const StyledTaskContent = styled.div`
  position: relative;
  z-index: 1000;
  padding: 0 16px;
  padding-top: 92px;
  ${breakpoints.onlyTablet} {
    padding-top: 101px;
  }
  ${breakpoints.onlyDesktop} {
    padding-top: 112px;
  }
`;

export const StyledTaskTitle = styled.h2`
  font-size: 26px;
  line-height: 112.63%;
  color: #000d3a;
  margin-bottom: 72px;
  font-weight: normal;
  ${breakpoints.onlyTablet} {
    font-size: 40px;
    margin-bottom: 22px;
  }
  ${breakpoints.onlyDesktop} {
    font-size: 64px;
    margin-bottom: 41px;
  }
`;

export const StyledTaskList = styled.ul`
  list-style: none;
  display: grid;
  gap: 45px;
  ${breakpoints.onlyTablet} {
    gap: 71px;
  }
  ${breakpoints.onlyDesktop} {
    gap: 69px;
  }
`;

export const StyledTaskListItem = styled.li`
  display: ${(props) => (props.hidden ? "none" : "flex")};
  justify-content: space-between;
  align-items: center;
  position: relative;
  ${(props) =>
    props.hidden &&
    css`
      animation: fadeOut ease 0.26;
    `}
`;

export const StyledTaskQuestion = styled.h3`
  font-weight: 600;
  font-size: 15px;
  line-height: 112.63%;
  color: #000d3a;
  flex-basis: 252px;
  ${breakpoints.onlyTablet} {
    font-size: 20px;
    flex-basis: 100%;
  }
  ${breakpoints.onlyDesktop} {
    font-size: 40px;
    flex-basis: 100%;
  }
`;

export const StyledTaskCheckbox = styled.div`
  background-image: url(${({ checked }) =>
    !checked ? checkboxBlankImg : checkboxActiveImg});
  width: 45px;
  height: 46px;
  background-repeat: no-repeat;
  background-size: contain;
  cursor: pointer;
  ${breakpoints.onlyTablet} {
    width: 67px;
    height: 70px;
  }
  ${breakpoints.onlyDesktop} {
    width: 99px;
    height: 102px;
  }
`;

export const StyledTaskDescription = styled.div`
  position: absolute;
  filter: drop-shadow(0px 4px 4px rgba(81, 93, 173, 0.48));
  top: 0;
  right: 0;
  transform: translate(0, calc(-100% - 8px));
  font-size: 10px;
  line-height: 112.63%;
  color: #000d3a;
  background: #fff;
  border-radius: 11px;
  padding: 8px 16px;
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
    }
    ${breakpoints.onlyDesktop} {
      bottom: -42px;
      right: 22px;
      width: 47.88px;
      height: 56.32px;
    }
  }
  ${(props) =>
    props.show &&
    css`
      display: block;
    `}
  ${breakpoints.onlyTablet} {
    font-size: 24px;
    padding: 17px 36px;
  }
  ${breakpoints.onlyDesktop} {
    font-size: 30px;
    padding: 40px 53px;
  }
`;

export const StyledTaskDescriptionText = styled.p``;

export const StyledTaskDescriptionButton = styled(Button)`
  width: 104px;
  height: 30px;
  padding: 0 28px;
  border-radius: 9px;
  margin-top: 13px;
  pointer-events: auto;
  ${breakpoints.onlyTablet} {
    margin-top: 19px;
    width: 208px;
    height: 60px;
    padding: 0 56px;
  }
  ${breakpoints.onlyDesktop} {
    width: 208px;
    height: 60px;
    margin-top: 29px;
  }
  span {
    width: 9.6px;
    height: 9.6px;
    ${breakpoints.onlyTablet} {
      width: 19.2px;
      height: 19.2px;
    }
    ${breakpoints.onlyDesktop} {
      width: 19.2px;
      height: 19.2px;
    }
    &:not(:last-child) {
      margin-right: 9.6px;
      ${breakpoints.onlyTablet} {
        margin-right: 19.2px;
      }
      ${breakpoints.onlyDesktop} {
        margin-right: 19.2px;
      }
    }
  }
`;
