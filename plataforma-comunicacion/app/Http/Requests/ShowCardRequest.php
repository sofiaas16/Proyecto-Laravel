<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ShowCardRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true; // aquí podrías validar roles si solo ciertos usuarios pueden ver
    }

    public function rules(): array
    {
        return [
            'id' => 'required|integer|exists:cards,id'
        ];
    }
}
