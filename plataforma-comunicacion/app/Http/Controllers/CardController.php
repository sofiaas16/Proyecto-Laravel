<?php

namespace App\Http\Controllers;

use App\Models\Card;
use Illuminate\Http\Request;
use App\Http\Requests\StoreCardRequest;
use App\Http\Requests\UpdateCardRequest;
use Illuminate\Support\Str;
use App\Services\CardFilterService;

class CardController extends Controller
{
    public function filter(Request $request)
    {
        $request->validate([
            'language' => 'nullable|string|max:50',
            'communication_method' => 'nullable|string|max:50',
            'difficulty' => 'nullable|in:easy,medium,hard',
        ]);

        $query = Card::query();

        if ($request->filled('language')) {
            $query->where('language', $request->language);
        }

        if ($request->filled('communication_method')) {
            $query->where('communication_method', $request->communication_method);
        }

        if ($request->filled('difficulty')) {
            $query->where('difficulty', $request->difficulty);
        }

        $cards = $query->paginate(10);

        return response()->json([
            'status' => 'success',
            'message' => 'Tarjetas filtradas correctamente',
            'cards' => $cards
        ]);
    }

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
    
        $data['key_phrase'] = $data['key_phrase'] ?? 'default-key';
    
        $data['image'] = $data['image'] ?? null;
        $data['translations'] = $data['translations'] ?? [];
        $data['audio_files'] = $data['audio_files'] ?? [];
        $data['method'] = $data['method'] ?? 'default';
    
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
