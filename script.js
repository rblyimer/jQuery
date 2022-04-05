$(document).ready(function () {
  var name = $("#name");
  var email = $("#email");
  var phonenumber = $("#phone");
  let required = [name, email, phonenumber];
    $("#submit").on("click", function () {
      for (let i = 0; i < required.length; i++) {
        if (required[i].val() == "") {
            $('p').html("Please Fill Out Required Fields").addClass("warning");
          required[i].prev().addClass("warning");
        } else if (required[i].val() !== "") {
          required[i].prev().removeClass("warning");
        }
      }
      if ($("label").hasClass("warning")) {
        $('p').html("Please Fill Out Required Fields").addClass("warning");
      } else {
        $("form").remove();
        $("h2").text("Thanks for your feedback!");
      }
    });
  });
