<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

$data = json_decode(file_get_contents('php://input'), true);

// Senha hardcoded para simplicidade (pode ser alterada depois)
$validPassword = 'admin'; 

if (isset($data['password']) && $data['password'] === $validPassword) {
    // Retorna um token simples (em produção usaria JWT, mas aqui um hash basta)
    echo json_encode(['token' => md5('authenticated_session'), 'success' => true]);
} else {
    http_response_code(401);
    echo json_encode(['error' => 'Invalid password', 'success' => false]);
}
?>
