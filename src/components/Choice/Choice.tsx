import './choice.scss';

import IChoice from '../../interfaces/Choice.interface';
import Dialog from '../Dialog/Dialog';
import { useEffect, useState } from 'react';
import classNames from 'classnames';
import useSoundsManager from '../../hooks/useSoundsManager';
import useKeyPress from '../../hooks/useKeyPress';
import useGameScripts from '../../hooks/useGameScripts.hook';
interface IChoiceProps {
  choice: IChoice;
}

export default function Choice(props: IChoiceProps) {
  const choice = props.choice;

  const [activeOptionIndex, setActiveOptionIndex] = useState(0);
  const [choiceMade, setChoiceMade] = useState(false);
  const { runScript } = useGameScripts();
  const { optionSelect } = useSoundsManager();

  const enterKey = useKeyPress('Enter');
  const aKey = useKeyPress('a');
  const qKey = useKeyPress('q');
  const dKey = useKeyPress('d');

  if (!choiceMade) {
    if (enterKey) {
      handleSelectCurrentOption();
    }
    if (aKey || qKey) {
      if (activeOptionIndex > 0) {
        setActiveOptionIndex(activeOptionIndex - 1);

        optionSelect.play();
      }
    } else if (dKey) {
      if (choice.options[activeOptionIndex + 1]) {
        setActiveOptionIndex(activeOptionIndex + 1);

        optionSelect.play();
      }
    }
  }

  function handleSelectCurrentOption() {
    optionSelect.play();
    setChoiceMade(true);
    if (!choice.options[activeOptionIndex].script) {
      return;
    }
    const script = choice.options[activeOptionIndex].script || "console.log('no script')";
    runScript(script);
  }

  return (
    <div
      className="choice"
      onKeyPress={() => {
        console.log('ototo');
      }}
    >
      <div className="choice-container">
        <Dialog dialog={choice.dialog} isChoiceDialog={true} />
        <div className="options-container">
          {choice.options.map((option, optionIndex) => {
            return (
              <div
                id={`option-${optionIndex}`}
                className={classNames('option', { active: activeOptionIndex === optionIndex })}
                key={optionIndex}
                onClick={() => {
                  handleSelectCurrentOption();
                }}
              >
                <span>{option.text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
