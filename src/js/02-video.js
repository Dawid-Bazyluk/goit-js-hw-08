import Player from '@vimeo/player';
import _ from 'lodash';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const STORAGE_KEY = 'videoplayer-current-time';
const getVideoCurrentTime = () => {
  return localStorage.getItem(STORAGE_KEY);
};
const onSaveTimeUpdate = ({ seconds } = 0) => {
  console.log(seconds);
  localStorage.setItem(STORAGE_KEY, seconds);
};

player.setCurrentTime(getVideoCurrentTime());

player.on('timeupdate', _.throttle(onSaveTimeUpdate, 1000));
