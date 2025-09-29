<?php

return [
    'paths' => ['api/*', 'sanctum/csrf-cookie'],
    'allowed_methods' => ['*'],
    'allowed_origins' => [
        'http://127.0.0.1:8080', // tu frontend
        'http://127.0.0.1:8000', // tu backend (por si haces pruebas directas)
        'http://localhost:8080',
        'http://localhost:8000',
    ],
    'allowed_origins_patterns' => [],
    'allowed_headers' => ['*'],
    'exposed_headers' => ['Authorization'],
    'max_age' => 0,
    'supports_credentials' => true,
];
