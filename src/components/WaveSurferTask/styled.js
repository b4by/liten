import styled from "styled-components";
import playSvg from "../../assets/svg/play2.svg";
import pauseSvg from "../../assets/svg/pause.svg";
import { breakpoints } from "../../helpers/breakpoints";
import checkboxBlankImg from "../../assets/img/checkbox--blank.png";
import checkboxActiveImg from "../../assets/img/checkbox--active.png";

export const StyleWaveSurferContainer = styled.div`
  display: grid;
  grid-template-columns: 50px 192px 48px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.32);
  border: 1px solid rgba(255, 255, 255, 0.48);
  box-sizing: border-box;
  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.08);
  backdrop-filter: blur(2px);
  border-radius: 28px;
  padding: 4px;
  height: 56px;
  overflow: hidden;
  ${breakpoints.onlyTablet} {
    height: 72px;
    grid-template-columns: 80px 253px 65px;
    background: none;
    border: none;
    box-shadow: none;
    backdrop-filter: none;
  }
  ${breakpoints.onlyDesktop} {
    height: 127px;
    grid-template-columns: 127px 502px 104px;
    background: none;
    border: none;
    box-shadow: none;
    backdrop-filter: none;
  }
`;

export const StyledWave = styled.div`
  overflow: hidden;
`;

export const StyledPlaySvgIcon = styled.div`
  width: 48px;
  height: 48px;
  user-select: none;
  background-image: url(${(props) => (!props.playing ? playSvg : pauseSvg)});
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
  ${breakpoints.onlyTablet} {
    width: 63px;
    height: 63px;
  }
  ${breakpoints.onlyDesktop} {
    width: 122px;
    height: 122px;
  }
`;

export const StyledCheckbox = styled.div`
  background-image: url(${({ checked }) =>
    !checked ? checkboxBlankImg : checkboxActiveImg});
  width: 48px;
  height: 48px;
  background-repeat: no-repeat;
  background-size: contain;
  cursor: pointer;
  ${breakpoints.onlyTablet} {
    width: 65px;
    height: 65px;
  }
  ${breakpoints.onlyDesktop} {
    width: 104px;
    height: 104px;
  }
`;
