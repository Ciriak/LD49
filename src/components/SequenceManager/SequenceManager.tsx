import { useEffect } from 'react';
import useGameState from '../../hooks/useGameState.hook';
import useSequence from '../../hooks/useSequence.hook';
import Sequence from '../Sequence/Sequence';
import './sequence-manager.scss';

export default function SequenceManager() {
  const { sequence, playSequence, activeItemIndex } = useSequence();
  return <div className="sequence-manager">{sequence && <Sequence sequence={sequence} activeItemIndex={activeItemIndex} />}</div>;
}
