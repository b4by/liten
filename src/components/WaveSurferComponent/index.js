import React, { useEffect, useRef, useState } from "react";
import {
  StyleWaveSurferContainer,
  StyledWave,
  StyledPlaySvgIcon,
} from "./styled";
import WaveSurfer from "wavesurfer.js";
import { observer } from "mobx-react";
import { useStore } from "../../store";

const formWaveSurferOptions = (ref) => ({
  barWidth: 3,
  barGap: 4,
  barRadius: 2,
  cursorWidth: 1,
  container: "#waveform",
  backend: "WebAudio",
  height: 56,
  responsive: true,
  waveColor: "rgba(130, 83, 170, 0.3)",
  progressColor: "#8253AA",
  cursorColor: "transparent",
});

export const WaveSurferComponent = observer(({ url }) => {
  const waveformRef = useRef(null);
  const wavesurfer = useRef(null);
  const { game } = useStore();
  const [volume, setVolume] = useState(0.1);
  useEffect(() => {
    game.playOrPause(false);

    const options = formWaveSurferOptions(waveformRef.current);
    wavesurfer.current = WaveSurfer.create(options);

    wavesurfer.current.load(url);

    // wavesurfer.current.on("ready", function () {
    //   // https://wavesurfer-js.org/docs/methods.html
    // //   wavesurfer.current.play();
    // //   setPlay(true);
    //   // make sure object stillavailable when file loaded
    //   if (wavesurfer.current) {
    //     wavesurfer.current.setVolume(volume);
    //     setVolume(volume);
    //   }
    // });

    wavesurfer.current.on("finish", function () {
      game.playOrPause(false);
      game.setVinylAnimation(false);
    });

    // Removes events, elements and disconnects Web Audio nodes.
    // when component unmount
    return () => wavesurfer.current.destroy();
  }, [url, game.musicIsMuted]);

  return (
    <StyleWaveSurferContainer>
      <StyledPlaySvgIcon
        playing={game.musicPlaying}
        onClick={() => {
          game.setVinylAnimation(!game.vinylAnimation);
          game.playOrPause(!game.musicPlaying);
          wavesurfer.current.playPause();
        }}
      />
      <StyledWave id="waveform" />
      <audio id="track" src={url} />
    </StyleWaveSurferContainer>
  );
});
