$(document).ready(() => {

  $('div').on('click', () => {
    $('p').toggle();
  });

$('#thanku').hide();


function hideAll() {
  $('#way').hide();
  $('#breakfree').hide();
  $('#Dangerous').hide();
  $('#god').hide();
}

// run that function right away
hideAll();


$('.album').click(function() {

  // but first, hide all the divs to ensure that
  // only one will be open, ever
  hideAll();

  // here is a switch statement - this was in Codecademy
  // "Control Flow" lesson 7

  $("audio").each(function() {
    this.pause();
    this.currentTime = 0;
});



  switch ($(this).attr("id")) {
    case "album1":
      $('#way').show();
      break;
    case "album2":
      $('#breakfree').show();
      break;
    case "album3":
      $('#Dangerous').show();
      break;
    case "album4":
      $('#god').show();
      break;
  }
});




});
