import styled, { css } from "styled-components";
import playSvg from "../../../assets/svg/play-btn.svg";
import pauseSvg from "../../../assets/svg/pause-btn.svg";
import waveSvg from "../../../assets/svg/wave.svg";
import playIconImg from "../../../assets/img/play-icon@2x.png";
import playIconImg1 from "../../../assets/img/play-icon_1@2x.png";
import playIconImg2 from "../../../assets/img/play-icon_2@2x.png";
import playIconImg3 from "../../../assets/img/play-icon_3@2x.png";
import playIconImg4 from "../../../assets/img/play-icon_4@2x.png";
import playIconImg5 from "../../../assets/img/play-icon_5@2x.png";
import ellipse from "../../../assets/img/ellipse.png";
import therminImg from "../../../assets/img/termenvox@2x.png";
import therminImgTablet from "../../../assets/img/bg-therme-tablet.png";
import therminImgDesc from "../../../assets/img/bg-therme-desc.png";

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
  display: flex;
  justify-content: center;

  ${breakpoints.onlyTablet} {
    background-position: bottom;
    background-image: url(${therminImgTablet});
  }
  ${breakpoints.onlyDesktop} {
    background-image: url(${therminImgDesc});
  }

  #theremin-container {
    display: none;
    pointer-events: none;
    height: 0%;
    width: 100%;
    display: flex;
    position: relative;
    height: 100%;
    width: 275px;
    margin: 0 auto;
  }

  #theremin-container {
    height: 0%;
    width: 100%;
    display: flex;
    position: relative;
  }

  #theremin-container.loaded {
    height: 100%;
    transition: height 0.5s ease-out;
  }

  .notebar {
    height: 100%;
    width: 4%;
    background-image: linear-gradient(
      to right,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.2) 48%,
      rgba(255, 255, 255, 0.2) 52%,
      rgba(255, 255, 255, 0) 100%
    );

    display: flex;
    align-items: center;
    justify-content: center;
    &::before {
      content: attr(data-note);
      font-weight: 600;
      color: rgba(0, 0, 0, 0.3);
    }
    position: absolute;
    display: none;
  }

  [data-note="C"] {
    left: 2.8%;
  }

  [data-note="D"] {
    left: 15.6%;
  }

  [data-note="E"] {
    left: 30%;
  }

  [data-note="F"] {
    left: 37.6%;
  }

  [data-note="G"] {
    left: 54.8%;
  }

  [data-note="A"] {
    left: 74%;
  }

  [data-note="B"] {
    left: 95.6%;
  }
`;

export const StyledCirclesWrapper = styled.div`
  pointer-events: ${({ loaded }) => (loaded ? "auto" : "none")};
  position: relative;
  overflow: hidden;
  width: 360px;
  margin: 0 auto;
  height: 100%;
  z-index: 5;

  ${breakpoints.onlyTablet} {
    width: 1024px;
  }
  ${breakpoints.onlyDesktop} {
    width: 1920px;
  }
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

  ${breakpoints.onlyTablet} {
    display: none;
  }

  ${breakpoints.onlyDesktop} {
    display: none;
  }
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

  ${breakpoints.onlyTablet} {
    display: none;
  }

  ${breakpoints.onlyDesktop} {
    display: none;
  }
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

  ${breakpoints.onlyTablet} {
    display: none;
  }

  ${breakpoints.onlyDesktop} {
    display: none;
  }
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

  ${breakpoints.onlyTablet} {
    display: none;
  }

  ${breakpoints.onlyDesktop} {
    display: none;
  }
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

  ${breakpoints.onlyTablet} {
    display: none;
  }

  ${breakpoints.onlyDesktop} {
    display: none;
  }
`;

export const Container = styled.div`
  width: 360px;

  ${breakpoints.onlyTablet} {
    width: 1173px;
  }
  ${breakpoints.onlyDesktop} {
    width: 1920px;
  }
`;

export const Wrapper = styled.div``;

export const StyledTaskBg = styled.div``;

export const StyledTaskTextDescMobile = styled.div`
  padding: 0 16px;
  padding-top: 180px;
  position: absolute;
  top: 0;
  left: 0;
  ${(props) => (props.hidden ? "display: none;" : "display: flex;")}
  color: #fff;
  font-size: 30px;
  line-height: 112.63%;
  text-align: center;
  color: #ffffff;
  background: rgba(7, 7, 13, 0.6);
  width: 100%;
  height: 100%;
  z-index: 20;
  display: flex;
  justify-content: center;
  p:first-of-type {
    display: flex;
    align-items: center;
  }
  ${breakpoints.onlyMobile} {
    display: flex;
  }
  ${breakpoints.onlyTablet} {
    display: none;
  }
  ${breakpoints.onlyDesktop} {
    display: none;
  }
`;

export const StyledTaskTextDescTablet = styled.div`
  padding: 0 16px;
  padding-top: 259px;
  position: absolute;
  top: 0;
  left: 0;
  ${(props) => (props.hidden ? "display: none;" : "display: flex;")}
  color: #fff;
  font-size: 40px;
  line-height: 112.63%;
  text-align: center;
  color: #ffffff;
  background: rgba(7, 7, 13, 0.6);
  width: 100%;
  height: 100%;
  z-index: 20;
  display: flex;
  justify-content: center;
  p:first-of-type {
    display: flex;
    align-items: center;
  }
  ${breakpoints.onlyMobile} {
    display: none;
  }
  ${breakpoints.onlyTablet} {
    display: flex;
  }
  ${breakpoints.onlyDesktop} {
    display: none;
  }
`;

export const StyledTaskTextDescDesktop = styled.div`
  padding: 0 16px;
  padding-top: 380px;
  position: absolute;
  top: 0;
  left: 0;
  ${(props) => (props.hidden ? "display: none;" : "display: flex;")}
  color: #fff;
  font-size: 50px;
  line-height: 112.63%;
  text-align: center;
  color: #ffffff;
  background: rgba(7, 7, 13, 0.6);
  width: 100%;
  height: 100%;
  z-index: 20;
  display: flex;
  justify-content: center;
  p:first-of-type {
    display: flex;
    align-items: center;
  }
  ${breakpoints.onlyMobile} {
    display: none;
  }
  ${breakpoints.onlyTablet} {
    display: none;
  }
  ${breakpoints.onlyDesktop} {
    display: flex;
  }
`;

export const StyledTaskDescContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 325px;
  font-size: 30px;
  margin: 0 auto;
  line-height: 112.63%;
  ${breakpoints.onlyMobile} {
  }
  ${breakpoints.onlyTablet} {
    width: 689px;
    font-size: 40px;
  }
  ${breakpoints.onlyDesktop} {
    font-size: 50px;
    width: 1165px;
  }
`;

export const StyledTaskTextDesc = styled.div`
  padding: 0 16px;
  position: absolute;
  top: 0;
  left: 0;
  ${(props) => (props.hidden ? "display: none;" : "display: flex;")}
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
  ${breakpoints.onlyMobile} {
    margin-top: 105px;
  }
  ${breakpoints.onlyTablet} {
    margin-top: 124px;
    font-size: 30px;
    width: 468px;
    border: 5px solid #ffffff;
    height: 82px;
  }
  ${breakpoints.onlyDesktop} {
    font-size: 50px;
    border: 5px solid #ffffff;
    margin-top: 257px;
    width: 743px;
    height: 135px;
  }
`;

export const StyledTaskDescButtonMobile = styled(Button)`
  text-transform: uppercase;
  width: 325px;
  height: 59px;
  border-radius: 13px;
  border: 2px solid #ffffff;
  color: #fff;
  font-size: 17px;
  line-height: 112.63%;
  background: transparent;
  font-weight: bold;
  margin-top: 88px;
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

export const StyledTaskDescButtonTablet = styled(Button)`
  margin-top: 122px;
  text-transform: uppercase;
  border-radius: 13px;
  font-size: 30px;
  line-height: 112.63%;
  width: 485px;
  height: 101px;
  padding: 6px 0;
  border: 5px solid #ffffff;
  background: transparent;
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

export const StyledTaskDescButtonDesktop = styled(Button)`
  margin-top: 163px;
  border: 5px solid #ffffff;
  text-transform: uppercase;
  border-radius: 13px;
  width: 743.64px;
  height: 135px;
  font-size: 40px;
  line-height: 112.63%;
  background: transparent;
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

export const StyledTaskTextDesc2 = styled.div``;

export const StyledTaskContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

export const StyledTaskCircles = styled.div`
  position: fixed;
`;

export const StyledTaskPlayIcon = styled.img`
  width: 39px;
  margin-left: 16px;
  ${breakpoints.onlyTablet} {
    width: 61px;
    height: 62.97px;
    margin-left: 25px;
  }
  ${breakpoints.onlyDesktop} {
    width: 102px;
    height: 105.29px;
    margin-left: 25px;
  }
`;

export const WrapperPlay = styled.div`
  position: absolute;
  top: 277px;
  left: 6px;
  width: 116px;
  height: 116px;
  background-image: url(${ellipse});
  background-size: contain;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WrapperPlay1 = styled(WrapperPlay)`
  top: 277px;
  left: 6px;

  ${breakpoints.onlyDesktop} {
    top: 617px;
    left: 66px;
  }
`;

export const WrapperPlay2 = styled(WrapperPlay)`
  top: 127px;
  left: 18px;

  ${breakpoints.onlyTablet} {
    top: 167px;
    left: 149px;
  }

  ${breakpoints.onlyDesktop} {
    top: 297px;
    left: 248px;
  }
`;

export const WrapperPlay3 = styled(WrapperPlay)`
  top: 53px;
  left: 198px;

  ${breakpoints.onlyTablet} {
    top: 77px;
    left: 539px;
  }

  ${breakpoints.onlyDesktop} {
    top: 103px;
    left: 1048px;
  }
`;

export const WrapperPlay4 = styled(WrapperPlay)`
  left: 167px;
  top: 236px;

  ${breakpoints.onlyTablet} {
    top: 126px;
    left: 729px;
  }

  ${breakpoints.onlyDesktop} {
    top: 303px;
    left: 1548px;
  }
`;

export const WrapperPlay5 = styled(WrapperPlay)`
  left: 257px;
  top: 140px;

  ${breakpoints.onlyTablet} {
    left: 347px;
    top: 270px;
  }

  ${breakpoints.onlyDesktop} {
    left: 677px;
    top: 450px;
  }
`;

export const StyledTaskPlayIconImg1 = styled.div`
  width: 53.57px;
  height: 55.3px;
  background-image: url(${playIconImg1});
  background-size: contain;
  background-repeat: no-repeat;
`;
export const StyledTaskPlayIconImg2 = styled.div`
  width: 53.57px;
  height: 55.3px;
  background-image: url(${playIconImg2});
  background-size: contain;
  background-repeat: no-repeat;
`;

export const StyledTaskPlayIconImg3 = styled.div`
  width: 53.57px;
  height: 55.3px;
  background-image: url(${playIconImg3});
  background-size: contain;
  background-repeat: no-repeat;
`;

export const StyledTaskPlayIconImg4 = styled.div`
  width: 53.57px;
  height: 55.3px;
  background-image: url(${playIconImg4});
  background-size: contain;
  background-repeat: no-repeat;
`;

export const StyledTaskPlayIconImg5 = styled.div`
  width: 53.57px;
  height: 55.3px;
  background-image: url(${playIconImg5});
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

export const Wrapper2 = styled.div`
  ${(props) => (props.show ? "display: block;" : "display: none;")}
`;

export const StyledTaskTextMobile = styled.div`
  margin-bottom: 36px;
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

export const StyledTaskTextTablet = styled.div`
  font-size: 40px;
  line-height: 112.63%;
  margin-bottom: 83px;
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

export const StyledTaskTextDesktop = styled.div`
  font-size: 50px;
  margin-bottom: 72px;
  line-height: 112.63%;
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

export const StyledTaskTextContainer = styled.div`
  width: 325px;
`;

export const StyledTaskAudio = styled.audio`
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
`;

export const StyledPlaySvgIcon = styled.div`
  width: 33px;
  height: 33px;
  background-image: url(${(props) => (!props.playing ? playSvg : pauseSvg)});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
  margin-right: 16px;
  ${breakpoints.onlyTablet} {
    width: 53px;
    height: 53px;
  }
  ${breakpoints.onlyDesktop} {
    width: 80px;
    height: 80px;
  }
`;

export const StyledTaskAudioPlayer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledWaveSvg = styled.img.attrs({
  src: waveSvg,
})`
  width: 237px;
  height: 43px;
  ${breakpoints.onlyTablet} {
    width: 381.42px;
    height: 68.96px;
  }
  ${breakpoints.onlyDesktop} {
    width: 569px;
    height: 103px;
  }
`;
