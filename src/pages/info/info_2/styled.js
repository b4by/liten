import styled from "styled-components";
import { breakpoints } from "../../../helpers/breakpoints";
import { StyledInfoText } from "../info_1/styled";
import ArrowPinkSvg from "../../../assets/svg/arrow--pink.svg";
import ArrowPurpleSvg from "../../../assets/svg/arrow--purple.svg";

export const StyledInfo2Text = styled(StyledInfoText)`
  ${breakpoints.onlyTablet} {
    &:first-of-type {
      &::after {
        left: -18px;
      }
    }
    &:last-of-type {
      font-weight: bold;
      &::after {
        right: -172px;
      }
    }
  }
`;
