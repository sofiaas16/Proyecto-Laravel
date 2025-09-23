<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AdminController extends Controller
{
    /**
     * Método de prueba para el panel de admin
     */
    public function index()
    {
        return response()->json([
            'message' => '¡Bienvenido al panel de administración!',
            'user' => auth()->user() // devuelve datos del usuario autenticado
        ]);
    }
}
