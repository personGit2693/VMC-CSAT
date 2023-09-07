<?php 
	/*Generate Unique Identifier*/
	$alphanumeric = "abcdefghijklmnopqrstuvwxyz1234567890";
	$shuffled_AlphaNum = str_shuffle($alphanumeric);
	$getHalfShuffled_Value = substr($shuffled_AlphaNum, 0, strlen($alphanumeric)/2);
	$uniqueIdentifier =  rand(1000,9999).$getHalfShuffled_Value.rand(1000,9999);
	/*Generate Unique Identifier*/

	$mypassword = "ERPASS";
	
	echo "Password:".$mypassword."<br/>Identifier:". $uniqueIdentifier."<br/>Encrypted Password: ".md5($mypassword.$uniqueIdentifier);
?>