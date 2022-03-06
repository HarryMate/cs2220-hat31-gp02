<?php include("navbar_nolog.php"); ?>

<div class="container">
  <center>
    <h1> Login </h1>
    <form action="Login.php" method="POST">
      <br>
      <label for="uid"><b>Email Address</b></label>
      <br>
      <input type="text" name="uid" required>
      <br>
      <br>
      <label for="password"><b>Password</b></label>
      <br>
      <input type="password" name="password" required>
      <br>
      <br>
      <button type="submit" class="button" style="vertical-align:middle"><span>Login</span></button>
  </center>
</div>
</form>

<?php
//Including the file to connect to the database
include("dbcon.php");
//Check if the form has been posted
if ($_SERVER['REQUEST_METHOD'] == "POST") {
  $uid = $_POST['uid'];
  $password = $_POST['password'];
  $err = "<h1>Email or Password is incorrect</h1>";
  //Try catch in case of a database error
  try {
    //Find table rows with the given uid and password
    $sql = "SELECT * FROM login WHERE uid = :uid AND password = :password";

    $stmt = $pdo->prepare($sql);

    $stmt->bindParam(':password', $password);

    $stmt->bindParam(':uid', $uid);

    $stmt->execute();

    $result = $stmt->rowcount();

    //If 0 rows are returned then the given uid or password is incorrect
    if ($result == 0) {
      echo $err;
    } else {
      //Filtering the uid before putting it into a session variable
      $uid = filter_var($uid);

      session_start();
      //uid is in the session variable for the welcome message
      $_SESSION["uid"] = $uid;
      //Flag to check if the user is logged in
      $_SESSION["logged"] = "1";

      //Redirect to profile page
      header('Location: Profile.php');
    }
  } catch (PDOException $e) {
    //THIS MUST BE REMOVED BEFORE SUBMITTING THE PROJECT
    echo 'Error: ' . $e->getMessage();
  }
}
?>
</body>

</html>