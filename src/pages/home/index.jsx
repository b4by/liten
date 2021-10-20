import { observer } from "mobx-react";
import { useHistory } from "react-router";
import LitenAnimationScreen1 from "../../assets/animation/liten_screen_1.json";
import { useStore } from "../../store";
import { MusicToggle } from "../../components/MusicToggle";
import {
  StyledHomeContainer,
  StyledLitenContainer,
  StyledLottie,
  StyledCircles,
  StyledHomeContent,
  StyledTextContainer,
  StyledTextMobile,
  StyledTextTablet,
  StyledTextDesktop,
  StyledLitenBubble,
  StyledHomeButton,
  StyledSberLogo,
} from "./styled";
import { SoundClick } from "../../components/sound-click";

export const Home = observer(() => {
  const history = useHistory();
  const { game } = useStore();
  return (
    <StyledHomeContainer>
      <StyledCircles>
        <div></div>
        <div></div>
        <div></div>
      </StyledCircles>
      <MusicToggle />
      <div className="container">
        <StyledLitenContainer>
          <StyledLitenBubble />
          <StyledLottie animationData={LitenAnimationScreen1}></StyledLottie>
        </StyledLitenContainer>
        <StyledHomeContent>
          <StyledTextContainer>
            <StyledTextMobile>
              <strong>
                Познакомьтесь,
                <br /> это Ото –<br /> маленькая нейросеть.
                <br />
                <br />
              </strong>
              Она мечтает стать большим
              <br /> музыкальным алгоритмом
              <br /> и подбирать такую фоновую
              <br /> музыку, чтобы у ваших клиентов
              <br /> поднималось настроение,
              <br /> и <strong>они чаще и больше покупали</strong>
            </StyledTextMobile>
            <StyledTextTablet>
              <strong>
                Познакомьтесь,
                <br /> это Ото – <br /> маленькая нейросеть.
                <br />
                <br />
              </strong>
              Она мечтает стать большим
              <br /> музыкальным алгоритмом
              <br /> и подбирать такую фоновую
              <br /> музыку, чтобы у ваших клиентов
              <br /> поднималось настроение,
              <br /> и <strong>они чаще и больше покупали</strong>
            </StyledTextTablet>
            <StyledTextDesktop>
              <strong>
                Познакомьтесь,
                <br /> это Ото –<br /> маленькая нейросеть.
                <br />
                <br />
              </strong>
              Она мечтает стать большим музыкальным
              <br /> алгоритмом и подбирать такую фоновую
              <br /> музыку, чтобы у ваших клиентов поднималось
              <br /> настроение, и <strong>они чаще и больше покупали</strong>
            </StyledTextDesktop>
          </StyledTextContainer>
          <StyledHomeButton
            onClick={() => {
              history.push("/start");
              game.start();
            }}
          ></StyledHomeButton>
        </StyledHomeContent>
      </div>
      <StyledSberLogo />
    </StyledHomeContainer>
  );
});
