<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreCardRequest extends FormRequest
{
    public function authorize()
    {
        // Solo admins
        return $this->user()->is_admin ?? false;
    }

    public function rules()
    {
        return [
            'titulo' => 'required|string|max:255',
            'contenido' => 'required|string',
        ];
    }

    public function messages()
    {
        return [
            'titulo.required' => 'El titulo es obligatorio',
            'contenido.required' => 'El contenido es obligatorio',
        ];
    }
}
