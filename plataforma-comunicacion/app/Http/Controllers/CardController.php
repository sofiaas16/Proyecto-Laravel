<?php

namespace App\Http\Controllers;

use App\Models\Card;
use App\Strategies\CardFilters\Card as CardFilterStrategy;
use Illuminate\Http\Request;
use App\Http\Requests\StoreCardRequest;
use App\Http\Requests\UpdateCardRequest;
use Illuminate\Support\Str;
use App\Services\CardFilterService;

class CardController extends Controller
{
    // Listar todas las tarjetas
    public function index(Request $request, CardFilterService $filterService)
    {
        $query = Card::query();
        $query = $filterService->applyFilters($query, $request->all());
    
        return response()->json([
            'status' => 'success',
            'message' => 'Lista de tarjetas obtenida correctamente',
            'cards' => $query->get()
        ]);
    }

    // Mostrar tarjeta específica
    public function show($id)
    {
        $card = Card::find($id);
        if (!$card) {
            return response()->json([
                'status' => 'error',
                'message' => 'Tarjeta no encontrada'
            ], 404);
        }

        return response()->json([
            'status' => 'success',
            'message' => 'Tarjeta encontrada',
            'card' => $card
        ]);
    }

    // Crear tarjeta
    public function store(StoreCardRequest $request)
    {
        $data = $request->validated();
        $data['uuid'] = Str::uuid();

        $card = Card::create($data);
        return response()->json([
            'status' => 'success',
            'message' => 'Tarjeta creada correctamente',
            'card' => $card
        ], 201);
    }

    // Actualizar tarjeta
    public function update(UpdateCardRequest $request, $id)
    {
        $card = Card::find($id);
        if (!$card) {
            return response()->json([
                'status' => 'error',
                'message' => 'Tarjeta no encontrada'
            ], 404);
        }

        $card->update($request->validated());
        return response()->json([
            'status' => 'success',
            'message' => 'Tarjeta actualizada correctamente',
            'card' => $card
        ]);
    }

    // Eliminar tarjeta
    public function destroy($id)
    {
        $card = Card::find($id);
        if (!$card) {
            return response()->json([
                'status' => 'error',
                'message' => 'Tarjeta no encontrada'
            ], 404);
        }

        $card->delete();
        return response()->json([
            'status' => 'success',
            'message' => 'Tarjeta eliminada correctamente'
        ]);
    }
}
