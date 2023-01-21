<?php

$to = "recipient@example.com";
$subject = "Subject";
$txt = "Hello";
$headers = "From: sender@example.com" . "\r\n" .
"CC: another@example.com";

if(mail($to,$subject,$txt,$headers)) {
    echo "Email sent successfully";
} else {
    echo "Error sending email";
}

?>
