import useGameState from './useGameState.hook';
import useSequence from './useSequence.hook';

function useGameScripts() {
  const { gameState, setGameState, setScene } = useGameState();
  const { playSequence } = useSequence();

  function setFlag(flagId: string, value: any) {
    console.log('FLAG', flagId, value);
  }

  function runScript(script: string) {
    console.log('Executing script', script);
    // eslint-disable-next-line no-eval
    eval(script);
  }
  return { setFlag, runScript, playSequence, setScene };
}

export default useGameScripts;
