import { StyledMusicToggle } from "./styled";
import { useStore } from "../../store";
import { observer } from "mobx-react";

export const MusicToggle = observer(() => {
  const { game } = useStore();
  return (
    <StyledMusicToggle
      mutted={game.musicIsMuted}
      onClick={() => game.toggleMusic()}
    />
  );
});
