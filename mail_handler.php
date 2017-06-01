<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Hannah &amp; Kelvin</title>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <link href="css/style.css" rel="stylesheet">
  </head>
  <body>
    <div class="rsvp-thankyou">
          
      <div class="rsvp-thankyou-whitecard">
<?php
if(isset($_POST['emailaddress'])) {
     
    // EDIT THE 2 LINES BELOW AS REQUIRED
    $email_to = "kelvin.woo@gmail.com,kelvinwooedhannah@gmail.com,olson.hannah@gmail.com";
    $email_subject = "RSVP - #KelvinWooedHannah";
     
     
    function died($error) {
        // your error code can go here
        echo "We are very sorry, but there were error(s) found with the form you submitted. ";
        echo "These errors appear below.<br /><br />";
        echo $error."<br /><br />";
        echo "Please go back and fix these errors.<br /><br />";
        die();
    }
     
    // validation expected data exists
    if(!isset($_POST['fullname']) ||
        !isset($_POST['emailaddress'])) {
        died('We are sorry, but there appears to be a problem with the form you submitted.');       
    }
     
    $name = $_POST['fullname']; 
    $email_from = $_POST['emailaddress']; 
    $yesno = $_POST['attendance']; 
    
  
    $guest = $_POST['extraguests']; 
    $comments = $_POST['message'];
    $aller = $_POST['allergies'];
  
    $guest1name = $_POST['guest1name'];
    $guest2name = $_POST['guest2name'];
    $guest3name = $_POST['guest3name'];
    $guest4name = $_POST['guest4name'];
    $guest5name = $_POST['guest5name'];
    $guest6name = $_POST['guest6name'];
  
    $guest1meal = $_POST['guest1meal'];
    $guest2meal = $_POST['guest2meal'];
    $guest3meal = $_POST['guest3meal'];
    $guest4meal = $_POST['guest4meal'];
    $guest5meal = $_POST['guest5meal'];
    $guest6meal = $_POST['guest6meal'];
    
  
    
     
    
    
    //$email_message = "Form details below.\n\n";
     
    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }
    
    $email_message .= "Someone special has responded on your website at http://hannahandkelvin.wookiestudios.com\n";
    $email_message .= "Name: ".clean_string($name)."\n";
    $email_message .= "Email: ".clean_string($email_from)."\n";
    $email_message .= "Attending?: ".clean_string($yesno)."\n";
    
    
    if (strcmp($yesno,"Yes") == 0){
      $email_message .= "Number of Total Guests: ".clean_string($guest+1)."\n";
      
      if ($guest >= 0){
      $email_message .= "Guest 1 Name: ".clean_string($guest1name)."\n";
      $email_message .= "Guest 1 Meal: ".clean_string($guest1meal)."\n";
      }

      if ($guest >= 1){
      $email_message .= "Guest 2 Name: ".clean_string($guest2name)."\n";
      $email_message .= "Guest 2 Meal: ".clean_string($guest2meal)."\n";
      }

      if ($guest >= 2){
        $email_message .= "Guest 3 Name: ".clean_string($guest3name)."\n";
        $email_message .= "Guest 3 Meal: ".clean_string($guest3meal)."\n";

      }

      if ($guest >= 3){
        $email_message .= "Guest 4 Name: ".clean_string($guest4name)."\n";
        $email_message .= "Guest 4 Meal: ".clean_string($guest4meal)."\n";
      }

      if ($guest >= 4){
        $email_message .= "Guest 5 Name: ".clean_string($guest5name)."\n";
        $email_message .= "Guest 5 Meal: ".clean_string($guest5meal)."\n";
      }
      

      if ($guest >= 5){
        $email_message .= "Guest 6 Name: ".clean_string($guest6name)."\n";
        $email_message .= "Guest 6 Meal: ".clean_string($guest6meal)."\n";
      }

      $email_message .= "Food Allergies: ".clean_string($aller)."\n";
    }
    $email_message .= "Comments: ".clean_string($comments)."\n";
     
     
  $email_from = "donotrespond@wookiestudios.com";
  // create email headers
  $headers = 'From: '.$email_from."\r\n".
  'Reply-To: '.$email_from."\r\n" .
  'X-Mailer: PHP/' . phpversion();
  @mail($email_to, $email_subject, $email_message, $headers);  
?>
 
<!-- include your own success html here -->
 
          <h1>Your form has been successfully submitted. </h1>
          <p>Did you make an error? Simply go back and resubmit the form again.</p>
          <a href="index.html" class="backbtn">Go Back</a>
          
          <?php
            /*echo "emailing to: ".$email_to."<br>";
            echo "subject: ".$email_subject."<br>";
            echo "Headers: ".$headers."<br>";
            echo $email_message;*/
          ?>
 
<?php
} 
?>
                            
      </div>
    </div>
  </body>
</html>