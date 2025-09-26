<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use App\Http\Resources\ProgresoResource;
use App\Http\Requests\ProgresoRequest;

class ProgresoController extends Controller
{
    public function guardar(ProgresoRequest $request) {
        $progreso = \App\Models\Progreso::firstOrCreate($request->validated());
        return new ProgresoResource($progreso);
    }
    ic function obtener(Request $request)
    {
        $user = $request->user();
        $progresos = $user->progresos()->with('leccion')->get();
        return response()->json([
            'status' => 'success',
            'progresos' => ProgresoResource::collection($progresos)
        ]);
    }
}
