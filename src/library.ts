import ILibrary from './interfaces/Library.interface';

export const library: ILibrary = {
  sequences: [
    {
      internalName: 'seq_wakeup',
      items: [
        {
          type: 'dialog',
          data: {
            characterIndex: 1,
            emotionIndex: 2,
            text: '...',
            speed: 'slow',
            disablePortrait: true,
            disableSound: true,
          },
        },
        {
          type: 'dialog',
          data: {
            characterIndex: 1,
            emotionIndex: 2,
            text: '... w... where am i',
            speed: 'slow',
            disablePortrait: true,
            disableSound: true,
            autoSkip: true,
          },
        },
        {
          type: 'dialog',
          data: {
            characterIndex: 1,
            emotionIndex: 2,
            text: 'what is this place ? ',
            speed: 'slow',
            disablePortrait: true,
            disableSound: true,
          },
        },
        {
          type: 'dialog',
          data: {
            characterIndex: 1,
            emotionIndex: 1,
            text: 'AH !',
            speed: 'normal',
          },
        },
        {
          type: 'dialog',
          data: {
            characterIndex: 1,
            emotionIndex: 1,
            text: 'Pfiouu it was just a bad dream ...',
            speed: 'normal',
          },
        },
        {
          type: 'dialog',
          data: {
            characterIndex: 1,
            emotionIndex: 4,
            text: '... i guess',
            speed: 'normal',
          },
        },
      ],
    },
    {
      internalName: 'seq',
      items: [
        {
          type: 'dialog',
          data: {
            characterIndex: 1,
            emotionIndex: 4,
            text: 'WHAT',
            speed: 'normal',
            isScared: true,
            autoSkip: true,
          },
        },
        {
          type: 'dialog',
          data: {
            characterIndex: 1,
            emotionIndex: 4,
            text: 'WHAT',
            speed: 'normal',
            isScared: true,
            autoSkip: true,
          },
        },
        {
          type: 'dialog',
          data: {
            characterIndex: 1,
            emotionIndex: 4,
            text: 'WHAT',
            speed: 'normal',
            isScared: true,
            autoSkip: true,
          },
        },
        {
          type: 'dialog',
          data: {
            characterIndex: 1,
            emotionIndex: 4,
            text: 'WHAT',
            speed: 'normal',
            isScared: true,
            autoSkip: true,
          },
        },
        {
          type: 'dialog',
          data: {
            characterIndex: 1,
            emotionIndex: 4,
            text: 'WHAT',
            speed: 'normal',
            isScared: true,
            autoSkip: true,
            script: `playSequence('seq_test')`,
          },
        },
      ],
    },
  ],
};
