<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/phpmailer/src/Exception.php';
require __DIR__ . '/phpmailer/src/PHPMailer.php';
require __DIR__ . '/phpmailer/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = trim($_POST['name']);
    $userEmail = trim($_POST['email']);
    $phone = trim($_POST['phone']);
    $message = trim($_POST['message']);

    $smtpUser = 'wd228225@gmail.com';
    $smtpPass = 'pfwtpdumhbnmyxsl';

    // Admin mail
    $adminMail = new PHPMailer(true);
    try {
        $adminMail->isSMTP();
        $adminMail->Host = 'smtp.gmail.com';
        $adminMail->SMTPAuth = true;
        $adminMail->Username = $smtpUser;
        $adminMail->Password = $smtpPass;
        $adminMail->SMTPSecure = 'tls';
        $adminMail->Port = 587;

        $adminMail->setFrom($smtpUser, 'Website Contact');
        $adminMail->addAddress($smtpUser);
        $adminMail->addReplyTo($userEmail, $name);
        $adminMail->isHTML(true);
        $adminMail->Subject = "New Contact from $name";
        $adminMail->Body = "
            <h2>New Message Received</h2>
            <p><b>Name:</b> $name</p>
            <p><b>Email:</b> $userEmail</p>
            <p><b>Phone:</b> $phone</p>
            <p><b>Message:</b> $message</p>
        ";
        $adminMail->send();
    } catch (Exception $e) {}

    // User mail
    $userMail = new PHPMailer(true);
    try {
        $userMail->isSMTP();
        $userMail->Host = 'smtp.gmail.com';
        $userMail->SMTPAuth = true;
        $userMail->Username = $smtpUser;
        $userMail->Password = $smtpPass;
        $userMail->SMTPSecure = 'tls';
        $userMail->Port = 587;

        $userMail->setFrom($smtpUser, 'Balvirt IT Solutions');
        $userMail->addAddress($userEmail, $name);
        $userMail->isHTML(true);
        $userMail->Subject = "Thank You for Contacting Balvirt!";
        $userMail->Body = "
            <h3>Hello $name,</h3>
            <p>We’ve received your message and will contact you soon.</p>
            <p><b>Your Message:</b> $message</p>
            <p>Regards,<br>Balvirt Team</p>
        ";
        $userMail->send();
    } catch (Exception $e) {}

    echo "success";
}
?>
