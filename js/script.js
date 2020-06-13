$('.header .menu .button').click(function(e){                   
  e.preventDefault();
  alert('Нажата кнопка ' + $(this).text());
});