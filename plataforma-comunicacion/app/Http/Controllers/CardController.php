<?php

namespace App\Http\Controllers;

use App\Models\Card;
use Illuminate\Http\Request;
use App\Http\Requests\StoreCardRequest;
use Illuminate\Support\Str;

class CardController extends Controller
{
    // Listar todas las tarjetas
    public function index()
    {
        $cards = Card::all();
        return response()->json($cards);
    }

    // Mostrar tarjeta específica
    public function show($id)
    {
        $card = Card::find($id);
        if(!$card){
            return response()->json(['message' => 'Card not found'], 404);
        }
        return response()->json($card);
    }

    // Crear tarjeta
    public function store(StoreCardRequest $request)
    {
        $data = $request->validated();
        $data['uuid'] = Str::uuid();

        $card = Card::create($data);
        return response()->json($card, 201);
    }

    // Actualizar tarjeta
    public function update(StoreCardRequest $request, $id)
    {
        $card = Card::find($id);
        if(!$card){
            return response()->json(['message' => 'Card not found'], 404);
        }

        $card->update($request->validated());
        return response()->json($card);
    }

    // Eliminar tarjeta
    public function destroy($id)
    {
        $card = Card::find($id);
        if(!$card){
            return response()->json(['message' => 'Card not found'], 404);
        }

        $card->delete();
        return response()->json(['message' => 'Card deleted']);
    }
}
