<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProgresoController extends Controller
{
    public function guardar(Request $request)
    {
        $request->validate([
            'lecciones_completadas' => 'required|array'
        ]);
    
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
        $progreso = $user->progresos()->pluck('leccion_id'); // IDs de lecciones completadas
        return response()->json(['lecciones' => $progreso]);
    }
    
}
