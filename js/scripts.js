var flavorlist = [];

$(document).ready(function() {
  $("#flavors form").submit(function(event) {
    event.preventDefault();
    var userInputs = ["flavor1", "flavor2", "flavor3"];

    userInputs.forEach(function(formInputId) {
      var flavorInputString = $("input#" + formInputId).val();

      flavorlist.push(flavorInputString);
    });


    flavorlist.forEach(function(flavor) {


    $("#output").append(flavor + " ");

    });

  });
});
