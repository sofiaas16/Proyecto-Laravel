<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\CardController;
use App\Http\Controllers\AuthController;

// Registro y login
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

// Rutas públicas de cards
Route::get('/cards', [CardController::class, 'index']);
Route::get('/cards/{id}', [CardController::class, 'show']);

// Rutas protegidas con Sanctum
Route::middleware('auth:sanctum')->group(function() {

    // Logout
    Route::post('/logout', [AuthController::class, 'logout']);

    // Info del usuario logueado
    Route::get('/user', fn(Request $request) => $request->user());

    // Rutas solo para usuarios normales
    Route::middleware('checkRole:usuario')->get('/usuario', fn() => response()->json(['message' => 'Hola, usuario normal']));

    // Rutas solo para admins
    Route::middleware('checkRole:admin')->group(function() {
        Route::get('/admin', [AdminController::class, 'index']);
        Route::post('/cards', [CardController::class, 'store']);
        Route::put('/cards/{id}', [CardController::class, 'update']);
        Route::delete('/cards/{id}', [CardController::class, 'destroy']);

        // aquí mismo metes el registerAdmin:
        Route::post('/admin/register', [AdminController::class, 'registerAdmin']);
    });

});
