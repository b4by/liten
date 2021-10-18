import styled from "styled-components";
import { Button } from "../../../components/UI/button";
import { breakpoints } from "../../../helpers/breakpoints";
import checkboxBlankImg from "../../../assets/img/checkbox--blank.png";

export const StyledTaskContainer = styled.div`
  padding-top: 32px;
  ${breakpoints.onlyTablet} {
    padding-top: 108px;
  }
  ${breakpoints.onlyDesktop} {
    padding-top: 115px;
  }
`;
export const StyledTaskTextDesc = styled.div`
  padding: 0 38px;
  position: absolute;
  top: 0;
  left: 0;
  ${(props) => (props.hidden ? "display: none;" : "display: flex;")}
  flex-direction: column;
  color: #fff;
  font-size: 26px;
  line-height: 112.63%;
  text-align: center;
  color: #ffffff;
  justify-content: center;
  align-items: center;
  background: rgba(7, 7, 13, 0.6);
  width: 100%;
  height: 100%;
  z-index: 9000;
  p {
    ${breakpoints.onlyTablet} {
      max-width: 689px;
    }
    ${breakpoints.onlyDesktop} {
      max-width: 850px;
    }
  }
  p:first-of-type {
    margin-bottom: 36px;
    ${breakpoints.onlyTablet} {
      margin-bottom: 62px;
    }
    ${breakpoints.onlyDesktop} {
      margin-bottom: 81px;
    }
  }
  p:nth-of-type(2) {
    margin-bottom: 15px;
    ${breakpoints.onlyTablet} {
      margin-bottom: 24px;
    }
    ${breakpoints.onlyDesktop} {
      margin-bottom: 18px;
    }
  }
  p:last-of-type {
    display: flex;
    align-items: center;
    white-space: nowrap;
    margin-bottom: 44px;
  }
  ${breakpoints.onlyTablet} {
    font-size: 40px;
  }
  ${breakpoints.onlyDesktop} {
    font-size: 50px;
  }
`;

export const StyledCheckboxImg = styled.img.attrs({
  src: checkboxBlankImg,
})`
  margin-left: 3px;
  width: 31px;
  height: 31px;
  ${breakpoints.onlyTablet} {
    width: 43px;
    height: 43px;
    margin-left: 12px;
  }
  ${breakpoints.onlyDesktop} {
    width: 66px;
    height: 66px;
    margin-left: 16px;
  }
`;

export const StyledTaskDescButton = styled(Button)`
  text-transform: uppercase;
  background: transparent;
  font-weight: 800;
  font-size: 26px;
  line-height: 112.63%;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
  border: 2px solid #ffffff;
  border-radius: 13px;
  width: 325px;
  height: 59px;
  &:hover {
    background: none;
    color: inherit;
  }
  ${breakpoints.onlyTablet} {
    font-size: 30px;
    width: 468px;
    height: 82px;
  }
  ${breakpoints.onlyDesktop} {
    font-size: 50px;
    width: 743px;
    height: 135px;
  }
`;

export const StyledTaskCircles = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  ${breakpoints.onlyDesktop} {
    display: none;
  }
  &::after {
    content: "";
    width: 432.23px;
    height: 432.23px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    border: 3px solid rgba(255, 255, 255, 0.2);
    ${breakpoints.onlyTablet} {
      width: 700px;
      height: 700px;
      border: 3px solid rgba(255, 255, 255, 0.2);
    }
    ${breakpoints.onlyDesktop} {
      width: 700px;
      height: 700px;
      border: 3px solid rgba(255, 255, 255, 0.2);
    }
  }
  ${breakpoints.onlyTablet} {
    left: auto;
    right: 0;
    transform: translate(50%, -50%);
  }
  ${breakpoints.onlyDesktop} {
    left: auto;
    right: 0;
    transform: translate(50%, -50%);
  }
  div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    border: 3px solid rgba(255, 255, 255, 0.2);
    ${breakpoints.onlyTablet} {
      //   left: auto;
      //   right: 0;
      //   transform: translate(50%, -50%);
      border: 3px solid rgba(255, 255, 255, 0.2);
    }
    ${breakpoints.onlyDesktop} {
      border: 3px solid rgba(255, 255, 255, 0.2);
    }
  }
  div:first-child {
    width: 590.32px;
    height: 590.32px;
    ${breakpoints.onlyTablet} {
      width: 956px;
      height: 956px;
    }
    ${breakpoints.onlyDesktop} {
      width: 956px;
      height: 956px;
    }
  }
  div:last-child {
    width: 740px;
    height: 740px;
    ${breakpoints.onlyTablet} {
      width: 1199px;
      height: 1199px;
    }
    ${breakpoints.onlyDesktop} {
      width: 1199px;
      height: 1199px;
    }
  }
`;

export const StyledTaskContent = styled.div`
  position: relative;
  z-index: 10;
  ${breakpoints.onlyTablet} {
    width: 884px;
    display: grid;
    margin: 0 auto;
    grid-template-areas:
      "text text text"
      "player player img"
      "player player img"
      "player player img"
      "button button img";
  }
  ${breakpoints.onlyDesktop} {
    width: 1517px;
    display: grid;
    margin: 0 auto;
    grid-template-areas:
      "text text text"
      "player player img"
      "player player img"
      "player player img"
      "button button img";
  }
`;

export const StyledTaskImgContainer = styled.div`
  position: relative;
  text-align: center;
  margin-bottom: 13px;
  ${breakpoints.onlyTablet} {
  }
  ${breakpoints.onlyDesktop} {
    width: 545.97px;
    height: 584.9px;
  }
`;

export const StyledTaskImg = styled.img`
  width: 264px;
  height: 282px;
  text-align: center;
  ${breakpoints.onlyTablet} {
    width: 344.5px;
    height: 369.21px;
  }
  ${breakpoints.onlyDesktop} {
    width: 547.5px;
    height: 586.77px;
  }
`;

export const StyledTaskText = styled.div`
  ${breakpoints.onlyTablet} {
    display: flex;
    align-items: center;
    justify-content: center;
    grid-area: text;
    margin-bottom: 42px;
  }
  ${breakpoints.onlyDesktop} {
    display: flex;
    align-items: center;
    justify-content: center;
    grid-area: text;

    margin-bottom: 95px;
  }
`;

export const StyledTaskTitle = styled.h2`
  font-weight: 800;
  font-size: 10px;
  line-height: 112.63%;
  text-align: center;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #8253aa;
  margin-bottom: 10px;
  ${breakpoints.onlyTablet} {
    margin-bottom: 0;
    margin-right: 11px;
    font-size: 40px;
  }
  ${breakpoints.onlyDesktop} {
    margin-bottom: 0;
    margin-right: 11px;
    font-size: 60px;
  }
`;

export const StyledTaskDesc = styled.p`
  font-weight: 800;
  font-size: 20px;
  line-height: 112.63%;
  text-align: center;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #8253aa;
  margin-bottom: 20px;
  ${breakpoints.onlyTablet} {
    margin-bottom: 0;
    font-size: 40px;
  }
  ${breakpoints.onlyDesktop} {
    margin-bottom: 0;
    font-size: 60px;
  }
`;

export const StyledTaskPlayers = styled.div`
  display: grid;
  gap: 8px;
  margin-bottom: 8px;
  ${breakpoints.onlyTablet} {
    grid-area: player;
    gap: 86px;
    width: 435px;
    margin-bottom: 35px;
  }
  ${breakpoints.onlyDesktop} {
    gap: 70px;
    margin-bottom: 70px;
    width: 835px;
    grid-area: player;
  }
`;

export const StyledTaskButton = styled(Button)`
  width: 100%;
  text-transform: uppercase;
  font-size: 20px;
  line-height: 112.63%;
  letter-spacing: 0.08em;
  height: 48px;
  ${breakpoints.onlyTablet} {
    grid-area: button;
    width: 435px;
  }
  ${breakpoints.onlyDesktop} {
    grid-area: button;
    font-size: 50px;
    height: 90px;
    width: 835px;
  }
`;
