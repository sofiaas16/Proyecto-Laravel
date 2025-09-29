<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AdminController extends Controller
{
    public function registerAdmin(Request $request)
    {
        // Valida datos de entrada con Validator
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|string|min:8'
        ]);

        // Si falla la validación
        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'message' => 'Datos inválidos',
                'errors' => $validator->errors()
            ], 422);
        }

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
            'status' => 'success',
            'message' => 'Nuevo administrador creado exitosamente',
            'admin' => $admin,
            'token' => $token
        ], 201);
    }
}
