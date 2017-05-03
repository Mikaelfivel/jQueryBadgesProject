$(function() {

  // your code will go here
  $.ajax({
     url: 'https://www.codeschool.com/users/mikaelfivel.json',
     dataType: 'jsonp',
     success: function(response) {
       // handle response
     }
   });
});
