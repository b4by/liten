import styled from "styled-components";
import playIconImg from "../../../assets/img/play-icon@2x.png";
import playIconImg1 from "../../../assets/img/play-icon_1@2x.png";
import playIconImg2 from "../../../assets/img/play-icon_2@2x.png";
import playIconImg3 from "../../../assets/img/play-icon_3@2x.png";
import playIconImg4 from "../../../assets/img/play-icon_4@2x.png";
import therminImg from "../../../assets/img/termenvox@2x.png";
import { Button } from "../../../components/UI/button";
import { breakpoints } from "../../../helpers/breakpoints";
import bgImgMobile from "../../../assets/img/screen-14__mobile@2x.jpg";

export const StyledTaskCursorCircle = styled.div`
  background: yellow;
  display: none;
  height: 10px;
  position: absolute;
  width: 10px;
`;

export const StyledTask = styled.div`
  background-image: url(${bgImgMobile});
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
`;

export const StyledCirclesWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 360px;
  margin: 0 auto;
  height: 100%;
  z-index: 5;
`;
export const StyledCircles1 = styled.div`
  position: absolute;
  top: 49px;
  left: 50%;
  transform: translate(-50%, 0);
  border-radius: 50%;
  width: 671px;
  height: 671px;
  border: 3px solid rgba(255, 255, 255, 0.2);
`;

export const StyledCircles2 = styled.div`
  position: absolute;
  top: 104px;
  left: 50%;
  transform: translate(-50%, 0);
  border-radius: 50%;
  width: 671px;
  height: 671px;
  border: 3px solid rgba(255, 255, 255, 0.2);
`;

export const StyledCircles3 = styled.div`
  position: absolute;
  top: 169px;
  left: 50%;
  transform: translate(-50%, 0);
  border-radius: 50%;
  width: 562.8px;
  height: 562.8px;
  border: 3px solid rgba(255, 255, 255, 0.2);
`;

export const StyledCircles4 = styled.div`
  position: absolute;
  top: 225.48px;
  left: 50%;
  transform: translate(-50%, 0);
  border-radius: 50%;
  width: 448.96px;
  height: 448.96px;
  border: 3px solid rgba(255, 255, 255, 0.2);
`;

export const StyledCircles5 = styled.div`
  position: absolute;
  top: 285.6px;
  left: 50%;
  transform: translate(-50%, 0);
  border-radius: 50%;
  width: 328.72px;
  height: 328.72px;
  border: 3px solid rgba(255, 255, 255, 0.2);
  background-image: url(${therminImg});
  background-repeat: no-repeat;
  background-position: 10px -30px;
  background-size: contain;
  pointer-events: none;
  z-index: 10;
`;

export const Wrapper = styled.div``;

export const StyledTaskBg = styled.div``;

export const StyledTaskTextDesc = styled.div`
  padding: 0 16px;
  position: absolute;
  top: 0;
  left: 0;
  ${(props) => (props.hidden ? "display: none;" : "display: flex;")}
  flex-direction: column;
  color: #fff;
  font-size: 30px;
  line-height: 112.63%;
  text-align: center;
  color: #ffffff;
  justify-content: center;
  align-items: center;
  background: rgba(7, 7, 13, 0.6);
  width: 100%;
  height: 100%;
  z-index: 20;
  p {
    ${breakpoints.onlyTablet} {
      max-width: 689px;
    }
    ${breakpoints.onlyDesktop} {
      max-width: 850px;
    }
  }
  p:first-of-type {
    display: flex;
    align-items: center;
    ${breakpoints.onlyTablet} {
    }
    ${breakpoints.onlyDesktop} {
    }
  }
  p:nth-of-type(2) {
    ${breakpoints.onlyTablet} {
    }
    ${breakpoints.onlyDesktop} {
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

export const StyledTaskContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledTaskCircles = styled.div`
  position: fixed;
`;

export const StyledTaskPlayIcon = styled.img`
  width: 39px;
  margin-left: 16px;
`;

export const StyledTaskPlayIconImg1 = styled.div`
  position: absolute;
  top: 277px;
  left: 6px;
  width: 116px;
  height: 116px;
  background-image: url(${playIconImg1});
  background-size: contain;
  background-repeat: no-repeat;
`;
export const StyledTaskPlayIconImg2 = styled.div`
  position: absolute;
  top: 127px;
  left: 18px;
  width: 116px;
  height: 116px;
  background-image: url(${playIconImg2});
  background-size: contain;
  background-repeat: no-repeat;
`;

export const StyledTaskPlayIconImg3 = styled.div`
  position: absolute;
  top: 53px;
  left: 198px;
  width: 116px;
  height: 116px;
  background-image: url(${playIconImg3});
  background-size: contain;
  background-repeat: no-repeat;
`;

export const StyledTaskPlayIconImg4 = styled.div`
  position: absolute;
  left: 167px;
  top: 236px;
  width: 116px;
  height: 116px;
  background-image: url(${playIconImg4});
  background-size: contain;
  background-repeat: no-repeat;
`;

export const StyledThereminContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.4);
  display: flex;
`;

export const StyledThereminNote = styled.div`
  flex-basis: 25%;
`;
