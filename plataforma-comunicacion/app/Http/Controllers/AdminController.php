<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class AdminController extends Controller
{
    // Registrar un nuevo administrador
    public function registerAdmin(Request $request)
    {
        // Validar datos
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|min:6',
        ]);

        // Crear admin
        $admin = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
            'role_id' => 1, // asumimos 1 = admin
        ]);

        return response()->json([
            'admin' => $admin,
            'message' => 'Administrador registrado correctamente'
        ], 201);
    }
}
