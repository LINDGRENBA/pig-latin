// business logic
let translateString = function(userString) {
  return userString;
};



// user interface logic
$(document).ready(function() {
  $("#pig-latin").submit(function(event) {
    event.preventDefault();
    let userString = $("#user-string").val();
    let result = translateString(userString);
    $("#output").text(result);
  });
});