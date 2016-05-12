$(function() {
function phoneNumberIsValid($n)
{
  var rx = /^(?:(?:\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/
  return rx.test($n);
}

$('nav ul li.billing').on('click', function(){
  $('.chatPage01').fadeOut('slow',function(){
    $('.chatPage02').fadeIn('slow');
  })
})

$('form input').on('focus', function(){
  $(this).removeClass('error');
});

$('form select.State').on('change', function(){
  if ( $(this).val() === "1" )
  {
    $('form .purchased').fadeIn('slow');
  }
  else
  {
    $('.purchased').fadeOut('fast');
  }
});

$('.submit .btn').on('click', function(){
  $('form input').removeClass('error');
  var noerror = true;
  $('form input').each(function() {
    if ( $(this).val() == '' )
    {
      $(this).addClass('error');
      noerror = false;
    }
    if ($(this).hasClass('MobilePhoneNumber') && !phoneNumberIsValid($(this).val()))
    {
      $(this).addClass('error');
      noerror = false;
    }
  });
  if (noerror)
  {
    $('.chatPage02').fadeOut('slow',function(){
      $('.chatPage03').fadeIn('slow');
    })    
  }
});

});