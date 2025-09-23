<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    // Registro
    public function register(Request $request) {
        try {
            $request->validate([
                'name' => 'required|string|max:255',
                'email' => 'required|email|unique:users,email',
                'password' => 'required|min:6'
            ]);
        
            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => bcrypt($request->password),
                'role_id' => 2, // usuario normal
            ]);
        
            return response()->json([
                'user' => $user,
                'message' => 'Usuario registrado correctamente'
            ], 201);
    
        } catch (\Illuminate\Validation\ValidationException $e) {
            return response()->json([
                'errors' => $e->errors(),
                'message' => 'No se pudo registrar el usuario'
            ], 422);
        }
    }
    

    // Login
    public function login(Request $request)
    {
        $data = $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string',
        ]);
    
        $user = User::where('email', $data['email'])->first();
    
        if (!$user) {
            return response()->json([
                'error' => 'Usuario no encontrado.'
            ], 404); // 404 porque no existe
        }
    
        if (!Hash::check($data['password'], $user->password)) {
            return response()->json([
                'error' => 'Contraseña incorrecta.'
            ], 401); // 401 porque la contraseña es mala
        }
    
        $token = $user->createToken('api_token')->plainTextToken;
    
        return response()->json([
            'user' => $user,
            'token' => $token
        ]);
    }
// Registro por admin
public function registerAdmin(Request $request) {
    // Validación
    $request->validate([
        'name' => 'required|string|max:255',
        'email' => 'required|email|unique:users,email',
        'password' => 'required|min:6',
        'role_id' => 'required|in:1,2', // 1 = admin, 2 = usuario
    ]);

    // Solo admin puede crear
    if ($request->user()->role_id != 1) {
        return response()->json(['error' => 'No tienes permisos para hacer esto'], 403);
    }

    $user = User::create([
        'name' => $request->name,
        'email' => $request->email,
        'password' => bcrypt($request->password),
        'role_id' => $request->role_id,
    ]);

    return response()->json([
        'user' => $user,
        'message' => 'Usuario creado correctamente por el admin'
    ], 201);
}

// Logout
public function logout(Request $request)
{
    // Elimina el token actual
    $request->user()->currentAccessToken()->delete();

    return response()->json(['message' => 'Logged out successfully']);
}

}
