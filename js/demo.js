/**
 * Particleground
 * @author Jonathan Nicol - @mrjnicol
 */

document.addEventListener('DOMContentLoaded', function () {
  particleground(document.getElementById('particles'), {
    dotColor: '#444',
    lineColor: '#444'
  });
  var intro = document.getElementById('intro');
  intro.style.marginTop = - intro.offsetHeight / 2 + 'px';
}, false);



// jQuery plugin example:
// $(document).ready(function() {
//   $('#particles').particleground({
//     dotColor: '#444',
//     lineColor: '#444'
//   });
//   $('.intro').css({
//     'margin-top': -($('.intro').height() / 2)
//   });
// });
