import { cloneDeep } from 'lodash';
import useGameState from './useGameState.hook';

function useSequence() {
  const { playSequence: pplaySequence, gameState, setGameState } = useGameState();

  const sequence = gameState.activeSequence;
  const activeItemIndex = gameState.sequenceActiveItemIndex;

  function playNextItem() {
    const uGameState = cloneDeep(gameState);
    if (sequence && sequence.items[uGameState.sequenceActiveItemIndex + 1]) {
      uGameState.sequenceActiveItemIndex = uGameState.sequenceActiveItemIndex + 1;
      setGameState(uGameState);
    } else {
      console.error('Unable to play next item');
    }
  }

  function playSequence(sequenceName: string) {
    pplaySequence(sequenceName);
  }

  return { sequence, playSequence, activeItemIndex, playNextItem };
}

export default useSequence;
