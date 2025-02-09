<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Получение данных из формы
    $firstName = htmlspecialchars($_POST['firstname']);
    $lastName = htmlspecialchars($_POST['lastname']);
    $country = htmlspecialchars($_POST['country']);
    $subject = htmlspecialchars($_POST['subject']);

    // Электронная почта получателя
    $to = "khomutetsslavik@gmail.com";
    
    // Заголовки письма
    $subject_email = "New Message from Contact Form";
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8" . "\r\n";
    $headers .= "From: khomutetsslavik@gmail.com" . "\r\n"; // Замените на ваш email

    // Тело письма
    $message = "
    <html>
    <head>
    <title>New Message from Contact Form</title>
    </head>
    <body>
    <h2>Message from $firstName $lastName</h2>
    <p><strong>First Name:</strong> $firstName</p>
    <p><strong>Last Name:</strong> $lastName</p>
    <p><strong>Country:</strong> $country</p>
    <p><strong>Subject:</strong> $subject</p>
    </body>
    </html>
    ";

    // Отправка письма
    if (mail($to, $subject_email, $message, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Message failed to send.";
    }
}
?>
