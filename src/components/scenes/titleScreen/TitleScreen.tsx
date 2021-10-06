import { useEffect, useState } from 'react';
import { EScenes } from '../../../enums/scenes.enum';
import useGameState from '../../../hooks/useGameState.hook';
import useKeyPress from '../../../hooks/useKeyPress';
import useSequence from '../../../hooks/useSequence.hook';
import Lila from '../../Characters/Lila/Lila';
import './title-screen.scss';
export default function TitleScreen() {
  const { playSequence } = useSequence();
  const { setScene } = useGameState();
  const [started, setStarted] = useState(false);

  const enterKey = useKeyPress('Enter');

  if (enterKey && !started) {
    setStarted(true);
    setScene(EScenes.WAKE_UP);
    setTimeout(() => {
      playSequence('seq_wakeup');
    }, 5000);
  }

  return (
    <div className="title-screen">
      <h1>Game Name</h1>
      <h4>An interactive story created in 48h</h4>
      <div className="anim-container">
        <div className="sleeping">
          <Lila direction="right" />
        </div>

        <div className="instruction-text">
          <p>Press "Enter" to start</p>
        </div>
      </div>
    </div>
  );
}
