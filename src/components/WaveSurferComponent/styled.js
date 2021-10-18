import styled from "styled-components";
import playSvg from "../../assets/svg/play2.svg";
import pauseSvg from "../../assets/svg/pause.svg";
import { breakpoints } from "../../helpers/breakpoints";

export const StyleWaveSurferContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  justify-content: space-between;
  width: 100%;
  background: transparent;
  ${breakpoints.onlyDesktop} {
  }
`;

export const StyledWave = styled.div`
  width: 100%;
  overflow: hidden;
`;

export const StyledPlaySvgIcon = styled.div`
  width: 50px;
  height: 50px;
  background-image: url(${(props) => (!props.playing ? playSvg : pauseSvg)});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
  margin-right: 16px;
  ${breakpoints.onlyTablet} {
    width: 63px;
    height: 63px;
  }
  ${breakpoints.onlyDesktop} {
    width: 122px;
    height: 122px;
  }
`;
