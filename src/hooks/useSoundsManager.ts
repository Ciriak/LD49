import { Howl } from 'howler';
import { useEffect, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';

export interface ISoundsManagerState {
  [key: string]: React.MutableRefObject<Howl>;
}

function useSoundsManager() {
  const [lilaVoice] = useState(
    new Howl({
      src: ['characters/lila/lila_voice.ogg'],
    })
  );

  const [optionSelect] = useState(
    new Howl({
      src: ['sounds/option_select.wav'],
    })
  );

  return { lilaVoice, optionSelect };
}

export default useSoundsManager;
