<?php
//Creating global variables for later use
$uid = "";
$password = "";
$uid_err_mess = "";
$pass_err_mess = "";
$uid_err = "<h5>" . $uid_err_mess . "</h5>";
$pass_err = "<h5>" . $pass_err_mess . "</h5>";
//Check if the form has been posted
if ($_SERVER['REQUEST_METHOD'] == "POST") {
    $uid = filter_var(trim($_POST['uid']));
    $password = filter_var(trim($_POST['password']));
    //Check if the username input field is empty
    
    if (empty(trim($uid))) {
        $uid_err_mess = "Please enter an email";
        echo $uid_err;
        //Check if it is a valid email
    } else if (!filter_var(trim($uid), FILTER_VALIDATE_EMAIL)) {
        $uid_err_mess = "Invalid Email";
        echo $uid_err;
        
    } else {
        try {
            //Connect to database
            $pdo = new PDO('pgsql:host=db.dcs.aber.ac.uk;dbname=cs22220_21_22_group02', 'group02', 'H3@xmce%^9WL*?z%');

            //Check if the uid is already in the database
            $sql = 'SELECT * FROM login WHERE uid = :uid';

            $stmt = $pdo->prepare($sql);

            $stmt->bindParam(':uid', $uid);

            $stmt->execute();

            //Count how many rows are in the query
            $result = $stmt->rowCount();

            //If any rows are returned in the query the email must already exist in the DB
            if ($result > 0) {
                $uid_err_mess = "Email already exists";
                echo $uid_err;
                
            } else {
                $pass_con = filter_var(trim($_POST['pass_con']));
                
                //Check if the password is empty
                if (!empty($password)) {
                    //Check password and password confirmation are the same
                    if ($password != $pass_con) {
                        $pass_err_mess = "Passwords do not match";
                        echo $pass_err;
                    } else {
                        //Inserting data into database
                        $sql = 'INSERT INTO login(uid, password) VALUES(:uid, :password)';

                        $stmt = $pdo->prepare($sql);

                        $stmt->bindParam(':uid', $uid);
                        $stmt->bindParam(':password', $password);

                        $stmt->execute();

                        header('Location: Profile.html');
                    }
                } else {
                    $pass_err_mess = "Please enter a password";
                    echo $pass_err;
                }
            }
        } catch (PDOException $e) {
            echo 'Error: ' . $e->getMessage();
        }
    }
}
