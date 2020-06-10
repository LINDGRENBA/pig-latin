// business logic

function translateString(pigLatin) {
  let translation;
  const vowels = ["a","e","i","o","u","A","E","I","O","U"];
  const consonant = ["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","y","z","B","C","D","F","G","H","J","K","L","M","N","P","Q","R","S","T","V","W","X","Y","Z"];
  vowels.forEach(function(vowel) {
    if (pigLatin[0] === vowel ) {
      translation = pigLatin + "way";
    } else {
      translation = pigLatin + "ay";
    }
  });
  return translation;
}


// function translateString(userString) {
//   let userArray = userString.split("");
//   if (IsNumeric(userArray[0])) {
//     return false;
//   } else if (userArray[0] === "a", "e", "i", "o", "u","A","E","I","O","U") {
//     return userArray + "way";
//   } else {
//     return userArray;
//   }
//   return userArray.join("");
// };

// function translateString(pigLatin) {
//   // variable to return to user interface
//   const vowels = ["a","e","i","o","u","A","E","I","O","U"];
//   const consonant = ["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","y","z","B","C","D","F","G","H","J","K","L","M","N","P","Q","R","S","T","V","W","X","Y","Z"];
//   vowels.forEach(function(vowel) {
//     if (pigLatin[0] === vowel ) {
//       return pigLatin + "way";
//       // set variable above to equal pigLatin + 'way'
//     } else {
//       return pigLatin + "ay";
//       // set variable above to equal pigLatin + 'ay'
//     }
//   });
//   // return the variable at the top that now holds a value depending on which condition was met
// }
// (pigLatin[0] !== vowels[index] )
// (let index = 0; index <= vowels.length-1; index++) 

// user interface logic
$(document).ready(function() {
  $("#pig-latin").submit(function(event) {
    event.preventDefault();
    let userString = $("#user-string").val();
    let result = translateString(userString);
    $("#output").text(result);
  });
});