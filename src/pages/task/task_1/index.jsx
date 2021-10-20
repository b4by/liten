import { observer } from "mobx-react";
import { useState, useEffect, useLayoutEffect } from "react";
import { useStore } from "../../../store";
import {
  StyledLevelContainer,
  StyledLevelDescriptionText,
  StyledPlaySvg,
  StyledLevelContent,
  StyledBorderedText,
  StyledLevelVinyl,
  StyledLevelVinylImg,
  StyledLevelPlayer,
  StyledLevelMusic,
  StyledLevelAnswers,
  StyledLevelButton,
  StyledEmojiReaction,
} from "./styled";
import playImg from "../../../assets/svg/play.svg";
import { WaveSurferComponent } from "../../../components/WaveSurferComponent";
import { useHistory } from "react-router";
import { MusicToggle } from "../../../components/MusicToggle";
import answerRightMp3 from "../../../assets/audio/answer_right.mp3";
import answerFalseMp3 from "../../../assets/audio/answer_false.mp3";

export const Task1 = observer(({}) => {
  const { game } = useStore();
  const history = useHistory();
  const [rightAudio] = useState(new Audio(answerRightMp3));
  const [falseAudio] = useState(new Audio(answerFalseMp3));
  const [hidden, setHidden] = useState(false);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);
  const [animate, setAnimate] = useState(false);

  const level = game.currentLevel;

  useEffect(() => {
    if (level === 3) {
      history.push("/info/1");
    }
  }, [level]);

  return (
    <StyledLevelContainer>
      <MusicToggle />
      <StyledLevelDescriptionText
        onClick={() => setHidden(true)}
        hidden={hidden}
      >
        <p>Прослушайте мелодию и выберите стиль, к которому она относится.</p>
        <p>
          Чтобы прослушать композицию нажмите <StyledPlaySvg src={playImg} /> ,
          чтобы выбрать вариант ответа — нажмите на{" "}
          <StyledBorderedText>кнопку.</StyledBorderedText>
        </p>
      </StyledLevelDescriptionText>
      <StyledLevelContent>
        <div className="container">
          {game.currentLevel !== 3 && (
            <>
              <StyledLevelVinyl key={game.currentLevel}>
                <span></span>
                <span></span>
                <span></span>
                <StyledLevelVinylImg
                  src={game.musicQuestions[level]?.img}
                  started={game.musicPlaying}
                />
                <span></span>
              </StyledLevelVinyl>
              <StyledLevelPlayer>
                <StyledLevelMusic>
                  <WaveSurferComponent url={game.musicQuestions[level].url} />
                </StyledLevelMusic>
                <StyledLevelAnswers>
                  {game.musicQuestions[level]?.variants?.map((item, key) => (
                    <StyledLevelButton
                      onClick={() => {
                        setAnimate(true);
                        if (game.currentLevel === 0 && item === "латина") {
                          setIsCorrectAnswer(true);
                          rightAudio.play();
                          game.goToNextLevel();
                          game.playOrPause(false);
                          history.push(`/task/1/${game.currentLevel + 1}`);
                        }
                        if (game.currentLevel === 1 && item === "кантри") {
                          setIsCorrectAnswer(true);
                          rightAudio.play();
                          game.goToNextLevel();
                          game.playOrPause(false);
                          history.push(`/task/1/${game.currentLevel + 1}`);
                        }
                        if (game.currentLevel === 2 && item === "фолк") {
                          setIsCorrectAnswer(true);
                          rightAudio.play();
                          setTimeout(() => {
                            game.goToNextLevel();
                            game.playOrPause(false);
                            history.push(`/task/1/${game.currentLevel + 1}`);
                          }, 600);
                        }
                      }}
                      key={key}
                    >
                      {item}
                    </StyledLevelButton>
                  ))}
                </StyledLevelAnswers>
              </StyledLevelPlayer>
            </>
          )}
        </div>
      </StyledLevelContent>
      <StyledEmojiReaction
        animate={animate}
        onAnimationEnd={() => {
          setAnimate(false);
          setIsCorrectAnswer(false);
        }}
      >
        {isCorrectAnswer ? "😄" : "😢"}
      </StyledEmojiReaction>
    </StyledLevelContainer>
  );
});
