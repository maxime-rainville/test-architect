/**
 * Rocket Launch HQ — scroll-injected gallery slots 16–20.
 * Image URLs live only in this file (not in HTML/CSS) for crawler testing.
 */
(function () {
  'use strict';

  var DYNAMIC_SHOTS = [
    {
      src: '../assets/images/projects/rocket-launch-hq/rocket-launch-hq-16.webp',
      ratio: 'ratio-16-9',
      label: 'Telemetry equipment room'
    },
    {
      src: '../assets/images/projects/rocket-launch-hq/rocket-launch-hq-17.webp',
      ratio: 'ratio-portrait',
      label: 'Service tower elevator shaft'
    },
    {
      src: '../assets/images/projects/rocket-launch-hq/rocket-launch-hq-18.webp',
      ratio: 'ratio-16-9',
      label: 'Floodlit pad at night'
    },
    {
      src: '../assets/images/projects/rocket-launch-hq/rocket-launch-hq-19.webp',
      ratio: 'ratio-1-1',
      label: 'Hangar truss roof looking up'
    },
    {
      src: '../assets/images/projects/rocket-launch-hq/rocket-launch-hq-20.webp',
      ratio: 'ratio-16-9',
      label: 'Coastal launch headquarters horizon'
    }
  ];

  var CREDIT = 'All photos: Morgan Vale';

  // Build one .bg-shot figure with inline background-image (no <img>).
  function createBgShot(shot) {
    var figure = document.createElement('figure');
    figure.className = 'bg-shot';
    figure.setAttribute('aria-label', shot.label);

    var surface = document.createElement('div');
    surface.className = 'bg-shot-surface ' + shot.ratio;
    surface.style.backgroundImage = 'url("' + shot.src + '")';

    var caption = document.createElement('figcaption');
    caption.className = 'photo-credit';
    caption.textContent = CREDIT + ' — ' + shot.label;

    figure.appendChild(surface);
    figure.appendChild(caption);
    return figure;
  }

  function injectDynamicShots(mount) {
    if (mount.getAttribute('data-rlh-injected') === 'true') {
      return;
    }
    mount.setAttribute('data-rlh-injected', 'true');
    mount.setAttribute('aria-live', 'polite');

    var i;
    for (i = 0; i < DYNAMIC_SHOTS.length; i++) {
      mount.appendChild(createBgShot(DYNAMIC_SHOTS[i]));
    }
  }

  function init() {
    var mount = document.getElementById('rocket-dynamic-gallery');
    if (!mount) {
      return;
    }

    if (!('IntersectionObserver' in window)) {
      injectDynamicShots(mount);
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      var entry = entries[0];
      if (!entry || !entry.isIntersecting) {
        return;
      }
      injectDynamicShots(mount);
      observer.disconnect();
    }, {
      root: null,
      rootMargin: '0px 0px 200px 0px',
      threshold: 0
    });

    observer.observe(mount);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
