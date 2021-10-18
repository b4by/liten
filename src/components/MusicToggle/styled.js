import styled from "styled-components";
import soundOn from "../../assets/svg/sound_on.svg";
import soundOff from "../../assets/svg/sound_off.svg";
import { breakpoints } from "../../helpers/breakpoints";

export const StyledMusicToggle = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-size: cover;
  background-image: url(${({ mutted }) => (mutted ? soundOff : soundOn)});
  width: 32px;
  height: 32px;
  top: 28px;
  left: 31px;
  cursor: pointer;
  z-index: 8000;
  ${breakpoints.onlyTablet} {
    top: 38px;
    left: 70px;
    width: 38px;
    height: 38px;
  }
  ${breakpoints.onlyDesktop} {
    top: 40px;
    left: 131px;
    width: 52px;
    height: 52px;
  }
`;
