<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

class ProgresoController extends Controller
{
    public function guardar(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'lecciones_completadas' => 'required|array'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'message' => 'Datos inválidos',
                'errors' => $validator->errors()
            ], 422);
        }

        $user = $request->user();

        foreach ($request->lecciones_completadas as $leccionId) {
            \App\Models\Progreso::firstOrCreate([
                'user_id' => $user->id,
                'leccion_id' => $leccionId
            ]);
        }

        return response()->json(['mensaje' => 'Progreso guardado']);
    }

    public function obtener(Request $request)
    {
        $user = $request->user();
        $progreso = $user->progresos()->pluck('leccion_id');
        return response()->json(['lecciones' => $progreso]);
    }
}
