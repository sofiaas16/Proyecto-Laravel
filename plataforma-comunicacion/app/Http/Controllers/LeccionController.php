<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Leccion;
use Illuminate\Support\Facades\Validator;

class LeccionController extends Controller
{
    // Listar todas las lecciones
    public function index()
    {
        return response()->json([
            'status' => 'success',
            'message' => 'Lista de lecciones obtenida correctamente',
            'lecciones' => Leccion::all()
        ]);
    }

    // Crear una nueva leccion
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'titulo' => 'required|string',
            'contenido' => 'nullable|string'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'message' => 'Datos inválidos',
                'errors' => $validator->errors()
            ], 422);
        }

        $leccion = Leccion::create([
            'titulo' => $request->titulo,
            'contenido' => $request->contenido
        ]);

        return response()->json([
            'status' => 'success',
            'message' => 'Lección creada correctamente',
            'leccion' => $leccion
        ], 201);
    }

    // Mostrar una lección
    public function show($id)
    {
        $leccion = Leccion::find($id);

        if (!$leccion) {
            return response()->json([
                'status' => 'error',
                'message' => 'Lección no encontrada'
            ], 404);
        }

        return response()->json([
            'status' => 'success',
            'message' => 'Lección encontrada',
            'leccion' => $leccion
        ]);
    }

    // Actualizar una leccion
    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'titulo' => 'required|string',
            'contenido' => 'nullable|string'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'message' => 'Datos inválidos',
                'errors' => $validator->errors()
            ], 422);
        }

        $leccion = Leccion::find($id);

        if (!$leccion) {
            return response()->json([
                'status' => 'error',
                'message' => 'Lección no encontrada'
            ], 404);
        }

        $leccion->update($request->only('titulo', 'contenido'));

        return response()->json([
            'status' => 'success',
            'message' => 'Lección actualizada correctamente',
            'leccion' => $leccion
        ]);
    }

    // Eliminar una leccion
    public function destroy($id)
    {
        $leccion = Leccion::find($id);

        if (!$leccion) {
            return response()->json([
                'status' => 'error',
                'message' => 'Lección no encontrada'
            ], 404);
        }

        $leccion->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'Lección eliminada correctamente'
        ]);
    }
}
