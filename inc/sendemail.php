<?php

    $to = "info@autoremota.lt";
    $from = $_REQUEST['email'];
    $name = $_REQUEST['name'];
    $headers = "From: $from";
    $subject = "You have a message from your Template";

    $fields = array();
    $fields{"name"}    = "Vardas";
    $fields{"email"}    = "Elektroninis paštas";
    $fields{"phone"}    = "Telefonas";
    $fields{"web"}    = "Internetinis puslapis";
    $fields{"message"}   = "Žinutė";
    

    $body = "Here is the message you got:\n\n"; foreach($fields as $a => $b){   $body .= sprintf("%20s: %s\n",$b,$_REQUEST[$a]); }

    $send = mail($to, $subject, $body, $headers);

?>