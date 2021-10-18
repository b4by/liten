import styled from "styled-components";
import imgBgMobile from "../../../assets/img/task-5__mobile@2x.jpg";
import imgBgTablet from "../../../assets/img/task-5__tablet@2x.jpg";
import imgBgDesktop from "../../../assets/img/task-5__desktop@2x.jpg";
import { Button } from "../../../components/UI/button";
import playSvg from "../../../assets/svg/play2.svg";
import pauseSvg from "../../../assets/svg/pause.svg";
import { breakpoints } from "../../../helpers/breakpoints";

export const StyledTask = styled.div`
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
  padding-top: 175px;
  padding-left: 17px;
  padding-right: 17px;
  display: flex;
  flex-direction: column;
  ${breakpoints.onlyTablet} {
    padding-top: 148px;
    padding-left: 70px;
    padding-right: 70px;
  }
  ${breakpoints.onlyDesktop} {
    padding-top: 169px;
    padding-left: 131px;
    padding-right: 131px;
  }
`;

export const StyledTaskList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  ${breakpoints.onlyTablet} {
    gap: 87px;
  }
  ${breakpoints.onlyDesktop} {
    gap: 191px;
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
