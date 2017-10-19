$(document).ready(function() {
  $("form#sides-form").submit(function(event) {
  var side1 = parseInt($("input#side1").val());
  var side2 = parseInt($("input#side2").val());
  var side3 = parseInt($("input#side3").val());
    var sum1 = (side1 + side2);
    var sum2 = (side2 + side3);
    var sum3 = (side1 + side3);
    if (sum1 <= side3 || sum2 <= side1 || sum3 <= side2) {
      alert("das noh a twayangoh...")
    } else if (side1 === side2 && side1 === side3) {
      alert("IT'S AN EQUOH-WAHTEWWOH TWAYANGOH")
    } else if (side1 === side2 || side2 === side3 || side1 === side3) {
      alert("IT'S AN ISOH-SOHWEES TWAYANGOH")
    } else {
      alert("IT'S AN SCAWENE TWAYANGOH")
    }
    event.preventDefault();
  });
});






// side1 === side2 && side1 === side3
//
// side1 === side2 || side2 === side3 || side1 === side3
//
// side1 !=== side2 && side1 !=== side3 && side2 !=== side3
//
// (side1 + side2) <= side3 || (side2 + side3) <= side1 || (side1 + side3) <= side2
