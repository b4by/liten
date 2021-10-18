import { useHistory } from "react-router";
import { StyledCircles } from "../info_1/styled";
import {
  StyledInfo3Content,
  StyledLitenContainer,
  StyledLitenLottie,
  StyledInfoTextMobile,
  StyledInfoTextTablet,
  StyledInfoTextDesktop,
  StyledInfoButton,
} from "./styled";
import LitenAnimationInfo3 from "../../../assets/animation/liten_info_3.json";
import { MusicToggle } from "../../../components/MusicToggle";

export const Info3 = () => {
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
      <div className="container">
        <StyledInfo3Content>
          <StyledInfoTextMobile
            dangerouslySetInnerHTML={{
              __html: `Все хотят, чтобы у них<br /> в магазине или в салоне<br /> играла <strong>приятная музыка,</strong><br /> но у каждой композиции есть<br /> автор. А значит, нужно<br /> соблюдать <strong>авторские права.</strong>`,
            }}
          />
          <StyledInfoTextTablet
            dangerouslySetInnerHTML={{
              __html: `Все хотят, чтобы у них в магазине или в салоне играла<br /> <strong>приятная музыка,</strong> но у каждой композиции есть автор.<br/> А значит, нужно соблюдать <strong>авторские права.</strong>`,
            }}
          />
          <StyledInfoTextDesktop
            dangerouslySetInnerHTML={{
              __html: `Все хотят, чтобы у них в магазине или в салоне играла<br /> <strong>приятная музыка,</strong> но у каждой композиции есть автор.<br/> А значит, нужно соблюдать <strong>авторские права.</strong>`,
            }}
          />
          <StyledInfoTextMobile
            dangerouslySetInnerHTML={{
              __html: `Поможете маленькой<br /> нейросети Ото <strong>выучить<br/> законы?</strong>`,
            }}
          ></StyledInfoTextMobile>
          <StyledInfoTextTablet
            dangerouslySetInnerHTML={{
              __html: `Поможете маленькой нейросети Ото <strong>выучить<br /> законы?</strong>`,
            }}
          />
          <StyledInfoTextDesktop
            dangerouslySetInnerHTML={{
              __html: `Поможете маленькой нейросети Ото <strong>выучить законы?</strong>`,
            }}
          />
          <StyledInfoButton
            onClick={() => {
              history.push("/task/3");
            }}
          >
            Вперёд!
          </StyledInfoButton>
        </StyledInfo3Content>
      </div>
    </>
  );
};
