import { StyledCircles } from "../../info/info_1/styled";
import {
  StyledTaskCursorCircle,
  StyledCirclesWrapper,
  StyledCircles1,
  StyledCircles2,
  StyledCircles3,
  StyledCircles4,
  StyledCircles5,
  StyledTask,
  Wrapper,
  StyledTaskTextDesc,
  StyledTaskDescButton,
  StyledTaskContainer,
  StyledTaskPlayIcon,
  StyledTaskPlayIconImg,
  StyledTaskPlayIconImg1,
  StyledTaskPlayIconImg2,
  StyledTaskPlayIconImg3,
  StyledTaskPlayIconImg4,
  StyledThereminContainer,
  StyledThereminNote,
} from "./styled";
import * as Tone from "tone";
import { Synth } from "tone";
import { useEffect, useRef, useState } from "react";
import playIconImg from "../../../assets/img/play-icon@2x.png";
import useRatio from "../../../hooks/useRatio";
import Xarrow, { useXarrow, Xwrapper } from "react-xarrows";
import Draggable from "react-draggable";

export const Task4 = () => {
  const box1Ref = useRef(null);
  const [hidden, setHidden] = useState(false);
  const ratio = useRatio();

  let vw = document.documentElement.clientWidth;
  useEffect(() => {
    let synth = new Tone.MonoSynth({
      harmonicity: 2,
      vibratoAmount: 0.2,
      volume: 0.01,
      voice0: {
        oscillator: {
          type: "sine",
        },
      },
      voice1: {
        oscillator: {
          type: "sine",
        },
      },
    }).toDestination();

    function freqFromX(coordX) {
      return (coordX / vw) * 250 + 250;
    }
    document.body.addEventListener("touchstart", (event) => {
      Tone.context.resume();
      let t0 = event.touches.item(0);
      let freq = freqFromX(t0.clientX);
      synth.triggerAttack(freq);
    });

    document.body.addEventListener("touchend", (event) => {
      synth.triggerRelease();
    });

    document.body.addEventListener("touchmove", (event) => {
      let t0 = event.touches.item(0);
      let freq = freqFromX(t0.clientX);
      synth.setNote(freq);
    });
    return () => {};
  }, []);

  return (
    <StyledTask>
      <StyledTaskCursorCircle />
      <div />
      <StyledCirclesWrapper>
        <StyledCircles1 />
        <StyledCircles2 />
        <StyledCircles3 />
        <StyledCircles4 />
        <StyledCircles5 />
        <StyledTaskPlayIconImg1 ref={box1Ref} />
        <StyledTaskPlayIconImg2 id="elem2" />
        <StyledTaskPlayIconImg3 id="elem3" />
        <StyledTaskPlayIconImg4 id="elem4" />
        <Xarrow
          start={box1Ref} //can be react ref
          end="elem2" //or an id
          strokeWidth="2"
          color="#fff"
          showHead={false}
        />
        <Xarrow
          start="elem2"
          end="elem3"
          strokeWidth="2"
          color="#fff"
          showHead={false}
        />
      </StyledCirclesWrapper>
      <Wrapper>
        <StyledTaskTextDesc onClick={() => setHidden(true)} hidden={hidden}>
          <p>
            Соедини <StyledTaskPlayIcon src={playIconImg} />
          </p>
          <p>в сплошную линию</p>
          <p>чтобы получилась</p>
          <p>
            <strong>мелодия</strong>
          </p>
          <StyledTaskDescButton onClick={() => setHidden(true)}>
            Вперёд!
          </StyledTaskDescButton>
        </StyledTaskTextDesc>
        <StyledTaskContainer>
          <StyledThereminContainer>
            <StyledThereminNote>C</StyledThereminNote>
            <StyledThereminNote>D</StyledThereminNote>
            <StyledThereminNote>E</StyledThereminNote>
            <StyledThereminNote>F</StyledThereminNote>
          </StyledThereminContainer>
        </StyledTaskContainer>
      </Wrapper>
    </StyledTask>
  );
};
