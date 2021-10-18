import { observer } from "mobx-react";
import { useState } from "react";
import { useHistory } from "react-router";
import { MusicToggle } from "../../../components/MusicToggle";
import { WaveSurferTask } from "../../../components/WaveSurferTask";
import useRatio from "../../../hooks/useRatio";
import { useStore } from "../../../store";
import { StyledEmojiReaction } from "../task_1/styled";
import {
  StyledTaskContainer,
  StyledTaskTextDesc,
  StyledCheckboxImg,
  StyledTaskDescButton,
  StyledTaskCircles,
  StyledTaskContent,
  StyledTaskImgContainer,
  StyledTaskImg,
  StyledTaskTitle,
  StyledTaskText,
  StyledTaskDesc,
  StyledTaskButton,
  StyledTaskPlayers,
} from "./styled";

export const Task2 = observer(() => {
  const ratio = useRatio();
  const { game } = useStore();
  const [currentTask, setCurrentTask] = useState(0);
  const [checked, setChecked] = useState({});
  const [hidden, setHidden] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);
  const history = useHistory();
  const task = game.currentTask;
  return (
    <StyledTaskContainer>
      <MusicToggle />
      <StyledTaskTextDesc onClick={() => setHidden(true)} hidden={hidden}>
        <p>Каждому бизнесу – своя музыка, но где какую ставить?</p>
        <p>Выберите музыку, которая подходит заведению .</p>
        <p>
          Для выбора нажмите <StyledCheckboxImg />{" "}
        </p>
        <StyledTaskDescButton onClick={() => setHidden(true)}>
          Попробовать!
        </StyledTaskDescButton>
      </StyledTaskTextDesc>
      <StyledTaskCircles>
        <div></div>
        <div></div>
      </StyledTaskCircles>
      <div className="container">
        <StyledTaskContent>
          {game.musicTask
            .filter((item) => item.id === currentTask)
            .map((item) => {
              return (
                <>
                  <StyledTaskImgContainer>
                    <StyledTaskImg src={item.img} />
                  </StyledTaskImgContainer>
                  <StyledTaskText>
                    <StyledTaskTitle>как звучит</StyledTaskTitle>
                    <StyledTaskDesc>{item.title}</StyledTaskDesc>
                  </StyledTaskText>
                  <StyledTaskPlayers>
                    {item.music?.map((track) => (
                      <WaveSurferTask
                        key={track.id}
                        id={track.id}
                        url={track.url}
                        checked={checked}
                        setChecked={setChecked}
                      />
                    ))}
                  </StyledTaskPlayers>
                </>
              );
            })}
          <StyledTaskButton
            onClick={() => {
              setAnimate(true);
              if (currentTask === 0 && checked.checkedTrackId === 1) {
                setIsCorrectAnswer(true);
                setChecked({});
                setCurrentTask((prev) => prev + 1);
              }
              if (currentTask === 1 && checked.checkedTrackId === 0) {
                setIsCorrectAnswer(true);
                setChecked({});
                setCurrentTask((prev) => prev + 1);
              }
              if (currentTask === 2 && checked.checkedTrackId === 2) {
                setIsCorrectAnswer(true);
                setTimeout(() => {
                  setCurrentTask((prev) => prev + 1);
                  history.push("/info/2");
                }, 600);
              }
            }}
          >
            Выбрать
          </StyledTaskButton>
        </StyledTaskContent>
      </div>
      <StyledEmojiReaction
        animate={animate}
        onAnimationEnd={() => {
          setAnimate(false);
          setIsCorrectAnswer(false);
        }}
      >
        {isCorrectAnswer ? "😄" : "😢"}
      </StyledEmojiReaction>
    </StyledTaskContainer>
  );
});
