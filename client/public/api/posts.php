<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

$file = 'posts.json';

// Inicializa arquivo se não existir
if (!file_exists($file)) {
    file_put_contents($file, json_encode([]));
}

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'OPTIONS') {
    exit(0);
}

if ($method === 'GET') {
    // Retorna todos os posts
    echo file_get_contents($file);
    exit;
}

if ($method === 'POST') {
    // Cria ou Edita post
    $input = json_decode(file_get_contents('php://input'), true);
    
    if (!$input) {
        http_response_code(400);
        echo json_encode(['error' => 'Dados inválidos']);
        exit;
    }

    $posts = json_decode(file_get_contents($file), true);
    
    // Se tem ID, é edição. Se não, cria novo.
    if (isset($input['id'])) {
        foreach ($posts as $key => $post) {
            if ($post['id'] === $input['id']) {
                $posts[$key] = array_merge($post, $input);
                $posts[$key]['updatedAt'] = date('c');
                break;
            }
        }
    } else {
        $input['id'] = uniqid();
        $input['createdAt'] = date('c');
        $input['updatedAt'] = date('c');
        // Adiciona no início do array
        array_unshift($posts, $input);
    }

    if (file_put_contents($file, json_encode($posts, JSON_PRETTY_PRINT))) {
        echo json_encode(['success' => true, 'data' => $input]);
    } else {
        http_response_code(500);
        echo json_encode(['error' => 'Erro ao salvar arquivo']);
    }
    exit;
}

if ($method === 'DELETE') {
    // Exclui post pelo ID passado na query string ?id=...
    $id = $_GET['id'] ?? null;
    
    if (!$id) {
        http_response_code(400);
        echo json_encode(['error' => 'ID não fornecido']);
        exit;
    }

    $posts = json_decode(file_get_contents($file), true);
    $filteredPosts = array_filter($posts, function($post) use ($id) {
        return $post['id'] !== $id;
    });

    // Reindexar array
    $filteredPosts = array_values($filteredPosts);

    if (file_put_contents($file, json_encode($filteredPosts, JSON_PRETTY_PRINT))) {
        echo json_encode(['success' => true]);
    } else {
        http_response_code(500);
        echo json_encode(['error' => 'Erro ao salvar arquivo']);
    }
    exit;
}
?>
