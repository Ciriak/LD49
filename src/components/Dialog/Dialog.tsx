import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import DialogPortrait from '../DialogPortrait/DialogPortrait';
import IDialog from '../../interfaces/Dialog.interface';
import { dialogToLetters } from '../../utils/utils';
import './dialog.scss';
import ICharacter from '../../interfaces/Character.interface';
import charactersData from '../../characters';
import useSequence from '../../hooks/useSequence.hook';
import { Icon } from '@mdi/react';
import { mdiChevronDown } from '@mdi/js';
import useSoundsManager from '../../hooks/useSoundsManager';
import useGameScripts from '../../hooks/useGameScripts.hook';
interface IDialogProps {
  dialog: IDialog;
  isChoiceDialog?: boolean;
}

export default function Dialog(props: IDialogProps) {
  const dialog = props.dialog;
  const isChoiceDialog = props.isChoiceDialog;
  const [shakeIndex, setShakeIndex] = useState(-1);
  const [characters] = useState<ICharacter[]>(charactersData);
  const [awaitInput, setAwaitInput] = useState(false);
  const { lilaVoice } = useSoundsManager();

  const { playNextItem } = useSequence();
  const { runScript } = useGameScripts();
  useEffect(() => {
    playDialog().then(() => {
      playNextItem();
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps

    if (dialog.script) {
      runScript(dialog.script);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dialog]);

  useEffect(() => {
    setInterval(() => {
      const max = dialog.text.length + 20;
      setShakeIndex(Math.floor(Math.random() * max));
    }, 500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function playDialog(): Promise<void> {
    return new Promise(async (resolve) => {
      setAwaitInput(false);
      let delay = 30;

      if (dialog.speed === 'slow') {
        delay = 100;
      }

      const generatedDialog = dialogToLetters(dialog.text);

      // hide all letters
      generatedDialog.forEach((letter, letterIndex) => {
        const letterElement = document.getElementById('letter-' + letterIndex);
        if (letterElement) {
          letterElement.style.opacity = '0';
        }
      });

      let letterIndex = -1;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      for (const letter of generatedDialog) {
        letterIndex++;
        const letterElement = document.getElementById('letter-' + letterIndex);
        if (letterElement) {
          await showLetter(letterIndex, delay);
        }
      }

      if (dialog.autoSkip) {
        setTimeout(() => {
          return resolve();
        }, 1000);
      } else {
        // if not a choice, await for user skip
        if (!isChoiceDialog) {
          setAwaitInput(true);
          document.addEventListener('keypress', function listener(e) {
            if (e.key === 'Enter') {
              document.removeEventListener('keypress', listener);
              return resolve();
            }
          });
        }

        // else, the choice controller will take the next step => Choice.tsx
      }
    });
  }

  function showLetter(index: number, delay: number): Promise<void> {
    return new Promise((resolve) => {
      const letterElement = document.getElementById('letter-' + index);
      if (!letterElement) {
        return resolve();
      }

      letterElement.style.opacity = '1';

      // auto skip dialog if no need for input
      if (!dialog.disableSound) {
        lilaVoice.play();
      }

      setTimeout(() => {
        return resolve();
      }, delay);
    });
  }

  return (
    <div className="dialog">
      <div className="dialog-container">
        <DialogPortrait dialog={dialog} size={100} disabled={dialog.disablePortrait} />
        <div className={classNames('character-dialog', { scared: dialog.isScared })}>
          <span className="asterix letter">*</span>
          <div className="dialog-text">
            {dialogToLetters(dialog.text).map((letter, letterIndex) => {
              return (
                <span
                  key={letterIndex}
                  id={'letter-' + letterIndex}
                  className={classNames('letter', { shake: shakeIndex === letterIndex })}
                  style={{ animationDelay: letter.delay }}
                >
                  {letter.letter}
                </span>
              );
            })}
          </div>
        </div>
        {awaitInput && (
          <div className="input-indicator">
            <Icon path={mdiChevronDown} size={1.2} style={{ fontWeight: 'bold' }} />{' '}
          </div>
        )}
      </div>
    </div>
  );
}
