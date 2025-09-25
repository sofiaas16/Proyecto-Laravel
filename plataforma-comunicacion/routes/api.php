<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\CardController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ProgresoController;
use App\Http\Controllers\LeccionController;
use App\Http\Controllers\UserController;

// Registro y login
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);


// Rutas protegidas con Sanctum
Route::middleware('auth:sanctum')->group(function() {

    // Logout
    Route::post('/logout', [AuthController::class, 'logout']);

    // Info del usuario logueado
    Route::get('/user', fn(Request $request) => $request->user());

    // Rutas publicas de cards
    Route::get('/cards', [CardController::class, 'index']);
    Route::get('/cards/{id}', [CardController::class, 'show']);

    Route::post('/progreso', [ProgresoController::class, 'guardar']);
    Route::get('/progreso', [ProgresoController::class, 'obtener']);

    Route::get('/lecciones', [LeccionController::class, 'index']);
    Route::get('/lecciones/{id}', [LeccionController::class, 'show']);

    // Rutas solo para admins
    Route::middleware('checkRole:admin')->group(function() {
        Route::get('/admin', [AdminController::class, 'index']);

        // Card Controller
        Route::post('/cards', [CardController::class, 'store']);
        Route::put('/cards/{id}', [CardController::class, 'update']);
        Route::delete('/cards/{id}', [CardController::class, 'destroy']);

        Route::get('/users', [UserController::class, 'index']);
        Route::get('/users/{id}', [UserController::class, 'show']);

        // Leccion Controller
        Route::post('/lecciones', [LeccionController::class, 'store']);
        Route::put('/lecciones/{id}', [LeccionController::class, 'update']);
        Route::delete('/lecciones/{id}', [LeccionController::class, 'destroy']);
        Route::post('/admin/register', [AdminController::class, 'registerAdmin']);
    });

});
