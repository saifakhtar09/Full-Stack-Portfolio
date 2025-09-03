<?php
// messages.php

// Allow CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(200);
    exit;
}

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Get JSON input
    $input = json_decode(file_get_contents("php://input"), true);

    $name = $input['name'] ?? '';
    $email = $input['email'] ?? '';
    $project = $input['project'] ?? '';
    $message = $input['message'] ?? '';

    if ($name && $email && $message) {
        $data = "Name: $name | Email: $email | Project: $project | Message: $message" . PHP_EOL;
        file_put_contents("messages.txt", $data, FILE_APPEND);

        header("Content-Type: application/json");
        echo json_encode(["success" => true, "message" => "Message saved successfully!"]);
    } else {
        http_response_code(400);
        header("Content-Type: application/json");
        echo json_encode(["success" => false, "message" => "All fields are required."]);
    }
} else {
    echo "Use POST method to submit data.";
}
