<?php

namespace App\Http\Controllers;

use App\Models\Card;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Services\CardFilterService;
use App\Http\Requests\StoreCardRequest;
use App\Http\Requests\UpdateCardRequest;

class CardController extends Controller
{
    protected $cardFilterService;

    // 👇 CONSTRUCTOR agregado
    public function __construct(CardFilterService $cardFilterService)
    {
        $this->cardFilterService = $cardFilterService;
    }

    public function index(Request $request, CardFilterService $filterService)
    {
        // Validar parámetros
        $validated = $request->validate([
            'language'   => 'nullable|string',
            'method'     => 'nullable|string',
            'difficulty' => 'nullable|in:easy,medium,hard',
        ]);

        $query = Card::query();
        $query = $filterService->applyFilters($query, $validated);

        return response()->json([
            'status'  => 'success',
            'message' => 'Lista de tarjetas obtenida correctamente',
            'cards'   => $query->paginate(10)
        ]);
    }

    public function show($id)
    {
        $card = Card::find($id);
        if (!$card) {
            return response()->json([
                'status'  => 'error',
                'message' => 'Tarjeta no encontrada'
            ], 404);
        }

        return response()->json([
            'status'  => 'success',
            'message' => 'Tarjeta encontrada',
            'card'    => $card
        ]);
    }

    public function store(StoreCardRequest $request)
    {
        $data = $request->validated();
        $data['uuid'] = Str::uuid();

        $data['key_phrase']   = $data['key_phrase']   ?? 'default-key';
        $data['image']        = $data['image']        ?? null;
        $data['translations'] = $data['translations'] ?? [];
        $data['audio_files']  = $data['audio_files']  ?? [];
        $data['method']       = $data['method']       ?? 'default';
        $data['difficulty']   = $data['difficulty']   ?? 'easy';

        $card = Card::create($data);

        return response()->json([
            'status'  => 'success',
            'message' => 'Tarjeta creada correctamente',
            'card'    => $card
        ], 201);
    }

    public function update(UpdateCardRequest $request, $id)
    {
        $card = Card::find($id);
        if (!$card) {
            return response()->json([
                'status'  => 'error',
                'message' => 'Tarjeta no encontrada'
            ], 404);
        }

        $card->update($request->validated());

        return response()->json([
            'status'  => 'success',
            'message' => 'Tarjeta actualizada correctamente',
            'card'    => $card
        ]);
    }

    public function destroy($id)
    {
        $card = Card::find($id);
        if (!$card) {
            return response()->json([
                'status'  => 'error',
                'message' => 'Tarjeta no encontrada'
            ], 404);
        }

        $card->delete();

        return response()->json([
            'status'  => 'success',
            'message' => 'Tarjeta eliminada correctamente'
        ]);
    }

    public function filter(Request $request, CardFilterService $filterService)
    {
        $query = Card::query();
        $filteredQuery = $filterService->applyFilters($query, $request->all());

        return response()->json($filteredQuery->get());
    }
}
