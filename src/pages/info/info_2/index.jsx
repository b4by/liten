import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import LitenAnimationInfo3 from "../../../assets/animation/liten_info_3.json";
import { MusicToggle } from "../../../components/MusicToggle";
import {
  StyledCircles,
  StyledInfoButton,
  StyledInfoText,
  StyledInfoContent,
} from "../info_1/styled";
import { StyledLitenContainer, StyledLitenLottie } from "../info_3/styled";
import {
  StyledInfoTextMobile,
  StyledInfoTextTablet,
  StyledInfo2Text,
} from "./styled";

export const Info2 = () => {
  const history = useHistory();
  return (
    <>
      <MusicToggle />
      <StyledLitenContainer>
        <StyledLitenLottie animationData={LitenAnimationInfo3} />
      </StyledLitenContainer>
      <StyledCircles>
        <div></div>
        <div></div>
      </StyledCircles>
      <StyledInfoContent>
        <StyledInfo2Text>
          Маленькая нейросеть Ото с вашей помощью переходит на{" "}
          <strong>следующий уровень,</strong> железное вам спасибо!
        </StyledInfo2Text>
        <StyledInfoButton
          onClick={() => {
            history.push("/info/3");
          }}
        >
          Перейти к заданию 3
        </StyledInfoButton>
        <StyledInfo2Text>
          <strong>Хотите свой плейлист?</strong>
        </StyledInfo2Text>
        <StyledInfoButton pink>
          <Link to="/">
            Открыть коллекцию
            <br /> СберЗвук Бизнес
          </Link>
        </StyledInfoButton>
      </StyledInfoContent>
    </>
  );
};
