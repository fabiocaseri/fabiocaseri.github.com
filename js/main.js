(function() {

  var hasOrientationChange = 'DeviceOrientationEvent' in window;

  if (hasOrientationChange) {
    var BG_DISTANCE = 15;

    function orientationChanged(ev) {
      if (typeof(window.orientation) !== 'undefined') {
        var beta = ev.beta;
        var gamma = ev.gamma;

        switch(window.orientation) {
          case -90:
            beta = ev.gamma;
            gamma = -ev.beta;
            break;
          case 90:
            beta = -ev.gamma;
            gamma = ev.beta;
            break;
          case 180:
            beta = -ev.beta;
            gamma = -ev.gamma;
        }

        var tanGamma = Math.tan(gamma * (Math.PI / 180));
        var tanBeta = Math.tan((beta - 45) * (Math.PI / 180));
        var x = -(tanGamma * BG_DISTANCE);
        var y = -(tanBeta * BG_DISTANCE);

        document.body.style.backgroundPosition = x + 'px ' + y + 'px';
      }
    }

    window.addEventListener('deviceorientation', orientationChanged, false);
  }

})();
