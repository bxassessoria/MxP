<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'OPTIONS') {
    exit(0);
}

if ($method === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);
    $password = $input['password'] ?? '';

    // SENHA PADRÃO: admin
    // Mude esta senha antes de ir para produção!
    if ($password === 'admin') {
        echo json_encode(['success' => true, 'token' => md5(uniqid())]);
    } else {
        http_response_code(401);
        echo json_encode(['success' => false, 'error' => 'Senha incorreta']);
    }
    exit;
}
?>
