<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    $to = "contato@mediaportal.com.br"; // Altere para o e-mail real
    $subject = "Nova Inscrição - Encontro BH";
    
    $message = "Nova inscrição recebida pelo site:\n\n";
    $message .= "Nome: " . $data['name'] . "\n";
    $message .= "Empresa: " . $data['company'] . "\n";
    $message .= "Cargo: " . $data['role'] . "\n";
    $message .= "E-mail: " . $data['email'] . "\n";
    $message .= "Telefone: " . $data['phone'] . "\n";
    
    $headers = "From: no-reply@mediaportal.com.br" . "\r\n" .
               "Reply-To: " . $data['email'] . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    // Tenta enviar o e-mail
    // mail($to, $subject, $message, $headers);
    
    // Salva em arquivo de log (backup)
    $logEntry = date('Y-m-d H:i:s') . " - " . json_encode($data) . "\n";
    file_put_contents('event-subscriptions.log', $logEntry, FILE_APPEND);

    echo json_encode(["success" => true, "message" => "Inscrição recebida com sucesso!"]);
} else {
    http_response_code(405);
    echo json_encode(["error" => "Método não permitido"]);
}
?>
