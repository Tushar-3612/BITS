<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/PHPMailer/src/PHPMailer.php';
require __DIR__ . '/PHPMailer/src/SMTP.php';
require __DIR__ . '/PHPMailer/src/Exception.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // ===== Safe Form Fields =====
    $name = isset($_POST['name']) ? trim($_POST['name']) : 'Unknown';
    $userEmail = isset($_POST['email']) ? trim($_POST['email']) : '';
    $phone = isset($_POST['phone']) ? trim($_POST['phone']) : '';
    $position = isset($_POST['position']) ? trim($_POST['position']) : '';
    $message = isset($_POST['message']) ? trim($_POST['message']) : 'No message provided.';

    // ===== File Upload =====
    $uploadDir = __DIR__ . '/uploads/';
    if (!file_exists($uploadDir)) mkdir($uploadDir, 0777, true);

    $resumePath = '';
    if (!empty($_FILES['resume']['name'])) {
        $fileName = time() . '_' . basename($_FILES['resume']['name']);
        $resumePath = $uploadDir . $fileName;
        move_uploaded_file($_FILES['resume']['tmp_name'], $resumePath);
    }

    // ===== Save to CSV =====
    $file = __DIR__ . '/applications.csv';
    $isNew = !file_exists($file);
    $fp = fopen($file, 'a');
    if ($isNew) {
        fputcsv($fp, ['Timestamp', 'Full Name', 'Email', 'Phone', 'Position', 'Message', 'Resume']);
    }
    fputcsv($fp, [date("Y-m-d H:i:s"), $name, $userEmail, $phone, $position, $message, $resumePath]);
    fclose($fp);

    // ===== Email Setup =====
    $smtpUser = 'tusharnagare7875@gmail.com'; // replace with active Gmail
    $smtpPass = 'hnxpzznccbwaioun'; // or new App Password

    // ===== Send Admin Email =====
    $mail = new PHPMailer(true);
    try {
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = $smtpUser;
        $mail->Password = $smtpPass;
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;

        $mail->setFrom($smtpUser, 'Website - Job Application');
        $mail->addAddress($smtpUser, 'Admin');
        $mail->addReplyTo($userEmail, $name);
        if (!empty($resumePath)) $mail->addAttachment($resumePath);

        $mail->isHTML(true);
        $mail->Subject = "New Job Application - $name ($position)";
        $mail->Body = "
            <h2>New Job Application</h2>
            <p><b>Name:</b> $name</p>
            <p><b>Email:</b> $userEmail</p>
            <p><b>Phone:</b> $phone</p>
            <p><b>Position:</b> $position</p>
            <p><b>Message:</b> $message</p>
            <p><small>Received: ".date('Y-m-d H:i:s')."</small></p>
        ";

        // 🚫 Comment out next line if Gmail limit exceeded
        $mail->send();

    } catch (Exception $e) {
        error_log("Admin Email Error: " . $mail->ErrorInfo);
    }

    // ===== Send Confirmation to Candidate =====
    $confirm = new PHPMailer(true);
    try {
        $confirm->isSMTP();
        $confirm->Host = 'smtp.gmail.com';
        $confirm->SMTPAuth = true;
        $confirm->Username = $smtpUser;
        $confirm->Password = $smtpPass;
        $confirm->SMTPSecure = 'tls';
        $confirm->Port = 587;

        $confirm->setFrom($smtpUser, 'Balvirt HR');
        $confirm->addAddress($userEmail, $name);
        $confirm->isHTML(true);
        $confirm->Subject = "Application Received - Balvirt IT Solutions";
        $confirm->Body = "
            <h3>Dear $name,</h3>
            <p>We have received your application for <b>$position</b>.</p>
            <p>Our HR team will review it and contact you if shortlisted.</p>
            <p>Best Regards,<br>Balvirt HR Team</p>
        ";

        // 🚫 Comment out next line if Gmail limit exceeded
        $confirm->send();

    } catch (Exception $e) {
        error_log("Candidate Email Error: " . $confirm->ErrorInfo);
    }

    // ===== Success Message =====
    echo "
    <div style='text-align:center; font-family:Arial; margin-top:40px;'>
        <h2 style='color:green;'>✅ Thank You, $name!</h2>
        <p>Your application has been recorded successfully.</p>
        <p>We'll get back to you soon.</p>
        <a href='../hire.html' style='
            display:inline-block;
            margin-top:20px;
            padding:10px 20px;
            background-color:#ffbf00;
            color:black;
            text-decoration:none;
            border-radius:5px;
        '>Go Back</a>
    </div>
    ";
}
?>
