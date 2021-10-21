import { StyledCircles } from "../../info/info_1/styled";
import {
  StyledTaskAudio,
  StyledTaskAudioPlayer,
  StyledPlaySvgIcon,
  StyledWaveSvg,
  StyledTaskTextMobile,
  StyledTaskTextTablet,
  StyledTaskTextDesktop,
  StyledTaskDescButtonMobile,
  StyledTaskDescButtonTablet,
  StyledTaskDescButtonDesktop,
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
  StyledTaskTextDescMobile,
  StyledTaskTextDescTablet,
  StyledTaskTextDescDesktop,
  StyledTaskDescContainer,
  StyledTaskDescButton,
  StyledTaskContainer,
  StyledTaskPlayIcon,
  StyledTaskPlayIconImg,
  StyledTaskTextContainer,
  StyledTaskPlayIconImg1,
  StyledTaskPlayIconImg2,
  StyledTaskPlayIconImg3,
  StyledTaskPlayIconImg4,
  StyledTaskPlayIconImg5,
  StyledThereminContainer,
  StyledThereminNote,
  StyledTaskTextDesc2,
  StyledTaskDescButton2,
  WrapperPlay1,
  WrapperPlay2,
  WrapperPlay3,
  WrapperPlay4,
  WrapperPlay5,
  Container,
  Wrapper2,
} from "./styled";
import Tone from "tone";
import { useEffect, useRef, useState } from "react";
import playIconImg from "../../../assets/img/play-icon@2x.png";
import Xarrow, { Xwrapper } from "react-xarrows";
import throttle from "lodash.throttle";
import { useHistory } from "react-router";
import thereminMp3 from "../../../assets/audio/theremin.mp3";

const ToneButton = ({ children, note, onMouseMove }) => {
  return (
    <div draggable={false} data-note={note} onMouseMove={onMouseMove}>
      {children}
    </div>
  );
};

const synth = new Tone.FMSynth().toMaster();
const pitchInterpolater = new Tone.CtrlInterpolate([1200, 2500]);
const volumeInterpolater = new Tone.CtrlInterpolate([5, -20]);

const ContainerComponent = ({
  children,
  loaded,
  pointerNote,
  setPointerNote,
}) => {
  const [clicked, setClicked] = useState(false);
  const [top, setTop] = useState(false);
  const [left, setLeft] = useState(false);
  const [play, setPlay] = useState(false);

  const handleMouseOut = ({ currentTarget, relatedTarget }) => {
    if (currentTarget && !currentTarget.contains(relatedTarget)) {
      setClicked(false);
      setTop(0);
      setLeft(0);
    }
  };

  const handleTouchCancel = ({ touches, changedTouches, targetTouches }) => {
    setClicked(false);
    setTop(0);
    setLeft(0);
    if (pointerNote !== 5) {
      setPointerNote("1");
    }
  };

  const handleMouseDown = ({ currentTarget, relatedTarget }) => {
    if (currentTarget && !currentTarget.contains(relatedTarget)) {
      setClicked(true);
    }
  };

  const handleStart = () => {
    setClicked(true);
  };

  const handleMouseUp = ({ currentTarget, relatedTarget }) => {
    if (currentTarget && !currentTarget.contains(relatedTarget)) {
      setClicked(false);
    }
    if (pointerNote !== 5) {
      setPointerNote("1");
    }
  };

  const handleEnd = () => {
    if (pointerNote !== 5) {
      setPointerNote("1");
    }
    setClicked(false);
  };

  const handleMouseMove = ({
    currentTarget,
    relatedTarget,
    clientX,
    clientY,
  }) => {
    if (clicked && currentTarget && !currentTarget.contains(relatedTarget)) {
      const element = currentTarget;
      setLeft((clientX - element.offsetLeft) / element.offsetWidth);
      setTop((clientY - element.offsetTop) / element.offsetHeight);

      let elements = document.elementsFromPoint(clientX, clientY);
      let note = elements.find((item) => item.dataset.note);
      if (note) {
        if (note.dataset.note - pointerNote === 1) {
          setPointerNote(note.dataset.note);
        }

        if (note.dataset.note - pointerNote > 1) {
          setPointerNote("1");
        }
      }
    }
  };

  const handleMove = (e) => {
    const { touches, } = e;
    if (touches) {
      let element = document.getElementById("somewrapper");

      if (element) {
        console.log(
          (touches[0].pageX - element.offsetLeft) / element.offsetWidth
        );
        setLeft((touches[0].pageX - element.offsetLeft) / element.offsetWidth);
        setTop((touches[0].pageY - element.offsetTop) / element.offsetHeight);
      }

      let elements = document.elementsFromPoint(
        touches[0].pageX,
        touches[0].pageY
      );
      let note = elements.find((item) => item.dataset.note);
      if (note) {
        if (note.dataset.note - pointerNote === 1) {
          setPointerNote(note.dataset.note);
        }

        if (note.dataset.note - pointerNote > 1) {
          setPointerNote("1");
        }
      }
    }
  };

  useEffect(() => {
    pitchInterpolater.index = left;
    volumeInterpolater.index = top;
    const pitch = pitchInterpolater.value;
    const volume = volumeInterpolater.value;

    if (play) {
      synth.volume.value = volume;
      synth.setNote(pitch);
    }

    if (clicked && !play) {
      synth.triggerAttack(pitch);
      setPlay(true);
    }

    if (play && !clicked) {
      synth.triggerRelease();
      setPlay(false);
    }
  }, [clicked, left, play, top]);

  return (
    <StyledCirclesWrapper
      onMouseOut={throttle(handleMouseOut, 100)}
      onMouseDown={throttle(handleMouseDown, 100)}
      onMouseUp={throttle(handleMouseUp, 100)}
      onMouseMove={throttle(handleMouseMove, 100)}
      onDragStart={(e) => e.preventDefault()}
      loaded={loaded}
      onTouchCancel={throttle(handleTouchCancel, 100)}
      onTouchStart={throttle(handleStart, 100)}
      onTouchEnd={throttle(handleEnd, 100)}
      onTouchMove={throttle(handleMove, 100)}
      id="somewrapper"
    >
      {children}
    </StyledCirclesWrapper>
  );
};

export const Task4 = () => {
  const history = useHistory();
  const musicRef = useRef(null);
  const [hidden, setHidden] = useState(false);
  const [pointerNote, setPointerNote] = useState("1");
  const [show, setShow] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    // TODO FINAL
    if (pointerNote === "5") {
      setShow(true);
      setLoaded(false);
    }
  }, [history, pointerNote]);

  useEffect(() => {
    return () => {
      synth.dispose();
      pitchInterpolater.dispose();
      volumeInterpolater.dispose();
    };
  }, []);

  return (
    <Xwrapper>
      <StyledTask>
        <StyledTaskCursorCircle />
        <Container>
          <ContainerComponent
            loaded={loaded}
            pointerNote={pointerNote}
            setPointerNote={setPointerNote}
          >
            <StyledCircles1 />
            <StyledCircles2 />
            <StyledCircles3 />
            <StyledCircles4 />
            <StyledCircles5 />
            <ToneButton
              note={1}
              pointerNote={pointerNote}
              setPointerNote={setPointerNote}
            >
              <WrapperPlay1 draggable={false}>
                <StyledTaskPlayIconImg1
                  draggable={false}
                  id="elem1"
                  data-note={1}
                />
              </WrapperPlay1>
            </ToneButton>
            <ToneButton
              note={2}
              pointerNote={pointerNote}
              setPointerNote={setPointerNote}
            >
              <WrapperPlay2 draggable={false}>
                <StyledTaskPlayIconImg2
                  draggable={false}
                  id="elem2"
                  data-note={2}
                />
              </WrapperPlay2>
            </ToneButton>
            <ToneButton
              note={3}
              pointerNote={pointerNote}
              setPointerNote={setPointerNote}
            >
              <WrapperPlay3 draggable={false}>
                <StyledTaskPlayIconImg3
                  draggable={false}
                  id="elem3"
                  data-note={3}
                />
              </WrapperPlay3>
            </ToneButton>
            <ToneButton
              note={4}
              pointerNote={pointerNote}
              setPointerNote={setPointerNote}
            >
              <WrapperPlay4 draggable={false}>
                <StyledTaskPlayIconImg4
                  draggable={false}
                  id="elem4"
                  data-note={4}
                />
              </WrapperPlay4>
            </ToneButton>
            <ToneButton
              note={5}
              pointerNote={pointerNote}
              setPointerNote={setPointerNote}
            >
              <WrapperPlay5 draggable={false}>
                <StyledTaskPlayIconImg5
                  draggable={false}
                  id="elem5"
                  data-note={5}
                />
              </WrapperPlay5>
            </ToneButton>
            {pointerNote >= "2" && (
              <Xarrow
                start="elem1"
                end="elem2"
                strokeWidth="2"
                color="#fff"
                showHead={false}
                path="straight"
                draggable={false}
              />
            )}
            {pointerNote >= "3" && (
              <Xarrow
                start="elem2"
                end="elem3"
                strokeWidth="2"
                color="#fff"
                showHead={false}
                path="straight"
                draggable={false}
              />
            )}
            {pointerNote >= "4" && (
              <Xarrow
                start="elem3"
                end="elem4"
                strokeWidth="2"
                color="#fff"
                showHead={false}
                path="straight"
                draggable={false}
              />
            )}
            {pointerNote >= "5" && (
              <Xarrow
                start="elem4"
                end="elem5"
                strokeWidth="2"
                color="#fff"
                showHead={false}
                path="straight"
                draggable={false}
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
          </ContainerComponent>
          <Wrapper hidden={hidden}>
            <StyledTaskTextDescMobile
              onClick={(e) => {
                e.stopPropagation();
                setLoaded(true);
                setHidden(true);
              }}
              hidden={hidden}
            >
              <StyledTaskDescContainer>
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
              </StyledTaskDescContainer>
            </StyledTaskTextDescMobile>
            <StyledTaskTextDescTablet
              onClick={(e) => {
                e.stopPropagation();
                setLoaded(true);
                setHidden(true);
              }}
              hidden={hidden}
            >
              <StyledTaskDescContainer>
                <p>
                  Соедини <StyledTaskPlayIcon src={playIconImg} />
                </p>
                <p>в сплошную линию, чтобы</p>
                <p>
                  получилась <strong>мелодия</strong>
                </p>
                <StyledTaskDescButton onClick={() => setHidden(true)}>
                  Вперёд!
                </StyledTaskDescButton>
              </StyledTaskDescContainer>
            </StyledTaskTextDescTablet>
            <StyledTaskTextDescDesktop
              onClick={(e) => {
                e.stopPropagation();
                setLoaded(true);
                setHidden(true);
              }}
              hidden={hidden}
            >
              <StyledTaskDescContainer>
                <p>
                  Соедини <StyledTaskPlayIcon src={playIconImg} />
                </p>
                <p>
                  в сплошную линию, чтобы получилась <strong>мелодия</strong>
                </p>
                <StyledTaskDescButton onClick={() => setHidden(true)}>
                  Вперёд!
                </StyledTaskDescButton>
              </StyledTaskDescContainer>
            </StyledTaskTextDescDesktop>
            <StyledTaskContainer>
              <StyledThereminContainer></StyledThereminContainer>
            </StyledTaskContainer>
          </Wrapper>
          <Wrapper2 show={show}>
            <StyledTaskTextDesc show={show}>
              <StyledTaskDescContainer>
                <StyledTaskTextMobile>
                  Ото повезло,
                  <br /> что вы ей помогаете!
                  <br /> Хотите послушать,
                  <br /> что получилось?
                </StyledTaskTextMobile>
                <StyledTaskTextTablet>
                  Ото повезло, что вы ей помогаете!
                  <br />
                  Хотите послушать, что получилось?
                </StyledTaskTextTablet>
                <StyledTaskTextDesktop>
                  Ото повезло, что вы ей помогаете!
                  <br />
                  Хотите послушать, что получилось?
                </StyledTaskTextDesktop>
                <StyledTaskAudioPlayer>
                  <StyledPlaySvgIcon
                    playing={playing}
                    onClick={() => {
                      if (playing === false) {
                        setPlaying(true);
                        musicRef.current.play();
                      } else {
                        setPlaying(false);
                        musicRef.current.pause();
                      }
                    }}
                  />
                  <StyledWaveSvg />
                </StyledTaskAudioPlayer>
                <StyledTaskAudio
                  src={thereminMp3}
                  controls
                  volume="0.1"
                  ref={musicRef}
                />
                <StyledTaskDescButtonMobile
                  type="cool_button"
                  onClick={() => history.push("/task/5")}
                >
                  А теперь с аранжировкой!
                </StyledTaskDescButtonMobile>
                <StyledTaskDescButtonTablet
                  type="cool_button"
                  onClick={() => history.push("/task/5")}
                >
                  А теперь
                  <br />с аранжировкой!
                </StyledTaskDescButtonTablet>
                <StyledTaskDescButtonDesktop
                  type="cool_button"
                  onClick={() => history.push("/task/5")}
                >
                  А теперь с аранжировкой!
                </StyledTaskDescButtonDesktop>
              </StyledTaskDescContainer>
            </StyledTaskTextDesc>
            <StyledTaskContainer>
              <StyledThereminContainer></StyledThereminContainer>
            </StyledTaskContainer>
          </Wrapper2>
        </Container>
      </StyledTask>
    </Xwrapper>
  );
};
