import styled from "styled-components";
import over_button from "../../assets/audio/over_button.mp3";
import click_button from "../../assets/audio/click_button.mp3";
import cool_button from "../../assets/audio/cool_button.mp3";
import { observer } from "mobx-react-lite";
import { useRef, useState } from "react";
import { useStore } from "../../store";

const Wrapper = styled.div`
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
`;

const typeAudio = {
  over_button,
  click_button,
  cool_button,
};

export const SoundClick = observer(({ type, children }) => {
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);
  const musicRef = useRef(null);
  const { game } = useStore();

  return (
    <>
      <Wrapper
        onClick={() => setClicked(true)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => {
          setClicked(false);
          setHovered(false);
        }}
      >
        {clicked && (
          <audio
            src={click_button}
            controls
            autoPlay
            volume="0.1"
            allow="autoplay"
            ref={musicRef}
          ></audio>
        )}
        {hovered && (
          <audio
            src={over_button}
            controls
            autoPlay
            volume="0.1"
            allow="autoplay"
            ref={musicRef}
          ></audio>
        )}
      </Wrapper>
      {children}
    </>
  );
});
