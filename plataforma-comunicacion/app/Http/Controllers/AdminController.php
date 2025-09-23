<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class AdminController extends Controller
{
    public function registerAdmin(Request $request)
    {
        // Valida datos de entrada
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|string|min:8'
        ]);
    
        // Crea el nuevo admin
        $admin = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'is_admin' => true,
        ]);
    
        // Genera token Sanctum
        $token = $admin->createToken('AdminToken')->plainTextToken;
    
        return response()->json([
            'message' => 'Nuevo administrador creado exitosamente',
            'admin' => $admin,
            'token' => $token
        ], 201);
    }
    
}
