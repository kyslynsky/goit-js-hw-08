import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('timeupdate', function (data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
});

const currentVideoRuntime = localStorage.getItem('videoplayer-current-time');

player
  .setCurrentTime(currentVideoRuntime)
  .then(function (seconds) {
    seconds = currentVideoRuntime;
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        currentVideoRuntime <= 0;
        break;

      default:
        console.log('Locale storage clear');
        break;
    }
  });



