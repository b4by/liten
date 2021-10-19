import { MusicToggle } from "../../../components/MusicToggle";
import {
  StyledTask,
  StyledTaskContent,
  StyledTaskList,
  StyledTaskItem,
  StyledTaskPlayButton,
  StyledTaskButton,
  StyledTaskAudio,
} from "./styled";
import theremin1Mp3 from "../../../assets/audio/theremin1.mp3";
import theremin2Mp3 from "../../../assets/audio/theremin2.mp3";
import theremin3Mp3 from "../../../assets/audio/theremin3.mp3";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { observer } from "mobx-react";
import { useStore } from "../../../store";
import { useRef } from "react/cjs/react.development";

const tracks = [
  {
    id: 0,
    title: "лаунж",
    src: theremin1Mp3,
  },
  {
    id: 1,
    title: "поп-джаз",
    src: theremin2Mp3,
  },
  {
    id: 2,
    title: "рок",
    src: theremin3Mp3,
  },
];

export const Task5 = observer(() => {
  const { game } = useStore();
  const itemsRef = useRef([]);
  const history = useHistory();
  const [playing, setPlaying] = useState({});

  useEffect(() => {
    itemsRef.current = itemsRef.current.slice(0, tracks.length);
  }, []);

  useEffect(() => {}, []);
  return (
    <StyledTask>
      <MusicToggle />
      <StyledTaskContent>
        <StyledTaskList>
          {tracks.map((item, i) => {
            return (
              <StyledTaskItem key={item.id}>
                <StyledTaskButton
                  onClick={() => {
                    game.chooseTrack(`theremin${item.id + 1}Mp3`);
                    history.push("/submit");
                  }}
                >
                  {item.title}
                </StyledTaskButton>
                <StyledTaskPlayButton
                  playing={playing === item.id}
                  onClick={() => {
                    setPlaying(item.id);
                    itemsRef.current.forEach((item) => {
                      item.pause();
                    });
                    if (playing === item.id) {
                      itemsRef.current[i].pause();
                      setPlaying(null);
                    } else {
                      itemsRef.current[i].play();
                    }
                  }}
                />
                <StyledTaskAudio
                  src={item.src}
                  controls
                  volume="0.1"
                  ref={(el) => (itemsRef.current[i] = el)}
                />
              </StyledTaskItem>
            );
          })}
        </StyledTaskList>
      </StyledTaskContent>
    </StyledTask>
  );
});
