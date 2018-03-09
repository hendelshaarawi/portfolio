$(document).ready(function() {

var form = $('#contact'), submit = form.find('[name="submit"]');

form.on('submit', function(e) {
  e.preventDefault();
  
  if (submit.attr('value') !== 'Verstuur')
    return;
  
  var valid = true;
  form.find('input, textarea').removeClass('invalid').each(function() {
    if (!this.value) {
      $(this).addClass('invalid');
      valid = false;
    }
  });
  
  if (!valid) {
    form.animate({left: '-3em'},  50).animate({left:  '3em'}, 100).animate({left:    '0'},  50);
  } else {
    submit.attr('value', 'Sending...')
          .css({boxShadow: '0 0 200em 200em rgba(225, 225, 225, 0.6)', backgroundColor: '#ccc'});
    setTimeout(function() {
  
      form.find('label')
          .animate({left: '100%'}, 500).animate({opacity: '0'}, 500);
    }, 1000);
    setTimeout(function() {
      submit.attr('value', 'Het bericht is verzonden!').css({boxShadow: 'none'});
    }, 2000);
    setTimeout(function() {
      form.find('input, textarea').val('');
      form.find('label').css({left: '0'}).animate({opacity: '1'}, 500);
      submit.attr('value', 'Verstuur').css({backgroundColor: ''});
    }, 4000);
  }
});


});