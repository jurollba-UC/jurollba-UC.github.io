var shown = false;
function showhideEmail(){
	if(shown){
		document.getElementById('email').innerHTML = "show my email";
		shown = false;
	}
	else
	{
		var myemail = "<i class='fas fa-envelope-square fa-fw fa-lg me-2'></i>"+ "<a href ='mailto:jurollba" + "@" + "mail.uc.edu'>jurollba" + "@" + "mail.uc.edu </a>";
		document.getElementById('email').innerHTML = myemail;
		shown = true;
	}
}
