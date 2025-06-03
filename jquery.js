$(document).ready(() => {
  $.ajax({
    method: 'GET',
    url: 'https://jsonplaceholder.typicode.com/todos',
    dataType: 'json',
  }).done(function (data) {
    console.log(data);
    $(data).each(function (index, item) {
      $('ul').append('<li>' + item.completed + '</li>');
    });
  });
});
