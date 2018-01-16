var flavorlist = [];

$(document).ready(function() {
  $("#flavors form").submit(function(event) {
    event.preventDefault();
    var userInputs = ["flavor1", "flavor2", "flavor3"];

    userInputs.forEach(function(formInputId) {
      var flavorInputString = $("input#" + formInputId).val();
      //userInput = "chocolate";
      flavorlist.push(flavorInputString);
    });

    console.log(flavorlist);

    flavorlist.forEach(function(flavor) {
      //what to do with the flavor??
      console.log("The next flavor to print is: " + flavor);

    $("#output").text(flavor);

    });

  });
});
