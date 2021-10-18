import {
  StyledLitenContainer,
  StyledInfoBigBubbleText,
  StyledInfoBubble,
  StyledInfoBubbleText,
  StyledInfoBigBubbleButton,
  StyledLitenLottie,
  StyledInfoContent,
  StyledInfoTextMobile,
  StyledInfoTextTablet,
  StyledInfoTextDesktop,
  StyledInfoButton,
} from "./styled";
import { StyledCircles } from "../info_1/styled";
import { useHistory } from "react-router";
import LitenAnimationInfo4 from "../../../assets/animation/liten_info_3.json";
import { useEffect, useState } from "react";
import { observer } from "mobx-react";
import { useStore } from "../../../store";
import { MusicToggle } from "../../../components/MusicToggle";

export const Info4 = observer(() => {
  const [hidden, setHidden] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const { game } = useStore();
  const history = useHistory();

  useEffect(() => {
    game.changeBgMusic("bgthMusic");
  }, []);

  return (
    <>
      <MusicToggle />
      <StyledLitenContainer>
        <StyledInfoBigBubbleText show={showBubble}>
          ...или вы можете остаться и вместе со мной сыграть на инструменте без
          струн и клавиш!
          <StyledInfoBigBubbleButton
            onClick={() => {
              history.push("/info/5");
            }}
          >
            Сыграть на терменвоксе
          </StyledInfoBigBubbleButton>
        </StyledInfoBigBubbleText>
        <StyledInfoBubble
          hidden={hidden}
          onClick={() => {
            setHidden(!hidden);
            setShowBubble(true);
          }}
        >
          <StyledInfoBubbleText>!</StyledInfoBubbleText>
        </StyledInfoBubble>
        <StyledLitenLottie animationData={LitenAnimationInfo4} />
      </StyledLitenContainer>
      <StyledCircles>
        <div></div>
        <div></div>
      </StyledCircles>
      <div className="container">
        <StyledInfoContent>
          <StyledInfoTextMobile
            dangerouslySetInnerHTML={{
              __html: `Правильного ответа нет, а выход,<br /> если не хочется получать штрафы, <strong>–<br /> есть!</strong>`,
            }}
          />
          <StyledInfoTextTablet
            dangerouslySetInnerHTML={{
              __html: `Правильного ответа нет, а выход,<br /> если не хочется получать штрафы, <strong>– есть!</strong>`,
            }}
          />
          <StyledInfoTextDesktop
            dangerouslySetInnerHTML={{
              __html: `Правильного ответа нет, а выход,<br /> если не хочется получать штрафы, <strong>– есть!</strong>`,
            }}
          />
          <StyledInfoTextMobile
            dangerouslySetInnerHTML={{
              __html: `Миллион композиций и тысячи<br /> плейлистов, совершенно легально,<br /> подходящих для коммерческого<br /> использования, ждут в аудиосервисе<br /> <strong>СберЗвук Бизнес</strong>`,
            }}
          />
          <StyledInfoTextTablet
            dangerouslySetInnerHTML={{
              __html: `Миллион композиций и тысячи плейлистов,<br /> совершенно легально, подходящих для<br /> коммерческого использования,<br /> ждут в аудиосервисе <strong>СберЗвук Бизнес</strong>`,
            }}
          />
          <StyledInfoTextDesktop
            dangerouslySetInnerHTML={{
              __html: `Миллион композиций и тысячи плейлистов,<br /> совершенно легально, подходящих для<br /> коммерческого использования,<br /> ждут в аудиосервисе <strong>СберЗвук Бизнес</strong>`,
            }}
          />
          <StyledInfoButton
            onClick={() => {
              history.push("/task/3");
            }}
            pink
          >
            Протестировать
            <br /> Бесплатно
          </StyledInfoButton>
        </StyledInfoContent>
      </div>
    </>
  );
});
