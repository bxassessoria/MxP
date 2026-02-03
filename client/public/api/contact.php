<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

$data = json_decode(file_get_contents("php://input"), true);

if (!$data) {
    http_response_code(400);
    echo json_encode(["error" => "Dados inválidos"]);
    exit;
}

$name = filter_var($data['name'], FILTER_SANITIZE_STRING);
$email = filter_var($data['email'], FILTER_SANITIZE_EMAIL);
$phone = filter_var($data['phone'], FILTER_SANITIZE_STRING);
$company = filter_var($data['company'], FILTER_SANITIZE_STRING);
$product = filter_var($data['product'], FILTER_SANITIZE_STRING);
$message = filter_var($data['message'], FILTER_SANITIZE_STRING);

// Configuração do E-mail de Destino
$to = "contato@mediaportal.com.br"; // Altere para o e-mail real
$subject = "Novo Contato pelo Site - " . $name;

$body = "
<html>
<head>
  <title>Novo Contato do Site</title>
</head>
<body>
  <h2>Novo Lead do Site</h2>
  <p><strong>Nome:</strong> $name</p>
  <p><strong>Empresa:</strong> $company</p>
  <p><strong>E-mail:</strong> $email</p>
  <p><strong>Telefone:</strong> $phone</p>
  <p><strong>Interesse:</strong> $product</p>
  <hr>
  <p><strong>Mensagem:</strong><br>
  $message</p>
</body>
</html>
";

// Headers
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= "From: no-reply@mediaportal.com.br" . "\r\n";
$headers .= "Reply-To: $email" . "\r\n";

// Tenta enviar
if(mail($to, $subject, $body, $headers)) {
    echo json_encode(["success" => true, "message" => "E-mail enviado com sucesso"]);
} else {
    http_response_code(500);
    echo json_encode(["error" => "Falha ao enviar e-mail"]);
}
?>
