<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_FILES['image']) && $_FILES['image']['error'] === UPLOAD_ERR_OK) {
        $uploadDir = 'uploads/';
        if (!is_dir($uploadDir)) mkdir($uploadDir, 0755, true);
        
        $fileExt = strtolower(pathinfo($_FILES['image']['name'], PATHINFO_EXTENSION));
        $allowed = ['jpg', 'jpeg', 'png', 'gif', 'webp'];
        
        if (!in_array($fileExt, $allowed)) {
            http_response_code(400);
            echo json_encode(["error" => "Invalid file type"]);
            exit;
        }
        
        $newFileName = uniqid() . '.' . $fileExt;
        $destPath = $uploadDir . $newFileName;
        
        if (move_uploaded_file($_FILES['image']['tmp_name'], $destPath)) {
            // Retorna URL relativa para acesso web
            $url = '/api/uploads/' . $newFileName;
            echo json_encode(["success" => true, "url" => $url]);
        } else {
            http_response_code(500);
            echo json_encode(["error" => "Failed to move uploaded file"]);
        }
    } else {
        http_response_code(400);
        echo json_encode(["error" => "No file uploaded or upload error"]);
    }
}
?>
