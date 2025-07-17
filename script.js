         function isEmail(email) {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    }

    $("#submitbutton").click(function () {
       
        var errormessage = "";
        var missingfeild = "";

        $("#errors").html("");
        $("#success").html("");

        if ($("#email").val() == "") {
            missingfeild += "<p>Email not filled</p>";
        }
        if ($("#phoneno").val() == "") {
            missingfeild += "<p>Phone number not filled</p>";
        }
        if ($("#password").val() == "") {
            missingfeild += "<p>Password not filled</p>";
        }
        if ($("#confirmpassword").val() == "") {
            missingfeild += "<p>Confirm Password not filled</p>";
        }

        if ($("#email").val() != "" && !isEmail($("#email").val())) {
            errormessage += "<p>Email id is not valid</p>";
        }
        if ($("#phoneno").val() != "" && !$.isNumeric($("#phoneno").val())) {
            errormessage += "<p>Phone number is not valid</p>";
        }
        if ($("#password").val() != "" && $("#confirmpassword").val() != "" && $("#password").val() !== $("#confirmpassword").val()) {
            errormessage += "<p>Password does not match</p>";
        }

        if (errormessage === "" && missingfeild === "") {
            $("#success").html("You are registered");
        } else {
            $("#errors").html(errormessage + missingfeild);
        }
        });
            