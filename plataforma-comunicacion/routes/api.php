<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CardController;
use App\Http\Controllers\ProgresoController;
use App\Http\Controllers\LeccionController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
|                                API Routes
|--------------------------------------------------------------------------
*/

// Autenticacion (Publico)
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

// Rutas protegidas con Sanctum
Route::middleware('auth:sanctum')->group(function () {

    // Autenticacion
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/user', fn(Request $request) => $request->user());

    // Cards (Publico autenticado)
    Route::get('/cards', [CardController::class, 'index']);
    Route::get('/cards/{id}', [CardController::class, 'show']);

    // Progreso
    Route::post('/progreso', [ProgresoController::class, 'guardar']);
    Route::get('/progreso', [ProgresoController::class, 'obtener']);

    // Lecciones (Publico autenticado)
    Route::get('/lecciones', [LeccionController::class, 'index']);
    Route::get('/lecciones/{id}', [LeccionController::class, 'show']);

    // Rutas exclusivas para Administradores
    Route::middleware('checkRole:admin')->group(function () {

        // Admin Dashboard
        Route::get('/admin', [AdminController::class, 'index']);

        // Gestion de Cards
        Route::post('/cards', [CardController::class, 'store']);
        Route::put('/cards/{id}', [CardController::class, 'update']);
        Route::delete('/cards/{id}', [CardController::class, 'destroy']);

        // Gestion de Usuarios
        Route::get('/users', [UserController::class, 'index']);
        Route::get('/users/{id}', [UserController::class, 'show']);

        // Gestion de Lecciones
        Route::post('/lecciones', [LeccionController::class, 'store']);
        Route::put('/lecciones/{id}', [LeccionController::class, 'update']);
        Route::delete('/lecciones/{id}', [LeccionController::class, 'destroy']);

        // Registro de Admin
        Route::post('/admin/register', [AdminController::class, 'registerAdmin']);
    });
});
