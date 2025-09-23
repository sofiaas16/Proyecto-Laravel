<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\CardController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Rutas admin
Route::middleware(['auth:sanctum', 'checkRole:admin'])->group(function () {
    Route::get('/admin', [AdminController::class, 'index']);

    // CRUD completo de tarjetas
    Route::get('/cards', [CardController::class, 'index']);
    Route::get('/cards/{id}', [CardController::class, 'show']);
    Route::post('/cards', [CardController::class, 'store']);
    Route::put('/cards/{id}', [CardController::class, 'update']);
    Route::delete('/cards/{id}', [CardController::class, 'destroy']);
});

// Endpoint de prueba para usuarios normales
Route::middleware(['auth:sanctum', 'checkRole:usuario'])->get('/usuario', function() {
    return response()->json(['message' => 'Hola, usuario normal']);
});

Route::get('/prueba', function() {
    return ['message' => 'Hola, esto funciona'];
});

use App\Http\Controllers\AuthController;

Route::post('/login', [AuthController::class, 'login']);
