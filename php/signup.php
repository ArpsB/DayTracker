<?php
	session_start();
	include_once('db.php');
	if ($_POST['submit']=="Sign Up"){
		$email=mysqli_real_escape_string($link,$_POST['email']);
		$password=md5(md5($email).$_POST['password']);
		$firstName=mysqli_real_escape_string($link,$_POST['firstName']);
		$lastName=mysqli_real_escape_string($link,$_POST['lastName']);
		
		
		if ($error){ $error = "There were error(s) in your sign up details:".$error;}
			
			else {
					$query= "SELECT * FROM `user_profile` WHERE email ='$email'";
				
					$result = mysqli_query($link, $query);	
				
					$results = mysqli_num_rows($result);
					
				
					if ($results) {
						echo "registered";
				
					}else {
						
						$query = "INSERT INTO `user_profile` (`email`, `password`,`first_Name`, `last_Name`) VALUES ('$email', '$password','$firstName','$lastName')";
			   
			    		mysqli_query($link, $query);
			    		
			    		$success="You've been signed up!";
			    		
			    		$_SESSION['id']= mysqli_insert_id($link);
						echo "correct";
			    		
			    		 // header("Location:daytracker.html");
					}
			}
 		
	}else if ($_POST['submit']=="Log In"){
		$email=mysqli_real_escape_string($link,$_POST['email']);
		$password=md5(md5($email).$_POST['password']);
		$query = "SELECT * FROM `user_profile` WHERE email='$email' AND password='$password'LIMIT 1";
		$result = mysqli_query($link, $query);
		$results = mysqli_num_rows($result);
		// $row = mysqli_fetch_array($result);
			if($results == 1){
				// $_SESSION['id']=$row['id'];
				// header("Location:mainpage.php");
				echo "loggedIn";
			} else {
				$error = "We could not find a user with that email and password. Please try again.";
			}
	}else {
		echo "no";
	}
?>
