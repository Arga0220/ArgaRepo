<?php
// Konfigurasi database XAMPP
// Default XAMPP: user root, password kosong

define('DB_HOST', 'localhost');
define('DB_USER', 'root');
define('DB_PASS', '');          // Kosongkan jika default XAMPP
define('DB_NAME', 'batik_nova');

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

function getDB() {
    try {
        $pdo = new PDO(
            "mysql:host=" . DB_HOST . ";dbname=" . DB_NAME . ";charset=utf8mb4",
            DB_USER,
            DB_PASS,
            [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
        );
        return $pdo;
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(['error' => 'Koneksi database gagal: ' . $e->getMessage()]);
        exit;
    }
}
