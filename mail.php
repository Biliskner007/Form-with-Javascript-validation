<?php

if (isset($_POST['submit'])) {
    $username = $_POST['username'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $mailto = "martinvetsu@gmail.com";
    $headers = "From: ".$email;
    $txt = "You have recieved an email from ".$username."\n\n".$message;

    mail($mailto, $subject, $txt, $headers);
    header("Location: index.html");
}