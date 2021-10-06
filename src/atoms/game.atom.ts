import { atom } from 'recoil';
import { EScenes } from '../enums/scenes.enum';
import ISequence from '../interfaces/Sequence.interface';

export interface IGameState {
  scene: EScenes;
  changingScene?: boolean;
  activeSequence?: ISequence;
  sequenceActiveItemIndex: number;
}

const rawSavedData = localStorage.getItem('game');
let gameSave: IGameState = {
  scene: EScenes.TITLE_SCREEN,
  changingScene: false,
  sequenceActiveItemIndex: 0,
};
// if (rawSavedData) {
//   gameSave = JSON.parse(rawSavedData) as IGameState;
//   console.log('LOADED FILE');
//   console.log(gameSave);
// }
const gameState = atom<IGameState>({
  key: 'library',
  default: gameSave,
});

export default gameState;
