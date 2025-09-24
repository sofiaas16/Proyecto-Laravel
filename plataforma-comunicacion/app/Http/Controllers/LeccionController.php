<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Leccion;

class LeccionController extends Controller
{
    // Listar todas las lecciones
    public function index()
    {
        return response()->json(Leccion::all());
    }

    // Crear una nueva leccion
    public function store(Request $request)
    {
        $request->validate([
            'titulo' => 'required|string',
            'contenido' => 'nullable|string'
        ]);

        $leccion = Leccion::create([
            'titulo' => $request->titulo,
            'contenido' => $request->contenido
        ]);

        return response()->json($leccion, 201);
    }

    // Mostrar una leccion
    public function show($id)
    {
        $leccion = Leccion::findOrFail($id);
        return response()->json($leccion);
    }

    // Actualizar una leccion
    public function update(Request $request, $id)
    {
        $leccion = Leccion::findOrFail($id);
        $leccion->update($request->only('titulo', 'contenido'));
        return response()->json($leccion);
    }

    // Eliminar una leccion
    public function destroy($id)
    {
        $leccion = Leccion::findOrFail($id);
        $leccion->delete();
        return response()->json(['mensaje' => 'Leccion eliminada']);
    }
}
