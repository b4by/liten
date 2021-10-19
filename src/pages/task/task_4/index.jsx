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
  StyledTaskPlayIconImg5,
  StyledThereminContainer,
  StyledThereminNote,
  WrapperPlay1,
  WrapperPlay2,
  WrapperPlay3,
  WrapperPlay4,
  WrapperPlay5,
  Container,
} from "./styled";
import * as Tone from "tone";
import { useEffect, useRef, useState, useCallback, forwardRef } from "react";
import playIconImg from "../../../assets/img/play-icon@2x.png";
import useRatio from "../../../hooks/useRatio";
import Xarrow, { useXarrow, Xwrapper } from "react-xarrows";
import Draggable from "react-draggable";
import throttle from "lodash.throttle";
import { useHistory } from "react-router";

function freqFromX(coordX, width) {
  return (coordX / width) * 250 + 250;
}

const DraggableBox = forwardRef(({ id, item: Item }, ref) => {
  const updateXarrow = useXarrow();
  return (
    <Draggable onDrag={throttle(updateXarrow, 100)} onStop={updateXarrow}>
      <Item
        id={id}
        style={{ position: "absolute", zIndex: "1000", opacity: 0.01 }}
      />
    </Draggable>
  );
});

const ToneButton = ({ children, note }) => {
  return <div data-note={note}>{children}</div>;
};

let synth = new Tone.MonoSynth({
  harmonicity: 2,
  vibratoAmount: 0.1,
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

export const Task4 = () => {
  const history = useHistory();
  const box1Ref = useRef(null);
  const container = useRef(null);
  const [hidden, setHidden] = useState(false);
  const [pointerNote, setPointerNote] = useState("1");
  const [keyDrag, setKeyDrag] = useState("_drag");
  const ratio = useRatio();

  useEffect(() => {
    // TODO FINAL
    if (pointerNote === "5") {
      history.push("/task/5");
    }
  }, [pointerNote]);

  const onGotPointerCapture = useCallback(
    (e) => {
      let elements = document.elementsFromPoint(e.clientX, e.clientY);
      let note = elements.find((item) => item.dataset.note);
      if (note) {
        if (note.dataset.note - pointerNote === 1) {
          setPointerNote(note.dataset.note);
        }

        if (note.dataset.note - pointerNote > 1) {
          setKeyDrag(keyDrag + "_1");
          setPointerNote("1");
        }
      }
    },
    [keyDrag, pointerNote]
  );

  const touchstart = (event) => {
    Tone.context.resume();
    let t0 = event?.touches?.item(0) ?? event;
    let freq = freqFromX(t0.clientX, container.current.clientWidth);
    synth.triggerAttack(freq);
  };

  const touchend = (event) => {
    synth.triggerRelease();
    setKeyDrag(keyDrag + "_1");
    setPointerNote("1");
  };

  const touchmove = (event) => {
    let t0 = event?.touches?.item(0) ?? event;
    let freq = freqFromX(t0.clientX, container.current.clientWidth);
    synth.setNote(freq);
  };

  return (
    <Xwrapper>
      <StyledTask onPointerMove={throttle(onGotPointerCapture, 300)}>
        <StyledTaskCursorCircle />
        <Container
          ref={container}
          onTouchMove={throttle(touchmove, 200)}
          onTouchStart={throttle(touchstart, 200)}
          onTouchEnd={throttle(touchend, 200)}
          onPointerUp={throttle(touchend, 200)}
          onMouseMove={throttle(touchmove, 200)}
        >
          <StyledCirclesWrapper>
            <StyledCircles1 />
            <StyledCircles2 />
            <StyledCircles3 />
            <StyledCircles4 />
            <StyledCircles5 />
            <WrapperPlay1
              onMouseDown={throttle(touchstart, 200)}
              onMouseUp={throttle(touchend, 200)}
            >
              <DraggableBox
                ref={box1Ref}
                key={keyDrag}
                id="drag"
                item={StyledTaskPlayIconImg1}
              ></DraggableBox>
            </WrapperPlay1>
            <ToneButton
              note={1}
              pointerNote={pointerNote}
              setPointerNote={setPointerNote}
            >
              <WrapperPlay1>
                <StyledTaskPlayIconImg1 id="elem1" data-note={1} />
              </WrapperPlay1>
            </ToneButton>
            <ToneButton
              note={2}
              pointerNote={pointerNote}
              setPointerNote={setPointerNote}
            >
              <WrapperPlay2>
                <StyledTaskPlayIconImg2 id="elem2" data-note={2} />
              </WrapperPlay2>
            </ToneButton>
            <ToneButton
              note={3}
              pointerNote={pointerNote}
              setPointerNote={setPointerNote}
            >
              <WrapperPlay3>
                <StyledTaskPlayIconImg3 id="elem3" data-note={3} />
              </WrapperPlay3>
            </ToneButton>
            <ToneButton
              note={4}
              pointerNote={pointerNote}
              setPointerNote={setPointerNote}
            >
              <WrapperPlay4>
                <StyledTaskPlayIconImg4 id="elem4" data-note={4} />
              </WrapperPlay4>
            </ToneButton>
            <ToneButton
              note={5}
              pointerNote={pointerNote}
              setPointerNote={setPointerNote}
            >
              <WrapperPlay5>
                <StyledTaskPlayIconImg5 id="elem5" data-note={5} />
              </WrapperPlay5>
            </ToneButton>

            {pointerNote !== "5" && (
              <Xarrow
                start={`elem${pointerNote}`}
                end={"drag"}
                strokeWidth="2"
                color="#fff"
                showHead={false}
                key={keyDrag}
              />
            )}
            {pointerNote >= "2" && (
              <Xarrow
                start="elem1"
                end="elem2"
                strokeWidth="2"
                color="#fff"
                showHead={false}
              />
            )}
            {pointerNote >= "3" && (
              <Xarrow
                start="elem2"
                end="elem3"
                strokeWidth="2"
                color="#fff"
                showHead={false}
              />
            )}
            {pointerNote >= "4" && (
              <Xarrow
                start="elem3"
                end="elem4"
                strokeWidth="2"
                color="#fff"
                showHead={false}
              />
            )}
            {pointerNote >= "5" && (
              <Xarrow
                start="elem4"
                end="elem5"
                strokeWidth="2"
                color="#fff"
                showHead={false}
              />
            )}
            <div id="theremin-container">
              <div className="notebar" data-note="C"></div>
              <div className="notebar" data-note="D"></div>
              <div className="notebar" data-note="E"></div>
              <div className="notebar" data-note="F"></div>
              <div className="notebar" data-note="G"></div>
              <div className="notebar" data-note="A"></div>
              <div className="notebar" data-note="B"></div>
            </div>
          </StyledCirclesWrapper>
          <Wrapper hidden={hidden}>
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
              <StyledThereminContainer></StyledThereminContainer>
            </StyledTaskContainer>
          </Wrapper>
        </Container>
      </StyledTask>
    </Xwrapper>
  );
};
