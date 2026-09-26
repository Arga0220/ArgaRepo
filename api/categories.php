<?php
require_once 'config.php';

$pdo = getDB();

$stmt = $pdo->query("SELECT * FROM categories ORDER BY id");
$categories = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($categories);
