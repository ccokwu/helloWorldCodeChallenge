function myFunction(event) {
  //
  // var x = document.getElementById("firstName").value;
  // y = document.getElementById("lastName").value;
  // z = document.getElementById("address1").value;
  // a = document.getElementById("city").value;
  // b = document.getElementById("state").value;
  // c = document.getElementById("zip").value;
  //
  // if (x || y || z || a || b || c == "") {
  //   event.preventDefault();
  //   alert("Please fill out required fields to complete the form.");
  // }


  var fields = document.getElementsByClassName("field");
  for (var x = 0; x < fields.length; x++){
  if (fields[x].value == ""){
    event.preventDefault();
    alert("Please fill out required fields to complete the form.");
    break;
  } else {
    document.getElementById("form").submit();
  }
    };
};

//i want the code to say when there's a field missing, to fill in on fields before submitting. i also want it to implement if one character is missing from the state input text field. i also want the form to refresh on submit, and/or go to a confirmation page once i set up a node server (but for now, focus on refreshing when clicked on once all needed instructions for input was met). ****






//probably do this function in jquery.
// function fillState(event){
//   var y = document.getElementById("state").value;
//   if (y != "minlength"){
//     event.preventDefault();
//     alert("Please fill in the state to complete the form.");
//   }
//   fillstate();
//
// };
