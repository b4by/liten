import {
  StyledCircles,
  StyledInfoContent,
  StyledInfoText,
  StyledInfoButton,
  StyledLitenContainer,
  StyledLitenLottie,
} from "./styled.js";
import LitenAnimationScreen2 from "../../../assets/animation/liten_screen_2.json";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { MusicToggle } from "../../../components/MusicToggle/index.jsx";
import iHappyMp3 from "../../../assets/audio/l_happy.mp3";
import { useEffect, useState } from "react";

export const Info1 = () => {
  const [audio] = useState(new Audio(iHappyMp3));
  useEffect(() => {
    audio.play();
  }, []);
  const history = useHistory();

  return (
    <>
      <MusicToggle />
      <StyledLitenContainer>
        <StyledLitenLottie animationData={LitenAnimationScreen2} />
      </StyledLitenContainer>
      <StyledCircles>
        <div></div>
        <div></div>
      </StyledCircles>
      <StyledInfoContent>
        <StyledInfoText>
          Отлично справляетесь, дальше будет труднее, готовы?
        </StyledInfoText>
        <StyledInfoButton
          onClick={() => {
            history.push("/task/2");
          }}
        >
          Перейти к заданию 2
        </StyledInfoButton>
        <StyledInfoText>
          Интересно, а какой бы стиль вы выбрали для{" "}
          <strong>своего бизнеса?</strong>
        </StyledInfoText>
        <StyledInfoButton pink>
          <Link to="/">
            создать плейлист
            <br /> в СберЗвук Бизнесе
          </Link>
        </StyledInfoButton>
      </StyledInfoContent>
    </>
  );
};
