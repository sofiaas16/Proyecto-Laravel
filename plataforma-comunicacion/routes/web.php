<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return redirect('/src/views/login.html'); // Página inicial -> login.html
});

// Usamos ".html" en la URL, pero sigue devolviendo una vista Blade
Route::view('/src/views/register.html', 'auth.register')->name('register');
Route::view('/src/views/login.html', 'auth.login')->name('login');
Route::view('/src/views/home.html', 'auth.home')->name('home');
