import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const STORAGE_KEY = 'videoplayer-current-time';

function savePlayerRuntime(data) {
  localStorage.setItem(STORAGE_KEY, data.seconds);

  if (data.seconds === data.duration) {
    localStorage.removeItem(STORAGE_KEY);
  }
}

player.on('timeupdate', throttle(savePlayerRuntime, 1000));

const currentVideoRuntime = localStorage.getItem(STORAGE_KEY);

player
  .setCurrentTime(currentVideoRuntime)
  .then(function (seconds) {
    seconds = currentVideoRuntime;
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        seconds <= 0;
        break;

      default:
        console.log('Locale storage clear');
        break;
    }
  });
