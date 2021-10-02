import './debug.scss';
import DatGui, { DatBoolean, DatButton, DatFolder, DatSelect, DatString } from 'react-dat-gui';
import 'react-dat-gui/dist/index.css';
import useGameState from '../../hooks/useGameState.hook';
import { IGameState } from '../../atoms/game.atom';
import { library } from '../../library';

export default function Debug() {
  const { gameState, setGameState } = useGameState();

  function handleGameStateUpdate(newState: IGameState) {
    setGameState({ ...newState });
  }

  function handleLibraryUpdate() {
    return;
  }

  return (
    <div className="debug">
      <DatGui data={gameState} onUpdate={handleGameStateUpdate}>
        <DatFolder title="Current Sequence" closed={false}>
          <DatString path={'activeSequence.internalName'} label="Internal name"></DatString>
          <DatFolder title="Items" closed={false}>
            {gameState.activeSequence &&
              gameState.activeSequence.items.map((item, itemIndex) => {
                return (
                  <>
                    {item.type === 'dialog' && (
                      <DatFolder title="Dialog" closed={false}>
                        <DatString label="Text" path={`activeSequence.items[0].text`}></DatString>
                        <DatString label="Text" path={`activeSequence.items[${itemIndex}].text`}></DatString>
                      </DatFolder>
                    )}
                  </>
                );
              })}
          </DatFolder>
        </DatFolder>
        <DatFolder title="Load Sequence" closed={false}>
          {library.sequences.map((sequence, sequenceIndex) => {
            return (
              <DatButton
                label={sequence.internalName}
                key={sequenceIndex}
                onClick={() => {
                  // playSequence(sequence.internalName);
                }}
              />
            );
          })}
        </DatFolder>
      </DatGui>
      {/* <DatGui data={library} onUpdate={handleLibraryUpdate}>
        <DatSelect options={library.sequences} path={'activeSequence.internalName'} label="Current sequence" />
      </DatGui> */}
    </div>
  );
}
