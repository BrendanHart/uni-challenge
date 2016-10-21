document.getElementById('sub').disabled=true;
alert("Please enter your login details.")

if(document.forms["login"]["username"].value == "johnsmith" && document.forms["login"]["password"].password == "password"){
	return true
}
else{
	alert("Incorrect username or password.");
	return false;	
}

