import { useHistory } from "react-router";
import {
  StyledMobileCircles,
  StyledStartButton,
  StyledStartContent,
  StyledStartTop,
  StyledStartContainer,
  Styled2RobotsLottieContainer,
  Styled2RobotsLottie,
  StyledStartTextContainer,
  StyledStartTextMobile,
  StyledStartTextTablet,
  StyledStartTextDesktop,
} from "./styled";
import animationData from "../../assets/animation/2rob_mobile.json";
import { MusicToggle } from "../../components/MusicToggle";
import { useStore } from "../../store";
import { observer } from "mobx-react";
import { useEffect } from "react";
import { SoundClick } from "../../components/sound-click";

export const Start = observer(() => {
  const { game } = useStore();
  const history = useHistory();

  useEffect(() => {
    game.changeBgMusic("startMusic");
  }, []);

  return (
    <StyledStartContainer>
      <StyledMobileCircles>
        <div></div>
        <div></div>
      </StyledMobileCircles>
      <Styled2RobotsLottieContainer>
        <Styled2RobotsLottie animationData={animationData} />
      </Styled2RobotsLottieContainer>
      <MusicToggle />
      {/* <StyledStartTop></StyledStartTop> */}
      <div className="container">
        <StyledStartContent>
          <StyledStartTextContainer>
            <StyledStartTextMobile
              dangerouslySetInnerHTML={{
                __html: `Ото хочет работать 
              в <strong>аудиосервисе СберЗвук Бизнес,</strong> который помогает компаниям найти свое уникальное звучание. Но у нас высокие требования. Нужно многому научиться, например, 
              <strong>различать музыкальные стили.</strong>`,
              }}
            ></StyledStartTextMobile>
            <StyledStartTextTablet
              dangerouslySetInnerHTML={{
                __html: `Ото хочет работать 
              в <strong>аудиосервисе СберЗвук<br /> Бизнес,</strong> который помогает<br /> компаниям найти свое<br /> уникальное звучание.<br /> Но у нас высокие требования.<br /> Нужно многому научиться,<br /> например, 
              <strong>различать музыкальные стили.</strong>`,
              }}
            ></StyledStartTextTablet>
            <StyledStartTextDesktop
              dangerouslySetInnerHTML={{
                __html: `Ото хочет работать 
              в <strong>аудиосервисе СберЗвук<br /> Бизнес,</strong> который помогает<br /> компаниям найти свое<br /> уникальное звучание.<br /> Но у нас высокие требования.<br /> Нужно многому научиться,<br /> например, 
              <strong>различать музыкальные стили.</strong>`,
              }}
            ></StyledStartTextDesktop>
          </StyledStartTextContainer>
          <StyledStartButton
            onClick={() => {
              history.push("/task/1/1");
              game.changeBgMusic("bgMusic");
            }}
          >
            Поможете ей?
          </StyledStartButton>
        </StyledStartContent>
      </div>
    </StyledStartContainer>
  );
});
