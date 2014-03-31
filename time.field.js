/**
 * @file
 * Javascript for Field .
 */

/**
 * Provides a countdown.
 */
(function ($) {
  Drupal.behaviors.time = {
    attach: function(context) {
      var number = $(".field-name-field-int .field-item"), numberText = number.text();
function timer(){ 
 if(numberText==0){alert('Time is over!'); setTimeout(function(){},1000);}
 else{setTimeout(timer,1000);}
 number.text(numberText--);
}


timer()
	  
    }
  }
})(jQuery);
