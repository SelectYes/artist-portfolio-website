<?php

if (isset($_POST['submit']) && $_POST['email'] != '') {
    
    $name = $_POST['name'];
    $emailFrom = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $mailTo = 'riel_lenny@yahoo.co.uk';
    $headers = "From: ".$emailFrom;
    $text = "You have received an email from ".$name.".\n\n".$message;

    mail($mailTo, $text, $headers);

    header("Location: index.php?mailsend");
}

?>