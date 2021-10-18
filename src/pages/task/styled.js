import styled from "styled-components";
import bgImg__mobile from "../../assets/img/task_2_mobile@2x.jpg";
import bgImg__tablet from "../../assets/img/screen-8__tablet@2x.jpg";
import bgImg__desktop from "../../assets/img/screen-8__desktop@2x.jpg";
import { breakpoints } from "../../helpers/breakpoints";

export const StyledTaskContainer = styled.div`
  height: 100%;
  background-image: url(${bgImg__mobile});
  background-repeat: no-repeat;
  background-size: cover;
  ${breakpoints.onlyTablet} {
    background-image: url(${bgImg__tablet});
  }
  ${breakpoints.onlyDesktop} {
    background-image: url(${bgImg__desktop});
  }
`;
