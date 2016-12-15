var multiplicateur = 1;
var cookies = 0;


function ajouteUnCookie(){
	cookies = cookies+multiplicateur;
	document.getElementById("score").innerHTML="Vous avez : "+cookies+" Juliens";
	return cookies;
}

function multiplicateur(cookies){
	if (cookies >= 20){
		multiplicateur = multiplicateur * 2;
		document.getElementById("multiplicateur").innerHTML="Multiplicateur x"+multiplicateur;
		return multiplicateur;
	}
}