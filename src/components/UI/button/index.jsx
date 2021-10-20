import styled from "styled-components";
import { breakpoints } from "../../../helpers/breakpoints";
import { SoundClick } from "../../sound-click";

const StyledButton = styled.button.attrs({
  type: "button",
})`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 800;
  font-size: 1rem;
  font-family: inherit;
  background: #8253aa;
  border-radius: 13px;
  color: #fff;
  text-decoration: none;
  border: none;
  padding: 20px 0;
  cursor: pointer;
  transition: background ease-in 0.5s;
  :disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  :hover {
    background: #6b349a;
  }
  :active {
    background: #331052;
  }
  span {
    width: 19px;
    height: 19px;
    border-radius: 50%;
    background-color: #fff;
    &:not(:last-child) {
      margin-right: 19px;
      ${breakpoints.onlyDesktop} {
        margin-right: 53px;
      }
    }
    ${breakpoints.onlyTablet} {
      width: 33px;
      height: 33px;
    }
    ${breakpoints.onlyDesktop} {
      width: 53px;
      height: 53px;
    }
  }
`;

export const Button = ({ type, children, className, onClick }) => {
  return (
    <SoundClick type={type}>
      <StyledButton className={className} onClick={onClick}>
        {children ? (
          children
        ) : (
          <>
            <span></span>
            <span></span>
            <span></span>
          </>
        )}
      </StyledButton>
    </SoundClick>
  );
};
