/*Elements*/
const rateOurServBtn = document.getElementById("rateOurServBtn-Id");
const agreeTermsCheckbox = document.getElementById("agreeTermsCheckbox-Id");
const modalme = document.getElementsByClassName("modalme_RoClass");
/*Elements*/


/*Prep vars*/
var proceedToRateServ = false;
/*Prep vars*/


/*Prep AJAX*/
requestRateToken_Xhttp = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
validateCode_Xhttp = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
/*Prep AJAX*/