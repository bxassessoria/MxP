<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

$file = 'cases.json';

// Cria arquivo se não existir
if (!file_exists($file)) {
    file_put_contents($file, '[]');
}

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'GET') {
    echo file_get_contents($file);
    exit;
}

if ($method === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);
    $current = json_decode(file_get_contents($file), true);
    
    if (isset($input['id']) && $input['id']) {
        // Edit existing
        foreach ($current as $key => $item) {
            if ($item['id'] === $input['id']) {
                $current[$key] = array_merge($item, $input);
                break;
            }
        }
    } else {
        // Create new
        $input['id'] = uniqid();
        $input['date'] = date('Y-m-d');
        array_unshift($current, $input);
    }
    
    if (file_put_contents($file, json_encode($current, JSON_PRETTY_PRINT))) {
        echo json_encode(['success' => true, 'id' => $input['id']]);
    } else {
        http_response_code(500);
        echo json_encode(['error' => 'Failed to save']);
    }
    exit;
}

if ($method === 'DELETE') {
    $id = $_GET['id'] ?? null;
    if (!$id) {
        http_response_code(400);
        exit;
    }
    
    $current = json_decode(file_get_contents($file), true);
    $filtered = array_filter($current, fn($item) => $item['id'] !== $id);
    
    file_put_contents($file, json_encode(array_values($filtered), JSON_PRETTY_PRINT));
    echo json_encode(['success' => true]);
    exit;
}
?>
