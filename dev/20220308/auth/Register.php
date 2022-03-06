<?php include("navbar_nolog.php"); ?>

<div class="container">
    <center>
        <h1> Register</h1>
        <form action="Register.php" method="POST">
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
            <label for="pass_con"><b>Confirm Password</b></label>
            <br>
            <input type="password" name="pass_con" required>
            <br>
            <button type="submit" name="submit" class="button" style="vertical-align:middle"><span>Register</span></button>
    </center>
</div>
</form>

<?php
//Including file to connect to the database
include("dbcon.php");
//Creating global variables for later use
$uid = "";
$password = "";
//Check if the form has been posted
if ($_SERVER['REQUEST_METHOD'] == "POST") {
    $uid = filter_var(trim($_POST['uid']));
    $password = filter_var(trim($_POST['password']));
    //Check if the username input field is empty

    if (empty($uid)) {
        echo "<h1>Please enter an email</h1>";
        //Check if it is a valid email
    } else if (!filter_var($uid, FILTER_VALIDATE_EMAIL)) {
        echo "<h1>Invalid Email</h1>";
    } else {
        try {
            //Check if the uid is already in the database
            $sql = "SELECT * FROM login WHERE uid = :uid";

            $stmt = $pdo->prepare($sql);

            $stmt->bindParam(':uid', $uid);

            $stmt->execute();

            //Count how many rows are in the query
            $result = $stmt->rowCount();

            //If any rows are returned in the query the email must already exist in the DB
            if ($result > 0) {
                echo "<h1>Email already exists</h1>";
            } else {
                $pass_con = filter_var(trim($_POST['pass_con']));

                //Check if the password is empty
                if (!empty($password)) {
                    //Check password and password confirmation are the same
                    if ($password != $pass_con) {
                        echo "<h1>Passwords do not match</h1>";
                    } else {
                        //Inserting data into database
                        $sql = 'INSERT INTO login(uid, password) VALUES(:uid, :password)';

                        $stmt = $pdo->prepare($sql);

                        $stmt->bindParam(':uid', $uid);
                        $stmt->bindParam(':password', $password);

                        $stmt->execute();

                        session_start();
                        //uid is in the session variable for the welcome message
                        $_SESSION["uid"] = $uid;
                        //Flag to check if the user is logged in
                        $_SESSION["logged"] = "1";

                        //Redirect to profile page
                        header('Location: Profile.php');
                    }
                } else {
                    $pass_err_mess = "Please enter a password";
                    echo $pass_err;
                }
            }
        } catch (PDOException $e) {
            //THIS MUST BE REMOVED BEFORE SUBMITTING THE PROJECT
            echo 'Error: ' . $e->getMessage();
        }
    }
}
?>

</body>

</html>