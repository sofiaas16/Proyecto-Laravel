<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Aquí registramos las rutas para las vistas del frontend. 
| No manejan lógica de backend, solo devuelven las vistas Blade.
|
*/

Route::get('/', function () {
    return redirect()->route('login'); // Redirige al login como página inicial
});

Route::view('/register', 'auth.register')->name('register');
Route::view('/login', 'auth.login')->name('login');
Route::view('/home', 'auth.home')->name('home');
