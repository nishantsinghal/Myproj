$(document).ready(function(e) {
	$('#button').click(function() {
		var sEmail = $('.txtEmail').val();
		// Checking Empty Fields
		if ($.trim(sEmail).length == 0 || $(".pass").val()=="" ) {
			alert('All fields are mandatory');
			return false;
		}
		if (validateEmail(sEmail)) {
			alert('Nice!! your Email is valid, now you can continue..');
		}
		else {
			alert('Invalid Email Address');
			return false;
		}
	});
});

// Function that validates email address through a regular expression.
function validateEmail(sEmail) {
	var filter = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
	if (filter.test(sEmail)) {
		return true;
	}
	else {
		return false;
	}
}