import { useState } from "react";
import { useHistory } from "react-router";
import { MusicToggle } from "../../../components/MusicToggle";
import { StyledCircles } from "../info_1/styled";
import {
  StyledInfoContent,
  StyledInfoTextMobile,
  StyledInfoTextTablet,
  StyledInfoTextDesktop,
  StyledInfoTextButton,
  StyledInfoTextDescription,
  StyledInfoButton,
} from "./styled";

export const Info5 = () => {
  const [show, setShow] = useState(false);
  const history = useHistory();
  return (
    <>
      <MusicToggle />
      <StyledCircles>
        <div></div>
        <div></div>
      </StyledCircles>
      <StyledInfoContent>
        <StyledInfoTextMobile>
          Однажды Ото будет
          <br /> не только составлять плейлисты,
          <br /> но и делать <strong>аудиологотипы и рекламные ролики.</strong>
        </StyledInfoTextMobile>
        <StyledInfoTextMobile>
          А для начала попробует записать
          <br /> и аранжировать мелодию
          <br /> на{" "}
          <strong>
            <StyledInfoTextButton show={show} onClick={() => setShow(!show)}>
              <StyledInfoTextDescription show={show}>
                Терменвокс изобрел 100 и 1 год назад советский
                инженер-электромеханик Лев Термен. Сейчас его правнук руководит
                Школой терменвокса и записывает на этом электроинструменте
                мировые хиты.
              </StyledInfoTextDescription>
              терменвоксе.
            </StyledInfoTextButton>
          </strong>
        </StyledInfoTextMobile>
        <StyledInfoTextTablet>
          Однажды Ото будет
          <br /> не только составлять плейлисты, но и делать
          <br /> <strong>аудиологотипы и рекламные ролики.</strong>
        </StyledInfoTextTablet>
        <StyledInfoTextTablet>
          А для начала попробует записать и аранжировать
          <br /> мелодию на{" "}
          <strong>
            <StyledInfoTextButton show={show} onClick={() => setShow(!show)}>
              <StyledInfoTextDescription show={show}>
                <p>
                  Терменвокс изобрел 100 и 1 год назад советский
                  инженер-электромеханик Лев Термен.
                </p>
                <p>
                  Сейчас его правнук руководит Школой терменвокса и записывает
                  на этом электроинструменте мировые хиты.
                </p>
              </StyledInfoTextDescription>
              терменвоксе.
            </StyledInfoTextButton>
          </strong>
        </StyledInfoTextTablet>
        <StyledInfoTextDesktop>
          Однажды Ото будет не только составлять
          <br />
          плейлисты, <br /> но и делать
          <strong>аудиологотипы и рекламные ролики.</strong>
        </StyledInfoTextDesktop>
        <StyledInfoTextDesktop>
          А для начала попробует записать и аранжировать
          <br /> мелодию на{" "}
          <strong>
            <StyledInfoTextButton show={show} onClick={() => setShow(!show)}>
              <StyledInfoTextDescription show={show}>
                <p>
                  Терменвокс изобрел 100 и 1 год назад советский
                  инженер-электромеханик Лев Термен.
                </p>
                <p>
                  Сейчас его правнук руководит Школой терменвокса и записывает
                  на этом электроинструменте мировые хиты.
                </p>
              </StyledInfoTextDescription>
              терменвоксе.
            </StyledInfoTextButton>
          </strong>
        </StyledInfoTextDesktop>
        <StyledInfoButton onClick={() => history.push("/task/4")}>
          Поможете ей?
        </StyledInfoButton>
      </StyledInfoContent>
    </>
  );
};
