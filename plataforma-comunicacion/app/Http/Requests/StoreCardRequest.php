<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreCardRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true; // permitimos que cualquier usuario autenticado haga request (ajustable)
    }

    public function rules(): array
    {
        return [
            'key_phrase' => 'required|string|max:255',
            'image' => 'nullable|string|max:255',
            'translations' => 'required|array',
            'translations.*' => 'string|max:255',
            'audio_files' => 'required|array',
            'audio_files.*' => 'string|max:255',
            'method' => 'required|string|in:visual,auditivo,tactil',
        ];
    }
}
