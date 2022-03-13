function validateForm() {
  if (document.myForm.name.value == "") {
    alert("FirstName must be filled out");
    document.myForm.name.focus();	 
    return false;
  }

  if (document.myForm.email.value == "") {
   alert("Email must be filled out");
   document.myForm.email.focus();	 
   return false;
  }
}

function myFunction() {
  var x = document.getElementById("homeButton");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

$('button').on('click', function(){
  $('button').removeClass('selected');
  $(this).removeClass('selected');
});