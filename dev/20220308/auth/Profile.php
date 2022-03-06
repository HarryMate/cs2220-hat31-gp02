<?php include("navbar_log.php"); ?>

<?php session_start();
if ($_SESSION["logged"] != 1) {
  header("Location: home.html");
}
?>

<!-- Will Welcome The User When They Login & Register - For Example Welcome jop65 -->
<h1>
  <center> Welcome <?php echo $_SESSION["uid"]; ?> </center>
</h1>

<!-- The Content That Will Apprear In The Profile Page -->
<h2>
  <center> Don't Wait, Let's Make A Quiz </center>
</h2>

<!-- The Buttons That Will Allow The Quiz Maintainer To Import Quizzes And To Create Quizzes -->
<center> <button onclick="document.location=''">Import Quiz </center>
<br>
<center> <button onclick="document.location='Infoquiz.html'">Create Quiz</button> </center>


</body>

</html>