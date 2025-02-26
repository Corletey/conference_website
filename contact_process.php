<?php
/*
header('Content-Type: application/json');

// Get POST data
$data = json_decode(file_get_contents('php://input'), true);

// Validate incoming data
if (!isset($data['name']) || !isset($data['email']) || !isset($data['subject']) || !isset($data['message'])) {
    echo json_encode(['success' => false, 'message' => 'Missing required fields']);
    exit;
}

// Sanitize inputs
$name = filter_var($data['name'], FILTER_SANITIZE_STRING);
$from = filter_var($data['email'], FILTER_SANITIZE_EMAIL);
$subject = filter_var($data['subject'], FILTER_SANITIZE_STRING);
$message = filter_var($data['message'], FILTER_SANITIZE_STRING);

// Recipient email
$to = "abbycor3@gmail.com";

// Create email headers
$headers = "From: " . $from . "\r\n";
$headers .= "Reply-To: " . $from . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";

// Create email body
$body = "
<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <title>Contact Form Submission</title>
</head>
<body>
    <table style='width: 100%; border-collapse: collapse; margin-top: 20px;'>
        <tr>
            <td style='padding: 10px; background-color: #f8f9fa;'><strong>Name:</strong></td>
            <td style='padding: 10px;'>" . htmlspecialchars($name) . "</td>
        </tr>
        <tr>
            <td style='padding: 10px; background-color: #f8f9fa;'><strong>Email:</strong></td>
            <td style='padding: 10px;'>" . htmlspecialchars($from) . "</td>
        </tr>
        <tr>
            <td style='padding: 10px; background-color: #f8f9fa;'><strong>Subject:</strong></td>
            <td style='padding: 10px;'>" . htmlspecialchars($subject) . "</td>
        </tr>
        <tr>
            <td style='padding: 10px; background-color: #f8f9fa;'><strong>Message:</strong></td>
            <td style='padding: 10px;'>" . nl2br(htmlspecialchars($message)) . "</td>
        </tr>
    </table>
</body>
</html>
";

// Send email
$send = mail($to, "New Contact Form Submission: " . $subject, $body, $headers);

// Return response
echo json_encode(['success' => $send]);
*/
?>
