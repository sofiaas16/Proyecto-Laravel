<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\CardController;
use App\Http\Controllers\AuthController;

// Rutas públicas
Route::get('/cards', [CardController::class, 'index']);
Route::get('/cards/{id}', [CardController::class, 'show']);
Route::post('/login', [AuthController::class, 'login']);

// Rutas protegidas solo para admins
Route::middleware(['auth:sanctum', 'checkRole:admin'])->group(function () {
    Route::post('/cards', [CardController::class, 'store']);    // Crear tarjeta
    Route::put('/cards/{id}', [CardController::class, 'update']); // Actualizar tarjeta
    Route::delete('/cards/{id}', [CardController::class, 'destroy']); // Eliminar tarjeta
});

// Rutas protegidas (requieren token Sanctum)
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', fn(Request $request) => $request->user());
    
    // Solo usuarios normales
    Route::middleware('checkRole:usuario')->get('/usuario', fn() => response()->json(['message' => 'Hola, usuario normal']));

    // Solo admins
    Route::middleware('checkRole:admin')->group(function () {
        Route::get('/admin', [AdminController::class, 'index']);
        Route::post('/cards', [CardController::class, 'store']);
        Route::put('/cards/{id}', [CardController::class, 'update']);
        Route::delete('/cards/{id}', [CardController::class, 'destroy']);
    });
});
