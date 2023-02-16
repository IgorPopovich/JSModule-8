
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const _ = require('lodash');

player.on('play', function() {
});

player.getVideoTitle().then(function(title) {
});

player.on('timeupdate', function(e) {
    throt_fun(e.seconds)
});

player.setCurrentTime(JSON.parse(localStorage.getItem('videoplayer-current-time'))).then(function(seconds) {

}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;
        default:
            break;
    }
});

var throt_fun = _.throttle(function (seconds) {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(seconds))
}, 1000);


