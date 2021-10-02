import { useEffect } from 'react';
import useGameState from '../../hooks/useGameState.hook';
import useSequence from '../../hooks/useSequence.hook';
import Sequence from '../Sequence/Sequence';
import './sequence-manager.scss';

export default function SequenceManager() {
  const { sequence, playSequence, activeItemIndex } = useSequence();

  useEffect(() => {
    setTimeout(() => {
      playSequence('seq_wakeup');
    }, 5000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <div className="sequence-manager">{sequence && <Sequence sequence={sequence} activeItemIndex={activeItemIndex} />}</div>;
}
