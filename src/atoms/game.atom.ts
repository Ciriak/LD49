import { atom } from 'recoil';

export interface IGameState {
  scene: 'title-screen' | 'game';
  changingScene?: boolean;
}

const rawSavedData = localStorage.getItem('game');
let gameSave: IGameState = {
  scene: 'title-screen',
  changingScene: false,
};
if (rawSavedData) {
  gameSave = JSON.parse(rawSavedData) as IGameState;
  console.log('LOADED FILE');
  console.log(gameSave);
}
const gameState = atom<IGameState>({
  key: 'library',
  default: gameSave,
});

export default gameState;
