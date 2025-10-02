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
    
        // UUID obligatorio
        $data['uuid'] = Str::uuid();
    
        // Si no envían key_phrase, ponemos uno por defecto
        $data['key_phrase'] = $data['key_phrase'] ?? 'default-key';
    
        // Opcional: valores vacíos si no vienen
        $data['image'] = $data['image'] ?? null;
        $data['translations'] = $data['translations'] ?? [];
        $data['audio_files'] = $data['audio_files'] ?? [];
        $data['difficulty'] = $data['difficulty'] ?? [];
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

    public function filter(Request $request)
    {
        $validated = $request->validate([
            'language'   => 'nullable|string',
            'method'     => 'nullable|string',
            'difficulty' => 'nullable|in:easy,medium,hard',
        ]);

        $query = Card::query();


        if (!empty($validated['language'])) {
            $query->where('translations->language', $validated['language']);
        }

        if (!empty($validated['method'])) {
            $query->where('method', $validated['method']);
        }

        if (!empty($validated['difficulty'])) {
            $query->where('difficulty', $validated['difficulty']);
        }

        return response()->json($cards);
    }
}
