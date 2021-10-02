import { useRecoilState } from 'recoil';
import agameState, { IGameState } from '../atoms/game.atom';
import { EScenes } from '../enums/scenes.enum';

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

  return { gameState, setScene };
}

export default useGameState;
