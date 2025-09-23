<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateCardRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true; // luego puedes limitar a roles admin
    }

    public function rules(): array
    {
        return [
            'key_phrase'   => 'sometimes|string|max:255',
            'image'        => 'nullable|string|max:255',
            'translations' => 'sometimes|array',
            'translations.*' => 'string|max:255',
            'audio_files'  => 'sometimes|array',
            'audio_files.*' => 'string|max:255',
            'method'       => 'sometimes|string|in:visual,auditivo,tactil',
        ];
    }
}

