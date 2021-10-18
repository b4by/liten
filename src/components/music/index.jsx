import { observer } from "mobx-react-lite";
import styled from "styled-components";
import { useStore } from "../../store";
import { useEffect, useRef } from "react";

const Wrapper = styled.div`
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
`;

export const Music = observer(() => {
  const { game } = useStore();
  const musicRef = useRef(null);

  useEffect(() => {
    const volume = game.musicIsMuted ? 0 : 0.1;
    if (musicRef.current) {
      musicRef.current.volume = volume;
      musicRef.current.muted = game.musicIsMuted;
    }
    if (musicRef.current && game.musicPlaying) {
      musicRef.current.volume = 0;
    }
    if (musicRef.current && !game.musicPlaying) {
      musicRef.current.volume = volume;
    }
  }, [game.isStarted, game.musicPlaying, game.musicIsMuted]);

  return (
    <Wrapper>
      {game.isStarted && (
        <audio
          src={game.currentBgMusic}
          controls
          autoPlay
          volume="0.1"
          ref={musicRef}
          loop
          allow="autoplay"
        ></audio>
      )}
    </Wrapper>
  );
});
