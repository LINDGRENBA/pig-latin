// business logic
function translateString(userString) {
  let userArray = userString.split("");
  if (userString[0] === "a", "e", "i", "o", "u") {
    return userString + "way";
  } else {
    return userString;
  }
  return userArray.join("");
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