<?php
// Configuração de CORS para permitir requisições do frontend React
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header('Content-Type: application/json');

// Arquivo onde os posts serão salvos
$postsFile = '../data/posts.json';

// Se o diretório de dados não existir, cria
if (!is_dir('../data')) {
    mkdir('../data', 0755, true);
}

// Se o arquivo não existir, cria um array vazio
if (!file_exists($postsFile)) {
    file_put_contents($postsFile, json_encode([]));
}

// Manipulação de OPTIONS para CORS
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Função para ler posts
function getPosts() {
    global $postsFile;
    $content = file_get_contents($postsFile);
    echo $content;
}

// Função para salvar posts (Requer autenticação simples simulada)
function savePost() {
    global $postsFile;
    
    // Obter dados do corpo da requisição
    $data = json_decode(file_get_contents('php://input'), true);
    
    if (!$data) {
        http_response_code(400);
        echo json_encode(['error' => 'Invalid JSON']);
        exit;
    }

    $currentPosts = json_decode(file_get_contents($postsFile), true);
    
    // Se for um novo post, gera ID
    if (!isset($data['id'])) {
        $data['id'] = uniqid();
        $data['createdAt'] = date('c');
        array_unshift($currentPosts, $data); // Adiciona no início
    } else {
        // Atualiza post existente
        foreach ($currentPosts as $key => $post) {
            if ($post['id'] === $data['id']) {
                $currentPosts[$key] = array_merge($post, $data);
                $currentPosts[$key]['updatedAt'] = date('c');
                break;
            }
        }
    }

    file_put_contents($postsFile, json_encode($currentPosts, JSON_PRETTY_PRINT));
    echo json_encode(['success' => true, 'post' => $data]);
}

// Função para deletar post
function deletePost() {
    global $postsFile;
    $id = $_GET['id'] ?? null;
    
    if (!$id) {
        http_response_code(400);
        echo json_encode(['error' => 'Missing ID']);
        exit;
    }

    $currentPosts = json_decode(file_get_contents($postsFile), true);
    $newPosts = array_filter($currentPosts, function($post) use ($id) {
        return $post['id'] !== $id;
    });

    file_put_contents($postsFile, json_encode(array_values($newPosts), JSON_PRETTY_PRINT));
    echo json_encode(['success' => true]);
}

// Roteamento simples
$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'GET':
        getPosts();
        break;
    case 'POST':
    case 'PUT':
        savePost();
        break;
    case 'DELETE':
        deletePost();
        break;
    default:
        http_response_code(405);
        echo json_encode(['error' => 'Method not allowed']);
        break;
}
?>
