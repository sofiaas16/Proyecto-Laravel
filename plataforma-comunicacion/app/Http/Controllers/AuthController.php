<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    /**
     * Registro de usuario normal
     */
    public function register(Request $request)
    {
        // Validar datos de entrada
        $validator = Validator::make($request->all(), [
            'name'     => 'required|string|max:255',
            'email'    => 'required|email|unique:users,email',
            'password' => 'required|string|min:6'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status'  => 'error',
                'message' => 'No se pudo registrar el usuario',
                'errors'  => $validator->errors()
            ], 422);
        }

        // Crear usuario con rol de usuario normal (role_id = 2)
        $user = User::create([
            'name'     => $request->name,
            'email'    => $request->email,
            'password' => Hash::make($request->password),
            'role_id'  => 2
        ]);

        // Generar token personal de acceso
        $token = $user->createToken('app')->plainTextToken;

        return response()->json([
            'status'  => 'success',
            'message' => 'Usuario registrado exitosamente',
            'user'    => $user,
            'token'   => $token
        ], 201);
    }

    /**
     * Login de usuario
     */
    public function login(Request $request)
    {
        // Validar datos básicos del login
        $validator = Validator::make($request->all(), [
            'email'    => 'required|email',
            'password' => 'required|string'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status'  => 'error',
                'message' => 'Datos inválidos',
                'errors'  => $validator->errors()
            ], 422);
        }

        // Buscar usuario por email
        $user = User::where('email', $request->email)->first();

        // Validar credenciales
        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json([
                'status'  => 'error',
                'message' => 'Credenciales inválidas'
            ], 401);
        }

        // Generar token personal de acceso
        $token = $user->createToken('app')->plainTextToken;

        return response()->json([
            'status'  => 'success',
            'message' => 'Login exitoso',
            'user'    => $user,
            'token'   => $token
        ]);
    }

    /**
     * Logout de usuario autenticado
     */
    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();

        return response()->json([
            'status'  => 'success',
            'message' => 'Logout exitoso'
        ]);
    }
}
