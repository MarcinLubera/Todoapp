$(document).ready(function () {

  $(".todo-form").on("submit", function (e) {
    e.preventDefault();

    var todoName = $(".todo-name").val();
    var todoApp = $(".todopp");


    if (todoName) {
      todoApp.append( 
      '<li><label><input type="checkbox"><span><i class="fa fa-check"></i></span>"+todoName+"</label></li>)');
    }

    $(".todoName").val("");  
  });

});