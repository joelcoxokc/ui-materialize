;(function () { 'use strict'

    angular
      .module('stylus')
      .controller('ColorController', ColorController)
      ;

    function ColorController() {
        $('.dynamic-color .col div').each(function(index, item) {

            var color = $(this).css('background-color');
            var classList = $(this).attr('class');
            $(this).text(rgb2hex(color) + ' ' +classList)
            console.log($(this).css);

          })

          function rgb2hex(rgb) {
            if (/^#[0-9A-F]{6}$/i.test(rgb)) { return rgb; }

            rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
            function hex(x) {
                return ("0" + parseInt(x).toString(16)).slice(-2);
            }
            return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
          }
      }



  }).call(this);
