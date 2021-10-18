import styled, { css, keyframes } from "styled-components";
import infoBgImg__mobile from "../../assets/img/info-1__mobile@2x.jpg";
import infoBgImg__tablet from "../../assets/img/info-1__tablet@2x.jpg";
import infoBgImg__desktop from "../../assets/img/info-1__desktop@2x.jpg";
import { breakpoints } from "../../helpers/breakpoints";

export const StyledInfo = styled.div`
  height: 100%;
  background-image: url(${infoBgImg__mobile});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  ${breakpoints.onlyTablet} {
    background-image: url(${infoBgImg__tablet});
  }
  ${breakpoints.onlyDesktop} {
    background-image: url(${infoBgImg__desktop});
  }
`;
