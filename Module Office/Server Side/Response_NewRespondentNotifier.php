<?php
header('Content-Type: text/event-stream');
header('Cache-Control: no-cache');


$newRespondentFile = "../../Global PHP/Notifications/Notif_NewRespondent.txt";

/*Get New Updates*/
/*_Filing*/
$readin = file($newRespondentFile);
/*_Filing*/

/*_Fetching*/
$detectedNewRespondent = count($readin);
/*_Fetching*/
/*Get New Updates*/	

echo "data:{$detectedNewRespondent}\n\n";
?>