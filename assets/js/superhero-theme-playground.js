/**
 * Superhero Theme Playground — image carousel (testing fixture).
 * Prev/next + dots; keeps all <img> nodes in the DOM for scrapers.
 */
(function () {
  'use strict';

  var root = document.querySelector('[data-carousel]');
  if (!root) return;

  var slides = Array.prototype.slice.call(root.querySelectorAll('.carousel-slide'));
  var prevBtn = root.querySelector('.carousel-prev');
  var nextBtn = root.querySelector('.carousel-next');
  var dots = Array.prototype.slice.call(root.querySelectorAll('.carousel-dot'));
  var status = root.querySelector('.carousel-status');
  var index = 0;

  function show(i) {
    index = (i + slides.length) % slides.length;
    slides.forEach(function (slide, n) {
      var active = n === index;
      slide.classList.toggle('is-active', active);
      slide.setAttribute('aria-hidden', active ? 'false' : 'true');
    });
    dots.forEach(function (dot, n) {
      var active = n === index;
      dot.classList.toggle('is-active', active);
      dot.setAttribute('aria-selected', active ? 'true' : 'false');
    });
    if (status) {
      status.textContent = 'Image ' + (index + 1) + ' of ' + slides.length;
    }
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', function () {
      show(index - 1);
    });
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', function () {
      show(index + 1);
    });
  }
  dots.forEach(function (dot, n) {
    dot.addEventListener('click', function () {
      show(n);
    });
  });

  root.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      show(index - 1);
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      show(index + 1);
    }
  });

  show(0);
})();
