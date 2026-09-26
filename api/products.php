<?php
require_once 'config.php';

$pdo = getDB();
$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'GET') {
    $slug = $_GET['slug'] ?? null;
    $category = $_GET['category'] ?? null;
    $id = $_GET['id'] ?? null;

    if ($slug) {
        $stmt = $pdo->prepare("
            SELECT p.*, c.name as category_name, c.slug as category_slug
            FROM products p
            LEFT JOIN categories c ON p.category_id = c.id
            WHERE p.slug = ?
        ");
        $stmt->execute([$slug]);
        $product = $stmt->fetch(PDO::FETCH_ASSOC);
        if (!$product) {
            http_response_code(404);
            echo json_encode(['error' => 'Produk tidak ditemukan']);
            exit;
        }
        $product['sizes'] = explode(',', $product['sizes']);
        echo json_encode($product);
        exit;
    }

    if ($id) {
        $stmt = $pdo->prepare("SELECT * FROM products WHERE id = ?");
        $stmt->execute([$id]);
        $product = $stmt->fetch(PDO::FETCH_ASSOC);
        echo json_encode($product ?: ['error' => 'Not found']);
        exit;
    }

    $sql = "
        SELECT p.*, c.name as category_name, c.slug as category_slug
        FROM products p
        LEFT JOIN categories c ON p.category_id = c.id
    ";
    $params = [];

    if ($category && $category !== 'all') {
        $sql .= " WHERE c.slug = ?";
        $params[] = $category;
    }

    $sql .= " ORDER BY p.id DESC";

    $stmt = $pdo->prepare($sql);
    $stmt->execute($params);
    $products = $stmt->fetchAll(PDO::FETCH_ASSOC);

    foreach ($products as &$p) {
        $p['sizes'] = explode(',', $p['sizes']);
    }

    echo json_encode($products);
    exit;
}

http_response_code(405);
echo json_encode(['error' => 'Method not allowed']);
