import React, { useEffect, useRef, useState } from "react";
import {
  StyleWaveSurferContainer,
  StyledWave,
  StyledPlaySvgIcon,
  StyledCheckbox,
} from "./styled";
import WaveSurfer from "wavesurfer.js";
import { observer } from "mobx-react";
import { useStore } from "../../store";

export const WaveSurferTask = observer(({ url, id, checked, setChecked }) => {
  const formWaveSurferOptions = (ref) => ({
    barWidth: 4,
    barRadius: 2,
    barGap: 4,
    cursorWidth: 1,
    container: `#waveform${id}`,
    backend: "WebAudio",
    height: 56,
    responsive: true,
    waveColor: "rgba(130, 83, 170, 0.3)",
    progressColor: "#8253AA",
    cursorColor: "transparent",
  });
  const waveformRef = useRef(null);
  const wavesurfer = useRef(null);
  const [volume, setVolume] = useState(0.2);
  const [playing, setPlaying] = useState(false);
  const { game } = useStore();

  useEffect(() => {
    if (id !== checked) {
      setPlaying(false);
    }
    const volume = game.musicIsMuted ? 0 : 0.1;
    game.playOrPause(false);

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

    return () => wavesurfer.current.destroy();
  }, [url, game.musicIsMuted, id, checked]);

  return (
    <StyleWaveSurferContainer>
      <StyledPlaySvgIcon
        playing={playing}
        volume={volume}
        onClick={() => {
          setPlaying(!playing);
          game.goToNextTask();
          wavesurfer.current.playPause();
        }}
      />
      <StyledWave id={`waveform${id}`} />
      <audio id="track" src={url} />
      <StyledCheckbox
        key={game.currentTask}
        checked={checked.checkedTrackId === id}
        onClick={() => setChecked({ ...checked, checkedTrackId: id })}
      />
    </StyleWaveSurferContainer>
  );
});
