import { findIndex } from 'lodash';
import { useRecoilState } from 'recoil';
import agameState, { IGameState } from '../atoms/game.atom';
import { EScenes } from '../enums/scenes.enum';
import { library } from '../library';

function useGameState() {
  const [gameState, ssetGame] = useRecoilState(agameState);

  function setGameState(updatedGameState: IGameState) {
    ssetGame(updatedGameState);
    //save in local storage
    localStorage.setItem('game', JSON.stringify(updatedGameState));
  }

  /**
   * Change the game scene with a transition
   * @param scene
   */
  function setScene(scene: EScenes) {
    ssetGame({ ...gameState, changingScene: true });
    setTimeout(() => {
      ssetGame({ ...gameState, scene, changingScene: false });
    }, 3000);
  }

  function playSequence(sequenceName: string) {
    console.log(`Trying to load sequence "${sequenceName}"...`);
    const sequenceIndex = findIndex(library.sequences, { internalName: sequenceName });
    if (~sequenceIndex) {
      setGameState({ ...gameState, activeSequence: library.sequences[sequenceIndex], sequenceActiveItemIndex: 0 });
      console.log(`"${sequenceName}" loaded`);
    } else {
      console.error(`Sequence "${sequenceName}" not found`);
    }
  }

  return { gameState, setScene, playSequence, setGameState };
}

export default useGameState;
