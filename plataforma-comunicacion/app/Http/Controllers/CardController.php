<?php

namespace App\Http\Controllers;

use App\Models\Card;
use Illuminate\Http\Request;
use App\Http\Requests\StoreCardRequest;
use App\Http\Requests\UpdateCardRequest;
use Illuminate\Support\Str;

class CardController extends Controller
{
    // Listar todas las tarjetas
    public function index()
    {
        $cards = Card::all();
        return response()->json([
            'success' => true,
            'data' => $cards
        ]);
    }

    // Mostrar tarjeta específica
    public function show($id)
    {
        $card = Card::findOrFail($id);

        return response()->json([
            'success' => true,
            'data' => $card
        ]);
    }

    // Crear tarjeta
    public function store(StoreCardRequest $request)
    {
        $data = $request->validated();
        $data['uuid'] = Str::uuid();

        $card = Card::create($data);

        return response()->json([
            'success' => true,
            'message' => 'Card created successfully',
            'data' => $card
        ], 201);
    }

    // Actualizar tarjeta
    public function update(UpdateCardRequest $request, $id)
    {
        $card = Card::findOrFail($id);

        $card->update($request->validated());

        return response()->json([
            'success' => true,
            'message' => 'Card updated successfully',
            'data' => $card
        ]);
    }

    // Eliminar tarjeta
    public function destroy($id)
    {
        $card = Card::findOrFail($id);
        $card->delete();

        return response()->json([
            'success' => true,
            'message' => 'Card deleted successfully'
        ]);
    }
}
