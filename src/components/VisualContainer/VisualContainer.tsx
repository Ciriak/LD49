import classNames from 'classnames';
import { EScenes } from '../../enums/scenes.enum';

import useGameState from '../../hooks/useGameState.hook';
import TitleScreen from '../scenes/titleScreen/TitleScreen';
import './visual-container.scss';
export default function VisualContainer() {
  const { gameState } = useGameState();

  return (
    <div className={classNames('visual-container', { 'changing-scene': gameState.changingScene })}>
      {gameState.scene === EScenes.TITLE_SCREEN && <TitleScreen />}
    </div>
  );
}
