import React, { useEffect, useRef, useState } from "react";
import {
  StyleWaveSurferContainer,
  StyledWave,
  StyledPlaySvgIcon,
} from "./styled";
import WaveSurfer from "wavesurfer.js";
import { useStore } from "../../store";
import { observer } from "mobx-react";

const formWaveSurferOptions = (ref) => ({
  barWidth: 3,
  barGap: 1,
  barRadius: 2,
  cursorWidth: 1,
  container: "#waveform",
  backend: "WebAudio",
  height: 43,
  responsive: true,
  waveColor: "rgba(130, 83, 170, 0.3)",
  progressColor: "#8253AA",
  cursorColor: "transparent",
});

export const WaveSurferSubmit = observer(({ url }) => {
  const waveformRef = useRef(null);
  const wavesurfer = useRef(null);
  const [playing, setPlaying] = useState(false);
  const { game } = useStore();
  useEffect(() => {
    const volume = game.musicIsMuted ? 0 : 0.1;
    setPlaying(false);

    const options = formWaveSurferOptions(waveformRef.current);
    wavesurfer.current = WaveSurfer.create(options);

    wavesurfer.current.load(url);

    if (wavesurfer.current) {
      wavesurfer.current.volume = volume;
      wavesurfer.current.muted = game.musicIsMuted;
    }
    game.musicIsMuted && setPlaying(false);

    wavesurfer.current.on("finish", function () {
      setPlaying(false);
    });
    if (!game.musicIsMuted) {
      setPlaying(false);
    }

    return () => wavesurfer.current.destroy();
  }, [url, game.musicIsMuted]);

  return (
    <StyleWaveSurferContainer>
      <StyledPlaySvgIcon
        playing={playing}
        onClick={() => {
          setPlaying(!playing);
          wavesurfer.current.playPause();
        }}
      />
      <StyledWave id="waveform" />
      <audio id="track" src={url} />
    </StyleWaveSurferContainer>
  );
});
