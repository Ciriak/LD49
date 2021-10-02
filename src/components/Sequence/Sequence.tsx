import IChoice from '../../interfaces/Choice.interface';
import IDialog from '../../interfaces/Dialog.interface';
import ISequence from '../../interfaces/Sequence.interface';
import Choice from '../Choice/Choice';
import Dialog from '../Dialog/Dialog';
import './sequence.scss';
interface ISequenceProps {
  sequence: ISequence;
  activeItemIndex: number;
}

export default function Sequence(props: ISequenceProps) {
  const sequence = props.sequence;

  const activeItem = sequence.items[props.activeItemIndex];

  return (
    <div className="sequence">
      {activeItem.type === 'dialog' && <Dialog dialog={activeItem.data as IDialog} />}
      {activeItem.type === 'choice' && <Choice choice={activeItem.data as IChoice} />}
    </div>
  );
}
