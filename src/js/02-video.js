import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

function savePlayerRuntime(data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);

  if (data.seconds === data.duration) {
    localStorage.removeItem('videoplayer-current-time');
  }
}

player.on('timeupdate', throttle(savePlayerRuntime, 1000));

const currentVideoRuntime = localStorage.getItem('videoplayer-current-time');

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
