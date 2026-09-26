<?php
require_once 'config.php';

$pdo = getDB();
$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    if (!$data || empty($data['items'])) {
        http_response_code(400);
        echo json_encode(['error' => 'Data tidak lengkap']);
        exit;
    }

    try {
        $pdo->beginTransaction();

        $stmt = $pdo->prepare("
            INSERT INTO orders (customer_name, customer_email, customer_phone, address, total, status)
            VALUES (?, ?, ?, ?, ?, 'pending')
        ");
        $stmt->execute([
            $data['customer_name'] ?? 'Guest',
            $data['customer_email'] ?? '',
            $data['customer_phone'] ?? '',
            $data['address'] ?? '',
            $data['total'] ?? 0
        ]);
        $orderId = $pdo->lastInsertId();

        $itemStmt = $pdo->prepare("
            INSERT INTO order_items (order_id, product_id, product_name, price, qty, size)
            VALUES (?, ?, ?, ?, ?, ?)
        ");

        foreach ($data['items'] as $item) {
            $itemStmt->execute([
                $orderId,
                $item['id'] ?? null,
                $item['name'] ?? '',
                $item['price'] ?? 0,
                $item['qty'] ?? 1,
                $item['size'] ?? ''
            ]);
        }

        $pdo->commit();
        echo json_encode(['success' => true, 'order_id' => $orderId]);
    } catch (Exception $e) {
        $pdo->rollBack();
        http_response_code(500);
        echo json_encode(['error' => $e->getMessage()]);
    }
    exit;
}

http_response_code(405);
echo json_encode(['error' => 'Method not allowed']);
