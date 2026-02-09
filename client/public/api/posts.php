<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST, DELETE, OPTIONS");
header("Content-Type: application/json; charset=UTF-8");

$dataFile = 'data/posts.json';

// Garantir que o arquivo de dados existe
if (!file_exists($dataFile)) {
    if (!is_dir('data')) mkdir('data', 0755, true);
    file_put_contents($dataFile, json_encode([]));
}

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($method === 'GET') {
    // Ler posts
    $json = file_get_contents($dataFile);
    echo $json;
    exit;
}

if ($method === 'POST') {
    // Criar ou Atualizar post
    $input = json_decode(file_get_contents('php://input'), true);
    
    if (!$input) {
        http_response_code(400);
        echo json_encode(["error" => "Invalid JSON"]);
        exit;
    }

    $posts = json_decode(file_get_contents($dataFile), true);
    
    // Se tem ID, atualiza. Se não, cria novo ID.
    if (empty($input['id'])) {
        $input['id'] = uniqid();
        if (empty($input['date'])) $input['date'] = date('Y-m-d');
    }
    
    // Verificar se já existe para atualizar
    $found = false;
    foreach ($posts as $key => $post) {
        if ($post['id'] === $input['id']) {
            $posts[$key] = array_merge($post, $input);
            $found = true;
            break;
        }
    }
    
    if (!$found) {
        array_unshift($posts, $input); // Adiciona no início (mais recente)
    }
    
    if (file_put_contents($dataFile, json_encode($posts, JSON_PRETTY_PRINT))) {
        echo json_encode(["success" => true, "post" => $input]);
    } else {
        http_response_code(500);
        echo json_encode(["error" => "Failed to save data"]);
    }
    exit;
}

if ($method === 'DELETE') {
    $id = $_GET['id'] ?? null;
    
    if (!$id) {
        http_response_code(400);
        echo json_encode(["error" => "ID required"]);
        exit;
    }
    
    $posts = json_decode(file_get_contents($dataFile), true);
    $newPosts = array_filter($posts, function($post) use ($id) {
        return $post['id'] !== $id;
    });
    
    // Reindexar array
    $newPosts = array_values($newPosts);
    
    if (file_put_contents($dataFile, json_encode($newPosts, JSON_PRETTY_PRINT))) {
        echo json_encode(["success" => true]);
    } else {
        http_response_code(500);
        echo json_encode(["error" => "Failed to delete"]);
    }
    exit;
}
?>
