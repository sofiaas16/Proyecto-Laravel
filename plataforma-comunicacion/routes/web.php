<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return redirect('/login.html'); // Página inicial -> login.html
});

// Usamos ".html" en la URL, pero sigue devolviendo una vista Blade
Route::view('/register.html', 'auth.register')->name('register');
Route::view('/login.html', 'auth.login')->name('login');
Route::view('/home.html', 'auth.home')->name('home');
