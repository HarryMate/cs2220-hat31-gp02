<?php 
session_start();
//Reset session variables so that the user is logged out
$_SESSION["uid"] = "";
$_SESSION["logged"] = 0;
//Redirect back to the home page
header("Location: home.html");
?>