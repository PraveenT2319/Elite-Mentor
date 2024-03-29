<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require_once "PHPMailer/src/PHPMailer.php";
require_once "PHPMailer/src/SMTP.php";
require_once "PHPMailer/src/Exception.php";


// Check for form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $course = $_POST["course"];
  $message = $_POST["message"];
  $phone = $_POST["phone"];
  
  
  $mail = new PHPMailer(true);

  try {
    // Configure the SMTP settings
    $mail->isSMTP();
    $mail->Host = '';
    $mail->SMTPAuth = true;
    $mail->Username = ''; // Your Gmail email address
    $mail->Password = ''; // Your Gmail password
    $mail->SMTPSecure = 'ssl';
    $mail->Port = 465;

    // Set the sender and recipient
    $mail->setFrom($email, $name);
    $mail->addAddress(''); // Recipient email address

    // Set email content
    $mail->isHTML(true);
    $mail->Subject = $subject;
    $mail->Body = "<h3>Message from $name &nbsp; ($email)</h3><p> course : $course <br>Phone :  $phone <br> </p><p>Message : $message</p>";
 if (isset($_FILES['attachment']) && $_FILES['attachment']['error'] === UPLOAD_ERR_OK) {
  $attachmentName = $_FILES['attachment']['name'];
  $attachmentPath = $_FILES['attachment']['tmp_name'];
  $mail->addAttachment($attachmentPath, $attachmentName);
}

    // Send the email
    $mail->send();

    echo 'Email sent successfully!';
  } catch (Exception $e) {
    echo "Email could not be sent. Error: {$mail->ErrorInfo}";

  }
}



?>